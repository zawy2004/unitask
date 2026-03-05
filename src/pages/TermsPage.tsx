import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="page-header fade-up" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">Pháp lý</div>
          <h1 className="section-title">Điều khoản sử dụng</h1>
          <p className="section-sub">Cập nhật lần cuối: 01/01/2026</p>
        </div>

        <div className="legal-content fade-up">
          <section className="legal-section">
            <h2>1. Giới thiệu</h2>
            <p>Chào mừng bạn đến với UniTask. Bằng việc sử dụng nền tảng của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện sau đây. Vui lòng đọc kỹ trước khi sử dụng dịch vụ.</p>
          </section>

          <section className="legal-section">
            <h2>2. Đăng ký tài khoản</h2>
            <p>Để sử dụng UniTask, bạn cần đăng ký tài khoản với thông tin chính xác. Sinh viên cần xác thực bằng email .edu hoặc thẻ sinh viên. Doanh nghiệp cần cung cấp giấy phép kinh doanh hoặc thông tin xác thực.</p>
            <ul>
              <li>Bạn chịu trách nhiệm bảo mật tài khoản của mình</li>
              <li>Mỗi người chỉ được sở hữu một tài khoản</li>
              <li>Thông tin đăng ký phải chính xác và cập nhật</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Hệ thống Escrow</h2>
            <p>UniTask sử dụng hệ thống Escrow để bảo vệ quyền lợi cả hai bên. Doanh nghiệp nạp tiền trước khi job bắt đầu. Tiền chỉ được giải phóng sau khi doanh nghiệp duyệt kết quả.</p>
            <ul>
              <li>Tiền trong Escrow được bảo vệ an toàn</li>
              <li>Tranh chấp sẽ được đội ngũ hỗ trợ giải quyết</li>
              <li>Phí dịch vụ được công khai minh bạch</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Quy tắc ứng xử</h2>
            <p>Người dùng cam kết không sử dụng nền tảng cho mục đích bất hợp pháp, spam, hoặc vi phạm quyền sở hữu trí tuệ. UniTask có quyền khóa tài khoản vi phạm.</p>
          </section>

          <section className="legal-section">
            <h2>5. Giới hạn trách nhiệm</h2>
            <p>UniTask là nền tảng trung gian kết nối. Chúng tôi không chịu trách nhiệm về chất lượng sản phẩm cuối cùng giữa sinh viên và doanh nghiệp, nhưng cam kết hỗ trợ giải quyết tranh chấp.</p>
          </section>

          <section className="legal-section">
            <h2>6. Liên hệ</h2>
            <p>Nếu có thắc mắc về Điều khoản sử dụng, vui lòng liên hệ <Link to="/contact">đội ngũ hỗ trợ</Link> của chúng tôi.</p>
          </section>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up">
          <Link to="/" className="btn btn-ghost">← Về trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
