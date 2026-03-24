import React, { useState  } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router";
import { loginUser } from "../../api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 track loading
  const navigate = useNavigate();

  // check auth on app load / refresh
  // const checkAuth = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await API.get("/auth/me");
  //     setUser(res.data);
  //   } catch {
  //     setUser(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, []);

  const login = async (data) => {
    setLoading(true);
    try {
      const res = await loginUser(data);
      setUser(res.data.user);
      navigate("/homepage");
    } finally {
      setLoading(false);
    }
  };

  // const logout = async () => {
  //   setLoading(true);
  //   try {
  //     await API.post("/auth/logout");
  //     setUser(null);
  //     navigate("/");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <AuthContext.Provider value={{ user, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
};