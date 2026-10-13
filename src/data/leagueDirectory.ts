import { LeagueDetails, StandingTeam } from '../types/football';
import realChampionsLeagueStandings from './realChampionsLeagueStandings.json';
import realLaLigaStandings from './realLaLigaStandings.json';
import realVLeagueStandings from './realVLeagueStandings.json';
import realSerieAStandings from './realSerieAStandings.json';
import realBundesligaStandings from './realBundesligaStandings.json';

export const LEAGUE_DIRECTORY: LeagueDetails[] = [
  {
    id: 39,
    slug: 'ngoai-hang-anh',
    name: 'Premier League',
    vietnameseName: 'Ngoại Hạng Anh',
    country: 'Anh',
    logo: 'https://is.vnecdn.net/objects/leagues/39.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/gb-eng.svg?v=1',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 50, name: "Man City", logo: "https://is.vnecdn.net/objects/teams/50.png?v=1", winner: null }, played: 6, win: 6, draw: 0, lose: 0, goalsFor: 16, goalsAgainst: 5, goalDifference: 11, points: 18, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, team: { id: 42, name: "Arsenal", logo: "https://is.vnecdn.net/objects/teams/42.png?v=1", winner: null }, played: 6, win: 5, draw: 0, lose: 1, goalsFor: 10, goalsAgainst: 5, goalDifference: 5, points: 15, form: ['W', 'L', 'W', 'W', 'W'] },
      { rank: 3, team: { id: 51, name: "Brighton", logo: "https://is.vnecdn.net/objects/teams/51.png?v=1", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 18, goalsAgainst: 5, goalDifference: 13, points: 13, form: ['W', 'W', 'W', 'D', 'L'] },
      { rank: 4, team: { id: 55, name: "Brentford", logo: "https://is.vnecdn.net/objects/teams/55.png?v=1", winner: null }, played: 6, win: 2, draw: 4, lose: 0, goalsFor: 12, goalsAgainst: 6, goalDifference: 6, points: 10, form: ['D', 'W', 'D', 'D', 'D'] },
      { rank: 5, team: { id: 45, name: "Everton", logo: "https://is.vnecdn.net/objects/teams/45.png?v=1", winner: null }, played: 6, win: 2, draw: 4, lose: 0, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 10, form: ['D', 'W', 'D', 'D', 'D'] },
      { rank: 6, team: { id: 49, name: "Chelsea", logo: "https://is.vnecdn.net/objects/teams/49.png?v=1", winner: null }, played: 6, win: 3, draw: 1, lose: 2, goalsFor: 15, goalsAgainst: 13, goalDifference: 2, points: 10, form: ['W', 'L', 'D', 'L', 'W'] },
      { rank: 7, team: { id: 63, name: "Leeds", logo: "https://is.vnecdn.net/objects/teams/63.png?v=1", winner: null }, played: 6, win: 2, draw: 3, lose: 1, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 9, form: ['L', 'D', 'W', 'D', 'D'] },
      { rank: 8, team: { id: 64, name: "Hull City", logo: "https://is.vnecdn.net/objects/teams/64.png?v=1", winner: null }, played: 6, win: 2, draw: 3, lose: 1, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 9, form: ['D', 'L', 'D', 'D', 'W'] },
      { rank: 9, team: { id: 40, name: "Liverpool", logo: "https://is.vnecdn.net/objects/teams/40.png?v=1", winner: null }, played: 6, win: 2, draw: 3, lose: 1, goalsFor: 7, goalsAgainst: 7, goalDifference: 0, points: 9, form: ['L', 'W', 'D', 'W', 'D'] },
      { rank: 10, team: { id: 57, name: "Ipswich", logo: "https://is.vnecdn.net/objects/teams/57.png?v=1", winner: null }, played: 6, win: 3, draw: 0, lose: 3, goalsFor: 9, goalsAgainst: 12, goalDifference: -3, points: 9, form: ['W', 'L', 'W', 'L', 'L'] },
      { rank: 11, team: { id: 34, name: "Newcastle", logo: "https://is.vnecdn.net/objects/teams/34.png?v=1", winner: null }, played: 6, win: 2, draw: 2, lose: 2, goalsFor: 10, goalsAgainst: 13, goalDifference: -3, points: 8, form: ['L', 'W', 'L', 'D', 'W'] },
      { rank: 12, team: { id: 52, name: "Crystal Palace", logo: "https://is.vnecdn.net/objects/teams/52.png?v=1", winner: null }, played: 6, win: 2, draw: 1, lose: 3, goalsFor: 9, goalsAgainst: 12, goalDifference: -3, points: 7, form: ['W', 'D', 'L', 'W', 'L'] },
      { rank: 13, team: { id: 33, name: "Man Utd", logo: "https://is.vnecdn.net/objects/teams/33.png?v=1", winner: null }, played: 6, win: 1, draw: 3, lose: 2, goalsFor: 9, goalsAgainst: 9, goalDifference: 0, points: 6, form: ['D', 'D', 'L', 'D', 'W'] },
      { rank: 14, team: { id: 1346, name: "Coventry", logo: "https://is.vnecdn.net/objects/teams/1346.png?v=1", winner: null }, played: 6, win: 2, draw: 0, lose: 4, goalsFor: 5, goalsAgainst: 11, goalDifference: -6, points: 6, form: ['W', 'W', 'L', 'L', 'L'] },
      { rank: 15, team: { id: 65, name: "Nottingham Forest", logo: "https://is.vnecdn.net/objects/teams/65.png?v=1", winner: null }, played: 6, win: 1, draw: 2, lose: 3, goalsFor: 5, goalsAgainst: 8, goalDifference: -3, points: 5, form: ['L', 'L', 'W', 'D', 'D'] },
      { rank: 16, team: { id: 66, name: "Aston Villa", logo: "https://is.vnecdn.net/objects/teams/66.png?v=1", winner: null }, played: 6, win: 1, draw: 2, lose: 3, goalsFor: 6, goalsAgainst: 11, goalDifference: -5, points: 5, form: ['D', 'W', 'L', 'D', 'L'] },
      { rank: 17, team: { id: 746, name: "Sunderland", logo: "https://is.vnecdn.net/objects/teams/746.png?v=1", winner: null }, played: 6, win: 1, draw: 1, lose: 4, goalsFor: 6, goalsAgainst: 12, goalDifference: -6, points: 4, form: ['L', 'L', 'L', 'D', 'W'] },
      { rank: 18, team: { id: 35, name: "Bournemouth", logo: "https://is.vnecdn.net/objects/teams/35.png?v=1", winner: null }, played: 6, win: 0, draw: 3, lose: 3, goalsFor: 7, goalsAgainst: 13, goalDifference: -6, points: 3, form: ['L', 'L', 'D', 'D', 'D'] },
      { rank: 19, team: { id: 47, name: "Tottenham", logo: "https://is.vnecdn.net/objects/teams/47.png?v=1", winner: null }, played: 6, win: 0, draw: 3, lose: 3, goalsFor: 3, goalsAgainst: 9, goalDifference: -6, points: 3, form: ['D', 'L', 'D', 'D', 'L'] },
      { rank: 20, team: { id: 36, name: "Fulham", logo: "https://is.vnecdn.net/objects/teams/36.png?v=1", winner: null }, played: 6, win: 0, draw: 2, lose: 4, goalsFor: 6, goalsAgainst: 10, goalDifference: -4, points: 2, form: ['L', 'D', 'D', 'L', 'L'] }
    ]
  },
  {
    id: 340,
    slug: 'v-league',
    name: 'V-League',
    vietnameseName: 'V-League 1',
    country: 'Việt Nam',
    logo: 'https://is.vnecdn.net/objects/leagues/340.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/vn.svg?v=1',
    season: '2026/27',
    standings: realVLeagueStandings as StandingTeam[]
  },
  {
    id: 140,
    slug: 'la-liga',
    name: 'LaLiga',
    vietnameseName: 'La Liga',
    country: 'Tây Ban Nha',
    logo: 'https://is.vnecdn.net/objects/leagues/140.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/es.svg?v=1',
    season: '2026/27',
    standings: realLaLigaStandings as StandingTeam[]
  },
  {
    id: 2,
    slug: 'cup-c1',
    name: 'Champions League',
    vietnameseName: 'Cúp C1 Châu Âu',
    country: 'UEFA',
    logo: 'https://is.vnecdn.net/objects/leagues/2.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/eu.svg?v=1',
    season: '2026/27',
    standings: realChampionsLeagueStandings as StandingTeam[]
  },
  {
    id: 135,
    slug: 'serie-a',
    name: 'Serie A',
    vietnameseName: 'Serie A',
    country: 'Ý',
    logo: 'https://is.vnecdn.net/objects/leagues/135.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/it.svg?v=1',
    season: '2026/27',
    standings: realSerieAStandings as StandingTeam[]
  },
  {
    id: 78,
    slug: 'bundesliga',
    name: 'Bundesliga',
    vietnameseName: 'Bundesliga',
    country: 'Đức',
    logo: 'https://is.vnecdn.net/objects/leagues/78.png?v=1',
    flag: 'https://is.vnecdn.net/objects/flags/de.svg?v=1',
    season: '2026/27',
    standings: realBundesligaStandings as StandingTeam[]
  },
  {
    id: 61,
    slug: 'ligue-1',
    name: 'Ligue 1',
    vietnameseName: 'Ligue 1',
    country: 'Pháp',
    logo: 'https://media.api-sports.io/football/leagues/61.png',
    flag: 'https://media.api-sports.io/flags/fr.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 85, name: "Paris Saint-Germain", logo: "https://media.api-sports.io/football/teams/85.png", winner: null }, played: 6, win: 5, draw: 1, lose: 0, goalsFor: 20, goalsAgainst: 4, goalDifference: 16, points: 16, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 2, team: { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/85.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 15, goalsAgainst: 7, goalDifference: 8, points: 13, form: ['W', 'W', 'W', 'L', 'W'] },
      { rank: 3, team: { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/85.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 12, goalsAgainst: 5, goalDifference: 7, points: 13, form: ['W', 'D', 'W', 'W', 'W'] }
    ]
  },
  {
    id: 307,
    slug: 'saudi-pro-league',
    name: 'Saudi Pro League',
    vietnameseName: 'Saudi Pro League',
    country: 'Ả Rập Xê Út',
    logo: 'https://media.api-sports.io/football/leagues/307.png',
    flag: 'https://media.api-sports.io/flags/sa.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 1021, name: "Al Hilal", logo: "https://media.api-sports.io/football/teams/1022.png", winner: null }, played: 5, win: 5, draw: 0, lose: 0, goalsFor: 16, goalsAgainst: 3, goalDifference: 13, points: 15, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, team: { id: 1022, name: "Al Nassr", logo: "https://media.api-sports.io/football/teams/1022.png", winner: null }, played: 5, win: 4, draw: 1, lose: 0, goalsFor: 12, goalsAgainst: 3, goalDifference: 9, points: 13, form: ['W', 'D', 'W', 'W', 'W'] },
      { rank: 3, team: { id: 1023, name: "Al Ittihad", logo: "https://media.api-sports.io/football/teams/1022.png", winner: null }, played: 5, win: 4, draw: 0, lose: 1, goalsFor: 15, goalsAgainst: 6, goalDifference: 9, points: 12, form: ['W', 'W', 'W', 'L', 'W'] }
    ]
  }
];

export function getLeagueBySlug(slug: string): LeagueDetails | undefined {
  const normalized = slug.toLowerCase().trim();
  if (normalized === '382') return LEAGUE_DIRECTORY.find((l) => l.id === 340);
  return LEAGUE_DIRECTORY.find(
    (l) => l.slug.toLowerCase() === normalized || l.id.toString() === normalized
  );
}

export function getLeagueById(id: number): LeagueDetails | undefined {
  if (id === 382) return LEAGUE_DIRECTORY.find((l) => l.id === 340);
  return LEAGUE_DIRECTORY.find((l) => l.id === id);
}

export function getLeagueSlug(id: number): string {
  const found = getLeagueById(id);
  return found ? found.slug : `league-${id}`;
}

export function parseLeagueFromPath(pathname: string, search: string): number | null {
  // Check pathname: /giai-dau/:slug or /league/:slug
  const match = pathname.match(/^\/(?:giai-dau|league)\/([^/?#]+)/i);
  if (match && match[1]) {
    const slug = match[1];
    const found = getLeagueBySlug(slug);
    if (found) return found.id;
    const numId = parseInt(slug, 10);
    if (!isNaN(numId)) return numId;
  }

  // Fallback to URL search param: ?league=...
  const params = new URLSearchParams(search);
  const leagueParam = params.get('league') || params.get('giai-dau');
  if (leagueParam) {
    const found = getLeagueBySlug(leagueParam);
    if (found) return found.id;
    const numId = parseInt(leagueParam, 10);
    if (!isNaN(numId)) return numId;
  }

  return null;
}
