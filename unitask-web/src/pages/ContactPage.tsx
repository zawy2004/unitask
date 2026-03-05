import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="page-header fade-up" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Liên hệ</div>
          <h1 className="section-title">Chúng tôi luôn sẵn sàng hỗ trợ</h1>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Có câu hỏi hoặc cần hỗ trợ? Liên hệ qua form bên dưới hoặc các kênh khác.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info fade-up">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>support@unitask.vn</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Hotline</h4>
                <p>(028) 9999 8888</p>
                <small>Thứ 2 – Thứ 6, 8:00 – 18:00</small>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Văn phòng</h4>
                <p>268 Lý Thường Kiệt, P.14, Q.10, TP.HCM</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <h4>Mạng xã hội</h4>
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle">f</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle">in</a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-circle">tt</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle">▶</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card fade-up">
            <h3>Gửi tin nhắn</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2">
                <div className="form-group">
                  <label>Họ tên</label>
                  <input type="text" placeholder="Nguyễn Văn A" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Chủ đề</label>
                <select>
                  <option>Hỗ trợ chung</option>
                  <option>Hỗ trợ sinh viên</option>
                  <option>Hỗ trợ doanh nghiệp</option>
                  <option>Báo lỗi / Góp ý</option>
                  <option>Hợp tác / Partnership</option>
                </select>
              </div>
              <div className="form-group">
                <label>Nội dung</label>
                <textarea rows={5} placeholder="Mô tả chi tiết vấn đề hoặc câu hỏi của bạn..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Gửi tin nhắn →
              </button>
            </form>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }} className="fade-up">
          <Link to="/" className="btn btn-ghost">← Về trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
