import { useState } from "react";

function UpdateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [message, setMessage] = useState("");

    // ===== START EDIT =====
    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(item.age.toString());
        setMessage("");
    }

    // ===== CANCEL =====
    function cancelEdit() {
        setEditingId(null);
        setMessage("");
    }

    // ===== SAVE EDIT =====
    function saveEdit() {
        if (editName.trim() === "") {
            setMessage("❌ Tên không được để trống!");
            return;
        }

        setItems(prev =>
            prev.map(item =>
                item.id === editingId
                    ? {
                          ...item,
                          name: editName,
                          age: parseInt(editAge)
                      }
                    : item
            )
        );

        setEditingId(null);
        setMessage("✅ Đã lưu thành công!");

        // clear message sau 2s
        setTimeout(() => setMessage(""), 2000);
    }

    // ===== KEY HANDLER =====
    function handleKeyDown(event) {
        if (event.key === "Enter") saveEdit();
        if (event.key === "Escape") cancelEdit();
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Sửa thông tin</h2>

            {/* MESSAGE */}
            {message && <p>{message}</p>}

            {items.map(item => (
                <div
                    key={item.id}
                    style={{
                        padding: 10,
                        margin: "5px 0",
                        background: "#f9f9f9"
                    }}
                >
                    {editingId === item.id ? (
                        // ===== EDIT MODE =====
                        <div
                            style={{
                                display: "flex",
                                gap: 10,
                                alignItems: "center"
                            }}
                        >
                            <input
                                value={editName}
                                onChange={e => setEditName(e.target.value)}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                style={{
                                    padding: 4,
                                    border: "2px solid #3498db", // highlight input
                                    outline: "none"
                                }}
                            />

                            <input
                                type="number"
                                value={editAge}
                                onChange={e => setEditAge(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{
                                    padding: 4,
                                    width: 60,
                                    border: "2px solid #3498db"
                                }}
                            />

                            <button
                                onClick={saveEdit}
                                style={{
                                    background: "#27ae60",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 8px"
                                }}
                            >
                                ✓ Lưu
                            </button>

                            <button
                                onClick={cancelEdit}
                                style={{
                                    background: "#95a5a6",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 8px"
                                }}
                            >
                                ✕ Hủy
                            </button>
                        </div>
                    ) : (
                        // ===== VIEW MODE =====
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <span>
                                {item.name} - {item.age} tuổi
                            </span>

                            <button
                                onClick={() => startEdit(item)}
                                style={{
                                    background: "#3498db",
                                    color: "white",
                                    border: "none",
                                    padding: "4px 8px"
                                }}
                            >
                                ✏️ Sửa
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItem;