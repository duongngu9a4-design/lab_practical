function ListRendering() {
    const products = [
        { id: 1, name: "Laptop", price: 25000000 },
        { id: 2, name: "Điện thoại", price: 11500000 },
        { id: 3, name: "Tai nghe", price: 850000 },
        { id: 4, name: "Bàn phím", price: 450000 },
        { id: 5, name: "Màn hình", price: 3200000 }
    ];

    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div style={{ padding: "20px", border: "2px solid #3498db", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>List Rendering</h2>

            <h3>Danh sách sản phẩm</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ color: product.price > 1000000 ? "red" : "black", marginBottom: "8px" }}>
                        {product.name} - {product.price.toLocaleString()} đ
                    </li>
                ))}
            </ul>

            <p style={{ marginTop: "16px", fontWeight: "bold" }}>
                Tổng giá: {totalPrice.toLocaleString()} đ
            </p>
        </div>
    );
}

export default ListRendering;
