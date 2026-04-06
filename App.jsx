import { useState } from "react";

export default function AuthApp() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      alert("Please fill in all fields");
      return;
    }

    // fake auth (for demo)
    setUser({ email: form.email });
    setForm({ email: "", password: "" });
  };

  const logout = () => setUser(null);

  if (user) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Welcome, {user.email}</h2>
        <p>This is a protected page 🔒</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br /><br />

      <button onClick={handleSubmit}>
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Create an account" : "Already have an account?"}
      </p>
    </div>
  );
}
