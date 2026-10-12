import React, { useState, useMemo, useEffect } from 'react';
import { 
  Trophy, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  Flame, 
  AlertCircle, 
  CheckCircle2, 
  Filter, 
  Sparkles,
  Menu,
  X,
  Star,
  ArrowLeft
} from 'lucide-react';
import { FixtureItem } from './types/football';
import { generateAllFixtures } from './data/mockFixtures';
import { 
  getFootballDayString, 
  sortFixtures, 
  groupFixturesByLeague,
  LeagueGroup
} from './utils/footballUtils';
import { 
  getLeagueById, 
  getLeagueSlug, 
  parseLeagueFromPath 
} from './data/leagueDirectory';
import { 
  getTeamBySlugOrId, 
  parseTeamFromPath, 
  getTeamUrl 
} from './data/teamDirectory';
import { TeamProfile } from './types/football';

// Components
import { VnExpressHeader } from './components/VnExpressHeader';
import { LiveScoreSidebar } from './components/LiveScoreSidebar';
import { LiveScoreTopBar } from './components/LiveScoreTopBar';
import { LiveScoreMatchItem } from './components/LiveScoreMatchItem';
import { VideoHighlightModal } from './components/VideoHighlightModal';
import { MatchDetailModal } from './components/MatchDetailModal';
import { MiniStandings } from './components/MiniStandings';
import { HotLeaguesSidebar } from './components/HotLeaguesSidebar';
import { LeagueStandingsModal } from './components/LeagueStandingsModal';
import { LeagueNewsSection } from './components/LeagueNewsSection';
import { FullLeagueStandings } from './components/FullLeagueStandings';
import { TeamDashboard } from './components/TeamDashboard';

export default function App() {
  const [allFixtures, setAllFixtures] = useState<FixtureItem[]>(() => generateAllFixtures());

  // App Tabs: 'schedule' (Lịch thi đấu) | 'results' (KQBD) | 'live' | 'favorites' | 'standings'
  const [currentTab, setCurrentTab] = useState<'schedule' | 'results' | 'live' | 'favorites'>('schedule');

  // Dates config
  const todayDateStr = "2026-09-30";
  const yesterdayDateStr = "2026-09-29";
  const tomorrowDateStr = "2026-10-01";

  const dateList = [
    "2026-09-28",
    "2026-09-29",
    "2026-09-30",
    "2026-10-01",
    "2026-10-02",
    "2026-10-03",
    "2026-10-04",
    "2026-10-05",
    "2026-10-06",
    "2026-10-07",
    "2026-10-08",
    "2026-10-09",
    "2026-10-10",
    "2026-10-11"
  ];

  const [selectedDate, setSelectedDate] = useState<string>(todayDateStr);

  // Left sidebar filters & League routing
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(() => {
    // If not a team path, check league path
    const teamParsed = parseTeamFromPath(window.location.pathname);
    if (teamParsed) return null;
    return parseLeagueFromPath(window.location.pathname, window.location.search);
  });
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [expandedMatches, setExpandedMatches] = useState(false);

  // Team Dashboard State (SEO URL & Sub-tabs)
  const [selectedTeamProfile, setSelectedTeamProfile] = useState<TeamProfile | null>(() => {
    const teamParsed = parseTeamFromPath(window.location.pathname);
    if (teamParsed) {
      return getTeamBySlugOrId(teamParsed.teamSlug);
    }
    return null;
  });

  const [teamSubTab, setTeamSubTab] = useState<'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc'>(() => {
    const teamParsed = parseTeamFromPath(window.location.pathname);
    if (teamParsed && teamParsed.subTab) {
      return teamParsed.subTab as any;
    }
    return 'tong-quan';
  });

  // League object if viewing a specific league
  const selectedLeague = useMemo(() => {
    if (!selectedLeagueId) return null;
    return getLeagueById(selectedLeagueId);
  }, [selectedLeagueId]);

  // Navigate to Team Dashboard with SEO URL
  const navigateToTeam = (
    teamIdentifier: string | number, 
    subTab: 'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc' = 'tong-quan'
  ) => {
    const profile = getTeamBySlugOrId(teamIdentifier);
    setSelectedTeamProfile(profile);
    setTeamSubTab(subTab);
    setSelectedLeagueId(null);
    setSelectedTeam(profile.name);
    setSelectedCountry(null);
    setSearchQuery('');

    const targetUrl = getTeamUrl(profile.id, profile.slug, subTab);
    window.history.pushState({ teamId: profile.id, subTab }, '', targetUrl);
    document.title = `${profile.name} (${profile.shortName}) - Tin tức, Lịch thi đấu, Kết quả & Đội hình | VnExpress Thể Thao`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubTabChange = (newSubTab: 'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc') => {
    setTeamSubTab(newSubTab);
    if (selectedTeamProfile) {
      const targetUrl = getTeamUrl(selectedTeamProfile.id, selectedTeamProfile.slug, newSubTab);
      window.history.pushState({ teamId: selectedTeamProfile.id, subTab: newSubTab }, '', targetUrl);
      
      const tabTitleMap: Record<string, string> = {
        'tong-quan': `${selectedTeamProfile.name} (${selectedTeamProfile.shortName}) - Tin tức, Lịch thi đấu, Kết quả & Đội hình | VnExpress Thể Thao`,
        'lich-thi-dau': `Lịch thi đấu ${selectedTeamProfile.name} mới nhất - Lịch đá ${selectedTeamProfile.shortName} hôm nay | VnExpress`,
        'ket-qua': `Kết quả ${selectedTeamProfile.name} - Tỷ số ${selectedTeamProfile.shortName} đêm qua | VnExpress`,
        'doi-hinh': `Đội hình ${selectedTeamProfile.name} 2026/2027 - Danh sách cầu thủ ${selectedTeamProfile.shortName} | VnExpress`,
        'tin-tuc': `Tin tức ${selectedTeamProfile.name} mới nhất & Tin chuyển nhượng ${selectedTeamProfile.shortName} | VnExpress`,
        'bang-diem': `Bảng xếp hạng ${selectedTeamProfile.name} tại ${selectedTeamProfile.leagueName} | VnExpress`
      };
      if (tabTitleMap[newSubTab]) {
        document.title = tabTitleMap[newSubTab];
      }
    }
  };

  const handleNavigateHome = () => {
    setSelectedTeamProfile(null);
    setSelectedLeagueId(null);
    setSelectedTeam(null);
    setSelectedCountry(null);
    setSearchQuery('');
    setExpandedMatches(false);
    window.history.pushState({}, '', '/');
    document.title = "Lịch Thi Đấu & Kết Quả Bóng Đá VnExpress - Thể Thao 24/7";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to league sub-URL and sync browser history
  const handleLeagueChange = (id: number | null) => {
    setSelectedTeamProfile(null);
    setSelectedLeagueId(id);
    setSelectedTeam(null);
    setSelectedCountry(null);
    setExpandedMatches(false);

    if (id) {
      const slug = getLeagueSlug(id);
      window.history.pushState({ leagueId: id }, '', `/giai-dau/${slug}`);
      const leagueObj = getLeagueById(id);
      if (leagueObj) {
        document.title = `${leagueObj.vietnameseName} - Lịch thi đấu, Kết quả, BXH & Tin tức | VnExpress Thể Thao`;
      }
    } else {
      window.history.pushState({}, '', '/');
      document.title = "Lịch Thi Đấu & Kết Quả Bóng Đá VnExpress - Thể Thao 24/7";
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Browser back/forward button (popstate) & initial title sync
  useEffect(() => {
    if (selectedTeamProfile) {
      document.title = `${selectedTeamProfile.name} (${selectedTeamProfile.shortName}) - Tin tức, Lịch thi đấu, Kết quả & Đội hình | VnExpress Thể Thao`;
    } else if (selectedLeagueId) {
      const leagueObj = getLeagueById(selectedLeagueId);
      if (leagueObj) {
        document.title = `${leagueObj.vietnameseName} - Lịch thi đấu, Kết quả, BXH & Tin tức | VnExpress Thể Thao`;
      }
    }

    const handlePopState = () => {
      // Check team path first
      const teamParsed = parseTeamFromPath(window.location.pathname);
      if (teamParsed) {
        const profile = getTeamBySlugOrId(teamParsed.teamSlug);
        setSelectedTeamProfile(profile);
        setTeamSubTab((teamParsed.subTab as any) || 'tong-quan');
        setSelectedLeagueId(null);
        document.title = `${profile.name} (${profile.shortName}) - Tin tức, Lịch thi đấu, Kết quả & Đội hình | VnExpress Thể Thao`;
        return;
      }

      // If not team, clear team profile
      setSelectedTeamProfile(null);

      // Check league path
      const leagueId = parseLeagueFromPath(window.location.pathname, window.location.search);
      setSelectedLeagueId(leagueId);
      setSelectedTeam(null);
      setSelectedCountry(null);
      setExpandedMatches(false);
      if (leagueId) {
        const leagueObj = getLeagueById(leagueId);
        if (leagueObj) {
          document.title = `${leagueObj.vietnameseName} - Lịch thi đấu, Kết quả, BXH & Tin tức | VnExpress Thể Thao`;
        }
      } else {
        document.title = "Lịch Thi Đấu & Kết Quả Bóng Đá VnExpress - Thể Thao 24/7";
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedTeamProfile, selectedLeagueId]);

  // Mobile sidebar drawers
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isStandingsDrawerOpen, setIsStandingsDrawerOpen] = useState(false);

  // Favorites / Starred matches
  const [favoriteMatchIds, setFavoriteMatchIds] = useState<Set<number>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals
  const [activeHighlightMatch, setActiveHighlightMatch] = useState<FixtureItem | null>(null);
  const [activeDetailMatch, setActiveDetailMatch] = useState<FixtureItem | null>(null);
  const [selectedStandingLeagueId, setSelectedStandingLeagueId] = useState<number | null>(null);

  // Simulate live elapsed ticking
  useEffect(() => {
    const timer = setInterval(() => {
      setAllFixtures(prev => prev.map(f => {
        if (['1H', '2H'].includes(f.fixture.status.short) && f.fixture.status.elapsed) {
          const nextMin = f.fixture.status.elapsed >= 90 ? 90 : f.fixture.status.elapsed + 1;
          return {
            ...f,
            fixture: {
              ...f.fixture,
              status: {
                ...f.fixture.status,
                elapsed: nextMin
              }
            }
          };
        }
        return f;
      }));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleTabChange = (tab: 'schedule' | 'results' | 'live' | 'favorites') => {
    setCurrentTab(tab);
    setExpandedMatches(false);
    if (tab === 'results') {
      // Dynamic default: morning defaults to yesterday/overnight
      const currentHourVN = 9;
      if (currentHourVN < 14) {
        setSelectedDate(yesterdayDateStr);
      } else {
        setSelectedDate(todayDateStr);
      }
    } else if (tab === 'schedule') {
      setSelectedDate(todayDateStr);
    }
  };

  const handleToggleFavorite = (fixture: FixtureItem) => {
    const id = fixture.fixture.id;
    setFavoriteMatchIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setToastMessage(`Đã hủy theo dõi trận ${fixture.teams.home.name} vs ${fixture.teams.away.name}`);
      } else {
        next.add(id);
        setToastMessage(`Đã thêm vào danh sách theo dõi: ${fixture.teams.home.name} vs ${fixture.teams.away.name} ⭐`);
      }
      return next;
    });

    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const liveCount = useMemo(() => {
    return allFixtures.filter(f => ['1H', '2H', 'HT', 'ET', 'PEN', 'LIVE'].includes(f.fixture.status.short)).length;
  }, [allFixtures]);

  const highlightCount = useMemo(() => {
    return allFixtures.filter(f => f.has_highlight).length;
  }, [allFixtures]);

  // Main Filtered matches list
  const filteredMatches = useMemo(() => {
    let list = [...allFixtures];

    // Sidebar: Team filter
    if (selectedTeam) {
      list = list.filter(f => 
        f.teams.home.name.toLowerCase().includes(selectedTeam.toLowerCase()) ||
        f.teams.away.name.toLowerCase().includes(selectedTeam.toLowerCase())
      );
    }

    // Sidebar: League filter
    if (selectedLeagueId) {
      list = list.filter(f => f.league.id === selectedLeagueId);
    }

    // Sidebar: Region/Country filter
    if (selectedCountry) {
      list = list.filter(f => 
        f.league.country.toLowerCase() === selectedCountry.toLowerCase() ||
        (selectedCountry === "UEFA" && f.league.id === 2)
      );
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(f => 
        f.teams.home.name.toLowerCase().includes(q) ||
        f.teams.away.name.toLowerCase().includes(q) ||
        f.league.name.toLowerCase().includes(q) ||
        f.league.vietnameseName.toLowerCase().includes(q)
      );
      return sortFixtures(list, currentTab === 'results' ? 'results' : 'schedule');
    }

    // Tab filter
    if (currentTab === 'live') {
      list = list.filter(f => ['1H', '2H', 'HT', 'ET', 'PEN', 'LIVE'].includes(f.fixture.status.short));
      return sortFixtures(list, 'results');
    }

    if (currentTab === 'favorites') {
      list = list.filter(f => favoriteMatchIds.has(f.fixture.id));
      return sortFixtures(list, 'schedule');
    }

    if (currentTab === 'results') {
      list = list.filter(f => ['FT', 'AET', '1H', '2H', 'HT', 'ET', 'PEN', 'LIVE'].includes(f.fixture.status.short));
    }

    // Date cycle
    list = list.filter(f => getFootballDayString(f.fixture.date) === selectedDate);

    return sortFixtures(list, currentTab === 'results' ? 'results' : 'schedule');
  }, [allFixtures, currentTab, selectedDate, selectedTeam, selectedLeagueId, selectedCountry, searchQuery, favoriteMatchIds]);

  // Group by league for LiveScore view
  const groupedByLeague = useMemo(() => {
    const map = new Map<number, LeagueGroup>();
    filteredMatches.forEach(f => {
      const lId = f.league.id;
      if (!map.has(lId)) {
        map.set(lId, {
          leagueId: lId,
          leagueName: f.league.name,
          leagueVietnameseName: f.league.vietnameseName,
          logo: f.league.logo,
          flag: f.league.flag,
          tier: f.league.tier,
          fixtures: []
        });
      }
      map.get(lId)!.fixtures.push(f);
    });
    return Array.from(map.values()).sort((a, b) => a.tier - b.tier);
  }, [filteredMatches]);

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-gray-800 flex flex-col font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-white text-gray-900 text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-xl border border-gray-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* VnExpress Header */}
      <VnExpressHeader
        currentTab={currentTab === 'favorites' ? 'schedule' : currentTab}
        onTabChange={(tab) => {
          setSelectedTeamProfile(null);
          if (tab === 'standings') {
            setCurrentTab('schedule');
            handleLeagueChange(39);
          } else {
            handleTabChange(tab);
          }
        }}
        liveCount={liveCount}
        highlightCount={highlightCount}
        onOpenLeaguesDrawer={() => setMobileMenuOpen(true)}
        onOpenStandingsDrawer={() => setIsStandingsDrawerOpen(true)}
        hasActiveFilters={Boolean(selectedTeam || selectedLeagueId || selectedCountry || searchQuery)}
        onNavigateHome={handleNavigateHome}
      />

      {/* Main Container with 3-Column LiveScore layout (1130px fixed container width) */}
      <div className="max-w-[1130px] w-full mx-auto px-2.5 sm:px-4 py-3 sm:py-4 flex-1">
        {selectedTeamProfile ? (
          <TeamDashboard
            team={selectedTeamProfile}
            currentSubTab={teamSubTab}
            onSubTabChange={handleSubTabChange}
            onNavigateHome={handleNavigateHome}
            onOpenDetails={(f) => setActiveDetailMatch(f)}
            onOpenHighlight={(f) => setActiveHighlightMatch(f)}
            onToggleFavorite={handleToggleFavorite}
            favoriteMatchIds={favoriteMatchIds}
            allFixtures={allFixtures}
            onSelectTeam={navigateToTeam}
          />
        ) : (
          <>
            {/* Featured Popular Clubs shortcut pills */}
            <div className="bg-white rounded-xl border border-gray-200 p-2.5 sm:px-4 sm:py-2.5 shadow-2xs mb-3 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 whitespace-nowrap flex-shrink-0">
                <span className="text-[#9f224e] font-black">★ CLB Tiêu Điểm:</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
                {[
                  { name: 'Manchester United (MU)', id: 'man-utd-33', isHot: true },
                  { name: 'Arsenal', id: 'arsenal-42' },
                  { name: 'Real Madrid', id: '541' },
                  { name: 'Công An Hà Nội (CAHN)', id: 'cahn-3801' },
                  { name: 'Chelsea', id: '49' },
                  { name: 'Liverpool', id: '40' }
                ].map((club) => (
                  <button
                    key={club.id}
                    onClick={() => navigateToTeam(club.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1 border ${
                      club.isHot 
                        ? 'bg-rose-50 text-[#9f224e] border-rose-200 hover:bg-rose-100 font-bold' 
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <span>{club.name}</span>
                    {club.isHot && <span className="text-[10px] text-red-600">★</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile & Tablet Quick Bar (Dual Filter & Standings Trigger) */}
            <div className="lg:hidden flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-lg border border-gray-200 shadow-2xs"
                >
                  <Filter className="w-3.5 h-3.5 text-[#9f224e]" />
                  <span>Giải đấu &amp; Đội bóng</span>
                  {(selectedTeam || selectedLeagueId || selectedCountry || searchQuery) && (
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  )}
                </button>

                <button
                  onClick={() => setIsStandingsDrawerOpen(true)}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-gray-50 text-gray-800 text-xs font-bold rounded-lg border border-gray-200 shadow-2xs"
                >
                  <Trophy className="w-3.5 h-3.5 text-[#9f224e]" />
                  <span>{selectedLeague ? `BXH ${selectedLeague.vietnameseName}` : '5 BXH Hot'}</span>
                </button>
              </div>

              {(selectedTeam || selectedLeagueId || selectedCountry || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedTeam(null);
                    handleLeagueChange(null);
                    setSelectedCountry(null);
                    setSearchQuery('');
                  }}
                  className="text-[11px] text-red-600 hover:text-red-700 font-bold underline truncate max-w-[140px] text-right"
                  title="Nhấn để bỏ lọc"
                >
                  Xóa lọc: {selectedTeam || (selectedLeague ? selectedLeague.vietnameseName : "") || selectedCountry || "Tìm kiếm"}
                </button>
              )}
            </div>

            {/* 3-Column Layout: Left Sidebar + Center Match Content + Right Hot Leagues Sidebar */}
            <div className="flex flex-col lg:flex-row gap-4 items-start">
              
              {/* Column 1: LiveScore Left Sidebar (210px width) */}
              <div className="hidden lg:block w-[210px] xl:w-[220px] flex-shrink-0 sticky top-14">
                <LiveScoreSidebar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedTeam={selectedTeam}
                  onSelectTeam={(teamName) => {
                    if (teamName) {
                      navigateToTeam(teamName);
                    } else {
                      setSelectedTeam(null);
                    }
                  }}
                  selectedLeagueId={selectedLeagueId}
                  onSelectLeagueId={handleLeagueChange}
                  selectedCountry={selectedCountry}
                  onSelectCountry={setSelectedCountry}
                />
              </div>

              {/* Column 2: Center Main Match Content (Narrowed/flexible width to accommodate right sidebar) */}
              <div className="flex-1 min-w-0 space-y-4">
                
                {/* Breadcrumbs & League Header Banner when viewing a specific league sub-URL */}
                {selectedLeague && (
                  <div className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 shadow-xs">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2.5">
                      <button 
                        onClick={() => handleLeagueChange(null)}
                        className="hover:text-[#9f224e] hover:underline"
                      >
                        Trang chủ
                      </button>
                      <span>/</span>
                      <span>Thể thao</span>
                      <span>/</span>
                      <span>Bóng đá</span>
                      <span>/</span>
                      <span className="text-gray-900 font-bold">{selectedLeague.vietnameseName}</span>
                    </div>

                    {/* League Title Banner */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <img 
                          src={selectedLeague.logo} 
                          alt={selectedLeague.name} 
                          className="w-10 h-10 object-contain p-1 bg-gray-50 rounded-lg border border-gray-200 flex-shrink-0"
                        />
                        <div>
                          <h1 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                            <span>{selectedLeague.vietnameseName}</span>
                            <span className="text-xs text-[#9f224e] bg-rose-50 px-2 py-0.5 rounded font-mono font-bold border border-rose-200">
                              Mùa {selectedLeague.season}
                            </span>
                          </h1>
                          <p className="text-xs text-gray-500">
                            {selectedLeague.country} • Lịch thi đấu, kết quả trực tiếp, bảng xếp hạng và tin tức độc quyền
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleLeagueChange(null)}
                        className="self-start sm:self-center px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 flex items-center gap-1.5 transition"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Xem tất cả giải</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Top Bar with Date Carousel and LIVE button */}
                <LiveScoreTopBar
                  currentTab={currentTab}
                  onTabChange={handleTabChange}
                  selectedDate={selectedDate}
                  onSelectDate={(d) => {
                    setSelectedDate(d);
                    setSearchQuery('');
                    setExpandedMatches(false);
                  }}
                  todayDate={todayDateStr}
                  yesterdayDate={yesterdayDateStr}
                  tomorrowDate={tomorrowDateStr}
                  dateList={dateList}
                  liveCount={liveCount}
                />

                {/* Matches Grouped by League Header */}
                {groupedByLeague.length === 0 ? (
                  <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-xs space-y-3">
                    <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">
                      {currentTab === 'live' 
                        ? `Hiện không có trận đấu nào của ${selectedLeague ? selectedLeague.vietnameseName : 'các giải'} đang đá trực tiếp` 
                        : currentTab === 'favorites' 
                        ? "Bạn chưa đánh dấu theo dõi trận đấu nào"
                        : `Không có trận đấu nào trong ngày được chọn`}
                    </h3>
                    <p className="text-xs text-gray-500 max-w-md mx-auto">
                      {currentTab === 'favorites' 
                        ? "Nhấn vào biểu tượng ngôi sao ☆ ở bên phải mỗi trận để lưu và theo dõi nhanh tại đây."
                        : "Hãy thử chọn ngày khác trên thanh ngày ở trên hoặc nhấn nút bên dưới để xem tất cả trận hôm nay."}
                    </p>
                    <div className="pt-2 flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedTeam(null);
                          setSearchQuery('');
                          setCurrentTab('schedule');
                          setSelectedDate(todayDateStr);
                        }}
                        className="px-4 py-2 bg-[#9f224e] hover:bg-[#831b40] text-white text-xs font-bold rounded-lg transition"
                      >
                        Xem lịch thi đấu hôm nay
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groupedByLeague.map((group) => {
                      const isLeagueView = Boolean(selectedLeagueId);
                      const fixtures = group.fixtures;
                      const hasMoreThan5 = isLeagueView && fixtures.length > 5;
                      const visibleFixtures = (hasMoreThan5 && !expandedMatches) ? fixtures.slice(0, 5) : fixtures;

                      return (
                        <div 
                          key={group.leagueId} 
                          className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs"
                        >
                          {/* League Header */}
                          <div className="bg-[#f8f9fa] px-4 py-2.5 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <img 
                                src={group.logo} 
                                alt={group.leagueName} 
                                className="w-5 h-5 object-contain" 
                                loading="lazy" 
                              />
                              <div>
                                <h2 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-1.5 leading-tight">
                                  <span>{group.leagueName}</span>
                                </h2>
                                <span className="text-[10px] text-gray-500 block font-normal">
                                  {group.fixtures[0]?.league.round || group.fixtures[0]?.league.country}
                                </span>
                              </div>
                            </div>

                            {selectedLeagueId !== group.leagueId && (
                              <button
                                onClick={() => handleLeagueChange(group.leagueId)}
                                className="text-xs text-[#9f224e] hover:underline flex items-center gap-1 font-semibold"
                              >
                                <span>Xem riêng giải này</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Match List for this league */}
                          <div className="divide-y divide-gray-100">
                            {visibleFixtures.map((fixture) => (
                              <LiveScoreMatchItem
                                key={fixture.fixture.id}
                                fixture={fixture}
                                mode={currentTab}
                                onOpenDetails={(f) => setActiveDetailMatch(f)}
                                onOpenHighlight={(f) => setActiveHighlightMatch(f)}
                                onToggleFavorite={handleToggleFavorite}
                                isFavorite={favoriteMatchIds.has(fixture.fixture.id)}
                                onSelectTeam={(teamName) => navigateToTeam(teamName)}
                              />
                            ))}
                          </div>

                          {/* Expand / Collapse Button (Show max 5 matches by default, expand on click) */}
                          {hasMoreThan5 && (
                            <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
                              <button
                                onClick={() => setExpandedMatches(!expandedMatches)}
                                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-100 text-[#9f224e] border border-gray-200 text-xs font-bold rounded-lg shadow-2xs transition"
                              >
                                {expandedMatches ? (
                                  <>
                                    <ChevronUp className="w-4 h-4" />
                                    <span>Thu gọn (chỉ xem 5 trận đầu)</span>
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="w-4 h-4" />
                                    <span>Xem thêm ({fixtures.length - 5} trận còn lại hôm nay)</span>
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Block 'Tin tức': Show 10 latest articles with pagination when viewing a league */}
                {selectedLeagueId && (
                  <LeagueNewsSection
                    leagueId={selectedLeagueId}
                    leagueName={selectedLeague?.vietnameseName || selectedLeague?.name || "Giải đấu"}
                  />
                )}

                {/* Mobile & Tablet Inline Standings Section (Always accessible when scrolling down on phone/tablet) */}
                <div className="lg:hidden mt-6 pt-5 border-t border-gray-200">
                  {selectedLeague ? (
                    <FullLeagueStandings
                      league={selectedLeague}
                      onSelectTeam={(teamName) => {
                        navigateToTeam(teamName);
                      }}
                      onBackToHotLeagues={() => handleLeagueChange(null)}
                    />
                  ) : (
                    <HotLeaguesSidebar
                      onViewLeague={(leagueId) => handleLeagueChange(leagueId)}
                      onSelectTeam={(teamName) => {
                        navigateToTeam(teamName);
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Column 3: Right Sidebar - Full Standings for Selected League OR 5 Hot Leagues Summary (280px-295px width) */}
              <div className="hidden lg:block w-[280px] xl:w-[295px] flex-shrink-0 sticky top-14">
                {selectedLeague ? (
                  <FullLeagueStandings
                    league={selectedLeague}
                    onSelectTeam={(teamName) => navigateToTeam(teamName)}
                    onBackToHotLeagues={() => handleLeagueChange(null)}
                  />
                ) : (
                  <HotLeaguesSidebar
                    onViewLeague={(leagueId) => handleLeagueChange(leagueId)}
                    onSelectTeam={(teamName) => navigateToTeam(teamName)}
                  />
                )}
              </div>

            </div>
          </>
        )}
      </div>

      {/* Floating Fast Action Bar for Mobile Phones (<640px) */}
      <div className="sm:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gray-200 shadow-xl flex items-center gap-3 select-none text-gray-800">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-black"
        >
          <Filter className="w-3.5 h-3.5 text-[#9f224e]" />
          <span>Giải &amp; Đội</span>
          {(selectedTeam || selectedLeagueId || selectedCountry || searchQuery) && (
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          )}
        </button>
        <span className="w-px h-3.5 bg-gray-200"></span>
        <button
          onClick={() => setIsStandingsDrawerOpen(true)}
          className="flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-black"
        >
          <Trophy className="w-3.5 h-3.5 text-[#9f224e]" />
          <span>5 BXH Hot</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-xs mt-12 border-t border-gray-200">
        <div className="max-w-[1130px] mx-auto px-4 py-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-[#9f224e] tracking-tight">VnExpress</span>
              <span className="text-[11px] font-bold text-white uppercase bg-[#9f224e] px-1.5 py-0.5 rounded-xs">
                Thể Thao
              </span>
              <span className="text-gray-500 pl-2 border-l border-gray-300 text-[11px]">
                Báo tiếng Việt nhiều người xem nhất
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-xs">
              <span className="hover:text-gray-900 cursor-pointer">Điều khoản sử dụng</span>
              <span>•</span>
              <span className="hover:text-gray-900 cursor-pointer">Chính sách bảo mật</span>
              <span>•</span>
              <span className="hover:text-gray-900 cursor-pointer">Liên hệ tòa soạn</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] gap-2">
            <span>© 1997-2026. Toàn bộ bản quyền thuộc VnExpress.</span>
            <span>Chuyên trang Lịch thi đấu &amp; Kết quả bóng đá trực tuyến.</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar Modal/Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="w-[85%] max-w-xs bg-white h-full overflow-y-auto p-3.5 space-y-3 shadow-2xl border-r border-gray-200">
            <LiveScoreSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedTeam={selectedTeam}
              onSelectTeam={(t) => {
                if (t) {
                  navigateToTeam(t);
                } else {
                  setSelectedTeam(null);
                }
                setMobileMenuOpen(false);
              }}
              selectedLeagueId={selectedLeagueId}
              onSelectLeagueId={(id) => {
                handleLeagueChange(id);
                setMobileMenuOpen(false);
              }}
              selectedCountry={selectedCountry}
              onSelectCountry={(c) => {
                setSelectedCountry(c);
                setMobileMenuOpen(false);
              }}
              onCloseDrawer={() => setMobileMenuOpen(false)}
            />
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
        </div>
      )}

      {/* Mobile Standings Drawer */}
      {isStandingsDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="flex-1" onClick={() => setIsStandingsDrawerOpen(false)}></div>
          <div className="w-[88%] max-w-sm sm:max-w-md bg-white h-full overflow-y-auto p-3.5 space-y-3 shadow-2xl border-l border-gray-200">
            {selectedLeague ? (
              <FullLeagueStandings
                league={selectedLeague}
                onSelectTeam={(teamName) => {
                  navigateToTeam(teamName);
                  setIsStandingsDrawerOpen(false);
                }}
                onBackToHotLeagues={() => handleLeagueChange(null)}
                onCloseDrawer={() => setIsStandingsDrawerOpen(false)}
              />
            ) : (
              <HotLeaguesSidebar
                onViewLeague={(leagueId) => {
                  handleLeagueChange(leagueId);
                  setIsStandingsDrawerOpen(false);
                }}
                onSelectTeam={(teamName) => {
                  navigateToTeam(teamName);
                  setIsStandingsDrawerOpen(false);
                }}
                onCloseDrawer={() => setIsStandingsDrawerOpen(false)}
              />
            )}
          </div>
        </div>
      )}

      {/* Modals */}
      <VideoHighlightModal
        fixture={activeHighlightMatch}
        onClose={() => setActiveHighlightMatch(null)}
      />

      <MatchDetailModal
        fixture={activeDetailMatch}
        onClose={() => setActiveDetailMatch(null)}
        onOpenHighlight={(f) => setActiveHighlightMatch(f)}
        onToggleReminder={handleToggleFavorite}
        isReminded={activeDetailMatch ? favoriteMatchIds.has(activeDetailMatch.fixture.id) : false}
      />

      <LeagueStandingsModal
        leagueId={selectedStandingLeagueId}
        onClose={() => setSelectedStandingLeagueId(null)}
        onSelectTeam={(t) => setSelectedTeam(t)}
      />
    </div>
  );
}
