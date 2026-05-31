function ConditionalRendering() {
    const isOnline = false;
    const isLoggedIn = true;
    const stock = 0;

    return (
        <div style={{ padding: "20px", border: "2px solid #f39c12", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>Conditional Rendering</h2>

            <p>
                Trạng thái online: {isOnline ? "🟢 Online" : "🔴 Offline"}
            </p>

            <div>
                {isLoggedIn ? (
                    <nav style={{ padding: "10px 0" }}>
                        <strong>Menu:</strong>
                        <ul>
                            <li>Trang chủ</li>
                            <li>Hồ sơ</li>
                            <li>Đăng xuất</li>
                        </ul>
                    </nav>
                ) : (
                    <p>Vui lòng đăng nhập để xem menu.</p>
                )}
            </div>

            <p>
                {stock === 0 ? <strong>Hết hàng</strong> : <span>Còn {stock} sản phẩm</span>}
            </p>
        </div>
    );
}

export default ConditionalRendering;
