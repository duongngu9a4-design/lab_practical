import { useState, useRef } from "react";

function CreateItem() {
    const [items, setItems] = useState([
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" }
    ]);

    const [newName, setNewName] = useState("");
    const [message, setMessage] = useState("");

    const inputRef = useRef(null);

    // ===== ADD ITEM =====
    function handleAdd() {
        if (newName.trim() === "") {
            setMessage("❌ Không được để trống!");
            return;
        }

        const newItem = {
            id: Date.now(),
            name: newName
        };

        setItems([...items, newItem]);
        setNewName("");

        setMessage("✅ Đã thêm thành công!");

        // focus lại input
        inputRef.current.focus();

        // xoá message sau 2s
        setTimeout(() => {
            setMessage("");
        }, 2000);
    }

    // ===== ENTER KEY =====
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Thêm môn học</h2>

            {/* INPUT + BUTTON */}
            <div style={{ marginBottom: 15 }}>
                <input
                    ref={inputRef}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tên môn học..."
                    style={{ padding: 8, marginRight: 10 }}
                />

                <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
                    ➕ Thêm
                </button>
            </div>

            {/* MESSAGE */}
            {message && (
                <p style={{ color: message.includes("❌") ? "red" : "green" }}>
                    {message}
                </p>
            )}

            {/* LIST */}
            <h3>Danh sách ({items.length} môn):</h3>

            {items.map((item) => (
                <div
                    key={item.id}
                    style={{
                        padding: 8,
                        borderBottom: "1px solid #eee"
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default CreateItem;