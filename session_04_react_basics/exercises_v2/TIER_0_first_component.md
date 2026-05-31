# Bài 0.1 — Chạy React đầu tiên

## Câu hỏi: File `.jsx` khác gì file `.js`? Tại sao phải `export default App`? Thử xóa `export default` → chuyện gì xảy ra?

- `.jsx` là phần mở rộng thường dùng cho file JavaScript có chứa cú pháp JSX như `<div>...</div>`.
- `.js` là file JavaScript bình thường, có thể không có JSX.
- Về mặt kỹ thuật, React và Vite/Babel vẫn có thể xử lý JSX trong file `.js` nếu cấu hình cho phép, nhưng `.jsx` giúp trình biên dịch và người đọc biết file đó có thể chứa JSX.

- `export default App` xuất component `App` làm giá trị mặc định của module.
- Khi import ở file khác, ta có thể dùng:
  `import App from './App.jsx'`
- Nếu xóa `export default App` mà vẫn dùng import mặc định như trên, chương trình sẽ bị lỗi khi build hoặc chạy.
- Lỗi thường là: `Attempted import error: 'App' is not exported from './App.jsx'.`

- Nếu muốn xóa `export default`, phải đổi thành export theo tên:
  `export function App() { ... }`
  và import bằng:
  `import { App } from './App.jsx'`

- Tóm lại:
  - `.jsx` dùng cho React/JSX, `.js` là JavaScript chung.
  - `export default App` giúp import mặc định đơn giản.
  - Xóa `export default` thì import mặc định không còn dùng được, phải dùng named export/import.

# Bài 0.2 — JSX là HTML "xịn hơn"

## Bài 1: Component UserProfile
```
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>

            <img
                src="photo.jpg"
                alt="Ảnh đại diện"
            />

            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```

## Bài 2: Component ProductInfo
```
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>

            <p className="price">
                25.000.000đ
            </p>

            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>

            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```