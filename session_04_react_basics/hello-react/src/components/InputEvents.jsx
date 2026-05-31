import { useState } from "react";

function InputEvents() {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleTextChange(e) {
        const value = e.target.value;

        setText(value);

        const words = value
            .trim()
            .split(/\s+/)
            .filter(word => word !== "");

        setWordCount(
            value.trim() === "" ? 0 : words.length
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Input Events Demo</h1>

            {/* Email Validation */}
            <h2>1. Email Validation</h2>

            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Nhập email"
            />

            <p>Email: {email}</p>

            {email !== "" && (
                <p>
                    {email.includes("@")
                        ? "✅ Email hợp lệ"
                        : "❌ Email phải chứa ký tự @"}
                </p>
            )}

            <hr />

            {/* Preview */}
            <h2>2. Live Preview</h2>

            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Nhập nội dung..."
                rows="5"
                cols="40"
            />

            <h3>Preview:</h3>

            <div
                style={{
                    border: "1px solid gray",
                    padding: "10px",
                    minHeight: "50px"
                }}
            >
                {text}
            </div>

            <hr />

            {/* Word Count */}
            <h2>3. Đếm số từ</h2>

            <p>Số từ: {wordCount}</p>
        </div>
    );
}

export default InputEvents;