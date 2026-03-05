import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="page-header fade-up" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">Pháp lý</div>
          <h1 className="section-title">Chính sách bảo mật</h1>
          <p className="section-sub">Cập nhật lần cuối: 01/01/2026</p>
        </div>

        <div className="legal-content fade-up">
          <section className="legal-section">
            <h2>1. Thu thập thông tin</h2>
            <p>Chúng tôi thu thập thông tin cần thiết để cung cấp dịch vụ, bao gồm:</p>
            <ul>
              <li>Thông tin cá nhân: họ tên, email, số điện thoại</li>
              <li>Thông tin sinh viên: trường, ngành học, năm</li>
              <li>Thông tin doanh nghiệp: tên công ty, mã số thuế</li>
              <li>Dữ liệu sử dụng: lịch sử tìm kiếm, ứng tuyển</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Sử dụng thông tin</h2>
            <p>Thông tin được sử dụng để:</p>
            <ul>
              <li>Xác thực tài khoản và danh tính</li>
              <li>Gợi ý job phù hợp (Smart Matching)</li>
              <li>Xử lý thanh toán qua Escrow</li>
              <li>Gửi thông báo về job mới, cập nhật hệ thống</li>
              <li>Cải thiện chất lượng dịch vụ</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Bảo vệ dữ liệu</h2>
            <p>UniTask sử dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu của bạn:</p>
            <ul>
              <li>Mã hóa SSL/TLS cho mọi kết nối</li>
              <li>Mã hóa dữ liệu nhạy cảm tại rest</li>
              <li>Kiểm soát truy cập nghiêm ngặt</li>
              <li>Sao lưu dữ liệu định kỳ</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Chia sẻ thông tin</h2>
            <p>Chúng tôi không bán hoặc cho thuê thông tin cá nhân. Thông tin chỉ được chia sẻ trong các trường hợp:</p>
            <ul>
              <li>Sinh viên ứng tuyển — hồ sơ được gửi cho doanh nghiệp tương ứng</li>
              <li>Yêu cầu pháp lý từ cơ quan chức năng</li>
              <li>Với sự đồng ý rõ ràng của bạn</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Quyền của bạn</h2>
            <p>Bạn có quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân bất cứ lúc nào. Liên hệ <Link to="/contact">đội ngũ hỗ trợ</Link> để thực hiện.</p>
          </section>

          <section className="legal-section">
            <h2>6. Cookie</h2>
            <p>UniTask sử dụng cookie để cải thiện trải nghiệm người dùng. Bạn có thể tắt cookie trong trình duyệt, tuy nhiên một số tính năng có thể bị ảnh hưởng.</p>
          </section>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up">
          <Link to="/" className="btn btn-ghost">← Về trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
