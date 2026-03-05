import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <div className="page-wrapper auth-page">
        <div className="auth-container">
          <div className="auth-card fade-up">
            <Link to="/" className="auth-logo">
              Uni<span>Task</span>
              <div className="dot" />
            </Link>
            <h1 className="auth-title">Chào mừng trở lại!</h1>
            <p className="auth-sub">Đăng nhập để tiếp tục tìm kiếm cơ hội</p>

            <div className="auth-social">
              <button className="social-btn">
                <span>G</span> Google
              </button>
              <button className="social-btn">
                <span>f</span> Facebook
              </button>
            </div>

            <div className="auth-divider">
              <span>hoặc đăng nhập bằng email</span>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="name@university.edu.vn" />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-row">
                <label className="checkbox-label">
                  <input type="checkbox" /> Ghi nhớ đăng nhập
                </label>
                <a href="#" className="form-link">Quên mật khẩu?</a>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Đăng nhập
              </button>
            </form>

            <p className="auth-switch">
              Chưa có tài khoản? <Link to="/register">Đăng ký miễn phí →</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
