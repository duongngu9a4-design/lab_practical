# Bài 2.1 — Hiển thị biến đơn giản

### Code mẫu
```
function SimpleVariables() {
    // Các biến JavaScript
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];
    
    return (
        <div>
            <h2>Xin chào {ten}!</h2>
            <p>Tuổi: {tuoi}</p>
            <p>Năm sau: {tuoi + 1}</p>
            <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
            <p>Môn học yêu thích: {monHoc.join(", ")}</p>
        </div>
    );
}

export default SimpleVariables;
```

### Quy tắc

- ✅ ĐƯỢC: Biến, tính toán, gọi hàm trong `{}`.
  - `{ten}`
  - `{tuoi + 1}`
  - `{ten.toUpperCase()}`
  - `{new Date().toLocaleDateString()}`
- ❌ KHÔNG ĐƯỢC: object literal hoặc câu lệnh trong `{}`.
  - `{{ ten: "Minh" }}`  {/* Lỗi! */}
  - `{if (tuoi > 18) "Lớn"}`
  - Không dùng nhiều dòng điều kiện phức tạp bên trong JSX; dùng ternary hoặc hàm trước.

### Thử thách

1. Hiển thị thông tin cá nhân (tên, tuổi, quê quán).
2. Hiển thị "Chào buổi sáng/chiều/tối" dựa vào giờ hiện tại.
3. Tính và hiển thị BMI: cân nặng / (chiều cao * chiều cao).

* Code đã thực hiện:[SimpleVariables.jsx](../hello-react/src/components/SimpleVariables.jsx)

# Bài 2.2 — Conditional Rendering (Hiển thị có điều kiện)

## Cách 1: Toán tử 3 ngôi (Ternary)
```
function TernaryDemo() {
    const isLoggedIn = true;
    const score = 85;
    
    return (
        <div>
            {/* Cách 1: Toán tử 3 ngôi */}
            <p>{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}</p>
            
            {/* Kết quả học tập */}
            <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>

            {/* Điểm xếp loại */}
            <p>Xếp loại: {
                score >= 9 ? "Xuất sắc" :
                score >= 8 ? "Giỏi" :
                score >= 7 ? "Khá" :
                score >= 5 ? "Trung bình" : "Yếu"
            }</p>
        </div>
    );
}

export default TernaryDemo;
```

## Cách 2: && (Hiện hoặc không hiện)
```
function AndDemo() {
    const hasNotification = true;
    const notificationCount = 5;
    
    return (
        <div>
            <h3>Thông báo</h3>
            {/* Hiện khi có thông báo */}
            {hasNotification && (
                <p>Bạn có {notificationCount} thông báo mới!</p>
            )}
            
            {/* Không hiện gì khi không có */}
            {!hasNotification && <p>Không có thông báo</p>}
        </div>
    );
}

export default AndDemo;
```

### Thử thách

1. Hiển thị icon 🔴/🟢 dựa vào trạng thái online/offline.
2. Hiện/ẩn menu dựa vào `isLoggedIn`.
3. Hiển thị "Hết hàng" khi `stock = 0`.

* Code đã thực hiện:[ConditionalRendering.jsx](../hello-react/src/components/ConditionalRendering.jsx)

# Bài 2.3 — Render danh sách (List Rendering)

### Code mẫu
```
function ListRendering() {
    const fruits = ["Táo", "Chuối", "Cam", "Nho"];
    
    const students = [
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ];
    
    return (
        <div>
            <h3>Danh sách trái cây</h3>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            
            <h3>Danh sách sinh viên</h3>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListRendering;
```

### Tại sao cần `key`?

- React cần `key` để biết phần tử nào thay đổi, thêm, hoặc xóa.
- Dùng `id` từ dữ liệu là tốt nhất vì nó độc nhất và ổn định.
- Không nên dùng `index` làm `key` nếu danh sách có thể thay đổi (thêm/xóa/reorder).
- Chỉ dùng `index` khi danh sách cố định và không có thao tác CRUD.

### Thử thách

1. Render danh sách 5 sản phẩm (tên, giá).
2. Hiển thị sản phẩm giá > 1 triệu bằng màu đỏ.
3. Tính tổng giá tất cả sản phẩm.

* Code đã thực hiện:[ListRendering.jsx](../hello-react/src/components/ListRendering.jsx)