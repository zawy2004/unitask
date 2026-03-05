import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data/siteData';

export default function JobDetailPage() {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="page-wrapper">
        <div className="container" style={{ paddingTop: 140, textAlign: 'center' }}>
          <h1 style={{ fontSize: 48, color: 'var(--t3)', marginBottom: 16 }}>404</h1>
          <p style={{ color: 'var(--t2)', marginBottom: 32 }}>Không tìm thấy job này</p>
          <Link to="/jobs" className="btn btn-primary">← Quay về danh sách job</Link>
        </div>
      </div>
    );
  }

  const spotsPct = ((job.spotsTotal - job.spotsLeft) / job.spotsTotal) * 100;

  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <Link to="/jobs" className="back-link">← Quay về danh sách job</Link>

        <div className="job-detail-layout">
          <div className="job-detail-main">
            <div className="jd-header">
              <div className="jc-logo" style={{ background: job.logoGradient, width: 64, height: 64, fontSize: 24 }}>
                {job.logoText}
              </div>
              <div>
                <h1 className="jd-title">{job.title}</h1>
                <div className="jd-company">
                  {job.company} {job.verified && <span className="verified">✅</span>} · {job.location}
                </div>
              </div>
            </div>

            <div className="jd-tags">
              {job.tags.map((t, i) => (
                <span key={i} className={`tag tag-${t.variant}`}>{t.label}</span>
              ))}
            </div>

            <div className="jd-section">
              <h3>📋 Mô tả công việc</h3>
              <ul>
                <li>Thực hiện các task theo yêu cầu của doanh nghiệp</li>
                <li>Làm việc theo deadline đã thống nhất</li>
                <li>Báo cáo tiến độ qua hệ thống UniTask</li>
                <li>Nộp sản phẩm cuối cùng để doanh nghiệp review</li>
              </ul>
            </div>

            <div className="jd-section">
              <h3>✅ Yêu cầu</h3>
              <ul>
                <li>Sinh viên đang theo học tại các trường Đại học/Cao đẳng</li>
                <li>Có kiến thức cơ bản liên quan đến vị trí</li>
                <li>Chủ động, có trách nhiệm với công việc</li>
                <li>Có laptop/máy tính cá nhân</li>
              </ul>
            </div>

            <div className="jd-section">
              <h3>🎁 Quyền lợi</h3>
              <ul>
                <li>Thanh toán qua Escrow — đảm bảo 100%</li>
                <li>Tích lũy kinh nghiệm thực tế vào hồ sơ số</li>
                <li>Nhận đánh giá & Skill Endorsement từ doanh nghiệp</li>
                <li>Cơ hội hợp tác lâu dài</li>
              </ul>
            </div>
          </div>

          <div className="job-detail-sidebar">
            <div className="jd-sidebar-card">
              <div className="jd-pay">{job.pay}</div>
              <div className="jd-deadline">{job.deadline}</div>

              <div className="jd-spots">
                <span>Còn {job.spotsLeft}/{job.spotsTotal} chỗ</span>
                <div className="spots-bar" style={{ height: 6 }}>
                  <div className="spots-fill" style={{ width: `${100 - spotsPct}%` }} />
                </div>
              </div>

              <button className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
                🚀 Ứng tuyển ngay
              </button>
              <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                🔖 Lưu job
              </button>
            </div>

            <div className="jd-sidebar-card">
              <h4>🏢 Về doanh nghiệp</h4>
              <div className="jd-company-info">
                <div className="jc-logo" style={{ background: job.logoGradient }}>{job.logoText}</div>
                <div>
                  <strong>{job.company}</strong>
                  <p>{job.location}</p>
                </div>
              </div>
              <div className="jd-company-stats">
                <div><strong>12</strong><span>Job đã đăng</span></div>
                <div><strong>4.8 ★</strong><span>Đánh giá</span></div>
                <div><strong>96%</strong><span>Tỷ lệ duyệt</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
