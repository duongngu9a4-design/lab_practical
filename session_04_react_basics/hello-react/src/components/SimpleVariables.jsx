function SimpleVariables() {
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];

    return (
        <div style={{ padding: "20px", border: "2px solid #2ecc71", borderRadius: "8px", marginBottom: "20px" }}>
            <h2>Xin chào {ten}!</h2>
            <p>Tuổi: {tuoi}</p>
            <p>Năm sau: {tuoi + 1}</p>
            <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
            <p>Môn học yêu thích: {monHoc.join(", ")}</p>
        </div>
    );
}

export default SimpleVariables;
