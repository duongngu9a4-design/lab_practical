# Bài 1.1 — Component render lần đầu

## Câu hỏi thêm: Tại sao `LifecycleDemo` chỉ render 1 lần? Khi nào nó sẽ render lại?

1. `LifecycleDemo` chỉ render một lần vì:
   - `App.jsx` render `LifecycleDemo` và không có state nào trong `App` thay đổi.
   - `LifecycleDemo` cũng không có state hoặc props nào được cập nhật.
   - React chỉ render lại component khi có thay đổi dữ liệu (state, props, context) hoặc khi cấu trúc cây component thay đổi.
   - Ở ví dụ này, không có gì thay đổi nên chỉ có render đầu tiên.

2. Nó sẽ render lại khi:
   - `App` thay đổi state của chính nó và truyền props mới xuống `LifecycleDemo`.
   - `LifecycleDemo` có state riêng và state đó thay đổi.
   - component cha của `LifecycleDemo` render lại với props khác hoặc key khác.
   - hoặc khi bạn bắt buộc cập nhật bằng các cơ chế như `setState`, `useReducer`, `useContext`, hoặc đổi `key`.

> Trong code hiện tại, `LifecycleDemo` chỉ chứa `console.log` bên trong hàm và không có điều kiện cập nhật nào, nên log này chỉ xuất một lần khi component render lần đầu.
 
# Bài 1.2 — Biến "bình thường" vs useState

## Vấn đề: Biến bình thường không làm UI cập nhật

- `let count = 0` là biến JavaScript thông thường.
- Khi bạn gán `count = count + 1`, giá trị biến thay đổi trong bộ nhớ, nhưng React không biết cần cập nhật lại UI.
- React chỉ tự động render lại khi state hoặc props của component thay đổi bằng API của React.
- Vì vậy, `console.log` có thể in ra 1, 2, 3..., nhưng UI vẫn giữ giá trị ban đầu.

## Giải pháp: `useState` — biến “đặc biệt”

- `useState` tạo ra một state mà React theo dõi.
- Ví dụ: `const [count, setCount] = useState(0)`.
- Khi gọi `setCount(count + 1)`, React biết state đã thay đổi và sẽ render lại component.
- Nhờ vậy, giá trị `count` trên màn hình được cập nhật.

## So sánh nhanh

- Biến bình thường:
  - Khai báo: `let count = 0`
  - Thay đổi: `count = 5`
  - UI cập nhật? ❌ Không
  - Khi nào re-render? Không bao giờ tự động
- `useState`:
  - Khai báo: `const [count, setCount] = useState(0)`
  - Thay đổi: `setCount(5)`
  - UI cập nhật? ✅ Có
  - Khi nào re-render? Khi gọi `setCount`

## Thử nghiệm

1. Chạy `BadCounter` → nhấn nút → số trên màn hình không đổi, nhưng console vẫn tăng.
2. Chạy `GoodCounter` → nhấn nút → số trên màn hình tăng theo.
3. Mở Console → số `render` sẽ tăng khi `GoodCounter` chạy lại sau `setCount`, nhưng không tăng khi dùng biến thường.
