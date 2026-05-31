import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isEmailValid = email.includes("@");
    const charCount = name.length;

    return (
        <div style={{ padding: "20px", border: "2px solid #e74c3c", borderRadius: "8px", marginBottom: "20px", maxWidth: "500px" }}>
            <h2>useState - Chuỗi (Input)</h2>

            <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Tên:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #bdc3c7", boxSizing: "border-box" }}
                    maxLength="100"
                />
                <small style={{ color: "#7f8c8d" }}>
                    {charCount}/100 ký tự
                </small>
            </div>

            <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #bdc3c7", boxSizing: "border-box" }}
                />
                {email && (
                    <small style={{ display: "block", marginTop: "4px", color: isEmailValid ? "#27ae60" : "#e74c3c" }}>
                        {isEmailValid ? "✓ Email hợp lệ" : "✗ Email không hợp lệ"}
                    </small>
                )}
            </div>

            <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Mật khẩu:</label>
                <div style={{ display: "flex", gap: "8px" }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                        style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #bdc3c7" }}
                    />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ padding: "8px 12px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                    >
                        {showPassword ? "Ẩn" : "Hiện"}
                    </button>
                </div>
            </div>

            <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#ecf0f1", borderRadius: "4px" }}>
                <h3>Thông tin đã nhập:</h3>
                <p><strong>Tên:</strong> {name || "(chưa nhập)"}</p>
                <p><strong>Email:</strong> {email || "(chưa nhập)"}</p>
                <p><strong>Mật khẩu:</strong> {password ? "***" : "(chưa nhập)"}</p>
            </div>

            {name && (
                <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#d5f4e6", borderRadius: "4px", border: "1px solid #27ae60" }}>
                    <p>Xin chào <strong>{name}</strong>! Email của bạn là {email || "(chưa nhập)"}</p>
                </div>
            )}
        </div>
    );
}

export default StringState;
