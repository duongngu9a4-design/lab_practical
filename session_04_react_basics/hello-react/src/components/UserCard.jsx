function UserCard({ name, email, avatar }) {
    return (
        <div style={{ border: "1px solid #bdc3c7", borderRadius: "8px", padding: "16px", textAlign: "center", minWidth: "220px" }}>
            <img src={avatar} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "12px" }} />
            <h3>{name}</h3>
            <p style={{ color: "#7f8c8d", fontSize: "14px" }}>{email}</p>
        </div>
    );
}

export default UserCard;
