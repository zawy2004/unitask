export interface Job {
  id: number;
  logoText: string;
  logoGradient: string;
  title: string;
  company: string;
  verified: boolean;
  location: string;
  tags: { label: string; variant: 'p' | 't' | 'a' | 'g' }[];
  spotsLeft: number;
  spotsTotal: number;
  pay: string;
  deadline: string;
  category: string;
  featured?: boolean;
}

export const jobsData: Job[] = [
  {
    id: 1,
    logoText: 'TN',
    logoGradient: 'linear-gradient(135deg,#5B4FFF,#7C72FF)',
    title: 'Frontend Developer (React + Tailwind)',
    company: 'TechNova VN',
    verified: true,
    location: 'Hồ Chí Minh',
    tags: [
      { label: '💻 IT', variant: 'p' },
      { label: 'Remote', variant: 't' },
      { label: '🔥 Hot', variant: 'g' },
    ],
    spotsLeft: 2,
    spotsTotal: 5,
    pay: '💰 2.500.000 – 4.000.000 ₫',
    deadline: '⏰ Còn 5 ngày',
    category: 'it',
    featured: true,
  },
  {
    id: 2,
    logoText: 'CR',
    logoGradient: 'linear-gradient(135deg,#FF6B35,#FF4D6B)',
    title: 'Thiết kế Bộ nhận diện thương hiệu',
    company: 'CreativeBox Studio',
    verified: true,
    location: 'Hà Nội',
    tags: [
      { label: '🎨 Thiết kế', variant: 'a' },
      { label: 'Remote', variant: 't' },
    ],
    spotsLeft: 1,
    spotsTotal: 3,
    pay: '💰 1.800.000 – 3.000.000 ₫',
    deadline: '⏰ Còn 8 ngày',
    category: 'design',
  },
  {
    id: 3,
    logoText: 'MH',
    logoGradient: 'linear-gradient(135deg,#00D4AA,#00A882)',
    title: 'Viết 10 bài SEO Blog (chuẩn EEAT)',
    company: 'MarketHub VN',
    verified: true,
    location: 'Remote',
    tags: [
      { label: '✍️ Content', variant: 't' },
      { label: 'Mới đăng', variant: 'g' },
    ],
    spotsLeft: 3,
    spotsTotal: 4,
    pay: '💰 1.200.000 – 2.000.000 ₫',
    deadline: '⏰ Còn 12 ngày',
    category: 'content',
  },
  {
    id: 4,
    logoText: 'GR',
    logoGradient: 'linear-gradient(135deg,#FFB340,#FF8C00)',
    title: 'Chạy quảng cáo Facebook Ads — F&B',
    company: 'GreenBowl Restaurant',
    verified: true,
    location: 'Đà Nẵng',
    tags: [
      { label: '📢 Marketing', variant: 'g' },
      { label: 'Onsite', variant: 'a' },
    ],
    spotsLeft: 2,
    spotsTotal: 2,
    pay: '💰 2.000.000 – 3.500.000 ₫',
    deadline: '⏰ Còn 3 ngày',
    category: 'marketing',
  },
  {
    id: 5,
    logoText: 'DS',
    logoGradient: 'linear-gradient(135deg,#7C72FF,#5B4FFF)',
    title: 'Fix Bug Python Flask API — E-commerce',
    company: 'DevStack JSC',
    verified: true,
    location: 'Remote',
    tags: [
      { label: '💻 IT', variant: 'p' },
      { label: 'Remote', variant: 't' },
      { label: '🔥 Gấp', variant: 'g' },
    ],
    spotsLeft: 1,
    spotsTotal: 1,
    pay: '💰 3.000.000 – 5.000.000 ₫',
    deadline: '⏰ Còn 2 ngày',
    category: 'it',
  },
  {
    id: 6,
    logoText: 'LM',
    logoGradient: 'linear-gradient(135deg,#FF4D6B,#FF6B35)',
    title: 'Dịch thuật Tài liệu Kỹ thuật EN→VI (5.000 từ)',
    company: 'LinguaMedia Corp',
    verified: true,
    location: 'Remote',
    tags: [
      { label: '🌐 Ngôn ngữ', variant: 'a' },
      { label: 'Remote', variant: 't' },
    ],
    spotsLeft: 4,
    spotsTotal: 5,
    pay: '💰 900.000 – 1.500.000 ₫',
    deadline: '⏰ Còn 15 ngày',
    category: 'content',
  },
];

export interface Category {
  icon: string;
  bg: string;
  name: string;
  count: string;
}

export const categoriesData: Category[] = [
  { icon: '💻', bg: 'rgba(91,79,255,.15)', name: 'IT / Lập trình', count: '284 job đang mở' },
  { icon: '🎨', bg: 'rgba(255,107,53,.12)', name: 'Thiết kế', count: '167 job đang mở' },
  { icon: '📢', bg: 'rgba(0,212,170,.1)', name: 'Marketing', count: '215 job đang mở' },
  { icon: '✍️', bg: 'rgba(255,179,64,.1)', name: 'Content / Viết lách', count: '143 job đang mở' },
  { icon: '📊', bg: 'rgba(91,79,255,.15)', name: 'Kinh doanh', count: '98 job đang mở' },
  { icon: '🌐', bg: 'rgba(0,212,170,.1)', name: 'Ngôn ngữ / Dịch thuật', count: '76 job đang mở' },
  { icon: '💰', bg: 'rgba(255,107,53,.12)', name: 'Kế toán / Tài chính', count: '54 job đang mở' },
  { icon: '🎬', bg: 'rgba(255,179,64,.1)', name: 'Video / Media', count: '89 job đang mở' },
];

export interface HowStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export const studentSteps: HowStep[] = [
  { num: '01', icon: '🎓', title: 'Đăng ký & Xác thực', desc: 'Tạo tài khoản với email .edu hoặc thẻ sinh viên. Hệ thống xác minh trong 24h.' },
  { num: '02', icon: '🤖', title: 'Smart Matching', desc: 'Hệ thống gợi ý job phù hợp với ngành học và kỹ năng bạn đã có sẵn.' },
  { num: '03', icon: '⚡', title: 'Làm việc & Nộp bài', desc: 'Nhận task, thực hiện, nộp sản phẩm qua hệ thống. Doanh nghiệp review trực tuyến.' },
  { num: '04', icon: '🏆', title: 'Nhận tiền + Hồ sơ số', desc: 'Tiền Escrow tự động chuyển ví. Project tự động cập nhật vào CV điện tử của bạn.' },
];

export const businessSteps: HowStep[] = [
  { num: '01', icon: '🏢', title: 'Đăng ký Doanh nghiệp', desc: 'Tạo tài khoản, xác thực thông tin DN. Quá trình nhanh chóng, hoàn thành trong ngày.' },
  { num: '02', icon: '💰', title: 'Nạp tiền Escrow', desc: 'Nạp ngân sách vào hệ thống. Tiền chỉ trả khi bạn duyệt sản phẩm hoàn chỉnh.' },
  { num: '03', icon: '📋', title: 'Đăng Job & Chọn ứng viên', desc: 'Mô tả task ngắn gọn. Hệ thống tự gợi ý sinh viên phù hợp, bạn chọn và phê duyệt.' },
  { num: '04', icon: '✅', title: 'Duyệt & Thanh toán', desc: 'Review sản phẩm, đánh giá kỹ năng sinh viên. Giải phóng tiền khi hài lòng.' },
];

export interface Testimonial {
  stars: number;
  text: string;
  avatarLetter: string;
  avatarGradient: string;
  name: string;
  role: string;
}

export const testimonialsData: Testimonial[] = [
  {
    stars: 5,
    text: '"Mình đã làm 8 project trên UniTask từ năm 3. Khi ra trường, CV của mình có 8 dự án thực tế rõ ràng. Nhà tuyển dụng rất ấn tượng, mình nhận offer ngay vòng 1!"',
    avatarLetter: 'N',
    avatarGradient: 'linear-gradient(135deg,#5B4FFF,#7C72FF)',
    name: 'Nguyễn Minh Khoa',
    role: 'SV năm 4 — CNTT, HCMUT · Frontend Dev',
  },
  {
    stars: 5,
    text: '"Trước đây mình sợ làm freelance vì hay bị bùng tiền. UniTask có Escrow nên mình hoàn toàn yên tâm. 5 tháng mình kiếm được gần 18 triệu từ việc dịch thuật."',
    avatarLetter: 'T',
    avatarGradient: 'linear-gradient(135deg,#FF6B35,#FF4D6B)',
    name: 'Trần Phương Linh',
    role: 'SV năm 3 — Ngôn ngữ Anh, ULIS · Dịch thuật',
  },
  {
    stars: 5,
    text: '"Tuyển dụng qua UniTask tiết kiệm 60% chi phí so với dùng headhunter. Sinh viên được xác thực và có kỹ năng rõ ràng, mình không phải lo ngại chất lượng."',
    avatarLetter: 'H',
    avatarGradient: 'linear-gradient(135deg,#00D4AA,#00A882)',
    name: 'Huỳnh Thanh Tùng',
    role: 'Co-founder — BrandSpace Startup · Khách hàng DN',
  },
];

export interface Feature {
  icon: string;
  iconBg: string;
  title: string;
  desc: string;
  large?: boolean;
  list?: string[];
}

export const featuresData: Feature[] = [
  {
    icon: '🛡️',
    iconBg: 'rgba(91,79,255,.15)',
    title: 'Hệ thống Escrow — Không bao giờ bị bùng tiền',
    desc: 'Doanh nghiệp nạp tiền vào hệ thống trước khi job bắt đầu. Tiền chỉ được giải phóng khi bạn hoàn thành và được duyệt. UniTask làm trung gian bảo vệ quyền lợi cả hai phía.',
    large: true,
    list: [
      'Tiền giữ an toàn trong tài khoản Escrow',
      'Tranh chấp có đội ngũ hỗ trợ giải quyết',
      'Lịch sử giao dịch minh bạch 100%',
      'Rút tiền về ví/bank trong 24h',
    ],
  },
  {
    icon: '🤖',
    iconBg: 'rgba(0,212,170,.1)',
    title: 'Smart Matching theo ngành học',
    desc: 'Sinh viên Ngôn ngữ Anh thấy job dịch thuật. Sinh viên IT thấy job code. Không lãng phí thời gian lọc thủ công.',
  },
  {
    icon: '📋',
    iconBg: 'rgba(255,107,53,.1)',
    title: 'Hồ sơ số tự động (Digital CV)',
    desc: 'Mỗi project hoàn thành tự động cập nhật vào CV điện tử. Xuất PDF đẹp, chia sẻ link cho nhà tuyển dụng.',
  },
  {
    icon: '⭐',
    iconBg: 'rgba(255,179,64,.1)',
    title: 'Đánh giá 2 chiều & Skill Endorsement',
    desc: 'Doanh nghiệp không chỉ chấm sao — họ xác nhận kỹ năng cụ thể của bạn. Hồ sơ ngày càng giá trị hơn.',
  },
];
