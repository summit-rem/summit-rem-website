import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../features/navigation/components/Navbar";
import Footer from "../../features/footer/components/Footer";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
