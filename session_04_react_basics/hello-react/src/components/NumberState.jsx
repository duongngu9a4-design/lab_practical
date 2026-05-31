import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    const getColor = () => {
        if (count > 0) return "#27ae60";
        if (count < 0) return "#e74c3c";
        return "#95a5a6";
    };

    const getStatus = () => {
        if (count > 0) return "Số dương";
        if (count < 0) return "Số âm";
        return "Không";
    };

    return (
        <div style={{ padding: "20px", border: "2px solid #9b59b6", borderRadius: "8px", marginBottom: "20px", maxWidth: "500px" }}>
            <h2>useState - Bộ đếm</h2>
            <h3 style={{ color: getColor(), fontSize: "32px", margin: "16px 0" }}>
                {count}
            </h3>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: getColor() }}>
                Trạng thái: {getStatus()}
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
                <button onClick={() => setCount(count + 1)} style={{ padding: "10px 16px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Tăng (+1)
                </button>
                <button onClick={() => setCount(count - 1)} style={{ padding: "10px 16px", backgroundColor: "#e67e22", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Giảm (-1)
                </button>
                <button onClick={() => setCount(count + 5)} style={{ padding: "10px 16px", backgroundColor: "#27ae60", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Tăng 5
                </button>
                <button onClick={() => setCount(count * 2)} style={{ padding: "10px 16px", backgroundColor: "#9b59b6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Nhân đôi
                </button>
                <button onClick={() => setCount(0)} style={{ padding: "10px 16px", backgroundColor: "#95a5a6", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default NumberState;
