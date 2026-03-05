import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [role, setRole] = useState<'student' | 'business'>('student');

  return (
    <div className="page-wrapper auth-page">
      <div className="auth-container">
        <div className="auth-card fade-up">
          <Link to="/" className="auth-logo">
            Uni<span>Task</span>
            <div className="dot" />
          </Link>
          <h1 className="auth-title">Tạo tài khoản miễn phí</h1>
          <p className="auth-sub">Bắt đầu hành trình của bạn với UniTask</p>

          <div className="role-toggle">
            <button
              className={`role-btn${role === 'student' ? ' active' : ''}`}
              onClick={() => setRole('student')}
            >
              🎓 Sinh viên
            </button>
            <button
              className={`role-btn${role === 'business' ? ' active' : ''}`}
              onClick={() => setRole('business')}
            >
              🏢 Doanh nghiệp
            </button>
          </div>

          <div className="auth-social">
            <button className="social-btn">
              <span>G</span> Google
            </button>
            <button className="social-btn">
              <span>f</span> Facebook
            </button>
          </div>

          <div className="auth-divider">
            <span>hoặc đăng ký bằng email</span>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row-2">
              <div className="form-group">
                <label>Họ</label>
                <input type="text" placeholder="Nguyễn" />
              </div>
              <div className="form-group">
                <label>Tên</label>
                <input type="text" placeholder="Minh" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder={role === 'student' ? 'name@university.edu.vn' : 'name@company.com'} />
            </div>
            {role === 'student' && (
              <div className="form-group">
                <label>Trường / Đại học</label>
                <input type="text" placeholder="VD: Đại học Bách khoa TP.HCM" />
              </div>
            )}
            {role === 'business' && (
              <div className="form-group">
                <label>Tên doanh nghiệp</label>
                <input type="text" placeholder="VD: TechNova VN" />
              </div>
            )}
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" placeholder="Tối thiểu 8 ký tự" />
            </div>
            <label className="checkbox-label" style={{ marginBottom: 20 }}>
              <input type="checkbox" /> Tôi đồng ý với{' '}
              <Link to="/terms">Điều khoản sử dụng</Link> và{' '}
              <Link to="/privacy">Chính sách bảo mật</Link>
            </label>
            <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
              Đăng ký {role === 'student' ? 'Sinh viên' : 'Doanh nghiệp'}
            </button>
          </form>

          <p className="auth-switch">
            Đã có tài khoản? <Link to="/login">Đăng nhập →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
