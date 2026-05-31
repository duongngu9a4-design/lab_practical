function TodoFilter({ filter, setFilter }) {
    return (
        <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Done</button>
        </div>
    );
}

export default TodoFilter;