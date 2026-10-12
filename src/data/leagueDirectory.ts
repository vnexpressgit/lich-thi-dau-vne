import { LeagueDetails, StandingTeam } from '../types/football';

export const LEAGUE_DIRECTORY: LeagueDetails[] = [
  {
    id: 39,
    slug: 'ngoai-hang-anh',
    name: 'Premier League',
    vietnameseName: 'Ngoại Hạng Anh',
    country: 'Anh',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    flag: 'https://media.api-sports.io/flags/gb-eng.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png", winner: null }, played: 6, win: 5, draw: 1, lose: 0, goalsFor: 15, goalsAgainst: 4, goalDifference: 11, points: 16, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, team: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", winner: null }, played: 6, win: 4, draw: 2, lose: 0, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 14, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 3, team: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 14, goalsAgainst: 6, goalDifference: 8, points: 13, form: ['W', 'L', 'W', 'W', 'D'] },
      { rank: 4, team: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", winner: null }, played: 6, win: 4, draw: 0, lose: 2, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 12, form: ['W', 'W', 'L', 'W', 'W'] },
      { rank: 5, team: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", winner: null }, played: 6, win: 3, draw: 2, lose: 1, goalsFor: 12, goalsAgainst: 8, goalDifference: 4, points: 11, form: ['W', 'W', 'D', 'W', 'L'] },
      { rank: 6, team: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png", winner: null }, played: 6, win: 3, draw: 2, lose: 1, goalsFor: 10, goalsAgainst: 7, goalDifference: 3, points: 11, form: ['W', 'W', 'W', 'L', 'D'] },
      { rank: 7, team: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png", winner: null }, played: 6, win: 3, draw: 1, lose: 2, goalsFor: 12, goalsAgainst: 7, goalDifference: 5, points: 10, form: ['L', 'L', 'W', 'W', 'W'] },
      { rank: 8, team: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png", winner: null }, played: 6, win: 2, draw: 3, lose: 1, goalsFor: 10, goalsAgainst: 9, goalDifference: 1, points: 9, form: ['W', 'D', 'D', 'D', 'L'] },
      { rank: 9, team: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png", winner: null }, played: 6, win: 2, draw: 2, lose: 2, goalsFor: 8, goalsAgainst: 7, goalDifference: 1, points: 8, form: ['D', 'D', 'W', 'W', 'L'] },
      { rank: 10, team: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png", winner: null }, played: 6, win: 2, draw: 1, lose: 3, goalsFor: 6, goalsAgainst: 9, goalDifference: -3, points: 7, form: ['W', 'L', 'L', 'W', 'D'] },
      { rank: 11, team: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png", winner: null }, played: 6, win: 2, draw: 1, lose: 3, goalsFor: 9, goalsAgainst: 11, goalDifference: -2, points: 7, form: ['W', 'L', 'W', 'L', 'D'] },
      { rank: 12, team: { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png", winner: null }, played: 6, win: 2, draw: 1, lose: 3, goalsFor: 7, goalsAgainst: 9, goalDifference: -2, points: 7, form: ['D', 'W', 'D', 'L', 'L'] },
      { rank: 13, team: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png", winner: null }, played: 6, win: 2, draw: 1, lose: 3, goalsFor: 6, goalsAgainst: 10, goalDifference: -4, points: 7, form: ['D', 'W', 'L', 'L', 'W'] },
      { rank: 14, team: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png", winner: null }, played: 6, win: 1, draw: 2, lose: 3, goalsFor: 6, goalsAgainst: 11, goalDifference: -5, points: 5, form: ['L', 'W', 'L', 'L', 'D'] },
      { rank: 15, team: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png", winner: null }, played: 6, win: 1, draw: 1, lose: 4, goalsFor: 7, goalsAgainst: 15, goalDifference: -8, points: 4, form: ['L', 'L', 'L', 'D', 'W'] },
      { rank: 16, team: { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png", winner: null }, played: 6, win: 0, draw: 3, lose: 3, goalsFor: 5, goalsAgainst: 9, goalDifference: -4, points: 3, form: ['L', 'L', 'D', 'D', 'L'] },
      { rank: 17, team: { id: 63, name: "Leeds", logo: "https://media.api-sports.io/football/teams/63.png", winner: null }, played: 6, win: 1, draw: 0, lose: 5, goalsFor: 5, goalsAgainst: 12, goalDifference: -7, points: 3, form: ['L', 'L', 'W', 'L', 'L'] },
      { rank: 18, team: { id: 46, name: "Leicester City", logo: "https://media.api-sports.io/football/teams/46.png", winner: null }, played: 6, win: 0, draw: 3, lose: 3, goalsFor: 7, goalsAgainst: 12, goalDifference: -5, points: 3, form: ['D', 'L', 'D', 'D', 'L'] },
      { rank: 19, team: { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png", winner: null }, played: 6, win: 0, draw: 2, lose: 4, goalsFor: 4, goalsAgainst: 13, goalDifference: -9, points: 2, form: ['L', 'L', 'L', 'D', 'L'] },
      { rank: 20, team: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png", winner: null }, played: 6, win: 0, draw: 1, lose: 5, goalsFor: 5, goalsAgainst: 16, goalDifference: -11, points: 1, form: ['L', 'L', 'L', 'L', 'L'] }
    ]
  },
  {
    id: 382,
    slug: 'v-league',
    name: 'V-League',
    vietnameseName: 'V-League 1',
    country: 'Việt Nam',
    logo: 'https://media.api-sports.io/football/leagues/382.png',
    flag: 'https://media.api-sports.io/flags/vn.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 3801, name: "Công An Hà Nội", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 4, draw: 1, lose: 0, goalsFor: 10, goalsAgainst: 2, goalDifference: 8, points: 13, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, team: { id: 3803, name: "Thép Xanh Nam Định", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 3, draw: 2, lose: 0, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 11, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 3, team: { id: 3802, name: "Hà Nội FC", logo: "https://media.api-sports.io/football/teams/3802.png", winner: null }, played: 5, win: 3, draw: 1, lose: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, points: 10, form: ['L', 'W', 'W', 'D', 'W'] },
      { rank: 4, team: { id: 3804, name: "Thể Công Viettel", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 2, draw: 2, lose: 1, goalsFor: 6, goalsAgainst: 4, goalDifference: 2, points: 8, form: ['W', 'D', 'L', 'W', 'D'] },
      { rank: 5, team: { id: 3805, name: "Hải Phòng", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 2, draw: 1, lose: 2, goalsFor: 5, goalsAgainst: 5, goalDifference: 0, points: 7, form: ['D', 'W', 'L', 'L', 'W'] },
      { rank: 6, team: { id: 3806, name: "Bình Dương", logo: "https://media.api-sports.io/football/teams/3802.png", winner: null }, played: 5, win: 2, draw: 1, lose: 2, goalsFor: 6, goalsAgainst: 7, goalDifference: -1, points: 7, form: ['W', 'L', 'W', 'D', 'L'] },
      { rank: 7, team: { id: 3807, name: "Đông Á Thanh Hóa", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 2, draw: 0, lose: 3, goalsFor: 6, goalsAgainst: 8, goalDifference: -2, points: 6, form: ['L', 'W', 'L', 'W', 'L'] },
      { rank: 8, team: { id: 3808, name: "Hoàng Anh Gia Lai", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 1, draw: 3, lose: 1, goalsFor: 5, goalsAgainst: 5, goalDifference: 0, points: 6, form: ['D', 'W', 'D', 'D', 'L'] },
      { rank: 9, team: { id: 3809, name: "Quy Nhơn Bình Định", logo: "https://media.api-sports.io/football/teams/3802.png", winner: null }, played: 5, win: 1, draw: 2, lose: 2, goalsFor: 4, goalsAgainst: 6, goalDifference: -2, points: 5, form: ['L', 'L', 'D', 'W', 'D'] },
      { rank: 10, team: { id: 3810, name: "Sông Lam Nghệ An", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 1, draw: 1, lose: 3, goalsFor: 4, goalsAgainst: 7, goalDifference: -3, points: 4, form: ['D', 'L', 'L', 'L', 'W'] },
      { rank: 11, team: { id: 3811, name: "TP. Hồ Chí Minh", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 1, draw: 1, lose: 3, goalsFor: 3, goalsAgainst: 7, goalDifference: -4, points: 4, form: ['W', 'D', 'L', 'L', 'L'] },
      { rank: 12, team: { id: 3812, name: "Hồng Lĩnh Hà Tĩnh", logo: "https://media.api-sports.io/football/teams/3802.png", winner: null }, played: 5, win: 0, draw: 4, lose: 1, goalsFor: 3, goalsAgainst: 4, goalDifference: -1, points: 4, form: ['D', 'D', 'D', 'D', 'L'] },
      { rank: 13, team: { id: 3813, name: "Quảng Nam", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 1, draw: 0, lose: 4, goalsFor: 4, goalsAgainst: 8, goalDifference: -4, points: 3, form: ['L', 'L', 'W', 'L', 'L'] },
      { rank: 14, team: { id: 3814, name: "SHB Đà Nẵng", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 0, draw: 2, lose: 3, goalsFor: 2, goalsAgainst: 7, goalDifference: -5, points: 2, form: ['L', 'D', 'L', 'D', 'L'] }
    ]
  },
  {
    id: 140,
    slug: 'la-liga',
    name: 'LaLiga',
    vietnameseName: 'La Liga',
    country: 'Tây Ban Nha',
    logo: 'https://media.api-sports.io/football/leagues/140.png',
    flag: 'https://media.api-sports.io/flags/es.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", winner: null }, played: 7, win: 7, draw: 0, lose: 0, goalsFor: 23, goalsAgainst: 5, goalDifference: 18, points: 21, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, team: { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", winner: null }, played: 7, win: 5, draw: 2, lose: 0, goalsFor: 16, goalsAgainst: 5, goalDifference: 11, points: 17, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 3, team: { id: 530, name: "Atlético Madrid", logo: "https://media.api-sports.io/football/teams/530.png", winner: null }, played: 7, win: 4, draw: 3, lose: 0, goalsFor: 12, goalsAgainst: 3, goalDifference: 9, points: 15, form: ['W', 'D', 'W', 'D', 'W'] },
      { rank: 4, team: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png", winner: null }, played: 7, win: 4, draw: 2, lose: 1, goalsFor: 14, goalsAgainst: 13, goalDifference: 1, points: 14, form: ['W', 'L', 'W', 'W', 'D'] },
      { rank: 5, team: { id: 531, name: "Athletic Club", logo: "https://media.api-sports.io/football/teams/531.png", winner: null }, played: 7, win: 4, draw: 1, lose: 2, goalsFor: 11, goalsAgainst: 7, goalDifference: 4, points: 13, form: ['W', 'W', 'W', 'L', 'D'] },
      { rank: 6, team: { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png", winner: null }, played: 7, win: 3, draw: 3, lose: 1, goalsFor: 8, goalsAgainst: 6, goalDifference: 2, points: 12, form: ['W', 'W', 'L', 'W', 'D'] },
      { rank: 7, team: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png", winner: null }, played: 7, win: 3, draw: 1, lose: 3, goalsFor: 9, goalsAgainst: 9, goalDifference: 0, points: 10, form: ['L', 'W', 'D', 'L', 'W'] },
      { rank: 8, team: { id: 536, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png", winner: null }, played: 7, win: 3, draw: 1, lose: 3, goalsFor: 8, goalsAgainst: 10, goalDifference: -2, points: 10, form: ['W', 'L', 'W', 'D', 'L'] },
      { rank: 9, team: { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png", winner: null }, played: 7, win: 2, draw: 3, lose: 2, goalsFor: 6, goalsAgainst: 6, goalDifference: 0, points: 9, form: ['D', 'D', 'L', 'W', 'L'] },
      { rank: 10, team: { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png", winner: null }, played: 7, win: 2, draw: 2, lose: 3, goalsFor: 7, goalsAgainst: 8, goalDifference: -1, points: 8, form: ['L', 'L', 'D', 'L', 'W'] }
    ]
  },
  {
    id: 2,
    slug: 'cup-c1',
    name: 'Champions League',
    vietnameseName: 'Cúp C1 Châu Âu',
    country: 'UEFA',
    logo: 'https://media.api-sports.io/football/leagues/2.png',
    flag: 'https://media.api-sports.io/flags/eu.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png", winner: null }, played: 3, win: 3, draw: 0, lose: 0, goalsFor: 12, goalsAgainst: 2, goalDifference: 10, points: 9, form: ['W', 'W', 'W'] },
      { rank: 2, team: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png", winner: null }, played: 3, win: 3, draw: 0, lose: 0, goalsFor: 9, goalsAgainst: 0, goalDifference: 9, points: 9, form: ['W', 'W', 'W'] },
      { rank: 3, team: { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", winner: null }, played: 3, win: 2, draw: 1, lose: 0, goalsFor: 8, goalsAgainst: 3, goalDifference: 5, points: 7, form: ['W', 'W', 'D'] },
      { rank: 4, team: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", winner: null }, played: 3, win: 2, draw: 1, lose: 0, goalsFor: 6, goalsAgainst: 1, goalDifference: 5, points: 7, form: ['D', 'W', 'W'] },
      { rank: 5, team: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png", winner: null }, played: 3, win: 2, draw: 1, lose: 0, goalsFor: 5, goalsAgainst: 0, goalDifference: 5, points: 7, form: ['D', 'W', 'W'] },
      { rank: 6, team: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png", winner: null }, played: 3, win: 2, draw: 1, lose: 0, goalsFor: 6, goalsAgainst: 2, goalDifference: 4, points: 7, form: ['W', 'W', 'D'] },
      { rank: 7, team: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", winner: null }, played: 3, win: 2, draw: 0, lose: 1, goalsFor: 10, goalsAgainst: 3, goalDifference: 7, points: 6, form: ['L', 'W', 'W'] },
      { rank: 8, team: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png", winner: null }, played: 3, win: 2, draw: 0, lose: 1, goalsFor: 10, goalsAgainst: 6, goalDifference: 4, points: 6, form: ['W', 'W', 'L'] }
    ]
  },
  {
    id: 135,
    slug: 'serie-a',
    name: 'Serie A',
    vietnameseName: 'Serie A',
    country: 'Ý',
    logo: 'https://media.api-sports.io/football/leagues/135.png',
    flag: 'https://media.api-sports.io/flags/it.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png", winner: null }, played: 6, win: 4, draw: 2, lose: 0, goalsFor: 14, goalsAgainst: 4, goalDifference: 10, points: 14, form: ['W', 'D', 'W', 'W', 'D'] },
      { rank: 2, team: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 11, goalsAgainst: 4, goalDifference: 7, points: 13, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 3, team: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png", winner: null }, played: 6, win: 3, draw: 3, lose: 0, goalsFor: 9, goalsAgainst: 0, goalDifference: 9, points: 12, form: ['W', 'D', 'D', 'D', 'W'] },
      { rank: 4, team: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png", winner: null }, played: 6, win: 3, draw: 2, lose: 1, goalsFor: 14, goalsAgainst: 7, goalDifference: 7, points: 11, form: ['W', 'W', 'W', 'D', 'L'] },
      { rank: 5, team: { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png", winner: null }, played: 6, win: 3, draw: 1, lose: 2, goalsFor: 12, goalsAgainst: 9, goalDifference: 3, points: 10, form: ['W', 'L', 'W', 'D', 'W'] },
      { rank: 6, team: { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png", winner: null }, played: 6, win: 2, draw: 3, lose: 1, goalsFor: 7, goalsAgainst: 4, goalDifference: 3, points: 9, form: ['D', 'D', 'L', 'W', 'W'] }
    ]
  },
  {
    id: 78,
    slug: 'bundesliga',
    name: 'Bundesliga',
    vietnameseName: 'Bundesliga',
    country: 'Đức',
    logo: 'https://media.api-sports.io/football/leagues/78.png',
    flag: 'https://media.api-sports.io/flags/de.svg',
    season: '2026/27',
    standings: [
      { rank: 1, team: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png", winner: null }, played: 5, win: 4, draw: 1, lose: 0, goalsFor: 17, goalsAgainst: 4, goalDifference: 13, points: 13, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 2, team: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png", winner: null }, played: 5, win: 3, draw: 1, lose: 1, goalsFor: 14, goalsAgainst: 10, goalDifference: 4, points: 10, form: ['W', 'W', 'L', 'W', 'D'] },
      { rank: 3, team: { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png", winner: null }, played: 5, win: 3, draw: 0, lose: 2, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 9, form: ['W', 'W', 'W', 'L', 'L'] },
      { rank: 4, team: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png", winner: null }, played: 5, win: 2, draw: 2, lose: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, points: 8, form: ['D', 'D', 'W', 'W', 'L'] },
      { rank: 5, team: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png", winner: null }, played: 5, win: 2, draw: 1, lose: 2, goalsFor: 9, goalsAgainst: 9, goalDifference: 0, points: 7, form: ['L', 'W', 'D', 'W', 'L'] }
    ]
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
  return LEAGUE_DIRECTORY.find(
    (l) => l.slug.toLowerCase() === normalized || l.id.toString() === normalized
  );
}

export function getLeagueById(id: number): LeagueDetails | undefined {
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
