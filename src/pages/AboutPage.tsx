import { Link } from 'react-router-dom';

const team = [
  { name: 'UniTask Team', role: 'Founder & CEO', letter: 'U', gradient: 'linear-gradient(135deg,#5B4FFF,#7C72FF)' },
  { name: 'Tech Team', role: 'CTO & Engineering', letter: 'T', gradient: 'linear-gradient(135deg,#00D4AA,#00A882)' },
  { name: 'Growth Team', role: 'Marketing & Growth', letter: 'G', gradient: 'linear-gradient(135deg,#FF6B35,#FF4D6B)' },
];

const milestones = [
  { year: '2024', event: 'Ra mắt UniTask phiên bản Beta' },
  { year: '2024', event: 'Đạt 1.000 sinh viên đăng ký' },
  { year: '2025', event: 'Hợp tác với 500+ doanh nghiệp' },
  { year: '2025', event: 'Ra mắt hệ thống Escrow' },
  { year: '2026', event: 'Đạt 12.000+ sinh viên, 850+ DN' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="biz-hero">
        <div className="container">
          <div className="biz-hero-content fade-up" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Về chúng tôi</div>
            <h1 className="section-title" style={{ fontSize: 'clamp(32px,5vw,52px)' }}>
              Kết nối sinh viên với <span style={{ color: 'var(--teal)' }}>cơ hội thực tế</span>
            </h1>
            <p className="section-sub" style={{ maxWidth: 560, margin: '0 auto' }}>
              UniTask được xây dựng bởi sinh viên, cho sinh viên. Sứ mệnh của chúng tôi là giúp mỗi sinh viên Việt Nam có cơ hội tích lũy kinh nghiệm và thu nhập ngay khi còn ngồi trên ghế nhà trường.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-card fade-up">
              <div className="biz-benefit-icon">🎯</div>
              <h3>Sứ mệnh</h3>
              <p>Tạo cầu nối giữa sinh viên và doanh nghiệp thông qua các micro-job chuyên môn, giúp sinh viên vừa học vừa tích lũy kinh nghiệm thực tế.</p>
            </div>
            <div className="about-card fade-up">
              <div className="biz-benefit-icon">👁️</div>
              <h3>Tầm nhìn</h3>
              <p>Trở thành nền tảng kết nối nhân tài sinh viên số 1 Đông Nam Á, nơi mỗi sinh viên đều có cơ hội phát triển nghề nghiệp ngay từ năm nhất.</p>
            </div>
            <div className="about-card fade-up">
              <div className="biz-benefit-icon">💜</div>
              <h3>Giá trị cốt lõi</h3>
              <p>Minh bạch — An toàn — Công bằng. Mọi giao dịch đều được bảo vệ bởi Escrow, mọi đánh giá đều 2 chiều.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '96px 0', background: 'var(--s1)' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Hành trình</div>
            <h2 className="section-title">Cột mốc quan trọng</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item fade-up">
                <div className="timeline-dot" />
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="section-header fade-up">
            <div className="section-eyebrow">Đội ngũ</div>
            <h2 className="section-title">Những người đứng sau UniTask</h2>
          </div>
          <div className="testi-grid">
            {team.map((t, i) => (
              <div key={i} className="testi-card fade-up" style={{ textAlign: 'center' }}>
                <div className="testi-avatar" style={{ background: t.gradient, width: 64, height: 64, fontSize: 24, margin: '0 auto 16px' }}>
                  {t.letter}
                </div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div className="cta-box fade-up">
            <h2>Tham gia cộng đồng UniTask</h2>
            <p>Hãy bắt đầu hành trình của bạn ngay hôm nay</p>
            <div className="cta-btns">
              <Link to="/register" className="btn btn-white">Đăng ký ngay</Link>
              <Link to="/contact" className="btn btn-outline-white">Liên hệ chúng tôi</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
