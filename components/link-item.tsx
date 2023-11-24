"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Menu = {
  name: string;
  href: string;
};

export default function LinkItem({ menu }: { menu: Menu }) {
  const path = usePathname();
  return (
    <Link
      href={menu.href}
      className={cn(
        "transition-all text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white",
        path === menu.href && "text-black dark:text-white font-bold"
      )}
    >
      {menu.name}
    </Link>
  );
}
