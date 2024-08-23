import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import PageNotFound from "./components/PageNotFound";
import Layout from "./layout/Layout";
import { auth } from "./config/Firebase";

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/panel" element={user ? <AdminPanel /> : <Navigate to="/login" />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
