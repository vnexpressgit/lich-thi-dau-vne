import { TeamProfile, PlayerItem, ArticleItem } from '../types/football';

export const MAN_UTD_PROFILE: TeamProfile = {
  id: 33,
  slug: 'man-utd-33',
  name: 'Manchester United',
  shortName: 'Man Utd',
  fullName: 'Manchester United Football Club',
  logo: 'https://media.api-sports.io/football/teams/33.png',
  country: 'Anh',
  leagueId: 39,
  leagueName: 'Ngoại Hạng Anh (Premier League)',
  stadium: 'Old Trafford',
  capacity: 74310,
  coach: 'M. Carrick',
  founded: 1878,
  president: 'Sir Jim Ratcliffe',
  marketValue: '857 triệu Euro',
  mainCompetitions: ['Ngoại Hạng Anh', 'Cúp C2 châu Âu (Europa League)', 'Cúp FA', 'Carabao Cup'],
  rank: 5,
  points: 12,
  played: 6,
  win: 3,
  draw: 3,
  lose: 0,
  goalsFor: 12,
  goalsAgainst: 5,
  form: ['W', 'W', 'D', 'L', 'W'],
  topScorers: [
    { rank: 1, name: 'Rasmus Højlund', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', goals: 5, assists: 2 },
    { rank: 2, name: 'Bruno Fernandes', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', goals: 4, assists: 4 },
    { rank: 3, name: 'Alejandro Garnacho', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', goals: 3, assists: 2 },
    { rank: 4, name: 'Marcus Rashford', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80', goals: 2, assists: 1 }
  ],
  squad: [
    // Goalkeepers
    { id: 101, name: 'André Onana', number: 24, position: 'Thủ môn', nationality: 'Cameroon', age: 29, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 0, marketValue: '35 triệu €' },
    { id: 102, name: 'Altay Bayındır', number: 1, position: 'Thủ môn', nationality: 'Thổ Nhĩ Kỳ', age: 27, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', appearances: 1, goals: 0, assists: 0, marketValue: '10 triệu €' },
    // Defenders
    { id: 103, name: 'Lisandro Martínez', number: 6, position: 'Hậu vệ', nationality: 'Argentina', age: 27, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 1, marketValue: '50 triệu €' },
    { id: 104, name: 'Matthijs de Ligt', number: 4, position: 'Hậu vệ', nationality: 'Hà Lan', age: 26, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 1, assists: 0, marketValue: '65 triệu €' },
    { id: 105, name: 'Diogo Dalot', number: 20, position: 'Hậu vệ', nationality: 'Bồ Đào Nha', age: 26, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 2, marketValue: '40 triệu €' },
    { id: 106, name: 'Noussair Mazraoui', number: 3, position: 'Hậu vệ', nationality: 'Maroc', age: 27, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 0, assists: 1, marketValue: '30 triệu €' },
    { id: 107, name: 'Harry Maguire', number: 5, position: 'Hậu vệ', nationality: 'Anh', age: 32, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80', appearances: 4, goals: 1, assists: 0, marketValue: '18 triệu €' },
    { id: 108, name: 'Luke Shaw', number: 23, position: 'Hậu vệ', nationality: 'Anh', age: 30, photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80', appearances: 3, goals: 0, assists: 0, marketValue: '28 triệu €' },
    // Midfielders
    { id: 109, name: 'Bruno Fernandes (C)', number: 8, position: 'Tiền vệ', nationality: 'Bồ Đào Nha', age: 31, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 4, assists: 4, marketValue: '65 triệu €' },
    { id: 110, name: 'Kobbie Mainoo', number: 37, position: 'Tiền vệ', nationality: 'Anh', age: 20, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 1, assists: 2, marketValue: '55 triệu €' },
    { id: 111, name: 'Manuel Ugarte', number: 25, position: 'Tiền vệ', nationality: 'Uruguay', age: 24, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 0, assists: 0, marketValue: '50 triệu €' },
    { id: 112, name: 'Casemiro', number: 18, position: 'Tiền vệ', nationality: 'Brazil', age: 33, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 4, goals: 1, assists: 0, marketValue: '15 triệu €' },
    { id: 113, name: 'Christian Eriksen', number: 14, position: 'Tiền vệ', nationality: 'Đan Mạch', age: 33, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 4, goals: 1, assists: 2, marketValue: '8 triệu €' },
    // Forwards
    { id: 114, name: 'Rasmus Højlund', number: 9, position: 'Tiền đạo', nationality: 'Đan Mạch', age: 22, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 5, assists: 2, marketValue: '65 triệu €' },
    { id: 115, name: 'Alejandro Garnacho', number: 17, position: 'Tiền đạo', nationality: 'Argentina', age: 21, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 3, assists: 2, marketValue: '50 triệu €' },
    { id: 116, name: 'Marcus Rashford', number: 10, position: 'Tiền đạo', nationality: 'Anh', age: 28, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 2, assists: 1, marketValue: '60 triệu €' },
    { id: 117, name: 'Joshua Zirkzee', number: 11, position: 'Tiền đạo', nationality: 'Hà Lan', age: 24, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 1, assists: 1, marketValue: '45 triệu €' },
    { id: 118, name: 'Amad Diallo', number: 16, position: 'Tiền đạo', nationality: 'Bờ Biển Ngà', age: 23, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 1, assists: 1, marketValue: '25 triệu €' },
    { id: 119, name: 'Antony', number: 21, position: 'Tiền đạo', nationality: 'Brazil', age: 25, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80', appearances: 2, goals: 0, assists: 0, marketValue: '20 triệu €' }
  ],
  recentVideos: [
    {
      id: 'vid-mu-1',
      title: 'Man Utd 3 - 0 Everton: Fernandes và Højlund bùng nổ tại Nhà Hát',
      duration: '03:50',
      thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
      date: 'Hôm qua',
      views: '128.4K'
    },
    {
      id: 'vid-mu-2',
      title: 'Man Utd 2 - 1 Chelsea: Kịch tính những phút bù giờ định mệnh',
      duration: '04:15',
      thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80',
      date: '3 ngày trước',
      views: '245.9K'
    },
    {
      id: 'vid-mu-3',
      title: 'Phân tích siêu phẩm sút phạt hàng rào của Bruno Fernandes',
      duration: '02:30',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
      date: '5 ngày trước',
      views: '89.2K'
    }
  ],
  news: [
    {
      id: 'mu-news-1',
      leagueId: 39,
      title: "HLV M. Carrick: 'Man Utd đã tìm lại bản sắc tấn công tốc độ'",
      summary: "Thuyền trưởng Quỷ Đỏ ca ngợi tinh thần thi đấu quả cảm và khả năng chuyển đổi trạng thái chớp nhoáng của các học trò sau chiến thắng giòn giã trước Everton.",
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      publishedAt: '20 phút trước',
      category: 'Tiêu điểm',
      author: 'Anh Quân',
      commentCount: 165,
      isHot: true
    },
    {
      id: 'mu-news-2',
      leagueId: 39,
      title: 'Man Utd xúc tiến đàm phán gia hạn hợp đồng với Kobbie Mainoo',
      summary: 'Ban lãnh đạo INEOS sẵn sàng nâng mức lương kỷ lục cho tài năng trẻ người Anh nhằm biến anh thành hạt nhân lâu dài trong dự án tái thiết Old Trafford.',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80',
      publishedAt: '1 giờ trước',
      category: 'Chuyển nhượng',
      author: 'Đỗ Tuấn',
      commentCount: 94
    },
    {
      id: 'mu-news-3',
      leagueId: 39,
      title: 'Tình hình chấn thương trước đại chiến Liverpool: Lisandro Martínez sẵn sàng đá chính',
      summary: 'Bộ phận y tế Man Utd mang đến tin mừng cho người hâm mộ khi trung vệ người Argentina đã bình phục hoàn toàn chấn thương mắt cá.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      publishedAt: '3 giờ trước',
      category: 'Lực lượng',
      author: 'Quang Dũng',
      commentCount: 78
    },
    {
      id: 'mu-news-4',
      leagueId: 39,
      title: 'Góc chiến thuật: Cách tuyến giữa Man Utd bóp nghẹt các đợt phản công',
      summary: 'Sự kết hợp giữa chất thép của Manuel Ugarte và nhãn quan chiến thuật của Mainoo đang tạo nên cặp tiền vệ ăn ý bậc nhất Ngoại Hạng Anh.',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
      publishedAt: '5 giờ trước',
      category: 'Phân tích',
      author: 'Hoàng An',
      commentCount: 42
    },
    {
      id: 'mu-news-5',
      leagueId: 39,
      title: "Dự án cải tạo 'Nhà Hát Của Những Giấc Mơ' trị giá 2 tỷ bảng tiến gần vạch đích",
      summary: 'Tập đoàn INEOS công bố mô hình sân vận động mới với sức chứa 100.000 chỗ ngồi hiện đại bậc nhất hành tinh.',
      image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80',
      publishedAt: '8 giờ trước',
      category: 'Hậu trường',
      author: 'Vy Anh',
      commentCount: 120
    }
  ]
};

export const ARSENAL_PROFILE: TeamProfile = {
  id: 42,
  slug: 'arsenal-42',
  name: 'Arsenal',
  shortName: 'Arsenal',
  fullName: 'Arsenal Football Club',
  logo: 'https://media.api-sports.io/football/teams/42.png',
  country: 'Anh',
  leagueId: 39,
  leagueName: 'Ngoại Hạng Anh (Premier League)',
  stadium: 'Emirates Stadium',
  capacity: 60704,
  coach: 'Mikel Arteta',
  founded: 1886,
  president: 'Stan Kroenke',
  marketValue: '1.17 tỷ Euro',
  mainCompetitions: ['Ngoại Hạng Anh', 'Cúp C1 Châu Âu (Champions League)', 'Cúp FA', 'Carabao Cup'],
  rank: 2,
  points: 14,
  played: 6,
  win: 4,
  draw: 2,
  lose: 0,
  goalsFor: 13,
  goalsAgainst: 4,
  form: ['W', 'D', 'W', 'W', 'D'],
  topScorers: [
    { rank: 1, name: 'Bukayo Saka', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', goals: 4, assists: 5 },
    { rank: 2, name: 'Kai Havertz', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', goals: 4, assists: 1 },
    { rank: 3, name: 'Leandro Trossard', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', goals: 3, assists: 1 }
  ],
  squad: [
    { id: 201, name: 'David Raya', number: 22, position: 'Thủ môn', nationality: 'Tây Ban Nha', age: 30, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 0, marketValue: '45 triệu €' },
    { id: 202, name: 'William Saliba', number: 2, position: 'Hậu vệ', nationality: 'Pháp', age: 24, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 1, assists: 0, marketValue: '85 triệu €' },
    { id: 203, name: 'Gabriel Magalhães', number: 6, position: 'Hậu vệ', nationality: 'Brazil', age: 27, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 2, assists: 0, marketValue: '75 triệu €' },
    { id: 204, name: 'Declan Rice', number: 41, position: 'Tiền vệ', nationality: 'Anh', age: 26, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 1, assists: 3, marketValue: '120 triệu €' },
    { id: 205, name: 'Martin Ødegaard (C)', number: 8, position: 'Tiền vệ', nationality: 'Na Uy', age: 26, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 4, goals: 1, assists: 2, marketValue: '110 triệu €' },
    { id: 206, name: 'Bukayo Saka', number: 7, position: 'Tiền đạo', nationality: 'Anh', age: 24, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 4, assists: 5, marketValue: '140 triệu €' },
    { id: 207, name: 'Kai Havertz', number: 29, position: 'Tiền đạo', nationality: 'Đức', age: 26, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 4, assists: 1, marketValue: '75 triệu €' }
  ],
  recentVideos: [
    { id: 'vid-ars-1', title: 'Arsenal 4 - 2 Leicester: Kịch tính nghẹt thở phút 90+4', duration: '03:45', thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=600&q=80', date: '2 ngày trước', views: '189.5K' }
  ],
  news: [
    {
      id: 'ars-news-1',
      leagueId: 39,
      title: "Mikel Arteta: 'Arsenal kiên định trên con đường chinh phục đỉnh cao'",
      summary: 'Pháo thủ thể hiện bản lĩnh tuyệt vời trong những pha bóng cố định và kiểm soát hoàn toàn thế trận trước các đối thủ khó chịu.',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80',
      publishedAt: '35 phút trước',
      category: 'Tiêu điểm',
      author: 'Quang Dũng',
      commentCount: 98,
      isHot: true
    }
  ]
};

export const CAHN_PROFILE: TeamProfile = {
  id: 16400,
  slug: 'cahn-16400',
  name: 'Công An Hà Nội',
  shortName: 'CAHN',
  fullName: 'Câu lạc bộ Bóng đá Công An Hà Nội',
  logo: 'https://is.vnecdn.net/objects/teams/16400.png?v=1',
  country: 'Việt Nam',
  leagueId: 340,
  leagueName: 'V-League 1',
  stadium: 'Sân vận động Hàng Đẫy',
  capacity: 22500,
  coach: 'Alexandre Polking',
  founded: 1956,
  president: 'Đoàn Ngọc Hùng',
  marketValue: '5.2 triệu Euro',
  mainCompetitions: ['V-League 1', 'Cúp Quốc Gia', 'Shopee Cup (Cúp CLB Đông Nam Á)'],
  rank: 1,
  points: 9,
  played: 3,
  win: 3,
  draw: 0,
  lose: 0,
  goalsFor: 6,
  goalsAgainst: 0,
  form: ['W', 'W', 'W'],
  topScorers: [
    { rank: 1, name: 'Nguyễn Quang Hải', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', goals: 3, assists: 3 },
    { rank: 2, name: 'Léo Artur', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', goals: 2, assists: 1 },
    { rank: 3, name: 'Vũ Văn Thanh', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', goals: 1, assists: 2 }
  ],
  squad: [
    { id: 301, name: 'Nguyễn Filip', number: 1, position: 'Thủ môn', nationality: 'Việt Nam', age: 33, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 0, assists: 0, marketValue: '600.000 €' },
    { id: 302, name: 'Bùi Hoàng Việt Anh', number: 68, position: 'Hậu vệ', nationality: 'Việt Nam', age: 26, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 1, assists: 0, marketValue: '400.000 €' },
    { id: 303, name: 'Vũ Văn Thanh', number: 17, position: 'Hậu vệ', nationality: 'Việt Nam', age: 29, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 2, assists: 2, marketValue: '350.000 €' },
    { id: 304, name: 'Nguyễn Quang Hải (C)', number: 19, position: 'Tiền vệ', nationality: 'Việt Nam', age: 28, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 3, assists: 3, marketValue: '400.000 €' },
    { id: 305, name: 'Léo Artur', number: 10, position: 'Tiền đạo', nationality: 'Brazil', age: 30, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 3, assists: 1, marketValue: '450.000 €' }
  ],
  recentVideos: [
    { id: 'vid-cahn-1', title: 'CAHN 2 - 1 Hà Nội: Siêu phẩm mu lai má của Quang Hải tại Hàng Đẫy', duration: '03:15', thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80', date: 'Hôm qua', views: '95.4K' }
  ],
  news: [
    {
      id: 'cahn-news-1',
      leagueId: 382,
      title: 'Quang Hải tỏa sáng rực rỡ đưa CAHN củng cố ngôi đầu bảng V-League',
      summary: 'Đội trưởng CLB CAHN thi đấu thăng hoa với 1 bàn thắng và 1 kiến tạo đẳng cấp, mang về trọn vẹn 3 điểm trong trận derby thủ đô.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      publishedAt: '45 phút trước',
      category: 'Tiêu điểm',
      author: 'Lâm Thỏa',
      commentCount: 88,
      isHot: true
    }
  ]
};

// Generic team generator for any other team
export function generateTeamProfile(id: number, name: string): TeamProfile {
  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${id}`;
  return {
    id,
    slug,
    name,
    shortName: name,
    fullName: `${name} Football Club`,
    logo: `https://is.vnecdn.net/objects/teams/${id}.png?v=1`,
    country: 'Quốc tế',
    leagueId: 39,
    leagueName: 'Giải đấu hàng đầu',
    stadium: 'Sân vận động Quốc tế',
    capacity: 55000,
    coach: 'HLV Trưởng',
    founded: 1900,
    president: 'Ban lãnh đạo CLB',
    marketValue: '450 triệu Euro',
    mainCompetitions: ['Giải vô địch Quốc gia', 'Cúp Quốc Gia', 'Cúp Châu lục'],
    rank: 4,
    points: 13,
    played: 6,
    win: 4,
    draw: 1,
    lose: 1,
    goalsFor: 11,
    goalsAgainst: 6,
    form: ['W', 'W', 'D', 'L', 'W'],
    topScorers: [
      { rank: 1, name: 'Tiền đạo chủ lực', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', goals: 5, assists: 2 },
      { rank: 2, name: 'Đội trưởng tiền vệ', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', goals: 3, assists: 4 }
    ],
    squad: [
      { id: id * 10 + 1, name: 'Thủ môn chính', number: 1, position: 'Thủ môn', nationality: 'Quốc gia', age: 28, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 0 },
      { id: id * 10 + 2, name: 'Trung vệ đội trưởng', number: 4, position: 'Hậu vệ', nationality: 'Quốc gia', age: 27, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 1, assists: 0 },
      { id: id * 10 + 3, name: 'Hậu vệ cánh', number: 2, position: 'Hậu vệ', nationality: 'Quốc gia', age: 25, photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80', appearances: 5, goals: 0, assists: 2 },
      { id: id * 10 + 4, name: 'Tiền vệ tổ chức', number: 8, position: 'Tiền vệ', nationality: 'Quốc gia', age: 26, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 2, assists: 3 },
      { id: id * 10 + 5, name: 'Tiền vệ phòng ngự', number: 6, position: 'Tiền vệ', nationality: 'Quốc gia', age: 29, photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 0, assists: 1 },
      { id: id * 10 + 6, name: 'Tiền đạo cắm', number: 9, position: 'Tiền đạo', nationality: 'Quốc gia', age: 24, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80', appearances: 6, goals: 5, assists: 2 }
    ],
    recentVideos: [
      { id: `vid-${id}-1`, title: `${name}: Tổng hợp bàn thắng và pha bóng đáng nhớ`, duration: '03:30', thumbnail: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80', date: 'Gần đây', views: '75.2K' }
    ],
    news: [
      {
        id: `news-${id}-1`,
        leagueId: 39,
        title: `${name} chuẩn bị lực lượng tối ưu cho giai đoạn then chốt mùa giải`,
        summary: `Toàn cảnh phong độ, chiến thuật và tình hình chấn thương mới nhất của ${name} được cập nhật liên tục trên VnExpress Thể Thao.`,
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
        publishedAt: '1 giờ trước',
        category: 'Tiêu điểm',
        author: 'VnExpress',
        commentCount: 45,
        isHot: true
      }
    ]
  };
}

export function getTeamBySlugOrId(identifier: string | number): TeamProfile {
  const str = String(identifier).toLowerCase().trim();
  
  // Manchester United
  if (str === '33' || str.includes('man-utd') || str.includes('manchester-united') || str.includes('mu')) {
    return MAN_UTD_PROFILE;
  }
  // Arsenal
  if (str === '42' || str.includes('arsenal')) {
    return ARSENAL_PROFILE;
  }
  // CAHN
  if (str === '16400' || str === '3801' || str.includes('cahn') || str.includes('cong-an-ha-noi')) {
    return CAHN_PROFILE;
  }

  // Extract ID if in format `team-name-123`
  const match = str.match(/-(\d+)$/);
  const idNum = match ? parseInt(match[1], 10) : typeof identifier === 'number' ? identifier : 33;
  const name = typeof identifier === 'string' ? identifier.replace(/-\d+$/, '').replace(/-/g, ' ').toUpperCase() : `CLB ${identifier}`;

  return generateTeamProfile(idNum, name);
}

export function parseTeamFromPath(pathname: string, search?: string): { teamSlug: string; subTab?: string } | null {
  // Check search params first: ?team=man-utd-33 or ?doi-bong=man-utd-33
  if (search) {
    const params = new URLSearchParams(search);
    const teamParam = params.get('team') || params.get('doi-bong') || params.get('club');
    if (teamParam) {
      return {
        teamSlug: teamParam,
        subTab: params.get('tab') || undefined
      };
    }
  }

  // Matches:
  // /doi-bong/:slug
  // /doi-bong/:slug/:subTab
  // /the-thao/du-lieu-bong-da/doi-bong/:slug
  // /the-thao/du-lieu-bong-da/doi-bong/:slug/:subTab
  const pattern = /(?:\/the-thao\/du-lieu-bong-da)?\/doi-bong\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?/i;
  const match = pathname.match(pattern);
  if (match && match[1]) {
    return {
      teamSlug: match[1],
      subTab: match[2] || undefined
    };
  }
  return null;
}

export function getTeamUrl(teamId: number, teamSlug?: string, subTab?: string): string {
  const baseSlug = teamSlug || (teamId === 33 ? 'man-utd-33' : teamId === 42 ? 'arsenal-42' : teamId === 3801 ? 'cahn-3801' : `doi-bong-${teamId}`);
  if (!subTab || subTab === 'tong-quan') {
    return `/the-thao/du-lieu-bong-da/doi-bong/${baseSlug}`;
  }
  return `/the-thao/du-lieu-bong-da/doi-bong/${baseSlug}/${subTab}`;
}
