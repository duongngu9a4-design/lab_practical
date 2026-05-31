import { useState, useRef } from "react";

function DeleteItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);

    const [message, setMessage] = useState("");
    const [lastDeleted, setLastDeleted] = useState(null);

    const undoRef = useRef(null);

    // ===== DELETE ONE =====
    function handleDelete(id) {
        const itemToDelete = items.find(item => item.id === id);

        if (!window.confirm(`Xóa ${itemToDelete.name}?`)) return;

        setItems(prev => prev.filter(item => item.id !== id));

        // lưu lại để undo
        setLastDeleted(itemToDelete);

        setMessage(`🗑 Đã xóa ${itemToDelete.name}`);

        // tạo nút undo trong 5s
        clearTimeout(undoRef.current);

        undoRef.current = setTimeout(() => {
            setLastDeleted(null);
        }, 5000);
    }

    // ===== UNDO =====
    function handleUndo() {
        if (lastDeleted) {
            setItems(prev => [...prev, lastDeleted]);
            setMessage(`↩ Khôi phục ${lastDeleted.name}`);
            setLastDeleted(null);
        }
    }

    // ===== DELETE ALL =====
    function handleDeleteAll() {
        if (!window.confirm("Xóa tất cả?")) return;

        setItems([]);
        setMessage("🗑 Đã xóa tất cả");
        setLastDeleted(null);
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Xóa sinh viên</h2>

            {/* MESSAGE */}
            {message && (
                <p style={{ color: "green" }}>{message}</p>
            )}

            {/* UNDO BUTTON */}
            {lastDeleted && (
                <button
                    onClick={handleUndo}
                    style={{
                        marginBottom: 10,
                        padding: "6px 12px",
                        background: "#2ecc71",
                        color: "white",
                        border: "none"
                    }}
                >
                    ↩ Hoàn tác (Undo)
                </button>
            )}

            {/* DELETE ALL */}
            {items.length > 0 && (
                <button
                    onClick={handleDeleteAll}
                    style={{
                        marginBottom: 10,
                        marginLeft: 10,
                        background: "#e74c3c",
                        color: "white",
                        padding: "8px 16px",
                        border: "none"
                    }}
                >
                    🗑 Xóa tất cả
                </button>
            )}

            {/* LIST */}
            {items.length === 0 ? (
                <p style={{ color: "#999" }}>Danh sách trống</p>
            ) : (
                items.map(item => (
                    <div
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: 10,
                            margin: "5px 0",
                            background: "#f9f9f9"
                        }}
                    >
                        <span>{item.name}</span>

                        <button
                            onClick={() => handleDelete(item.id)}
                            style={{
                                background: "#e74c3c",
                                color: "white",
                                border: "none",
                                padding: "4px 8px"
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default DeleteItem;