import { ArticleItem } from '../types/football';

// Curated high quality football imagery
const NEWS_IMAGES = [
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=800&q=80"
];

const PREMIER_LEAGUE_NEWS: ArticleItem[] = [
  {
    id: "pl-1",
    leagueId: 39,
    title: "Man City đại chiến Arsenal: Cuộc thư hùng định đoạt ngôi vương Ngoại Hạng Anh",
    summary: "HLV Pep Guardiola và Mikel Arteta bước vào trận cầu tâm điểm với toan tính chiến thuật đỉnh cao, nơi từng mét vuông trên sân đều là điểm nóng tranh chấp nảy lửa.",
    image: NEWS_IMAGES[0],
    publishedAt: "25 phút trước",
    category: "Tiêu điểm",
    author: "Đỗ Tuấn",
    commentCount: 142,
    isHot: true
  },
  {
    id: "pl-2",
    leagueId: 39,
    title: "Erling Haaland lập kỷ lục 10 bàn sau 6 vòng: 'Cỗ máy ghi bàn' không thể cản phá",
    summary: "Tiền đạo người Na Uy tiếp tục xô đổ những cột mốc vĩ đại nhất lịch sử giải đấu với hiệu suất làm bàn đạt hơn 1.6 bàn mỗi trận.",
    image: NEWS_IMAGES[1],
    publishedAt: "1 giờ trước",
    category: "Ngôi sao",
    author: "Hồng Duy",
    commentCount: 88,
    isHot: true
  },
  {
    id: "pl-3",
    leagueId: 39,
    title: "HLV Ten Hag lên tiếng về áp lực tại Old Trafford: 'Chúng tôi đang đi đúng hướng'",
    summary: "Thuyền trưởng Quỷ Đỏ khẳng định phòng thay đồ Man Utd vẫn đoàn kết và tin tưởng toàn đội sẽ sớm bứt phá vào nhóm dự Champions League.",
    image: NEWS_IMAGES[2],
    publishedAt: "2 giờ trước",
    category: "Phỏng vấn",
    author: "Vy Anh",
    commentCount: 215
  },
  {
    id: "pl-4",
    leagueId: 39,
    title: "Liverpool tìm lại bản lĩnh ứng viên vô địch dưới thời tân HLV Arne Slot",
    summary: "Lối đá pressing hiện đại kết hợp kiểm soát bóng linh hoạt đang giúp The Kop duy trì chuỗi trận thăng hoa tại Premier League mùa này.",
    image: NEWS_IMAGES[3],
    publishedAt: "3 giờ trước",
    category: "Nhận định",
    author: "Quang Dũng",
    commentCount: 64
  },
  {
    id: "pl-5",
    leagueId: 39,
    title: "Cole Palmer tỏa sáng rực rỡ: Chelsea định hình bộ khung thế hệ mới",
    summary: "Cú poker lịch sử trong hiệp một của ngôi sao trẻ người Anh chứng minh anh là linh hồn không thể thay thế trong sơ đồ tấn công của The Blues.",
    image: NEWS_IMAGES[4],
    publishedAt: "4 giờ trước",
    category: "Góc chiến thuật",
    author: "Hoàng An",
    commentCount: 79
  },
  {
    id: "pl-6",
    leagueId: 39,
    title: "Aston Villa gây bất ngờ lớn: Khát vọng chen chân vào cuộc đua tam mã",
    summary: "Dưới bàn tay lão luyện của Unai Emery, đội bóng thành Birmingham thể hiện sự lì lợm và bản lĩnh ở những phút thi đấu bù giờ quyết định.",
    image: NEWS_IMAGES[5],
    publishedAt: "5 giờ trước",
    category: "Bình luận",
    author: "Anh Quân",
    commentCount: 31
  },
  {
    id: "pl-7",
    leagueId: 39,
    title: "Chấn thương của Rodri và bài toán kiểm soát tuyến giữa của Man City",
    summary: "Mất đi mỏ neo quan trọng nhất, các chuyên gia phân tích cách Man City sẽ xoay xở chiến thuật trước lịch thi đấu dày đặc 3 ngày một trận.",
    image: NEWS_IMAGES[6],
    publishedAt: "6 giờ trước",
    category: "Phân tích",
    author: "Xuân Bình",
    commentCount: 53
  },
  {
    id: "pl-8",
    leagueId: 39,
    title: "Tottenham của Postecoglou: Canh bạc tấn công tận hiến và cái giá phải trả",
    summary: "Lối chơi đẩy cao đội hình mang lại những trận cầu mãn nhãn nhưng cũng để lộ nhiều khoảng trống nguy hiểm nơi hàng phòng ngự Spurs.",
    image: NEWS_IMAGES[7],
    publishedAt: "8 giờ trước",
    category: "Nhận định",
    author: "Thanh Quý",
    commentCount: 42
  },
  {
    id: "pl-9",
    leagueId: 39,
    title: "Tranh cãi trọng tài và công nghệ VAR sau các quyết định phạt đền vòng 6",
    summary: "Ban điều hành trọng tài Premier League (PGMOL) tổ chức cuộc họp khẩn nhằm rà soát lại các pha thổi phạt penalty gây tranh cãi gay gắt.",
    image: NEWS_IMAGES[0],
    publishedAt: "10 giờ trước",
    category: "Hậu trường",
    author: "VnExpress",
    commentCount: 169
  },
  {
    id: "pl-10",
    leagueId: 39,
    title: "Brighton và triết lý đào tạo cầu thủ trẻ sinh lời hàng trăm triệu bảng",
    summary: "Mô hình tuyển trạch dựa trên dữ liệu thông minh tiếp tục biến đội bóng miền Nam nước Anh thành hình mẫu phát triển bền vững hàng đầu thế giới.",
    image: NEWS_IMAGES[1],
    publishedAt: "12 giờ trước",
    category: "Kinh doanh",
    author: "Minh Phương",
    commentCount: 27
  },
  // Page 2 (Older news: items 11 - 20)
  {
    id: "pl-11",
    leagueId: 39,
    title: "Newcastle nhọc nhằn chia điểm: Nỗi lo quá tải lực lượng trước thềm Cúp Quốc Gia",
    summary: "Chích Chòe đối mặt với cuộc khủng hoảng thể lực khi hàng loạt trụ cột vắng mặt trong giai đoạn thi đấu liên tục cả ở giải quốc nội lẫn cúp châu Âu.",
    image: NEWS_IMAGES[2],
    publishedAt: "Hôm qua 18:30",
    category: "Tin nhanh",
    author: "Đỗ Tuấn",
    commentCount: 19
  },
  {
    id: "pl-12",
    leagueId: 39,
    title: "Bukayo Saka cán mốc 50 đường kiến tạo tại Ngoại Hạng Anh ở tuổi 24",
    summary: "Ngôi sao trưởng thành từ học viện Hale End tiếp tục khẳng định vị thế một trong những cầu thủ chạy cánh phải hàng đầu thế giới hiện nay.",
    image: NEWS_IMAGES[3],
    publishedAt: "Hôm qua 15:45",
    category: "Ngôi sao",
    author: "Hồng Duy",
    commentCount: 47
  },
  {
    id: "pl-13",
    leagueId: 39,
    title: "Cục diện nhóm trụ hạng: Everton và Wolves chật vật tìm kiếm chiến thắng đầu tay",
    summary: "Áp lực ngàn cân đang đè nặng lên ghế nóng của các HLV khi giải đấu dần trôi qua 1/6 chặng đường và cuộc đua trụ hạng bắt đầu nóng lên.",
    image: NEWS_IMAGES[4],
    publishedAt: "Hôm qua 11:20",
    category: "Toàn cảnh",
    author: "Quang Dũng",
    commentCount: 38
  },
  {
    id: "pl-14",
    leagueId: 39,
    title: "Siêu máy tính Opta dự đoán tỷ lệ vô địch: Man City 51%, Arsenal 38%",
    summary: "Thuật toán mô phỏng 10.000 kịch bản mùa giải chỉ ra khoảng cách điểm số sít sao nhất lịch sử Ngoại Hạng Anh trong 5 mùa bóng gần đây.",
    image: NEWS_IMAGES[5],
    publishedAt: "28/09/2026",
    category: "Thống kê",
    author: "Hoàng An",
    commentCount: 112
  },
  {
    id: "pl-15",
    leagueId: 39,
    title: "Chuyển nhượng Ngoại Hạng Anh: Các ông lớn rục rịch kế hoạch cho phiên chợ Đông",
    summary: "Những mục tiêu phòng ngự và tiền vệ trụ đang được Chelsea, Liverpool và MU săn đón ráo riết chuẩn bị cho giai đoạn lượt về khốc liệt.",
    image: NEWS_IMAGES[6],
    publishedAt: "28/09/2026",
    category: "Chuyển nhượng",
    author: "Vy Anh",
    commentCount: 83
  },
  {
    id: "pl-16",
    leagueId: 39,
    title: "Mikel Arteta: 'Arsenal của hôm nay đã đủ bản lĩnh để bước lên đỉnh cao'",
    summary: "HLV người Tây Ban Nha tự tin về chiều sâu đội hình và tinh thần quật khởi của các học trò sau hai mùa bóng về nhì cay đắng.",
    image: NEWS_IMAGES[7],
    publishedAt: "27/09/2026",
    category: "Phỏng vấn",
    author: "Anh Quân",
    commentCount: 95
  },
  {
    id: "pl-17",
    leagueId: 39,
    title: "Son Heung-min và vai trò thủ lĩnh tinh thần tại Bắc London",
    summary: "Dù không còn duy trì tốc độ đỉnh cao, đội trưởng người Hàn Quốc vẫn là điểm tựa vững chãi nhất cho dàn sao trẻ của Tottenham Hotspur.",
    image: NEWS_IMAGES[0],
    publishedAt: "27/09/2026",
    category: "Chân dung",
    author: "Xuân Bình",
    commentCount: 36
  },
  {
    id: "pl-18",
    leagueId: 39,
    title: "Sức hút thương mại kỷ lục: Doanh thu bản quyền truyền hình Premier League vượt 7 tỷ bảng",
    summary: "Sức nóng toàn cầu từ những trận cầu đinh cuối tuần giúp giải bóng đá số một xứ sương mù tiếp tục nới rộng khoảng cách tài chính với phần còn lại của bóng đá châu Âu.",
    image: NEWS_IMAGES[1],
    publishedAt: "26/09/2026",
    category: "Kinh doanh",
    author: "Minh Phương",
    commentCount: 22
  },
  {
    id: "pl-19",
    leagueId: 39,
    title: "Phân tích: Cách các đội bóng nhỏ 'bắt bài' lối chơi chuyền bóng ngắn từ phần sân nhà",
    summary: "Bẫy việt vị và khối pressing tầm cao đồng bộ đang tạo ra khó khăn thật sự cho các đại gia yêu thích phong cách triển khai bóng từ thủ môn.",
    image: NEWS_IMAGES[2],
    publishedAt: "26/09/2026",
    category: "Chiến thuật",
    author: "Thanh Quý",
    commentCount: 18
  },
  {
    id: "pl-20",
    leagueId: 39,
    title: "Top 5 pha cứu thua xuất sắc nhất tháng 9 tại Ngoại Hạng Anh",
    summary: "Những phản xạ xuất thần của Alisson, Raya và Vicario làm nức lòng người hâm mộ túc cầu trên toàn thế giới.",
    image: NEWS_IMAGES[3],
    publishedAt: "25/09/2026",
    category: "Video",
    author: "VnExpress",
    commentCount: 45
  },
  // Page 3 (Older news: items 21 - 30)
  {
    id: "pl-21",
    leagueId: 39,
    title: "West Ham United sa thải trợ lý chiến thuật sau chuỗi 4 trận không biết thắng",
    summary: "Quyết định tái cấu trúc ban huấn luyện được đưa ra gấp rút nhằm xốc lại tinh thần thi đấu của toàn đội.",
    image: NEWS_IMAGES[4],
    publishedAt: "24/09/2026",
    category: "Tin nhanh",
    author: "Đỗ Tuấn",
    commentCount: 15
  },
  {
    id: "pl-22",
    leagueId: 39,
    title: "Kobe Mainoo và hành trình vươn tầm tiền vệ trung tâm thế hệ mới của bóng đá Anh",
    summary: "Sự điềm tĩnh và kỹ năng thoát pressing siêu hạng giúp tài năng trẻ Man United trở thành trụ cột của cả CLB lẫn tuyển quốc gia Tam Sư.",
    image: NEWS_IMAGES[5],
    publishedAt: "23/09/2026",
    category: "Chân dung",
    author: "Hồng Duy",
    commentCount: 71
  },
  {
    id: "pl-23",
    leagueId: 39,
    title: "Lịch thi đấu khắc nghiệt tháng 10: Thử thách cực đại cho các đội bóng tham dự cúp châu Âu",
    summary: "Với mật độ 7 trận trong 21 ngày, chiều sâu đội hình và khả năng xoay tua cầu thủ sẽ quyết định cục diện cả mùa giải.",
    image: NEWS_IMAGES[6],
    publishedAt: "22/09/2026",
    category: "Toàn cảnh",
    author: "Quang Dũng",
    commentCount: 29
  },
  {
    id: "pl-24",
    leagueId: 39,
    title: "Ngoại Hạng Anh thử nghiệm luật bóng lăn và rút ngắn thời gian bóng chết",
    summary: "Ủy ban bóng đá quốc tế IFAB phối hợp cùng ban tổ chức giải đấu nhằm tăng tính giải trí và nhịp độ thi đấu thực tế trên sân cỏ.",
    image: NEWS_IMAGES[7],
    publishedAt: "21/09/2026",
    category: "Quy định",
    author: "Hoàng An",
    commentCount: 52
  },
  {
    id: "pl-25",
    leagueId: 39,
    title: "Nhìn lại 10 bàn thắng đẹp nhất vòng đấu khai màn Ngoại Hạng Anh mùa giải 2026/27",
    summary: "Những siêu phẩm sút xa mu lai má và pha ngả người móc bóng ngoạn mục mở màn cho một mùa bóng nghẹt thở.",
    image: NEWS_IMAGES[0],
    publishedAt: "20/09/2026",
    category: "Bình luận",
    author: "VnExpress",
    commentCount: 63
  }
];

const VLEAGUE_NEWS: ArticleItem[] = [
  {
    id: "vl-1",
    leagueId: 382,
    title: "Công An Hà Nội đánh bại Nam Định: Khẳng định sức mạnh ứng viên số 1 ngôi vương V-League",
    summary: "Sự cơ động của dàn tuyển thủ quốc gia Quang Hải, Văn Thanh cùng bản năng sát thủ của ngoại binh giúp CAHN thắng thuyết phục trên sân Hàng Đẫy.",
    image: NEWS_IMAGES[2],
    publishedAt: "40 phút trước",
    category: "Tiêu điểm",
    author: "Lâm Thỏa",
    commentCount: 89,
    isHot: true
  },
  {
    id: "vl-2",
    leagueId: 382,
    title: "Nguyễn Xuân Son (Rafaelson) tiếp tục bùng nổ: Niềm hy vọng số một của Thép Xanh Nam Định",
    summary: "Sau khi hoàn tất thủ tục nhập tịch, chân sút nhập tịch thi đấu đầy thăng hoa và cống hiến những bàn thắng đẳng cấp cho người hâm mộ thành Nam.",
    image: NEWS_IMAGES[3],
    publishedAt: "2 giờ trước",
    category: "Ngôi sao",
    author: "Đức Đồng",
    commentCount: 114,
    isHot: true
  },
  {
    id: "vl-3",
    leagueId: 382,
    title: "Hà Nội FC quyết tâm trở lại đường đua vô địch sau chuỗi trận khởi đầu chậm chạp",
    summary: "Đội bóng áo tím dần bắt nhịp với sơ đồ chiến thuật mới, sẵn sàng cho chặng tăng tốc quyết liệt trước khi giải đấu tạm nghỉ nhường chỗ cho ĐTQG.",
    image: NEWS_IMAGES[4],
    publishedAt: "4 giờ trước",
    category: "Phỏng vấn",
    author: "Hoàng Triều",
    commentCount: 52
  },
  {
    id: "vl-4",
    leagueId: 382,
    title: "Công nghệ VAR tại V-League: Nâng cao chất lượng chuyên môn và hạn chế tối đa tranh cãi",
    summary: "Việc phủ sóng xe VAR ở tất cả các trận đấu then chốt giúp các trọng tài đưa ra những quyết định công tâm và chính xác hơn.",
    image: NEWS_IMAGES[5],
    publishedAt: "6 giờ trước",
    category: "Hậu trường",
    author: "VnExpress",
    commentCount: 78
  },
  {
    id: "vl-5",
    leagueId: 382,
    title: "Thể Công Viettel và cuộc cách mạng trẻ hóa lực lượng ấn tượng",
    summary: "Khuất Văn Khang cùng lứa cầu thủ trẻ được trao cơ hội đá chính và để lại dấu ấn đậm nét bằng lối đá cống hiến, giàu thể lực.",
    image: NEWS_IMAGES[6],
    publishedAt: "8 giờ trước",
    category: "Góc chiến thuật",
    author: "Hiếu Lương",
    commentCount: 34
  },
  {
    id: "vl-6",
    leagueId: 382,
    title: "Hải Phòng biến Lạch Tray thành 'chảo lửa' không thể công phá",
    summary: "Sự cổ vũ cuồng nhiệt của hàng vạn cổ động viên đất Cảng tiếp thêm sức mạnh tinh thần to lớn cho thầy trò HLV Chu Đình Nghiêm.",
    image: NEWS_IMAGES[7],
    publishedAt: "10 giờ trước",
    category: "Toàn cảnh",
    author: "Lâm Thỏa",
    commentCount: 41
  },
  {
    id: "vl-7",
    leagueId: 382,
    title: "Hoàng Anh Gia Lai kiên trì với triết lý kỷ luật và phòng ngự chặt chẽ",
    summary: "Đội bóng phố Núi mùa giải này thi đấu thực dụng hơn, chắt chiu từng điểm số quý giá để duy trì vị trí an toàn ở nửa trên bảng xếp hạng.",
    image: NEWS_IMAGES[0],
    publishedAt: "12 giờ trước",
    category: "Nhận định",
    author: "Đức Đồng",
    commentCount: 65
  },
  {
    id: "vl-8",
    leagueId: 382,
    title: "Sông Lam Nghệ An vượt khó: Tinh thần xứ Nghệ rực lửa trong gian khó",
    summary: "Dù ngân sách hạn hẹp, truyền thống đào tạo trẻ bền vững tiếp tục cung cấp những viên ngọc thô tài năng cho bóng đá Việt Nam.",
    image: NEWS_IMAGES[1],
    publishedAt: "Hôm qua 16:20",
    category: "Chân dung",
    author: "Hoàng Triều",
    commentCount: 30
  },
  {
    id: "vl-9",
    leagueId: 382,
    title: "Bình Dương đón tân HLV ngoại với tham vọng tái thiết thời hoàng kim",
    summary: "Khoản đầu tư khủng vào cơ sở vật chất và nâng cấp dàn ngoại binh cho thấy khát khao trở lại đỉnh cao của đội bóng đất Thủ.",
    image: NEWS_IMAGES[2],
    publishedAt: "Hôm qua 14:10",
    category: "Tin nhanh",
    author: "Hiếu Lương",
    commentCount: 23
  },
  {
    id: "vl-10",
    leagueId: 382,
    title: "VFF và VPF đẩy mạnh công tác y tế, kiểm tra doping tại giải VĐQG",
    summary: "Quy chuẩn y tế chuyên nghiệp được áp dụng nghiêm ngặt theo tiêu chuẩn của Liên đoàn Bóng đá Châu Á (AFC).",
    image: NEWS_IMAGES[3],
    publishedAt: "Hôm qua 09:30",
    category: "Hậu trường",
    author: "VnExpress",
    commentCount: 16
  },
  // Page 2 (Items 11-20)
  {
    id: "vl-11",
    leagueId: 382,
    title: "Cuộc đua vua phá lưới V-League: Cuộc cạnh tranh khốc liệt giữa các chân sút ngoại",
    summary: "Những màn trình diễn chói sáng của Rimario, Rafaelson và Hendrio khiến bảng thành tích bàn thắng liên tục biến động.",
    image: NEWS_IMAGES[4],
    publishedAt: "28/09/2026",
    category: "Thống kê",
    author: "Lâm Thỏa",
    commentCount: 39
  },
  {
    id: "vl-12",
    leagueId: 382,
    title: "Đông Á Thanh Hóa: Ngựa ô ngổ ngáo sẵn sàng gieo sầu cho các ông lớn",
    summary: "Lối đá pressing không ngừng nghỉ dưới thời HLV Popov luôn là nỗi ác mộng đối với bất kỳ đối thủ nào hành quân đến xứ Thanh.",
    image: NEWS_IMAGES[5],
    publishedAt: "27/09/2026",
    category: "Bình luận",
    author: "Đức Đồng",
    commentCount: 44
  },
  {
    id: "vl-13",
    leagueId: 382,
    title: "HLV Kim Sang-sik dự khán các trận cầu đinh V-League để tuyển chọn nhân sự tuyển Việt Nam",
    summary: "Thuyền trưởng ĐTQG chăm chú ghi chép phong độ của các nhân tố mới nổi nhằm chuẩn bị cho chiến dịch AFF Cup cuối năm.",
    image: NEWS_IMAGES[6],
    publishedAt: "27/09/2026",
    category: "ĐTQG",
    author: "Hiếu Lương",
    commentCount: 92
  },
  {
    id: "vl-14",
    leagueId: 382,
    title: "SHB Đà Nẵng nỗ lực thoát khỏi đáy bảng sau màn trở lại giải đấu cao nhất",
    summary: "Kinh nghiệm thi đấu đỉnh cao và bản lĩnh ở những trận cầu 6 điểm sẽ là yếu tố sống còn cho đội bóng sông Hàn.",
    image: NEWS_IMAGES[7],
    publishedAt: "26/09/2026",
    category: "Toàn cảnh",
    author: "Hoàng Triều",
    commentCount: 19
  },
  {
    id: "vl-15",
    leagueId: 382,
    title: "Quảng Nam tạo địa chấn với chiến thắng quả cảm trước đội bóng thủ đô",
    summary: "Chiến thuật phòng ngự phản công mẫu mực mang về 3 điểm quý hơn vàng cho đại diện miền Trung.",
    image: NEWS_IMAGES[0],
    publishedAt: "25/09/2026",
    category: "Tin nhanh",
    author: "Lâm Thỏa",
    commentCount: 28
  },
  {
    id: "vl-16",
    leagueId: 382,
    title: "Khán giả đến sân tăng vọt: Tín hiệu tích cực cho ngày hội bóng đá nước nhà",
    summary: "Hiệu ứng truyền thông và chất lượng sân bãi cải thiện giúp các khán đài V-League luôn ngập tràn sắc màu và tiếng reo hò rộn rã.",
    image: NEWS_IMAGES[1],
    publishedAt: "24/09/2026",
    category: "Phóng sự",
    author: "VnExpress",
    commentCount: 51
  },
  {
    id: "vl-17",
    leagueId: 382,
    title: "Quy Nhơn Bình Định và bài toán giữ chân các trụ cột trước lời mời gọi triệu đô",
    summary: "Đội bóng đất Võ nỗ lực cân đối tài chính để duy trì đội hình giàu tính cạnh tranh ở mùa giải mới.",
    image: NEWS_IMAGES[2],
    publishedAt: "23/09/2026",
    category: "Kinh doanh",
    author: "Đức Đồng",
    commentCount: 14
  },
  {
    id: "vl-18",
    leagueId: 382,
    title: "Thủ môn Nguyễn Filip: Điểm tựa thép trong khung gỗ CAHN",
    summary: "Những pha cứu thua không tưởng của người gác đền Việt kiều mang lại sự an tâm tuyệt đối cho hàng thủ đội bóng ngành công an.",
    image: NEWS_IMAGES[3],
    publishedAt: "22/09/2026",
    category: "Chân dung",
    author: "Hiếu Lương",
    commentCount: 67
  },
  {
    id: "vl-19",
    leagueId: 382,
    title: "Hồng Lĩnh Hà Tĩnh giữ kỷ lục chuỗi trận hòa dài nhất lịch sử giải đấu",
    summary: "Hàng phòng ngự chặt chẽ giúp thầy trò Nguyễn Thành Công trở thành đội bóng khó bị đánh bại nhất giải đấu.",
    image: NEWS_IMAGES[4],
    publishedAt: "21/09/2026",
    category: "Thống kê",
    author: "Lâm Thỏa",
    commentCount: 22
  },
  {
    id: "vl-20",
    leagueId: 382,
    title: "Top 5 bàn thắng đẹp nhất tháng mở màn V-League 2026/27",
    summary: "Những cú sút cầu vồng đẹp mắt và pha dàn xếp phối hợp bóng ngắn đẳng cấp khiến người hâm mộ không khỏi trầm trồ.",
    image: NEWS_IMAGES[5],
    publishedAt: "20/09/2026",
    category: "Video",
    author: "VnExpress",
    commentCount: 35
  }
];

// Fallback generator for other leagues (La Liga, Champions League, Serie A, Bundesliga, etc.)
function generateLeagueNews(leagueId: number, leagueName: string): ArticleItem[] {
  const categories = ["Tiêu điểm", "Nhận định", "Ngôi sao", "Chuyển nhượng", "Chiến thuật", "Hậu trường", "Phỏng vấn", "Toàn cảnh"];
  const authors = ["Quang Dũng", "Hồng Duy", "Vy Anh", "Hoàng An", "Đỗ Tuấn", "Anh Quân", "VnExpress"];
  
  const newsList: ArticleItem[] = [];

  const headlines = [
    `${leagueName}: Đại chiến kinh điển định đoạt trật tự bảng xếp hạng`,
    `Tâm điểm ${leagueName}: Phong độ thăng hoa của dàn sao trẻ hàng đầu`,
    `HLV trưởng lên tiếng sau chiến thắng kịch tính ở những giây bù giờ cuối cùng`,
    `Bản tin chuyển nhượng ${leagueName}: Những bản hợp đồng bom tấn mùa Đông`,
    `Phân tích chiến thuật: Bí quyết giúp đội bóng duy trì chuỗi bất bại thần kỳ`,
    `Cuộc đua Chiếc Giày Vàng ${leagueName} nóng bỏng sau từng vòng đấu`,
    `Người hâm mộ vỡ òa với siêu phẩm sút xa từ cự ly 35 mét`,
    `Siêu máy tính dự đoán cơ hội vô địch và vé dự cúp châu Âu mùa này`,
    `Công nghệ VAR và những tình huống gây tranh cãi nảy lửa ở vòng đấu vừa qua`,
    `Chấn thương của các trụ cột và bài toán chiều sâu lực lượng trước lịch đấu dày đặc`,
    `Nhìn lại 10 khoảnh khắc ấn tượng nhất giải đấu trong tuần qua`,
    `Đội bóng hiện tượng: Từ kẻ ngáng đường đến ứng viên sáng giá`,
    `Tương lai của ngôi sao số một tại giải đấu: Gia hạn hay ra đi tìm thử thách mới?`,
    `Những bất ngờ thú vị tại nhóm cuối bảng: Cuộc chiến trụ hạng không khoan nhượng`,
    `Cơn sốt bản quyền và lượng khán giả theo dõi trực tiếp kỷ lục`,
    `Tân binh gây ấn tượng mạnh với cú hat-trick ngay trận ra mắt`,
    `Chuyên gia nhận định trước vòng đấu tiếp theo: Điểm tựa sân nhà có làm nên chuyện?`,
    `Thủ môn xuất sắc nhất giải đấu với chuỗi 5 trận giữ sạch lưới liên tiếp`,
    `Bí mật phía sau phòng thay đồ của đội bóng đang dẫn đầu bảng`,
    `Nhịp đập ${leagueName}: Tổng hợp kết quả và video bàn thắng đẹp nhất tuần`,
    `Lịch thi đấu nảy lửa cuối tuần này: Đừng bỏ lỡ các trận cầu tâm điểm`,
    `Thống kê thú vị: Tỷ lệ ghi bàn trong hiệp hai cao kỷ lục`,
    `Khám phá chế độ dinh dưỡng và tập luyện chuẩn quốc tế của các cầu thủ`,
    `Các huyền thoại nhận định về cuộc đua vô địch năm nay`,
    `Top 5 tài năng trẻ đáng xem nhất giải đấu trong tương lai gần`
  ];

  headlines.forEach((title, idx) => {
    newsList.push({
      id: `${leagueId}-news-${idx + 1}`,
      leagueId,
      title,
      summary: `Toàn cảnh diễn biến sôi động tại ${leagueName} với những góc nhìn phân tích chuyên sâu từ các phóng viên, chuyên gia thể thao VnExpress.`,
      image: NEWS_IMAGES[idx % NEWS_IMAGES.length],
      publishedAt: idx === 0 ? "30 phút trước" : idx < 3 ? `${idx + 1} giờ trước` : idx < 10 ? `${idx + 2} giờ trước` : `${Math.floor(idx / 3)} ngày trước`,
      category: categories[idx % categories.length],
      author: authors[idx % authors.length],
      commentCount: 20 + ((idx * 17) % 150),
      isHot: idx < 2
    });
  });

  return newsList;
}

export function getNewsByLeague(leagueId: number, leagueName: string = "Giải đấu"): ArticleItem[] {
  if (leagueId === 39) {
    return PREMIER_LEAGUE_NEWS;
  }
  if (leagueId === 382) {
    return VLEAGUE_NEWS;
  }
  return generateLeagueNews(leagueId, leagueName);
}
