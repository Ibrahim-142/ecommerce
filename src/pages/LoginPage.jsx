import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext/useAuth";
function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const { login } = useAuth();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await login(form); 
  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
  }
};
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl mb-4 font-bold">Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>

        {message && (
          <p className="mt-3 text-center text-sm">{message}</p>
        )}
      </form>
    </div>
  );
}

export default Login;