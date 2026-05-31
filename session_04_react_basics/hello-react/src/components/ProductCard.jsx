function ProductCard({ name, price, image }) {
    return (
        <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "16px", textAlign: "center", minWidth: "200px" }}>
            <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px", marginBottom: "12px" }} />
            <h3>{name}</h3>
            <p style={{ color: "#e74c3c", fontSize: "18px", fontWeight: "bold" }}>{price}đ</p>
            <button style={{ padding: "8px 16px", backgroundColor: "#3498db", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Thêm vào giỏ
            </button>
        </div>
    );
}

export default ProductCard;
