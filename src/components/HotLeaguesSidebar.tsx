import React, { useState } from 'react';
import { Trophy, ChevronRight, ArrowUpRight, Award, Shield, X } from 'lucide-react';
import { StandingTeam } from '../types/football';
import realLaLigaStandings from '../data/realLaLigaStandings.json';
import realVLeagueStandings from '../data/realVLeagueStandings.json';
import realSerieAStandings from '../data/realSerieAStandings.json';
import realBundesligaStandings from '../data/realBundesligaStandings.json';

export interface HotLeagueSummary {
  id: number;
  name: string;
  vietnameseName: string;
  country: string;
  logo: string;
  flag: string;
  season: string;
  teams: StandingTeam[];
}

export const HOT_LEAGUES_DATA: HotLeagueSummary[] = [
  {
    id: 39,
    name: "Premier League",
    vietnameseName: "Ngoại Hạng Anh",
    country: "Anh",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    flag: "https://media.api-sports.io/flags/gb-eng.svg",
    season: "2026/27",
    teams: [
      { rank: 1, team: { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png", winner: null }, played: 6, win: 5, draw: 1, lose: 0, goalsFor: 15, goalsAgainst: 4, goalDifference: 11, points: 16, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, team: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", winner: null }, played: 6, win: 4, draw: 2, lose: 0, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 14, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 3, team: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 14, goalsAgainst: 6, goalDifference: 8, points: 13, form: ['W', 'L', 'W', 'W', 'D'] },
      { rank: 4, team: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", winner: null }, played: 6, win: 4, draw: 0, lose: 2, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 12, form: ['W', 'W', 'L', 'W', 'W'] },
      { rank: 5, team: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", winner: null }, played: 6, win: 3, draw: 2, lose: 1, goalsFor: 12, goalsAgainst: 8, goalDifference: 4, points: 11, form: ['W', 'W', 'D', 'W', 'L'] }
    ]
  },
  {
    id: 340,
    name: "V-League",
    vietnameseName: "V-League 1",
    country: "Việt Nam",
    logo: "https://is.vnecdn.net/objects/leagues/340.png?v=1",
    flag: "https://is.vnecdn.net/objects/flags/vn.svg?v=1",
    season: "2026/27",
    teams: realVLeagueStandings as StandingTeam[]
  },
  {
    id: 140,
    name: "LaLiga",
    vietnameseName: "La Liga",
    country: "Tây Ban Nha",
    logo: "https://is.vnecdn.net/objects/leagues/140.png?v=1",
    flag: "https://is.vnecdn.net/objects/flags/es.svg?v=1",
    season: "2026/27",
    teams: realLaLigaStandings as StandingTeam[]
  },
  {
    id: 135,
    name: "Serie A",
    vietnameseName: "Serie A",
    country: "Ý",
    logo: "https://is.vnecdn.net/objects/leagues/135.png?v=1",
    flag: "https://is.vnecdn.net/objects/flags/it.svg?v=1",
    season: "2026/27",
    teams: realSerieAStandings as StandingTeam[]
  },
  {
    id: 78,
    name: "Bundesliga",
    vietnameseName: "Bundesliga",
    country: "Đức",
    logo: "https://is.vnecdn.net/objects/leagues/78.png?v=1",
    flag: "https://is.vnecdn.net/objects/flags/de.svg?v=1",
    season: "2026/27",
    teams: realBundesligaStandings as StandingTeam[]
  }
];

interface HotLeaguesSidebarProps {
  onViewLeague: (leagueId: number, leagueName: string) => void;
  onSelectTeam?: (teamName: string) => void;
  onCloseDrawer?: () => void;
}

export const HotLeaguesSidebar: React.FC<HotLeaguesSidebarProps> = ({
  onViewLeague,
  onSelectTeam,
  onCloseDrawer
}) => {
  return (
    <aside className="w-full space-y-3.5">
      {/* Title Widget Header */}
      <div className="flex items-center justify-between pb-1 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#9f224e]" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800">
            Bảng xếp hạng Hot
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-500 font-medium">5 giải đấu</span>
          {onCloseDrawer && (
            <button
              onClick={onCloseDrawer}
              className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 lg:hidden"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 5 Hot League Mini Tables */}
      <div className="space-y-3">
        {HOT_LEAGUES_DATA.map((league) => (
          <div
            key={league.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:border-gray-300 transition"
          >
            {/* League Header */}
            <div className="bg-[#f8f9fa] px-3 py-2 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-4 h-4 object-contain flex-shrink-0"
                  loading="lazy"
                />
                <div className="truncate">
                  <span className="text-xs font-bold text-gray-900 block truncate leading-tight">
                    {league.vietnameseName}
                  </span>
                </div>
              </div>

              <span className="text-[10px] text-gray-600 font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200 shadow-2xs">
                {league.season}
              </span>
            </div>

            {/* Compact Standings Table */}
            <div className="px-2 py-1.5">
              <table className="w-full text-[11px] text-left">
                <thead>
                  <tr className="text-gray-500 border-b border-gray-200 font-semibold text-[10px]">
                    <th className="py-1 pl-1 w-5 text-center">#</th>
                    <th className="py-1 px-1">CLB</th>
                    <th className="py-1 px-1 text-center w-6" title="Số trận đã đá">Tr</th>
                    <th className="py-1 px-1 text-center w-7" title="Hiệu số bàn thắng">HS</th>
                    <th className="py-1 pr-1 text-right w-7 font-bold text-gray-700" title="Điểm số">Đ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {league.teams.slice(0, 5).map((item) => {
                    const isTop1 = item.rank === 1;
                    const isTop4 = item.rank <= 4;

                    return (
                      <tr
                        key={item.team.name}
                        onClick={() => onSelectTeam && onSelectTeam(item.team.name)}
                        className="hover:bg-gray-50 cursor-pointer transition"
                      >
                        {/* Rank */}
                        <td className="py-1 pl-1 text-center">
                          <span
                            className={`w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-bold ${
                              isTop1
                                ? 'bg-amber-400 text-amber-950 font-black'
                                : isTop4
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-500'
                            }`}
                          >
                            {item.rank}
                          </span>
                        </td>

                        {/* Team name & logo */}
                        <td className="py-1 px-1">
                          <div className="flex items-center gap-1.5 truncate">
                            <img
                              src={item.team.logo}
                              alt={item.team.name}
                              className="w-3.5 h-3.5 object-contain flex-shrink-0"
                              loading="lazy"
                            />
                            <span className="truncate text-gray-800 font-medium hover:text-[#9f224e] max-w-[95px]">
                              {item.team.name}
                            </span>
                          </div>
                        </td>

                        {/* Played */}
                        <td className="py-1 px-1 text-center text-gray-600 font-mono">
                          {item.played}
                        </td>

                        {/* Goal difference */}
                        <td className="py-1 px-1 text-center font-mono text-gray-600 text-[10px]">
                          {item.goalDifference > 0 ? `+${item.goalDifference}` : item.goalDifference}
                        </td>

                        {/* Points */}
                        <td className="py-1 pr-1 text-right font-black text-[#9f224e] font-mono">
                          {item.points}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Button "Xem chi tiết" */}
            <div className="px-2.5 py-1.5 bg-[#fafafa] border-t border-gray-200 flex items-center justify-end">
              <button
                onClick={() => onViewLeague(league.id, league.vietnameseName)}
                className="text-[11px] text-[#9f224e] hover:text-[#831b40] font-semibold flex items-center gap-1 transition group py-0.5"
              >
                <span>Xem chi tiết</span>
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
