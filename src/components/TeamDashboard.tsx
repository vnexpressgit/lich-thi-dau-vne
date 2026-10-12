import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Tv, 
  Video, 
  FileText, 
  TrendingUp, 
  Star, 
  ChevronRight, 
  ArrowRight, 
  Flame, 
  MessageSquare, 
  Play, 
  Users, 
  MapPin, 
  UserCheck, 
  Shield, 
  ExternalLink,
  Bell,
  Check
} from 'lucide-react';
import { TeamProfile, FixtureItem } from '../types/football';
import { LiveScoreMatchItem } from './LiveScoreMatchItem';
import { getLeagueById } from '../data/leagueDirectory';

interface TeamDashboardProps {
  team: TeamProfile;
  currentSubTab: 'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc';
  onSubTabChange: (tab: 'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc') => void;
  onNavigateHome: () => void;
  onOpenDetails: (fixture: FixtureItem) => void;
  onOpenHighlight: (fixture: FixtureItem) => void;
  onToggleFavorite: (fixture: FixtureItem) => void;
  favoriteMatchIds: Set<number>;
  allFixtures: FixtureItem[];
  onSelectTeam?: (teamName: string) => void;
}

export const TeamDashboard: React.FC<TeamDashboardProps> = ({
  team,
  currentSubTab,
  onSubTabChange,
  onNavigateHome,
  onOpenDetails,
  onOpenHighlight,
  onToggleFavorite,
  favoriteMatchIds,
  allFixtures,
  onSelectTeam
}) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [reminderSet, setReminderSet] = useState(false);

  // League details for standings widget
  const leagueData = useMemo(() => {
    return getLeagueById(team.leagueId);
  }, [team.leagueId]);

  // Find team's matches in allFixtures
  const teamMatches = useMemo(() => {
    return allFixtures.filter(
      f => f.teams.home.name.toLowerCase().includes(team.name.toLowerCase()) || 
           f.teams.away.name.toLowerCase().includes(team.name.toLowerCase()) ||
           f.teams.home.name.toLowerCase().includes(team.shortName.toLowerCase()) ||
           f.teams.away.name.toLowerCase().includes(team.shortName.toLowerCase())
    );
  }, [allFixtures, team]);

  // Match 1: Last match (Trận vừa qua)
  const lastMatch = useMemo(() => {
    const fromFixtures = teamMatches.find(f => ['FT', 'AET'].includes(f.fixture.status.short));
    if (fromFixtures) return fromFixtures;

    return {
      fixture: {
        id: 99991,
        referee: "Michael Oliver",
        timezone: "UTC",
        date: "2026-09-29T19:00:00+00:00",
        timestamp: 1791631800,
        periods: { first: null, second: null },
        venue: { id: 494, name: team.stadium, city: team.country },
        status: { long: "Full Time", short: "FT" as const, elapsed: 90, extra: null }
      },
      league: {
        id: team.leagueId,
        name: team.leagueName,
        country: team.country,
        logo: team.logo,
        flag: "https://media.api-sports.io/flags/gb-eng.svg",
        season: 2026,
        round: "Vòng 6 NHA",
        standings: true,
        tier: 1 as const,
        vietnameseName: team.leagueName
      },
      teams: {
        home: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: true },
        away: { id: 45, name: "Everton", shortName: "Everton", logo: "https://media.api-sports.io/football/teams/45.png", winner: false }
      },
      goals: { home: 3, away: 0 },
      score: {
        halftime: { home: 1, away: 0 },
        fulltime: { home: 3, away: 0 },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null }
      },
      has_highlight: true,
      has_recap: true,
      highlight_duration: "03:50",
      recap_summary: `${team.name} đã có màn trình diễn xuất sắc với các bàn thắng của Fernandes, Højlund và Garnacho để giành trọn vẹn 3 điểm trên sân nhà.`
    } as FixtureItem;
  }, [teamMatches, team]);

  // Match 2: Next match (Trận kế tiếp)
  const nextMatch = useMemo(() => {
    const fromFixtures = teamMatches.find(f => !['FT', 'AET'].includes(f.fixture.status.short));
    if (fromFixtures) return fromFixtures;

    return {
      fixture: {
        id: 99992,
        referee: "Anthony Taylor",
        timezone: "UTC",
        date: "2026-10-04T15:30:00+00:00",
        timestamp: 1791640800,
        periods: { first: null, second: null },
        venue: { id: 494, name: team.stadium, city: team.country },
        status: { long: "Not Started", short: "NS" as const, elapsed: null, extra: null }
      },
      league: {
        id: team.leagueId,
        name: team.leagueName,
        country: team.country,
        logo: team.logo,
        flag: "https://media.api-sports.io/flags/gb-eng.svg",
        season: 2026,
        round: "Vòng 8 NHA",
        standings: true,
        tier: 1 as const,
        vietnameseName: team.leagueName
      },
      teams: {
        home: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: null },
        away: { id: 40, name: "Liverpool", shortName: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", winner: null }
      },
      goals: { home: null, away: null },
      score: {
        halftime: { home: null, away: null },
        fulltime: { home: null, away: null },
        extratime: { home: null, away: null },
        penalty: { home: null, away: null }
      },
      has_preview: true
    } as FixtureItem;
  }, [teamMatches, team]);

  const pastMatches = useMemo(() => {
    const list = teamMatches.filter(f => ['FT', 'AET'].includes(f.fixture.status.short));
    if (list.length >= 2) return list;

    // Fallback list of real past matches for this club
    return [
      lastMatch,
      {
        fixture: {
          id: 99993,
          referee: "Simon Hooper",
          timezone: "UTC",
          date: "2026-09-21T16:30:00+00:00",
          timestamp: 1791550000,
          periods: { first: null, second: null },
          venue: { id: 494, name: team.stadium, city: team.country },
          status: { long: "Full Time", short: "FT" as const, elapsed: 90, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 5 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: true },
          away: { id: 49, name: "Chelsea", shortName: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", winner: false }
        },
        goals: { home: 2, away: 1 },
        score: {
          halftime: { home: 1, away: 1 },
          fulltime: { home: 2, away: 1 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_highlight: true,
        has_recap: true,
        highlight_duration: "04:15",
        recap_summary: `${team.name} giành chiến thắng kịch tính 2-1 trước Chelsea trong những phút bù giờ định mệnh.`
      },
      {
        fixture: {
          id: 99994,
          referee: "Paul Tierney",
          timezone: "UTC",
          date: "2026-09-14T14:00:00+00:00",
          timestamp: 1791460000,
          periods: { first: null, second: null },
          venue: { id: 494, name: "St Mary's", city: "Southampton" },
          status: { long: "Full Time", short: "FT" as const, elapsed: 90, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 4 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: 41, name: "Southampton", shortName: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png", winner: false },
          away: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: true }
        },
        goals: { home: 0, away: 3 },
        score: {
          halftime: { home: 0, away: 2 },
          fulltime: { home: 0, away: 3 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_highlight: true,
        has_recap: true,
        highlight_duration: "03:10"
      },
      {
        fixture: {
          id: 99995,
          referee: "Stuart Attwell",
          timezone: "UTC",
          date: "2026-08-31T14:00:00+00:00",
          timestamp: 1791370000,
          periods: { first: null, second: null },
          venue: { id: 494, name: team.stadium, city: team.country },
          status: { long: "Full Time", short: "FT" as const, elapsed: 90, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 3 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: true },
          away: { id: 36, name: "Fulham", shortName: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png", winner: false }
        },
        goals: { home: 1, away: 0 },
        score: {
          halftime: { home: 0, away: 0 },
          fulltime: { home: 1, away: 0 },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_highlight: true,
        highlight_duration: "02:45"
      }
    ] as FixtureItem[];
  }, [teamMatches, lastMatch, team]);

  const upcomingMatches = useMemo(() => {
    const list = teamMatches.filter(f => !['FT', 'AET'].includes(f.fixture.status.short));
    if (list.length >= 2) return list;

    return [
      nextMatch,
      {
        fixture: {
          id: 99996,
          referee: "Michael Oliver",
          timezone: "UTC",
          date: "2026-10-10T14:00:00+00:00",
          timestamp: 1791720000,
          periods: { first: null, second: null },
          venue: { id: 495, name: "Villa Park", city: "Birmingham" },
          status: { long: "Not Started", short: "NS" as const, elapsed: null, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 9 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: 66, name: "Aston Villa", shortName: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", winner: null },
          away: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: null }
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_preview: true,
        previewText: "Chuyến làm khách đầy thử thách của Quỷ Đỏ đến hiểm địa Villa Park."
      },
      {
        fixture: {
          id: 99997,
          referee: "Chris Kavanagh",
          timezone: "UTC",
          date: "2026-10-18T16:30:00+00:00",
          timestamp: 1791810000,
          periods: { first: null, second: null },
          venue: { id: 494, name: team.stadium, city: team.country },
          status: { long: "Not Started", short: "NS" as const, elapsed: null, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 10 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: null },
          away: { id: 55, name: "Brentford", shortName: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png", winner: null }
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_preview: true
      },
      {
        fixture: {
          id: 99998,
          referee: "Craig Pawson",
          timezone: "UTC",
          date: "2026-10-25T15:00:00+00:00",
          timestamp: 1791900000,
          periods: { first: null, second: null },
          venue: { id: 540, name: "London Stadium", city: "London" },
          status: { long: "Not Started", short: "NS" as const, elapsed: null, extra: null }
        },
        league: {
          id: team.leagueId,
          name: team.leagueName,
          country: team.country,
          logo: team.logo,
          flag: "https://media.api-sports.io/flags/gb-eng.svg",
          season: 2026,
          round: "Vòng 11 NHA",
          standings: true,
          tier: 1 as const,
          vietnameseName: team.leagueName
        },
        teams: {
          home: { id: 48, name: "West Ham", shortName: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png", winner: null },
          away: { id: team.id, name: team.name, shortName: team.shortName, logo: team.logo, winner: null }
        },
        goals: { home: null, away: null },
        score: {
          halftime: { home: null, away: null },
          fulltime: { home: null, away: null },
          extratime: { home: null, away: null },
          penalty: { home: null, away: null }
        },
        has_preview: true
      }
    ] as FixtureItem[];
  }, [teamMatches, nextMatch, team]);

  const navTabs: { id: 'tong-quan' | 'lich-thi-dau' | 'ket-qua' | 'doi-hinh' | 'bang-diem' | 'tin-tuc'; label: string; icon?: any }[] = [
    { id: 'tong-quan', label: '★ Tổng quan' },
    { id: 'lich-thi-dau', label: 'Lịch thi đấu' },
    { id: 'ket-qua', label: 'Kết quả' },
    { id: 'doi-hinh', label: 'Đội hình' },
    { id: 'bang-diem', label: 'Bảng điểm' },
    { id: 'tin-tuc', label: 'Tin tức' }
  ];

  return (
    <div className="w-full space-y-4">
      {/* 1. Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500">
        <button 
          onClick={onNavigateHome} 
          className="hover:text-[#9f224e] transition hover:underline"
        >
          Trang chủ
        </button>
        <span>/</span>
        <button 
          onClick={onNavigateHome} 
          className="hover:text-[#9f224e] transition hover:underline"
        >
          Thể thao
        </button>
        <span>/</span>
        <button 
          onClick={onNavigateHome} 
          className="hover:text-[#9f224e] transition hover:underline"
        >
          Dữ liệu bóng đá
        </button>
        <span>/</span>
        <span className="text-gray-900 font-bold">CLB {team.name}</span>
      </nav>

      {/* 2. Club Hero Header */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        {/* Top Info Banner */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0">
              <img 
                src={team.logo} 
                alt={team.name} 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black text-gray-950 uppercase tracking-tight">
                  {team.name} ({team.shortName})
                </h1>
                <span className="text-[11px] text-[#9f224e] bg-rose-50 px-2 py-0.5 rounded-full font-bold border border-rose-200">
                  {team.country}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>Sân nhà: <strong>{team.stadium}</strong> (Sức chứa: {team.capacity.toLocaleString()})</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-gray-400" />
                  <span>HLV trưởng: <strong>{team.coach}</strong></span>
                </span>
              </div>

              <p className="text-xs text-gray-500 pt-0.5">
                Giải đấu chính: <strong className="text-gray-700">{team.mainCompetitions.join(', ')}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center">
            <button
              onClick={() => setIsFollowed(!isFollowed)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-2xs ${
                isFollowed 
                  ? 'bg-amber-50 text-amber-700 border border-amber-300' 
                  : 'bg-[#9f224e] hover:bg-[#831b40] text-white'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${isFollowed ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isFollowed ? 'Đang theo dõi CLB' : 'Theo dõi CLB'}</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="px-3 sm:px-6 bg-white overflow-x-auto scrollbar-none flex items-center gap-1 sm:gap-2">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSubTabChange(tab.id)}
              className={`px-3.5 py-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
                currentSubTab === tab.id
                  ? 'border-[#9f224e] text-[#9f224e]'
                  : 'border-transparent text-gray-600 hover:text-gray-950 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Khu vực 1: Dual Match Banner - Hai trận đấu cận kề nhất */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Trận vừa qua (Last Match) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              <span className="text-xs font-black uppercase tracking-wider text-gray-500">
                Trận vừa qua (Last Match)
              </span>
            </div>
            <span className="text-xs font-bold text-gray-600 font-mono bg-gray-100 px-2 py-0.5 rounded">
              FT • Vòng 6 NHA
            </span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={lastMatch.teams.home.logo} alt={lastMatch.teams.home.name} className="w-8 h-8 object-contain" />
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900">{lastMatch.teams.home.name}</h4>
                <span className="text-xs text-gray-500">Chủ nhà</span>
              </div>
            </div>

            <div className="text-center px-4">
              <span className="text-xl sm:text-2xl font-black font-mono text-gray-950">
                {lastMatch.goals.home} - {lastMatch.goals.away}
              </span>
              <span className="text-[10px] text-emerald-600 font-bold block uppercase tracking-tight">Chiến thắng</span>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div>
                <h4 className="font-bold text-sm sm:text-base text-gray-700">{lastMatch.teams.away.name}</h4>
                <span className="text-xs text-gray-400">Đội khách</span>
              </div>
              <img src={lastMatch.teams.away.logo} alt={lastMatch.teams.away.name} className="w-8 h-8 object-contain" />
            </div>
          </div>

          <div className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 mb-3 flex items-center gap-2">
            <span className="text-sm">⚽</span>
            <span className="font-medium truncate">Fernandes 20', Højlund 48', Garnacho 88'</span>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
            <button
              onClick={() => onOpenHighlight(lastMatch as FixtureItem)}
              className="flex-1 py-1.5 px-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition"
            >
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>Xem Video Highlight (03:50)</span>
            </button>
            <button
              onClick={() => onOpenDetails(lastMatch as FixtureItem)}
              className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
            >
              <span>Chấm điểm &amp; Phân tích</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 2: Trận kế tiếp (Next Match) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                Trận kế tiếp (Next Match)
              </span>
            </div>
            <span className="text-xs font-bold text-gray-700 font-mono bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
              22:30 Chủ nhật, 04/10 • Vòng 8 NHA
            </span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={nextMatch.teams.home.logo} alt={nextMatch.teams.home.name} className="w-8 h-8 object-contain" />
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900">{nextMatch.teams.home.name}</h4>
                <span className="text-xs text-gray-500">Chủ nhà</span>
              </div>
            </div>

            <div className="text-center px-4">
              <span className="text-sm font-bold text-gray-400 font-mono uppercase tracking-widest block">VS</span>
              <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-bold">
                Tâm điểm vòng đấu
              </span>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900">{nextMatch.teams.away.name}</h4>
                <span className="text-xs text-gray-500">Đội khách</span>
              </div>
              <img src={nextMatch.teams.away.logo} alt={nextMatch.teams.away.name} className="w-8 h-8 object-contain" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 mb-3">
            <div className="flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-blue-600" />
              <span>Trực tiếp: <strong>K+Sport1, FPT Play</strong></span>
            </div>
            <span className="text-[11px] font-mono text-gray-500 font-semibold">
              Đếm ngược: <strong>Còn 3 ngày 04 giờ</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
            <button
              onClick={() => setReminderSet(!reminderSet)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                reminderSet 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                  : 'bg-[#9f224e] hover:bg-[#831b40] text-white'
              }`}
            >
              {reminderSet ? <Check className="w-3.5 h-3.5" /> : <Bell className="w-3.5 h-3.5" />}
              <span>{reminderSet ? 'Đã đặt nhắc nhở' : 'Đặt lịch nhắc nhở trận đấu'}</span>
            </button>
            <button
              onClick={() => onOpenDetails(nextMatch as FixtureItem)}
              className="py-1.5 px-3 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition"
            >
              <span>Nhận định &amp; Tỷ lệ</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Khu vực 2: Bố cục 2 cột tích hợp Data & Editorial (65% Cột chính + 35% Cột phải) */}
      <section className="flex flex-col lg:flex-row gap-5 items-start">
        
        {/* CỘT CHÍNH (65%) */}
        <div className="w-full lg:w-[65%] space-y-6">

          {/* TAB 1: TỔNG QUAN (Default) */}
          {currentSubTab === 'tong-quan' && (
            <div className="space-y-6">
              {/* Tin tiêu điểm về CLB (Hero Article) */}
              {team.news[0] && (
                <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#9f224e] uppercase tracking-wider">
                    <Flame className="w-4 h-4 fill-[#9f224e]" />
                    <span>Tin tiêu điểm về CLB</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-full sm:w-1/2 aspect-video rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 group cursor-pointer">
                      <img 
                        src={team.news[0].image} 
                        alt={team.news[0].title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <div className="space-y-2 flex-1">
                      <h3 className="font-extrabold text-base sm:text-lg text-gray-950 hover:text-[#9f224e] cursor-pointer transition leading-snug">
                        {team.news[0].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {team.news[0].summary}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                        <span>{team.news[0].publishedAt}</span>
                        <span>•</span>
                        <span>{team.news[0].author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          <span>{team.news[0].commentCount} bình luận</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Dòng chảy tin tức & Tin chuyển nhượng mới nhất */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#9f224e]" />
                    <span>Dòng chảy tin tức &amp; Tin chuyển nhượng mới nhất</span>
                  </h3>
                  <button 
                    onClick={() => onSubTabChange('tin-tuc')}
                    className="text-xs text-[#9f224e] font-semibold hover:underline flex items-center gap-0.5"
                  >
                    <span>Xem tất cả</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-gray-100">
                  {team.news.slice(1).map((art) => (
                    <article key={art.id} className="py-3 flex gap-3.5 items-start group cursor-pointer">
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        className="w-20 sm:w-24 aspect-[4/3] rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="space-y-1 min-w-0 flex-1">
                        <span className="text-[10px] text-[#9f224e] font-bold uppercase">{art.category}</span>
                        <h4 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#9f224e] transition line-clamp-2 leading-snug">
                          {art.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400">
                          <span>{art.publishedAt}</span>
                          <span>•</span>
                          <span>{art.author}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Video Highlights gần đây của đội */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>Video Highlights gần đây của đội</span>
                  </h3>
                  <span className="text-xs text-gray-400">{team.recentVideos.length} video HD</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {team.recentVideos.map((vid) => (
                    <div 
                      key={vid.id}
                      onClick={() => onOpenHighlight(lastMatch as FixtureItem)}
                      className="group cursor-pointer space-y-1.5"
                    >
                      <div className="aspect-video rounded-xl overflow-hidden bg-black relative">
                        <img 
                          src={vid.thumbnail} 
                          alt={vid.title} 
                          className="w-full h-full object-cover group-hover:opacity-80 transition"
                        />
                        <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center group-hover:scale-110 transition">
                          <Play className="w-4 h-4 ml-0.5 fill-white" />
                        </div>
                        <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-mono font-bold">
                          {vid.duration}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#9f224e] transition line-clamp-2 leading-snug">
                        {vid.title}
                      </h4>
                      <span className="text-[10px] text-gray-400 block">{vid.views} lượt xem</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Đội hình chính & Danh sách cầu thủ rút gọn */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Cầu thủ then chốt &amp; Đội hình</span>
                  </h3>
                  <button 
                    onClick={() => onSubTabChange('doi-hinh')}
                    className="text-xs text-[#9f224e] font-semibold hover:underline flex items-center gap-0.5"
                  >
                    <span>Xem toàn bộ 28 cầu thủ</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {team.squad.slice(0, 8).map((p) => (
                    <div key={p.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-black text-[#9f224e] font-mono">#{p.number}</span>
                          <span className="text-[10px] text-gray-400">{p.position}</span>
                        </div>
                        <h5 className="text-xs font-bold text-gray-900 truncate">{p.name}</h5>
                        <span className="text-[10px] text-gray-500 font-mono">{p.goals} bàn • {p.appearances} trận</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LỊCH THI ĐẤU */}
          {currentSubTab === 'lich-thi-dau' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#9f224e]" />
                  <span>Lịch thi đấu sắp tới của {team.name}</span>
                </h3>
                <span className="text-xs text-gray-500">{upcomingMatches.length} trận đấu</span>
              </div>

              {upcomingMatches.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-xs">
                  Hiện chưa có lịch thi đấu mới cho giai đoạn này.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {upcomingMatches.map((f) => (
                    <LiveScoreMatchItem
                      key={f.fixture.id}
                      fixture={f}
                      mode="schedule"
                      onOpenDetails={onOpenDetails}
                      onOpenHighlight={onOpenHighlight}
                      onToggleFavorite={onToggleFavorite}
                      isFavorite={favoriteMatchIds.has(f.fixture.id)}
                      onSelectTeam={onSelectTeam}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: KẾT QUẢ */}
          {currentSubTab === 'ket-qua' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#9f224e]" />
                  <span>Kết quả các trận đấu gần đây của {team.name}</span>
                </h3>
                <span className="text-xs text-gray-500">{pastMatches.length} trận đã đấu</span>
              </div>

              {pastMatches.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-xs">
                  Chưa có dữ liệu kết quả mùa giải mới.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {pastMatches.map((f) => (
                    <LiveScoreMatchItem
                      key={f.fixture.id}
                      fixture={f}
                      mode="results"
                      onOpenDetails={onOpenDetails}
                      onOpenHighlight={onOpenHighlight}
                      onToggleFavorite={onToggleFavorite}
                      isFavorite={favoriteMatchIds.has(f.fixture.id)}
                      onSelectTeam={onSelectTeam}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: ĐỘI HÌNH & CẦU THỦ */}
          {currentSubTab === 'doi-hinh' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <h3 className="font-bold text-base text-gray-900">Danh sách cầu thủ &amp; Ban huấn luyện</h3>
                  <p className="text-xs text-gray-500">Mùa giải 2026/2027 • Tổng giá trị đội hình: {team.marketValue}</p>
                </div>
                <span className="text-xs font-mono font-bold bg-rose-50 text-[#9f224e] px-2.5 py-1 rounded-full border border-rose-200">
                  {team.squad.length} Cầu thủ
                </span>
              </div>

              {['Thủ môn', 'Hậu vệ', 'Tiền vệ', 'Tiền đạo'].map((pos) => {
                const list = team.squad.filter(p => p.position === pos);
                if (list.length === 0) return null;

                return (
                  <div key={pos} className="space-y-3">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 pb-1 border-b border-gray-100">
                      {pos} ({list.length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {list.map((p) => (
                        <div key={p.id} className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-black font-mono text-[#9f224e] w-6 text-center">
                              #{p.number}
                            </span>
                            <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                              <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h5 className="text-xs sm:text-sm font-bold text-gray-900">{p.name}</h5>
                              <span className="text-[11px] text-gray-500">{p.nationality} • {p.age} tuổi</span>
                            </div>
                          </div>

                          <div className="text-right text-xs">
                            <span className="font-mono font-bold text-gray-800 block">{p.goals} bàn</span>
                            <span className="text-[10px] text-gray-400 font-mono">{p.marketValue}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 5: TIN TỨC & CHUYỂN NHƯỢNG */}
          {currentSubTab === 'tin-tuc' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#9f224e]" />
                  <span>Tin tức độc quyền &amp; Tin chuyển nhượng {team.name}</span>
                </h3>
              </div>

              <div className="divide-y divide-gray-100">
                {team.news.map((art) => (
                  <article key={art.id} className="py-4 flex flex-col sm:flex-row gap-4 items-start group cursor-pointer">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="w-full sm:w-44 aspect-video rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#9f224e] font-bold uppercase">{art.category}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-500">{art.publishedAt}</span>
                      </div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-950 group-hover:text-[#9f224e] transition leading-snug">
                        {art.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {art.summary}
                      </p>
                      <span className="text-xs text-gray-400 block pt-1">Bởi {art.author}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB BẢNG ĐIỂM */}
          {currentSubTab === 'bang-diem' && leagueData && (
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="font-bold text-base text-gray-900">
                  Bảng xếp hạng {leagueData.vietnameseName} 2026/2027
                </h3>
                <span className="text-xs text-gray-500">Cập nhật tự động</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-gray-500 border-b border-gray-200 font-semibold text-[11px] bg-gray-50">
                      <th className="py-2.5 pl-3 w-8 text-center">#</th>
                      <th className="py-2.5 px-2">Đội bóng</th>
                      <th className="py-2.5 px-2 text-center">Trận</th>
                      <th className="py-2.5 px-2 text-center">Thắng</th>
                      <th className="py-2.5 px-2 text-center">Hòa</th>
                      <th className="py-2.5 px-2 text-center">Bại</th>
                      <th className="py-2.5 px-2 text-center">HS</th>
                      <th className="py-2.5 pr-3 text-right font-bold text-[#9f224e]">Điểm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {leagueData.standings.map((item) => {
                      const isCurrent = item.team.name.toLowerCase().includes(team.name.toLowerCase()) || 
                                        item.team.name.toLowerCase().includes(team.shortName.toLowerCase());

                      return (
                        <tr 
                          key={item.team.name}
                          className={`transition ${isCurrent ? 'bg-rose-50/70 font-bold' : 'hover:bg-gray-50'}`}
                        >
                          <td className="py-2 pl-3 text-center">
                            <span className={`w-5 h-5 rounded-full inline-flex items-center justify-center text-[10px] font-bold ${
                              isCurrent ? 'bg-[#9f224e] text-white' : 'text-gray-500'
                            }`}>
                              {item.rank}
                            </span>
                          </td>
                          <td className="py-2 px-2 flex items-center gap-2">
                            <img src={item.team.logo} alt={item.team.name} className="w-4 h-4 object-contain" />
                            <span className={isCurrent ? 'text-[#9f224e] font-black' : 'text-gray-800'}>
                              {item.team.name} {isCurrent && '★'}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-center font-mono">{item.played}</td>
                          <td className="py-2 px-2 text-center font-mono">{item.win}</td>
                          <td className="py-2 px-2 text-center font-mono">{item.draw}</td>
                          <td className="py-2 px-2 text-center font-mono">{item.lose}</td>
                          <td className="py-2 px-2 text-center font-mono">{item.goalDifference > 0 ? `+${item.goalDifference}` : item.goalDifference}</td>
                          <td className="py-2 pr-3 text-right font-black font-mono text-sm text-[#9f224e]">{item.points}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

        {/* CỘT PHẢI (35%): DỮ LIỆU ĐỘI BÓNG */}
        <aside className="w-full lg:w-[35%] space-y-4">
          
          {/* Widget 1: Vị trí của CLB trên BXH */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-[#9f224e]" />
                <span>Vị trí trên BXH ({team.leagueName})</span>
              </h4>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center justify-between py-1.5 px-2 rounded-lg text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="font-bold w-4 text-center">4.</span>
                  <span>Chelsea</span>
                </span>
                <span className="font-mono font-bold">13 đ</span>
              </div>

              {/* Current Club Highlighted */}
              <div className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-rose-50 border border-rose-200 text-[#9f224e] font-black shadow-2xs">
                <span className="flex items-center gap-2">
                  <span className="w-4 text-center font-mono">5.</span>
                  <span className="uppercase">{team.shortName} (★)</span>
                </span>
                <span className="font-mono text-sm font-black">{team.points} đ</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2 rounded-lg text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="font-bold w-4 text-center">6.</span>
                  <span>Newcastle</span>
                </span>
                <span className="font-mono font-bold">11 đ</span>
              </div>
            </div>

            <button 
              onClick={() => onSubTabChange('bang-diem')}
              className="w-full py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs rounded-lg border border-gray-200 text-center transition block"
            >
              Xem bảng điểm đầy đủ &gt;
            </button>
          </div>

          {/* Widget 2: Cầu thủ ghi bàn & kiến tạo số 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                <span>⚽</span>
                <span>Cầu thủ ghi bàn số 1</span>
              </h4>
              <span className="text-[10px] text-gray-400">Mùa giải 2026/27</span>
            </div>

            <div className="space-y-2.5">
              {team.topScorers.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs p-2 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono font-extrabold text-[#9f224e] w-4 text-center">
                      {s.rank}.
                    </span>
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <img src={s.photo} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">{s.name}</h5>
                      <span className="text-[10px] text-gray-500 font-mono">{s.assists} kiến tạo</span>
                    </div>
                  </div>

                  <span className="font-black font-mono text-sm text-[#9f224e]">
                    {s.goals} bàn
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Widget 3: Phong độ 5 trận gần nhất (Form) */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Phong độ 5 trận (Form)</span>
              </h4>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {team.form.map((f, i) => (
                  <span
                    key={i}
                    className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center text-white ${
                      f === 'W' ? 'bg-emerald-600 shadow-2xs' : f === 'D' ? 'bg-amber-500 shadow-2xs' : 'bg-red-600 shadow-2xs'
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="text-right">
                <span className="text-[11px] text-gray-500 block">Tỷ lệ thắng gần đây</span>
                <span className="text-sm font-extrabold text-emerald-600 font-mono">60%</span>
              </div>
            </div>

            <div className="p-2.5 bg-gray-50 rounded-lg border border-gray-100 text-xs text-gray-600 flex items-center justify-between">
              <span>Bàn thắng: <strong className="text-gray-900">{team.goalsFor}</strong></span>
              <span>•</span>
              <span>Bàn thua: <strong className="text-gray-900">{team.goalsAgainst}</strong></span>
              <span>•</span>
              <span>Hiệu số: <strong className="text-emerald-600">+{team.goalsFor - team.goalsAgainst}</strong></span>
            </div>
          </div>

          {/* Widget 4: Thông tin tổng quan CLB */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs space-y-2.5 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 pb-2 border-b border-gray-100">
              Hồ sơ câu lạc bộ
            </h4>
            
            <div className="flex items-center justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Năm thành lập:</span>
              <span className="font-bold font-mono text-gray-900">{team.founded}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Chủ tịch / Sở hữu:</span>
              <span className="font-bold text-gray-900">{team.president}</span>
            </div>

            <div className="flex items-center justify-between py-1 border-b border-gray-50">
              <span className="text-gray-500">Sân vận động:</span>
              <span className="font-bold text-gray-900">{team.stadium}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-gray-500">Giá trị đội hình:</span>
              <span className="font-bold text-[#9f224e] font-mono">{team.marketValue}</span>
            </div>
          </div>

        </aside>

      </section>
    </div>
  );
};
