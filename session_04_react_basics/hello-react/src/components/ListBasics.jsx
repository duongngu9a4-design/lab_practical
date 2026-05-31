import { useState } from "react";

function ListBasics() {
    const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);

    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    // ===== Tính tuổi trung bình =====
    const avgAge =
        students.reduce((sum, s) => sum + s.age, 0) / students.length;

    return (
        <div style={{ padding: 20 }}>
            {/* ===== Fruits ===== */}
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <hr />

            {/* ===== Students ===== */}
            <h2>Danh sách sinh viên</h2>

            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{
                        padding: 8,
                        margin: "5px 0",
                        background: student.age >= 20 ? "#d4edda" : "#f9f9f9"
                    }}
                >
                    {/* STT */}
                    {index + 1}. {student.name} - {student.age} tuổi
                </div>
            ))}

            <hr />

            {/* ===== Average age ===== */}
            <h3>Tuổi trung bình: {avgAge.toFixed(1)}</h3>
        </div>
    );
}

export default ListBasics;