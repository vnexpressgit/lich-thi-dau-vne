import { FixtureItem } from '../types/football';

/**
 * Football Day Cycle (Rule 1):
 * Day starts at 06:00:00 GMT+7 and ends at 05:59:59 GMT+7 the next morning.
 * For example: A match at 02:00 AM on Oct 1st GMT+7 belongs to Football Day Sep 30th!
 */
export function getFootballDayString(utcDateIso: string): string {
  const d = new Date(utcDateIso);
  // Convert UTC date to GMT+7 timestamp
  const vnTimestamp = d.getTime() + 7 * 60 * 60 * 1000;
  const vnDate = new Date(vnTimestamp);
  
  // If hour < 6 AM, it belongs to the previous calendar day
  const hour = vnDate.getUTCHours();
  if (hour < 6) {
    vnDate.setUTCDate(vnDate.getUTCDate() - 1);
  }

  const yyyy = vnDate.getUTCFullYear();
  const mm = String(vnDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(vnDate.getUTCDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Format UTC ISO string to Vietnam Kickoff Time (GMT+7)
 */
export function formatKickoffVN(utcDateIso: string) {
  const d = new Date(utcDateIso);
  // Add 7 hours
  const vnTimestamp = d.getTime() + 7 * 60 * 60 * 1000;
  const vnDate = new Date(vnTimestamp);

  const hours = String(vnDate.getUTCHours()).padStart(2, '0');
  const minutes = String(vnDate.getUTCMinutes()).padStart(2, '0');
  const day = String(vnDate.getUTCDate()).padStart(2, '0');
  const month = String(vnDate.getUTCMonth() + 1).padStart(2, '0');
  const year = vnDate.getUTCFullYear();

  const isLateNight = vnDate.getUTCHours() < 6;
  const isEvening = vnDate.getUTCHours() >= 18;

  return {
    time: `${hours}:${minutes}`,
    dateVN: `${day}/${month}`,
    fullDateVN: `${day}/${month}/${year}`,
    isLateNight,
    isEvening,
    rawHour: vnDate.getUTCHours()
  };
}

/**
 * Format date label for Date Bar (e.g. "Hôm nay 30/09", "Thứ Hai 28/09")
 */
export function formatDayBarLabel(dateStr: string, activeTodayStr: string, yesterdayStr: string, tomorrowStr: string) {
  const parts = dateStr.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  const dateObj = new Date(y, m, d);

  const dayOfWeek = dateObj.getDay();
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = days[dayOfWeek];

  const shortDate = `${String(d).padStart(2, '0')}/${String(m + 1).padStart(2, '0')}`;

  if (dateStr === activeTodayStr) {
    return { title: 'HÔM NAY', subtitle: shortDate, isToday: true, isSpecial: true };
  }
  if (dateStr === yesterdayStr) {
    return { title: 'Hôm qua', subtitle: shortDate, isToday: false, isSpecial: true };
  }
  if (dateStr === tomorrowStr) {
    return { title: 'Ngày mai', subtitle: shortDate, isToday: false, isSpecial: true };
  }

  return { title: dayName, subtitle: shortDate, isToday: false, isSpecial: false };
}

/**
 * Status priority weight for Sorting (Rule 3)
 * LIVE > COUNTDOWN > SCHEDULED > FINISHED > POSTPONED
 */
export function getStatusPriority(statusShort: string): number {
  switch (statusShort) {
    case '1H':
    case '2H':
    case 'HT':
    case 'ET':
    case 'PEN':
    case 'LIVE':
      return 1; // Highest
    case 'COUNTDOWN':
      return 2;
    case 'NS':
      return 3;
    case 'FT':
    case 'AET':
      return 4;
    case 'POSTP':
    case 'CANC':
      return 5;
    default:
      return 6;
  }
}

/**
 * Sort algorithm (Rule 3)
 */
export function sortFixtures(fixtures: FixtureItem[], mode: 'schedule' | 'results' = 'schedule'): FixtureItem[] {
  return [...fixtures].sort((a, b) => {
    if (mode === 'results') {
      // In results mode: LIVE first, then recent FT by timestamp desc, then Tier
      const pA = getStatusPriority(a.fixture.status.short);
      const pB = getStatusPriority(b.fixture.status.short);
      if (pA !== pB && (pA === 1 || pB === 1)) {
        return pA - pB;
      }
      // If both finished or both live, sort by timestamp DESC (most recent first)
      if (a.fixture.timestamp !== b.fixture.timestamp) {
        return b.fixture.timestamp - a.fixture.timestamp;
      }
      return a.league.tier - b.league.tier;
    }

    // Schedule mode: Status Priority -> League Tier -> Kickoff Time ASC
    const statusDiff = getStatusPriority(a.fixture.status.short) - getStatusPriority(b.fixture.status.short);
    if (statusDiff !== 0) return statusDiff;

    const tierDiff = a.league.tier - b.league.tier;
    if (tierDiff !== 0) return tierDiff;

    return a.fixture.timestamp - b.fixture.timestamp;
  });
}

/**
 * Group fixtures by League
 */
export interface LeagueGroup {
  leagueId: number;
  leagueName: string;
  leagueVietnameseName: string;
  logo: string;
  flag: string;
  tier: 1 | 2 | 3 | 4;
  fixtures: FixtureItem[];
}

export function groupFixturesByLeague(fixtures: FixtureItem[]): {
  tier1: LeagueGroup[];
  tier2: LeagueGroup[];
  tier3: LeagueGroup[];
  tier4: LeagueGroup[];
} {
  const map = new Map<number, LeagueGroup>();

  fixtures.forEach((f) => {
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

  const tier1: LeagueGroup[] = [];
  const tier2: LeagueGroup[] = [];
  const tier3: LeagueGroup[] = [];
  const tier4: LeagueGroup[] = [];

  map.forEach((grp) => {
    if (grp.tier === 1) tier1.push(grp);
    else if (grp.tier === 2) tier2.push(grp);
    else if (grp.tier === 3) tier3.push(grp);
    else tier4.push(grp);
  });

  return { tier1, tier2, tier3, tier4 };
}
