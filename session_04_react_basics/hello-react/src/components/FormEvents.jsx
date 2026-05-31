import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    // ===== handle input change =====
    function handleChange(event) {
        const { name, value } = event.target;

        const newData = {
            ...formData,
            [name]: value
        };

        setFormData(newData);

        // realtime validation
        validateField(name, value, newData);
    }

    // ===== validate từng field =====
    function validateField(name, value, data) {
        let newErrors = { ...errors };

        if (name === "email") {
            newErrors.email = value.includes("@")
                ? ""
                : "Email phải có @";
        }

        if (name === "confirmPassword" || name === "password") {
            newErrors.confirmPassword =
                data.password === data.confirmPassword
                    ? ""
                    : "Mật khẩu không khớp";
        }

        setErrors(newErrors);
    }

    // ===== submit =====
    function handleSubmit(event) {
        event.preventDefault();

        let newErrors = {};

        if (!formData.name) newErrors.name = "Không được để trống";
        if (!formData.email.includes("@"))
            newErrors.email = "Email phải có @";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Mật khẩu không khớp";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setSubmitted(true);
    }

    // ===== reset =====
    function handleReset() {
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: ""
        });
        setErrors({});
        setSubmitted(false);
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Form Events</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {/* NAME */}
                    <div style={{ marginBottom: 10 }}>
                        <label>Tên: </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {errors.name}
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div style={{ marginBottom: 10 }}>
                        <label>Email: </label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {errors.email}
                        </div>
                    </div>

                    {/* PASSWORD */}
                    <div style={{ marginBottom: 10 }}>
                        <label>Mật khẩu: </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div style={{ marginBottom: 10 }}>
                        <label>Xác nhận mật khẩu: </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <div style={{ color: "red", fontSize: 12 }}>
                            {errors.confirmPassword}
                        </div>
                    </div>

                    {/* MESSAGE */}
                    <div style={{ marginBottom: 10 }}>
                        <label>Tin nhắn: </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            style={{ width: "100%" }}
                        />
                    </div>

                    <button type="submit">Gửi</button>
                    <button type="button" onClick={handleReset}>
                        Xóa
                    </button>
                </form>
            ) : (
                <div style={{ background: "#d4edda", padding: 15 }}>
                    <h3>✅ Gửi thành công!</h3>
                    <p>Tên: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Message: {formData.message}</p>

                    <button onClick={handleReset}>Gửi lại</button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;