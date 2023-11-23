import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import LinkItem from "./LinkItem";
import { UserNav } from "./user-nav";
import { OthersMenu } from "./others-menu";

type Menu = {
  name: string;
  href: string;
};

const menu: Menu[] = [
  {
    name: "Genel Görünüm",
    href: "/admin",
  },
  {
    name: "Randevular",
    href: "/admin/appointments",
  },
  {
    name: "Müşteriler",
    href: "/admin/customers",
  },
  {
    name: "Hizmetler",
    href: "/admin/services",
  },
];

export default function Navbar() {
  return (
    <div className="dark:bg-neutral-950 bg-white border">
      <div className="max-w-7xl mx-auto flex items-center h-16">
        <div>
          <Link href="/admin" className="font-bold text-2xl">
            Beauty Salon
          </Link>
        </div>
        <div className="flex-1 flex items-center gap-5 ms-10 text-sm">
          <nav className="flex items-center gap-5 me-auto">
            {menu.map((link) => (
              <LinkItem menu={link} key={link.name} />
            ))}
            <OthersMenu />
          </nav>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
