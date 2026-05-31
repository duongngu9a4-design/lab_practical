import { useState } from "react";

function BooleanChallenge() {
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Bài tập useState với Boolean</h1>

            {/* Hiện / Ẩn mật khẩu */}
            <h2>1. Hiện / Ẩn mật khẩu</h2>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
            />
            <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ marginLeft: "10px" }}
            >
                {showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            </button>

            <hr />

            {/* Accordion */}
            <h2
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
            >
                2. React là gì? {isOpen ? "▲" : "▼"}
            </h2>

            {isOpen && (
                <div
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "20px"
                    }}
                >
                    <p>
                        React là thư viện JavaScript dùng để xây dựng giao diện
                        người dùng.
                    </p>
                </div>
            )}

            <hr />

            {/* Bóng đèn */}
            <h2>3. Bật / Tắt bóng đèn</h2>

            <div style={{ fontSize: "60px" }}>
                {isOn ? "💡" : "⚫"}
            </div>

            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "Tắt đèn" : "Bật đèn"}
            </button>
        </div>
    );
}

export default BooleanChallenge;