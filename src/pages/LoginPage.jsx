import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext/useAuth";
import { Link } from "react-router";
export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await login(form);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br  px-4">
      <div className="w-full max-w-sm">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-medium transition disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>

            {message && (
              <p className="text-center text-sm text-red-500">{message}</p>
            )}
          </form>

          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
            <p className="font-semibold text-gray-700 mb-2 text-center">Sample Recruiter Accounts</p>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-mono">user1@prod.com</span>
              </div>
              <div className="flex justify-between">
                <span>Username:</span>
                <span className="font-mono">user1</span>
              </div>
              <div className="flex justify-between">
                <span>Password:</span>
                <span className="font-mono">a1234</span>
              </div>

              <div className="border-t pt-2 mt-2"></div>

              <div className="flex justify-between">
                <span>Email:</span>
                <span className="font-mono">recruiter2@test.com</span>
              </div>
              <div className="flex justify-between">
                <span>Password:</span>
                <span className="font-mono">password123</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
