# Bài 3.1 — Chia component (Component Splitting)

## Bài tập 1: Tách component `ProductCard`

**Cấu trúc thư mục:**
```
📁 src/
├── components/
│   └── ProductCard.jsx    ← Component con
├── App.jsx                ← Component cha
└── main.jsx
```

**ProductCard.jsx:**
```
function ProductCard({ name, price, image }) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
            <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3>{name}</h3>
            <p style={{ color: "#e74c3c", fontWeight: "bold" }}>{price}đ</p>
            <button>Thêm vào giỏ</button>
        </div>
    );
}

export default ProductCard;
```

**App.jsx:**
```
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            <h1>Cửa hàng điện thoại</h1>
            <div style={{ display: "flex", gap: "20px" }}>
                {products.map(product => (
                    <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
                ))}
            </div>
        </div>
    );
}

export default App;
```

## Bài tập 2: Chia trang web với `Header`, `Footer`

**Cấu trúc thư mục:**
```
📁 src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── App.jsx
└── main.jsx
```

**Header.jsx:**
```
function Header() {
    return (
        <header style={{ backgroundColor: "#2c3e50", color: "white", padding: "20px", textAlign: "center" }}>
            <h1>🛍️ Cửa hàng điện thoại</h1>
            <p>Hàng chính hãng, giá tốt nhất</p>
        </header>
    );
}

export default Header;
```

**Footer.jsx:**
```
function Footer() {
    return (
        <footer style={{ backgroundColor: "#34495e", color: "white", padding: "20px", textAlign: "center" }}>
            <p>&copy; 2024 Cửa hàng điện thoại. Tất cả quyền được bảo vệ.</p>
            <p>Liên hệ: info@shop.com | Hotline: 0123-456-789</p>
        </footer>
    );
}

export default Footer;
```

**App.jsx (cập nhật):**
```
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            <Header />
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    {products.map(product => (
                        <ProductCard key={product.id} name={product.name} price={product.price} image={product.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
```

### Lợi ích của chia component

- **Tái sử dụng:** `ProductCard` có thể dùng ở nhiều trang khác nhau.
- **Dễ bảo trì:** Mỗi component có trách nhiệm rõ ràng.
- **Dễ test:** Component nhỏ dễ viết unit test.
- **Đọc code rõ hơn:** Cấu trúc sáng sủa, dễ hiểu flow của ứng dụng.

# Bài 3.3 — Props: Truyền dữ liệu từ cha → con

### Giải thích Props

Props = "thông tin" truyền từ component cha xuống component con.

```
// Component con (nhận props)
function Greeting({ name, age }) {
    return (
        <div>
            <p>Xin chào {name}!</p>
            <p>Tuổi: {age}</p>
        </div>
    );
}

// Component cha (truyền props)
function App() {
    return (
        <div>
            <Greeting name="Minh" age={20} />
            <Greeting name="An" age={21} />
            <Greeting name="Linh" age={19} />
        </div>
    );
}
```

### Props có thể là gì?

```
// String
<Greeting name="Minh" />

// Number
<PriceTag price={100000} />

// Boolean
<Button isActive={true} />

// Array
<TodoList items={["HTML", "CSS", "JS"]} />

// Object
<User data={{ name: "Minh", age: 20 }} />

// Function (sẽ học sau)
<Button onClick={() => console.log("clicked")} />
```

### Thử thách

1. Tạo component `UserCard` nhận props: `name`, `email`, `avatar`.
2. Tạo component `PriceTag` nhận props: `originalPrice`, `salePrice`.
3. Hiển thị 3 `UserCard` với dữ liệu khác nhau.

* Code đã thực hiện: [PriceTag.jsx](../hello-react/src/components/PriceTag.jsx)
                     [UserCard.jsx](../hello-react/src/components/UserCard.jsx)  