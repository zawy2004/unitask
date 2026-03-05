import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">U</span>UniTask
            </Link>
            <p>
              Nền tảng kết nối sinh viên Việt Nam với cơ hội thực tập ngắn hạn
              và freelance từ các startup & SME.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">tt</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Sinh viên</h4>
            <Link to="/jobs">Tìm việc</Link>
            <Link to="/profile">Tạo hồ sơ</Link>
            <Link to="/blog">Blog nghề nghiệp</Link>
            <Link to="/guide">Hướng dẫn</Link>
          </div>
          <div className="footer-col">
            <h4>Doanh nghiệp</h4>
            <Link to="/business">Đăng việc</Link>
            <Link to="/business">Tìm ứng viên</Link>
            <Link to="/business">Gói dịch vụ</Link>
            <Link to="/business">Case studies</Link>
          </div>
          <div className="footer-col">
            <h4>UniTask</h4>
            <Link to="/about">Về chúng tôi</Link>
            <Link to="/contact">Liên hệ</Link>
            <Link to="/terms">Điều khoản</Link>
            <Link to="/privacy">Bảo mật</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 UniTask. Made with 💜 for Vietnamese students.</p>
          <div className="footer-badges">
            <span className="badge">🔒 SSL Secured</span>
            <span className="badge">✅ DMCA Protected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
