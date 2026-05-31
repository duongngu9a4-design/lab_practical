function PriceTag({ originalPrice, salePrice }) {
    const discount = Math.round(((originalPrice - salePrice) / originalPrice) * 100);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", backgroundColor: "#ecf0f1", borderRadius: "8px" }}>
            <div>
                <p style={{ textDecoration: "line-through", color: "#95a5a6", fontSize: "14px" }}>
                    {originalPrice.toLocaleString()} đ
                </p>
                <p style={{ color: "#e74c3c", fontSize: "18px", fontWeight: "bold" }}>
                    {salePrice.toLocaleString()} đ
                </p>
            </div>
            <span style={{ backgroundColor: "#e74c3c", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
                -{discount}%
            </span>
        </div>
    );
}

export default PriceTag;
