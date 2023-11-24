import React from "react";
import Navbar from "./_components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Example dashboard app built using the components.",
};

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl p-5 md:mx-auto md:py-5">{children}</main>
      <Footer />
    </div>
  );
}
