import { FixtureItem, StandingTeam } from '../types/football';

// 6 Exact fixtures from user prompt (for 2026-10-10):
export const EXACT_PROMPT_FIXTURES: FixtureItem[] = [
  {
    fixture: {
      id: 1557417,
      referee: "Michael Oliver",
      timezone: "UTC",
      date: "2026-10-10T11:30:00+00:00",
      timestamp: 1791631800,
      periods: { first: null, second: null },
      venue: { id: 494, name: "Emirates Stadium", city: "London" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", winner: null },
      away: { id: 63, name: "Leeds", logo: "https://media.api-sports.io/football/teams/63.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: true,
    has_preview: true,
    has_recap: false,
    has_highlight: false,
    previewText: "Pháo thủ đang giữ chuỗi 5 trận bất bại trên sân nhà Emirates và quyết tâm giành trọn 3 điểm trước Leeds United."
  },
  {
    fixture: {
      id: 1557419,
      referee: "Anthony Taylor",
      timezone: "UTC",
      date: "2026-10-10T14:00:00+00:00",
      timestamp: 1791640800,
      periods: { first: null, second: null },
      venue: { id: 519, name: "Stamford Bridge", city: "London" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", winner: null },
      away: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: true,
    has_preview: true,
    has_recap: false,
    has_highlight: false,
    previewText: "Chelsea đón tiếp Bournemouth tại Stamford Bridge trong bối cảnh các ngòi nổ tấn công như Cole Palmer đang thăng hoa."
  },
  {
    fixture: {
      id: 1557423,
      referee: "Stuart Attwell",
      timezone: "UTC",
      date: "2026-10-10T14:00:00+00:00",
      timestamp: 1791640800,
      periods: { first: null, second: null },
      venue: { id: 540, name: "Portman Road", city: "Ipswich" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 57, name: "Ipswich", logo: "https://media.api-sports.io/football/teams/57.png", winner: null },
      away: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: false,
    has_preview: false,
    has_recap: false,
    has_highlight: false,
    previewText: "Cuộc chiến cân tài cân sức ở nhóm giữa bảng xếp hạng giữa Ipswich và Fulham."
  },
  {
    fixture: {
      id: 1557418,
      referee: "Simon Hooper",
      timezone: "UTC",
      date: "2026-10-10T14:00:00+00:00",
      timestamp: 1791640800,
      periods: { first: null, second: null },
      venue: { id: 495, name: "Villa Park", city: "Birmingham" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", winner: null },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: false,
    has_preview: false,
    has_recap: false,
    has_highlight: false,
    previewText: "Aston Villa sở hữu phong độ cao trên thánh địa Villa Park sẵn sàng nghênh đón Bầy Ong Brentford."
  },
  {
    fixture: {
      id: 1557426,
      referee: "Chris Kavanagh",
      timezone: "UTC",
      date: "2026-10-10T14:00:00+00:00",
      timestamp: 1791640800,
      periods: { first: null, second: null },
      venue: { id: 589, name: "Stadium of Light", city: "Sunderland" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 746, name: "Sunderland", logo: "https://media.api-sports.io/football/teams/746.png", winner: null },
      away: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: false,
    has_preview: false,
    has_recap: false,
    has_highlight: false,
    previewText: "Tân binh Sunderland đụng độ lối chơi kiểm soát bóng biến hóa của Chim Mòng Biển Brighton."
  },
  {
    fixture: {
      id: 1557425,
      referee: "Paul Tierney",
      timezone: "UTC",
      date: "2026-10-10T16:30:00+00:00",
      timestamp: 1791649800,
      periods: { first: null, second: null },
      venue: { id: 556, name: "Old Trafford", city: "Manchester" },
      status: { long: "Not Started", short: "NS", elapsed: null, extra: null }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb-eng.svg",
      season: 2026,
      round: "Regular Season - 6",
      standings: true,
      tier: 1,
      vietnameseName: "Premier League"
    },
    teams: {
      home: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png", winner: null },
      away: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png", winner: null }
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    },
    is_hot: true,
    has_preview: true,
    has_recap: false,
    has_highlight: false,
    previewText: "Trận đại chiến tâm điểm vòng 6 giữa Quỷ Đỏ MU và Gà Trống Tottenham tại Nhà Hát của những Giấc Mơ."
  }
];

export const LEAGUES_CONFIG = [
  {
    id: 39,
    name: "Premier League",
    country: "England",
    vietnameseName: "Premier League",
    logo: "https://media.api-sports.io/football/leagues/39.png",
    flag: "https://media.api-sports.io/flags/gb-eng.svg",
    tier: 1 as const,
    teams: [
      { id: 33, name: "Manchester United", shortName: "Man United", logo: "https://media.api-sports.io/football/teams/33.png", venue: "Old Trafford" },
      { id: 42, name: "Arsenal", shortName: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", venue: "Emirates Stadium" },
      { id: 40, name: "Liverpool", shortName: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", venue: "Anfield" },
      { id: 50, name: "Manchester City", shortName: "Man City", logo: "https://media.api-sports.io/football/teams/50.png", venue: "Etihad Stadium" },
      { id: 49, name: "Chelsea", shortName: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", venue: "Stamford Bridge" },
      { id: 47, name: "Tottenham", shortName: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png", venue: "Tottenham Hotspur Stadium" },
      { id: 34, name: "Newcastle", shortName: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png", venue: "St. James' Park" },
      { id: 66, name: "Aston Villa", shortName: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", venue: "Villa Park" },
      { id: 51, name: "Brighton", shortName: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png", venue: "Amex Stadium" },
      { id: 48, name: "West Ham", shortName: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png", venue: "London Stadium" },
      { id: 36, name: "Fulham", shortName: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png", venue: "Craven Cottage" },
      { id: 45, name: "Everton", shortName: "Everton", logo: "https://media.api-sports.io/football/teams/45.png", venue: "Goodison Park" },
      { id: 55, name: "Brentford", shortName: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png", venue: "Gtech Community Stadium" },
      { id: 35, name: "Bournemouth", shortName: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png", venue: "Vitality Stadium" },
      { id: 52, name: "Crystal Palace", shortName: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png", venue: "Selhurst Park" },
      { id: 39, name: "Wolves", shortName: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png", venue: "Molineux Stadium" },
      { id: 63, name: "Leeds", shortName: "Leeds", logo: "https://media.api-sports.io/football/teams/63.png", venue: "Elland Road" },
      { id: 57, name: "Ipswich", shortName: "Ipswich", logo: "https://media.api-sports.io/football/teams/57.png", venue: "Portman Road" },
      { id: 746, name: "Sunderland", shortName: "Sunderland", logo: "https://media.api-sports.io/football/teams/746.png", venue: "Stadium of Light" },
      { id: 65, name: "Nottingham Forest", shortName: "Nottm Forest", logo: "https://media.api-sports.io/football/teams/65.png", venue: "City Ground" }
    ],
    scorers: ["Erling Haaland", "Mohamed Salah", "Bukayo Saka", "Cole Palmer", "Bruno Fernandes", "Son Heung-min", "Declan Rice", "Alexander Isak"]
  },
  {
    id: 2,
    name: "Champions League",
    country: "UEFA",
    vietnameseName: "Champions League",
    logo: "https://media.api-sports.io/football/leagues/2.png",
    flag: "https://media.api-sports.io/flags/eu.svg",
    tier: 1 as const,
    teams: [
      { id: 541, name: "Real Madrid", shortName: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", venue: "Santiago Bernabéu" },
      { id: 50, name: "Manchester City", shortName: "Man City", logo: "https://media.api-sports.io/football/teams/50.png", venue: "Etihad Stadium" },
      { id: 529, name: "Barcelona", shortName: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", venue: "Camp Nou" },
      { id: 157, name: "Bayern Munich", shortName: "Bayern", logo: "https://media.api-sports.io/football/teams/157.png", venue: "Allianz Arena" },
      { id: 42, name: "Arsenal", shortName: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", venue: "Emirates Stadium" },
      { id: 165, name: "Borussia Dortmund", shortName: "Dortmund", logo: "https://media.api-sports.io/football/teams/165.png", venue: "Signal Iduna Park" },
      { id: 505, name: "Inter Milan", shortName: "Inter", logo: "https://media.api-sports.io/football/teams/505.png", venue: "San Siro" },
      { id: 85, name: "Paris Saint Germain", shortName: "PSG", logo: "https://media.api-sports.io/football/teams/85.png", venue: "Parc des Princes" }
    ],
    scorers: ["Kylian Mbappe", "Vinicius Junior", "Jude Bellingham", "Harry Kane", "Erling Haaland", "Lamine Yamal", "Robert Lewandowski"]
  },
  {
    id: 382,
    name: "V-League",
    country: "Vietnam",
    vietnameseName: "V-League",
    logo: "https://media.api-sports.io/football/leagues/382.png",
    flag: "https://media.api-sports.io/flags/vn.svg",
    tier: 1 as const,
    teams: [
      { id: 3801, name: "Công An Hà Nội", shortName: "CAHN", logo: "https://media.api-sports.io/football/teams/3801.png", venue: "SVĐ Hàng Đẫy" },
      { id: 3802, name: "Hà Nội FC", shortName: "Hà Nội", logo: "https://media.api-sports.io/football/teams/3802.png", venue: "SVĐ Hàng Đẫy" },
      { id: 3803, name: "Thép Xanh Nam Định", shortName: "Nam Định", logo: "https://media.api-sports.io/football/teams/3803.png", venue: "SVĐ Thiên Trường" },
      { id: 3804, name: "Thể Công Viettel", shortName: "Viettel", logo: "https://media.api-sports.io/football/teams/3804.png", venue: "SVĐ Mỹ Đình" },
      { id: 3805, name: "Bình Dương", shortName: "Bình Dương", logo: "https://media.api-sports.io/football/teams/3805.png", venue: "SVĐ Gò Đậu" },
      { id: 3806, name: "Hoàng Anh Gia Lai", shortName: "HAGL", logo: "https://media.api-sports.io/football/teams/3806.png", venue: "SVĐ Pleiku" }
    ],
    scorers: ["Nguyễn Quang Hải", "Nguyễn Tiến Linh", "Nguyễn Hoàng Đức", "Phạm Tuấn Hải", "Rafaelson"]
  },
  {
    id: 140,
    name: "LaLiga",
    country: "Spain",
    vietnameseName: "LaLiga",
    logo: "https://media.api-sports.io/football/leagues/140.png",
    flag: "https://media.api-sports.io/flags/es.svg",
    tier: 2 as const,
    teams: [
      { id: 541, name: "Real Madrid", shortName: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png", venue: "Santiago Bernabéu" },
      { id: 529, name: "Barcelona", shortName: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png", venue: "Camp Nou" },
      { id: 530, name: "Atletico Madrid", shortName: "Atlético", logo: "https://media.api-sports.io/football/teams/530.png", venue: "Metropolitano" },
      { id: 531, name: "Athletic Club", shortName: "Athletic", logo: "https://media.api-sports.io/football/teams/531.png", venue: "San Mamés" },
      { id: 536, name: "Sevilla", shortName: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png", venue: "Ramón Sánchez Pizjuán" },
      { id: 532, name: "Valencia", shortName: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png", venue: "Mestalla" }
    ],
    scorers: ["Kylian Mbappe", "Vinicius Jr", "Lamine Yamal", "Robert Lewandowski", "Antoine Griezmann"]
  },
  {
    id: 135,
    name: "Serie A",
    country: "Italy",
    vietnameseName: "Serie A",
    logo: "https://media.api-sports.io/football/leagues/135.png",
    flag: "https://media.api-sports.io/flags/it.svg",
    tier: 2 as const,
    teams: [
      { id: 505, name: "Inter Milan", shortName: "Inter", logo: "https://media.api-sports.io/football/teams/505.png", venue: "San Siro" },
      { id: 489, name: "AC Milan", shortName: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png", venue: "San Siro" },
      { id: 496, name: "Juventus", shortName: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png", venue: "Allianz Stadium" },
      { id: 492, name: "Napoli", shortName: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png", venue: "Diego Armando Maradona" },
      { id: 497, name: "AS Roma", shortName: "Roma", logo: "https://media.api-sports.io/football/teams/497.png", venue: "Stadio Olimpico" }
    ],
    scorers: ["Lautaro Martinez", "Dusan Vlahovic", "Rafael Leao", "Marcus Thuram", "Khvicha Kvaratskhelia"]
  },
  {
    id: 78,
    name: "Bundesliga",
    country: "Germany",
    vietnameseName: "Bundesliga",
    logo: "https://media.api-sports.io/football/leagues/78.png",
    flag: "https://media.api-sports.io/flags/de.svg",
    tier: 2 as const,
    teams: [
      { id: 157, name: "Bayern Munich", shortName: "Bayern", logo: "https://media.api-sports.io/football/teams/157.png", venue: "Allianz Arena" },
      { id: 168, name: "Bayer Leverkusen", shortName: "Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png", venue: "BayArena" },
      { id: 165, name: "Borussia Dortmund", shortName: "Dortmund", logo: "https://media.api-sports.io/football/teams/165.png", venue: "Signal Iduna Park" },
      { id: 173, name: "RB Leipzig", shortName: "Leipzig", logo: "https://media.api-sports.io/football/teams/173.png", venue: "Red Bull Arena" }
    ],
    scorers: ["Harry Kane", "Florian Wirtz", "Jamal Musiala", "Victor Boniface"]
  },
  {
    id: 61,
    name: "Ligue 1",
    country: "France",
    vietnameseName: "Ligue 1",
    logo: "https://media.api-sports.io/football/leagues/61.png",
    flag: "https://media.api-sports.io/flags/fr.svg",
    tier: 3 as const,
    teams: [
      { id: 85, name: "Paris Saint Germain", shortName: "PSG", logo: "https://media.api-sports.io/football/teams/85.png", venue: "Parc des Princes" },
      { id: 91, name: "Monaco", shortName: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png", venue: "Stade Louis II" },
      { id: 81, name: "Marseille", shortName: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png", venue: "Stade Vélodrome" }
    ],
    scorers: ["Bradley Barcola", "Ousmane Dembele", "Mason Greenwood"]
  },
  {
    id: 307,
    name: "Saudi Pro League",
    country: "Saudi Arabia",
    vietnameseName: "Saudi Pro League",
    logo: "https://media.api-sports.io/football/leagues/307.png",
    flag: "https://media.api-sports.io/flags/sa.svg",
    tier: 3 as const,
    teams: [
      { id: 1022, name: "Al Nassr", shortName: "Al Nassr", logo: "https://media.api-sports.io/football/teams/1022.png", venue: "Al-Awwal Park" },
      { id: 1023, name: "Al Hilal", shortName: "Al Hilal", logo: "https://media.api-sports.io/football/teams/1023.png", venue: "Kingdom Arena" },
      { id: 1024, name: "Al Ittihad", shortName: "Al Ittihad", logo: "https://media.api-sports.io/football/teams/1024.png", venue: "King Abdullah Sports City" }
    ],
    scorers: ["Cristiano Ronaldo", "Karim Benzema", "Aleksandar Mitrovic"]
  },
  {
    id: 253,
    name: "MLS",
    country: "USA",
    vietnameseName: "MLS",
    logo: "https://media.api-sports.io/football/leagues/253.png",
    flag: "https://media.api-sports.io/flags/us.svg",
    tier: 3 as const,
    teams: [
      { id: 1598, name: "Inter Miami", shortName: "Inter Miami", logo: "https://media.api-sports.io/football/teams/1598.png", venue: "Chase Stadium" },
      { id: 1599, name: "LA Galaxy", shortName: "LA Galaxy", logo: "https://media.api-sports.io/football/teams/1599.png", venue: "Dignity Health Sports Park" }
    ],
    scorers: ["Lionel Messi", "Luis Suarez"]
  }
];

const HIGHLIGHT_VIDEOS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
];

function generateMatchEvents(
  homeTeam: { id: number; name: string; logo: string },
  awayTeam: { id: number; name: string; logo: string },
  homeGoals: number,
  awayGoals: number,
  scorersList: string[]
) {
  const events = [];
  for (let i = 0; i < homeGoals; i++) {
    const elapsed = Math.floor(10 + Math.random() * 78);
    const scorer = scorersList[Math.floor(Math.random() * scorersList.length)] || "Cầu thủ";
    events.push({
      time: { elapsed, extra: null },
      team: homeTeam,
      player: { id: 1000 + i, name: scorer },
      type: 'Goal' as const,
      detail: (i === 1 && Math.random() > 0.7 ? 'Penalty' : 'Normal Goal') as any
    });
  }
  for (let i = 0; i < awayGoals; i++) {
    const elapsed = Math.floor(15 + Math.random() * 74);
    const scorer = scorersList[Math.floor(Math.random() * scorersList.length)] || "Tiền đạo";
    events.push({
      time: { elapsed, extra: null },
      team: awayTeam,
      player: { id: 2000 + i, name: scorer },
      type: 'Goal' as const,
      detail: 'Normal Goal' as const
    });
  }
  return events.sort((a, b) => a.time.elapsed - b.time.elapsed);
}

export function generateAllFixtures(): FixtureItem[] {
  const allFixtures: FixtureItem[] = [...EXACT_PROMPT_FIXTURES];

  const dates = [
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
    "2026-10-11",
    "2026-10-12",
    "2026-10-13",
    "2026-10-14",
    "2026-10-15"
  ];

  let idCounter = 1558000;

  dates.forEach((dateStr, dayIndex) => {
    LEAGUES_CONFIG.forEach((league, leagueIdx) => {
      const teams = league.teams;
      if (teams.length < 2) return;

      const pairsCount = league.tier === 1 ? 4 : league.tier === 2 ? 3 : 2;

      for (let p = 0; p < pairsCount; p++) {
        const homeIdx = (dayIndex * 3 + p * 2) % teams.length;
        let awayIdx = (homeIdx + 1 + p) % teams.length;
        if (awayIdx === homeIdx) awayIdx = (homeIdx + 2) % teams.length;

        const homeTeam = teams[homeIdx];
        const awayTeam = teams[awayIdx];

        idCounter++;

        let hourUtc: number;
        let minuteUtc: number;

        if (league.country === "Vietnam") {
          const times = [10, 11, 12];
          hourUtc = times[(p + dayIndex) % times.length];
          minuteUtc = (p === 2) ? 15 : 0;
        } else if (league.id === 2) {
          hourUtc = (p % 2 === 0) ? 19 : 16;
          minuteUtc = (p % 2 === 0) ? 0 : 45;
        } else if (league.country === "Saudi Arabia") {
          hourUtc = 18;
          minuteUtc = 0;
        } else if (league.country === "USA") {
          hourUtc = 23;
          minuteUtc = 30;
        } else {
          const times = [11, 14, 16, 19];
          hourUtc = times[(p + leagueIdx) % times.length];
          minuteUtc = (hourUtc === 11 || hourUtc === 16) ? 30 : 0;
        }

        const dateIso = `${dateStr}T${String(hourUtc).padStart(2, '0')}:${String(minuteUtc).padStart(2, '0')}:00+00:00`;
        const timestamp = Math.floor(new Date(dateIso).getTime() / 1000);

        let statusShort: any = "NS";
        let statusLong = "Not Started";
        let elapsed: number | null = null;
        let homeGoals: number | null = null;
        let awayGoals: number | null = null;
        let htHome: number | null = null;
        let htAway: number | null = null;
        let winnerHome: boolean | null = null;
        let winnerAway: boolean | null = null;

        const isPast = dateStr < "2026-09-30";
        const isToday = dateStr === "2026-09-30";

        if (isPast) {
          statusShort = "FT";
          statusLong = "Match Finished";
          homeGoals = (idCounter + p) % 4;
          awayGoals = (idCounter * 2 + p) % 3;
          htHome = Math.min(homeGoals, Math.floor(homeGoals / 2));
          htAway = Math.min(awayGoals, Math.floor(awayGoals / 2));
          winnerHome = homeGoals > awayGoals ? true : homeGoals < awayGoals ? false : null;
          winnerAway = awayGoals > homeGoals ? true : awayGoals < homeGoals ? false : null;
        } else if (isToday) {
          if (p === 0 && (league.id === 39 || league.id === 140 || league.id === 382 || league.id === 2)) {
            const liveStates = [
              { short: "1H", long: "First Half", elapsed: 38 },
              { short: "HT", long: "Halftime", elapsed: 45 },
              { short: "2H", long: "Second Half", elapsed: 72 },
              { short: "2H", long: "Second Half", elapsed: 88 }
            ];
            const liveState = liveStates[leagueIdx % liveStates.length];
            statusShort = liveState.short;
            statusLong = liveState.long;
            elapsed = liveState.elapsed;
            homeGoals = (leagueIdx % 2) + 1;
            awayGoals = (leagueIdx % 3);
            htHome = 1;
            htAway = 0;
          } else if (hourUtc < 14) {
            statusShort = "FT";
            statusLong = "Match Finished";
            homeGoals = (idCounter % 3) + 1;
            awayGoals = (idCounter % 2);
            htHome = 1;
            htAway = 0;
            winnerHome = homeGoals > awayGoals;
            winnerAway = awayGoals > homeGoals;
          } else if (hourUtc === 14 && minuteUtc === 0) {
            statusShort = "COUNTDOWN";
            statusLong = "Starting in 12 min";
          } else {
            statusShort = "NS";
            statusLong = "Not Started";
          }
        } else {
          statusShort = "NS";
          statusLong = "Not Started";
        }

        const isBigClub = 
          homeTeam.name.includes("Manchester") || 
          homeTeam.name.includes("Arsenal") || 
          homeTeam.name.includes("Liverpool") || 
          homeTeam.name.includes("Real Madrid") || 
          homeTeam.name.includes("Barcelona") || 
          homeTeam.name.includes("Chelsea") ||
          homeTeam.name.includes("Bayern") ||
          homeTeam.name.includes("Al Nassr") ||
          homeTeam.name.includes("Inter Miami") ||
          homeTeam.name.includes("Công An") ||
          homeTeam.name.includes("Hà Nội");

        const isHot = isBigClub && (p === 0 || p === 1);

        // User requirement:
        // "Vẫn show button Nhận định & Phong độ ở các trận đấu lớn mà có sản xuất nội dung tin bài."
        // "Show button 'Video highlight' và 'Tường thuật & Thống kê' ở các trận đấu mà có sản xuất các tin bài tương ứng, không phải tất cả các trận đều có các tin bài này."
        const hasPreview = isHot || (league.tier === 1 && p === 0);
        const hasHighlight = (statusShort === "FT" && (isHot || (idCounter % 3 === 0)));
        const hasRecap = (statusShort === "FT" && (isHot || (idCounter % 2 === 0)));

        let events = undefined;
        let highlightVideo = undefined;
        let highlightDuration = undefined;
        let recap = undefined;

        if (statusShort === "FT" || statusShort === "1H" || statusShort === "2H" || statusShort === "HT") {
          events = generateMatchEvents(
            { id: homeTeam.id, name: homeTeam.name, logo: homeTeam.logo },
            { id: awayTeam.id, name: awayTeam.name, logo: awayTeam.logo },
            homeGoals || 0,
            awayGoals || 0,
            league.scorers
          );
        }

        if (hasHighlight) {
          highlightVideo = HIGHLIGHT_VIDEOS[idCounter % HIGHLIGHT_VIDEOS.length];
          highlightDuration = ["03:45", "04:12", "02:55"][idCounter % 3];
        }

        if (hasRecap) {
          recap = `${homeTeam.name} và ${awayTeam.name} cống hiến 90 phút đôi công hấp dẫn. Tỷ số chung cuộc ${homeGoals} - ${awayGoals} phản ánh đúng cục diện trận đấu.`;
        }

        allFixtures.push({
          fixture: {
            id: idCounter,
            referee: "Trọng tài FIFA",
            timezone: "UTC",
            date: dateIso,
            timestamp,
            periods: { first: null, second: null },
            venue: {
              id: 100 + (idCounter % 50),
              name: homeTeam.venue || "Sân vận động",
              city: league.country
            },
            status: {
              long: statusLong,
              short: statusShort,
              elapsed,
              extra: null
            }
          },
          league: {
            id: league.id,
            name: league.name,
            country: league.country,
            logo: league.logo,
            flag: league.flag,
            season: 2026,
            round: league.id === 2 ? "Vòng bảng" : "Vòng " + (Math.floor(dayIndex / 2) + 6),
            standings: true,
            tier: league.tier,
            vietnameseName: league.vietnameseName
          },
          teams: {
            home: {
              id: homeTeam.id,
              name: homeTeam.name,
              shortName: homeTeam.shortName,
              logo: homeTeam.logo,
              winner: winnerHome
            },
            away: {
              id: awayTeam.id,
              name: awayTeam.name,
              shortName: awayTeam.shortName,
              logo: awayTeam.logo,
              winner: winnerAway
            }
          },
          goals: {
            home: homeGoals,
            away: awayGoals
          },
          score: {
            halftime: { home: htHome, away: htAway },
            fulltime: { home: homeGoals, away: awayGoals },
            extratime: { home: null, away: null },
            penalty: { home: null, away: null }
          },
          is_hot: isHot,
          has_preview: hasPreview,
          has_recap: hasRecap,
          has_highlight: hasHighlight,
          highlight_video_url: highlightVideo,
          highlight_duration: highlightDuration,
          recap_summary: recap,
          previewText: isHot ? `Nhận định tâm điểm: ${homeTeam.name} đối đầu ${awayTeam.name}. Phong độ và đội hình tối ưu của hai đội.` : undefined,
          events,
          statistics: (statusShort === "FT" || statusShort === "2H" || statusShort === "1H") ? {
            possessionHome: 53,
            possessionAway: 47,
            shotsHome: 14,
            shotsAway: 9,
            shotsOnTargetHome: (homeGoals || 0) + 4,
            shotsOnTargetAway: (awayGoals || 0) + 3,
            cornersHome: 6,
            cornersAway: 4,
            foulsHome: 10,
            foulsAway: 12,
            xGHome: Number(((homeGoals || 0) * 0.8 + 0.5).toFixed(2)),
            xGAway: Number(((awayGoals || 0) * 0.7 + 0.3).toFixed(2))
          } : undefined,
          odds: {
            homeWin: 1.85,
            draw: 3.40,
            awayWin: 3.10,
            overUnder: 2.75,
            prediction: `${homeTeam.name} được đánh giá cao hơn với khả năng thắng 56%`
          }
        });
      }
    });
  });

  return allFixtures;
}

export const PREMIER_LEAGUE_STANDINGS: StandingTeam[] = [
  { rank: 1, team: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png", winner: null }, played: 6, win: 5, draw: 1, lose: 0, goalsFor: 15, goalsAgainst: 4, goalDifference: 11, points: 16, form: ['W', 'W', 'D', 'W', 'W'] },
  { rank: 2, team: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png", winner: null }, played: 6, win: 4, draw: 2, lose: 0, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 14, form: ['W', 'D', 'W', 'W', 'D'] },
  { rank: 3, team: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png", winner: null }, played: 6, win: 4, draw: 1, lose: 1, goalsFor: 14, goalsAgainst: 6, goalDifference: 8, points: 13, form: ['W', 'L', 'W', 'W', 'D'] },
  { rank: 4, team: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png", winner: null }, played: 6, win: 4, draw: 0, lose: 2, goalsFor: 11, goalsAgainst: 8, goalDifference: 3, points: 12, form: ['W', 'W', 'L', 'W', 'W'] },
  { rank: 5, team: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png", winner: null }, played: 6, win: 3, draw: 2, lose: 1, goalsFor: 12, goalsAgainst: 8, goalDifference: 4, points: 11, form: ['W', 'W', 'D', 'W', 'L'] },
  { rank: 6, team: { id: 33, name: "Manchester United", logo: "https://media.api-sports.io/football/teams/33.png", winner: null }, played: 6, win: 3, draw: 0, lose: 3, goalsFor: 8, goalsAgainst: 8, goalDifference: 0, points: 9, form: ['W', 'L', 'L', 'W', 'W'] }
];

export const VLEAGUE_STANDINGS: StandingTeam[] = [
  { rank: 1, team: { id: 3801, name: "Công An Hà Nội", logo: "https://media.api-sports.io/football/teams/3801.png", winner: null }, played: 5, win: 4, draw: 1, lose: 0, goalsFor: 10, goalsAgainst: 2, goalDifference: 8, points: 13, form: ['W', 'W', 'D', 'W', 'W'] },
  { rank: 2, team: { id: 3803, name: "Thép Xanh Nam Định", logo: "https://media.api-sports.io/football/teams/3803.png", winner: null }, played: 5, win: 3, draw: 2, lose: 0, goalsFor: 9, goalsAgainst: 4, goalDifference: 5, points: 11, form: ['W', 'D', 'W', 'W', 'D'] },
  { rank: 3, team: { id: 3802, name: "Hà Nội FC", logo: "https://media.api-sports.io/football/teams/3802.png", winner: null }, played: 5, win: 3, draw: 1, lose: 1, goalsFor: 8, goalsAgainst: 4, goalDifference: 4, points: 10, form: ['L', 'W', 'W', 'D', 'W'] }
];
