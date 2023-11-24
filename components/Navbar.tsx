import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import LinkItem from "./link-item";
import { UserNav } from "./user-nav";
import { Button } from "./ui/button";

type Menu = {
  name: string;
  href: string;
};

const menu: Menu[] = [
  {
    name: "Anasayfa",
    href: "/",
  },
  {
    name: "Hizmetler",
    href: "/services",
  },
  {
    name: "Hakkımızda",
    href: "/about-us",
  },
  {
    name: "İletişim",
    href: "/contact-us",
  },
];

export default function Navbar() {
  return (
    <div className="dark:bg-neutral-950 bg-white border">
      <div className="flex max-w-7xl px-5 md:mx-auto items-center h-16">
        <div>
          <Link href="/" className="font-bold text-2xl">
            Beauty
          </Link>
        </div>
        <div className="flex-1 flex items-center gap-5 ms-10 text-sm">
          <nav className="hidden md:flex items-center gap-5 me-auto">
            {menu.map((link) => (
              <LinkItem menu={link} key={link.name} />
            ))}
          </nav>
          <ModeToggle />
          <UserNav />
          <Button asChild className="rounded-full">
            <Link href="create-appointment">Randevu Al</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
