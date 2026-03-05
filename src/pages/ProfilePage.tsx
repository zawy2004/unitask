import { Link } from 'react-router-dom';

const skills = [
  { name: 'React', level: 'Nâng cao' },
  { name: 'Figma', level: 'Trung bình' },
  { name: 'SEO Content', level: 'Cơ bản' },
];

const completedJobs = [
  { title: 'UI/UX Design cho App Mobile', company: 'TechNova VN', date: '02/2026', rating: 5 },
  { title: 'Landing Page React', company: 'CreativeBox Studio', date: '01/2026', rating: 5 },
  { title: 'Viết 5 bài blog SEO', company: 'MarketHub VN', date: '12/2025', rating: 4 },
];

export default function ProfilePage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="profile-layout">
          {/* Sidebar */}
          <div className="profile-sidebar fade-up">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar" style={{ background: 'linear-gradient(135deg,#5B4FFF,#7C72FF)' }}>
                NK
              </div>
              <div className="profile-status">🟢 Đang sẵn sàng</div>
            </div>
            <h2 className="profile-name">Nguyễn Minh Khoa</h2>
            <p className="profile-role">Frontend Developer</p>
            <p className="profile-school">🎓 CNTT — ĐH Bách khoa TP.HCM · Năm 4</p>

            <div className="profile-stats-row">
              <div><strong>8</strong><span>Project</span></div>
              <div><strong>4.9 ★</strong><span>Đánh giá</span></div>
              <div><strong>100%</strong><span>Hoàn thành</span></div>
            </div>

            <div className="profile-actions">
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>✏️ Chỉnh sửa</button>
              <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>📥 Xuất CV PDF</button>
            </div>
          </div>

          {/* Main */}
          <div className="profile-main">
            <div className="profile-card fade-up">
              <h3>📋 Giới thiệu</h3>
              <p>Sinh viên năm 4 ngành Khoa học Máy tính, đam mê frontend development. Đã hoàn thành 8 project trên UniTask với đánh giá trung bình 4.9/5. Thành thạo React, TypeScript, và Figma.</p>
            </div>

            <div className="profile-card fade-up">
              <h3>🛠️ Kỹ năng</h3>
              <div className="skill-tags">
                {skills.map((s, i) => (
                  <div key={i} className="skill-tag">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-card fade-up">
              <h3>💼 Project đã hoàn thành</h3>
              <div className="project-list">
                {completedJobs.map((j, i) => (
                  <div key={i} className="project-item">
                    <div>
                      <strong>{j.title}</strong>
                      <p>{j.company} · {j.date}</p>
                    </div>
                    <div className="project-rating">{'★'.repeat(j.rating)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-card fade-up">
              <h3>⭐ Skill Endorsement</h3>
              <div className="endorsement-list">
                <div className="endorsement-item">
                  <span className="endorsement-skill">React</span>
                  <span className="endorsement-by">Xác nhận bởi TechNova VN, DevStack JSC</span>
                </div>
                <div className="endorsement-item">
                  <span className="endorsement-skill">UI/UX</span>
                  <span className="endorsement-by">Xác nhận bởi CreativeBox Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up">
          <Link to="/" className="btn btn-ghost">← Về trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
