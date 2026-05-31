import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onStartEdit, onSaveEdit }) {
    const [editText, setEditText] = useState(todo.text);

    return (
        <div style={{
            display: "flex",
            gap: 10,
            margin: "8px 0",
            alignItems: "center"
        }}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />

            {/* VIEW / EDIT */}
            {todo.editing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSaveEdit(todo.id, editText);
                        }
                    }}
                    autoFocus
                />
            ) : (
                <div
                    onDoubleClick={() => onStartEdit(todo.id)}
                    style={{
                        flex: 1,
                        textDecoration: todo.done ? "line-through" : "none",
                        cursor: "pointer"
                    }}
                >
                    {todo.text}
                    <br />
                    <small style={{ color: "#888" }}>
                        {todo.createdAt} {/* ⭐ LEVEL 1 */}
                    </small>
                </div>
            )}

            {/* BUTTONS */}
            {!todo.editing && (
                <>
                    <button onClick={() => onStartEdit(todo.id)}>
                        Sửa
                    </button>

                    <button onClick={() => onDelete(todo.id)}>
                        Xóa
                    </button>
                </>
            )}
        </div>
    );
}

export default TodoItem;