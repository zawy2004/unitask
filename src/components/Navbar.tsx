import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrolled, useActiveSection } from '../hooks/useScroll';

const NAV_SECTIONS = ['jobs', 'how', 'features', 'testimonials'];

export default function Navbar() {
  const scrolled = useScrolled(60);
  const activeSection = useActiveSection(NAV_SECTIONS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay${mobileOpen ? ' show' : ''}`}
        onClick={closeMobile}
      />

      {/* Mobile Nav */}
      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={closeMobile}>✕</button>
        <a href="#jobs" onClick={closeMobile}>🔍 Tìm việc</a>
        <a href="#how" onClick={closeMobile}>💡 Cách hoạt động</a>
        <a href="#features" onClick={closeMobile}>⭐ Tính năng</a>
        <a href="#testimonials" onClick={closeMobile}>💬 Đánh giá</a>
        <Link to="/login" style={{ marginTop: 16 }} onClick={closeMobile}>Đăng nhập</Link>
        <Link
          to="/register"
          onClick={closeMobile}
          style={{
            background: 'var(--p)',
            color: '#fff',
            borderRadius: 10,
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          Đăng ký miễn phí
        </Link>
      </nav>

      {/* Navbar */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            Uni<span>Task</span>
            <div className="dot" />
          </Link>
          <nav className="nav-links">
            <a href="#jobs" className={activeSection === 'jobs' ? 'active' : ''}>
              Tìm việc
            </a>
            <a href="#how" className={activeSection === 'how' ? 'active' : ''}>
              Cách hoạt động
            </a>
            <a href="#features" className={activeSection === 'features' ? 'active' : ''}>
              Tính năng
            </a>
            <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>
              Đánh giá
            </a>
            <Link to="/business">Doanh nghiệp</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/login" className="nav-login">Đăng nhập</Link>
            <Link to="/register" className="btn btn-primary btn-sm">Đăng ký miễn phí →</Link>
          </div>
          <div className="hamburger" onClick={openMobile}>
            <span /><span /><span />
          </div>
        </div>
      </header>
    </>
  );
}
