import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import TodoFilter from "./components/TodoFilter";

function App() {
    // ===== LOAD localStorage =====
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    // ===== SAVE localStorage =====
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // ===== ADD TODO (có ngày tạo) =====
    function addTodo() {
        if (inputValue.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            done: false,
            createdAt: new Date().toLocaleString(), // ⭐ LEVEL 1
            editing: false // ⭐ LEVEL 2
        };

        setTodos([...todos, newTodo]);
        setInputValue("");
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }

    // ===== TOGGLE =====
    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        );
    }

    // ===== DELETE =====
    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    // ===== START EDIT =====
    function startEdit(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, editing: true }
                    : todo
            )
        );
    }

    // ===== SAVE EDIT =====
    function saveEdit(id, newText) {
        if (newText.trim() === "") return;

        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, text: newText, editing: false }
                    : todo
            )
        );
    }

    // ===== FILTER =====
    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "completed") return todo.done;
        return true;
    });

    // ===== COUNT =====
    const activeCount = todos.filter(t => !t.done).length;
    const completedCount = todos.filter(t => t.done).length;

    // ===== PLACEHOLDER theo filter (LEVEL 1) =====
    const placeholder =
        filter === "all"
            ? "Nhập công việc..."
            : filter === "active"
            ? "Nhập việc chưa xong..."
            : "Nhập việc đã hoàn thành...";

    return (
        <div style={{
            maxWidth: "500px",
            margin: "0 auto",
            padding: "20px",
            fontFamily: "Arial"
        }}>
            <h1>📋 Todo List</h1>

            {/* INPUT */}
            <div style={{ display: "flex" }}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={placeholder} // ⭐ LEVEL 1
                    style={{ flex: 1, padding: 10 }}
                />
                <button onClick={addTodo}>Thêm</button>
            </div>

            {/* FILTER */}
            <TodoFilter filter={filter} setFilter={setFilter} />

            {/* STATS (LEVEL 1) */}
            <div style={{ margin: "10px 0" }}>
                <b>Tổng: {todos.length}</b>
            </div>

            {/* LIST */}
            {filteredTodos.length === 0 ? (
                <p>Không có công việc</p>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                        onStartEdit={startEdit}
                        onSaveEdit={saveEdit}
                    />
                ))
            )}

            {/* FOOTER */}
            <div style={{ marginTop: 10 }}>
                {activeCount} chưa xong | {completedCount} đã xong
            </div>
        </div>
    );
}

export default App;