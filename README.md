<div align="center">

# UniTask 🎓

**Nền tảng Micro-Internship & Freelance hàng đầu cho Sinh viên Việt Nam**

Kết nối sinh viên với Startup & SME thông qua các micro-job chuyên môn —  
tích lũy kinh nghiệm thực tế, xây CV thật, kiếm tiền ngay khi còn đi học.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)

</div>

---

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Tính năng](#tính-năng)
- [Tech Stack](#tech-stack)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Bắt đầu nhanh](#bắt-đầu-nhanh)
- [Các trang](#các-trang)
- [Scripts](#scripts)

---

## Giới thiệu

UniTask là nền tảng kết nối **sinh viên Việt Nam** với các **Startup & doanh nghiệp vừa và nhỏ (SME)** thông qua hình thức micro-job linh hoạt. Sinh viên có thể tìm kiếm công việc phù hợp với chuyên ngành, hoàn thành task ngắn hạn và tích lũy kinh nghiệm thực tế từ năm nhất đại học — không cần kinh nghiệm trước đó.

> **Sứ mệnh:** Tạo cầu nối giữa sinh viên và doanh nghiệp, giúp mỗi sinh viên Việt Nam có cơ hội tích lũy kinh nghiệm và thu nhập ngay khi còn ngồi trên ghế nhà trường.

**Số liệu nổi bật (2026):**
- 🎓 12.000+ sinh viên đã đăng ký
- 🏢 850+ doanh nghiệp hợp tác
- ✅ Hệ thống Escrow bảo vệ thanh toán

---

## Tính năng

### Dành cho Sinh viên
- **Tìm kiếm việc làm** theo danh mục: IT, Thiết kế, Content, Marketing, Video, Dịch thuật...
- **Lọc nhanh** theo kỹ năng, mức lương, địa điểm (Remote / Onsite)
- **Hồ sơ cá nhân** với portfolio và lịch sử công việc
- **Hệ thống đánh giá 2 chiều** minh bạch
- **Tích lũy điểm uy tín** qua từng task hoàn thành

### Dành cho Doanh nghiệp
- **Đăng tin tuyển dụng** micro-job nhanh chóng
- **Tiếp cận 12.000+ sinh viên** có chuyên môn
- **Thanh toán qua Escrow** an toàn, giải ngân sau khi nghiệm thu
- **Quản lý ứng viên** trực tiếp trên nền tảng

### Nền tảng
- Giao diện dark mode hiện đại, tối ưu mobile
- Hiệu ứng fade-up scroll animation mượt mà
- SEO-friendly với cấu trúc trang đầy đủ
- Hệ thống blog & hướng dẫn cho người dùng

---

## Tech Stack

| Hạng mục | Công nghệ |
|---|---|
| Framework | React 19 |
| Ngôn ngữ | TypeScript 5.9 |
| Build tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | CSS thuần (CSS Variables, Flexbox, Grid) |
| Font | Be Vietnam Pro, Syne |

---

## Cấu trúc dự án

```
unitask/
└── unitask-web/          # Ứng dụng web frontend
    ├── public/
    └── src/
        ├── App.tsx           # Root component & route config
        ├── components/       # UI components tái sử dụng
        │   ├── Navbar.tsx
        │   ├── Hero.tsx
        │   ├── JobsSection.tsx
        │   ├── Categories.tsx
        │   ├── SearchSection.tsx
        │   ├── HowItWorks.tsx
        │   ├── Features.tsx
        │   ├── Pricing.tsx
        │   ├── Testimonials.tsx
        │   ├── BlogSection.tsx
        │   ├── FAQ.tsx
        │   ├── Newsletter.tsx
        │   ├── CTABanner.tsx
        │   ├── Footer.tsx
        │   └── ...
        ├── pages/            # Các trang (route)
        │   ├── LoginPage.tsx
        │   ├── RegisterPage.tsx
        │   ├── AllJobsPage.tsx
        │   ├── JobDetailPage.tsx
        │   ├── BusinessPage.tsx
        │   ├── BlogListPage.tsx
        │   ├── AboutPage.tsx
        │   ├── ContactPage.tsx
        │   ├── ProfilePage.tsx
        │   ├── GuidePage.tsx
        │   ├── TermsPage.tsx
        │   └── PrivacyPage.tsx
        ├── data/
        │   └── siteData.ts   # Dữ liệu tĩnh (jobs, features, blog...)
        └── hooks/
            └── useScroll.ts  # Custom hooks (counter, fade-up observer)
```

---

## Bắt đầu nhanh

### Yêu cầu
- Node.js >= 18
- npm hoặc yarn

### Cài đặt & chạy

```bash
# Clone dự án
git clone <repo-url>
cd unitask/unitask-web

# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

---

## Các trang

| Đường dẫn | Trang |
|---|---|
| `/` | Trang chủ |
| `/jobs` | Danh sách tất cả việc làm |
| `/jobs/:id` | Chi tiết công việc |
| `/business` | Giải pháp cho doanh nghiệp |
| `/blog` | Danh sách bài viết |
| `/about` | Về chúng tôi |
| `/contact` | Liên hệ |
| `/profile` | Trang cá nhân |
| `/guide` | Hướng dẫn sử dụng |
| `/login` | Đăng nhập |
| `/register` | Đăng ký |
| `/terms` | Điều khoản dịch vụ |
| `/privacy` | Chính sách bảo mật |

---

## Scripts

```bash
npm run dev       # Khởi động development server (Vite)
npm run build     # Build production (tsc + vite build)
npm run preview   # Preview bản build production
npm run lint      # Kiểm tra lỗi ESLint
```

---

<div align="center">

Made with 💜 by **UniTask Team** — Vì một thế hệ sinh viên Việt Nam vừa học vừa làm

</div>
