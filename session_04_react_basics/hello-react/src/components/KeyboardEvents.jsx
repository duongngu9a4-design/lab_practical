import { useState, useEffect } from "react";

function KeyboardEvents() {
    // ===== Guess Key Game =====
    const keys = ["a", "s", "d", "w", "ArrowUp", "ArrowDown"];
    const [targetKey, setTargetKey] = useState("");
    const [result, setResult] = useState("");

    // ===== Move Box =====
    const [pos, setPos] = useState({ x: 50, y: 50 });

    // ===== Theme Ctrl + D =====
    const [dark, setDark] = useState(false);

    function randomKey() {
        const random = keys[Math.floor(Math.random() * keys.length)];
        setTargetKey(random);
        setResult("");
    }

    function handleKeyDown(e) {
        // ===== Guess Key Game =====
        if (targetKey) {
            if (e.key === targetKey) {
                setResult("🎉 Đúng rồi!");
            } else {
                setResult("❌ Sai rồi!");
            }
        }

        // ===== Move Box =====
        setPos(prev => {
            switch (e.key) {
                case "ArrowUp":
                    return { ...prev, y: prev.y - 10 };
                case "ArrowDown":
                    return { ...prev, y: prev.y + 10 };
                case "ArrowLeft":
                    return { ...prev, x: prev.x - 10 };
                case "ArrowRight":
                    return { ...prev, x: prev.x + 10 };
                default:
                    return prev;
            }
        });

        // ===== Ctrl + D đổi theme =====
        if (e.ctrlKey && e.key.toLowerCase() === "d") {
            e.preventDefault(); // tránh browser bookmark
            setDark(prev => !prev);
        }
    }

    useEffect(() => {
        randomKey();
    }, []);

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{
                minHeight: "100vh",
                padding: 20,
                backgroundColor: dark ? "#111" : "#fff",
                color: dark ? "#fff" : "#000",
                outline: "none"
            }}
        >
            <h1>Keyboard Events Lab</h1>

            {/* ===== Guess Key Game ===== */}
            <section style={{ marginBottom: 30 }}>
                <h2>1. Guess the Key</h2>
                <p>Nhấn phím: <b>{targetKey}</b></p>
                <p>{result}</p>
                <button onClick={randomKey}>Đổi phím</button>
            </section>

            <hr />

            {/* ===== Move Box ===== */}
            <section style={{ marginBottom: 30 }}>
                <h2>2. Move Box</h2>
                <div
                    style={{
                        height: 200,
                        border: "1px solid gray",
                        position: "relative"
                    }}
                >
                    <div
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "red",
                            position: "absolute",
                            top: pos.y,
                            left: pos.x
                        }}
                    />
                </div>
            </section>

            <hr />

            {/* ===== Theme ===== */}
            <section>
                <h2>3. Ctrl + D Theme</h2>
                <p>Nhấn Ctrl + D để đổi màu nền</p>
            </section>
        </div>
    );
}

export default KeyboardEvents;