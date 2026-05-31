import { useState } from "react";

function ClickEvents() {
    const [color, setColor] = useState("lightblue");

    const [btn1Count, setBtn1Count] = useState(0);
    const [btn2Count, setBtn2Count] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    function randomColor() {
        const colors = [
            "red",
            "blue",
            "green",
            "yellow",
            "orange",
            "purple",
            "pink",
            "gray"
        ];

        const randomIndex = Math.floor(
            Math.random() * colors.length
        );

        setColor(colors[randomIndex]);
    }

    function handleBtn1() {
        setBtn1Count(btn1Count + 1);
    }

    function handleBtn2() {
        setBtn2Count(btn2Count + 1);
    }

    function handleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Click Events Demo</h1>

            {/* Đổi màu ngẫu nhiên */}
            <h2>1. Đổi màu ngẫu nhiên</h2>

            <div
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: color,
                    marginBottom: "10px"
                }}
            ></div>

            <button onClick={randomColor}>
                Đổi màu
            </button>

            <hr />

            {/* Đếm click từng nút */}
            <h2>2. Đếm click từng nút</h2>

            <button onClick={handleBtn1}>
                Nút 1 ({btn1Count})
            </button>

            <button
                onClick={handleBtn2}
                style={{ marginLeft: "10px" }}
            >
                Nút 2 ({btn2Count})
            </button>

            <hr />

            {/* Like Toggle */}
            <h2>3. Like Button</h2>

            <button onClick={handleLike}>
                {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
            </button>
        </div>
    );
}

export default ClickEvents;