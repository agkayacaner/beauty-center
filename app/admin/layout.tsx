import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "@/components/footer";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto py-5">{children}</main>
      <Footer />
    </div>
  );
}
