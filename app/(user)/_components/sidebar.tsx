"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CalendarDays, CalendarDaysIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const menu = [
  {
    title: "Profilim",
    href: "/profile",
    icon: "User",
  },
  {
    title: "Randevularım",
    href: "/appointments",
    icon: "",
  },
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="hidden md:block min-w-[320px] pr-5">
      <div className="flex items-center gap-2">
        <Image
          src="https://via.placeholder.com/54"
          alt="Profil Resmi"
          className="rounded-full"
          width={54}
          height={54}
        />
        <div className="">
          <h3 className="text-lg font-bold capitalize">Ad Soyad</h3>
          <h5 className="text-sm text-black/50 dark:text-white/50">
            email@mail.com
          </h5>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-sm text-gray-500">Hesabım</h4>
        <ul className="mt-2">
          {menu.map((menu) => (
            <li key={menu.title} className="py-2">
              <Link
                href={menu.href}
                className={cn(
                  "transition-all flex items-center gap-2 text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white",
                  path === menu.href &&
                    "text-black dark:text-white font-bold border-l-2 border-black dark:border-white pl-2"
                )}
              >
                {menu.icon === "User" ? (
                  <User size={20} />
                ) : menu.icon === "CalendarDays" ? (
                  <CalendarDays size={20} />
                ) : (
                  <CalendarDaysIcon size={20} />
                )}
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
