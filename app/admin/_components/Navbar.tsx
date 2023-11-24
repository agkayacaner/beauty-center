import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import LinkItem from "./link-item";
import { UserNav } from "./user-nav";
import { OthersMenu } from "./others-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

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
      <div className="flex max-w-7xl px-5 md:mx-auto items-center h-16">
        <div>
          <Link href="/admin" className="font-bold text-2xl">
            Admin
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-end gap-5 ms-10 text-sm">
          <nav className="hidden md:flex items-center gap-5 me-auto">
            {menu.map((link) => (
              <LinkItem menu={link} key={link.name} />
            ))}
            <OthersMenu />
          </nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {menu.map((link) => (
                  <DropdownMenuItem key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
                <OthersMenu />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
