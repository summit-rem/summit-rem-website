import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../features/navigation/components/Navbar";
import Footer from "../../features/footer/components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
