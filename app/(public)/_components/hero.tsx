import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="rounded-xl bg-lime-300 min-h-[520px] flex">
      <div className="flex-1 flex gap-2 items-center justify-center">
        <h3 className="text-2xl">Merhaba</h3>
        <Button className="rounded-full" size="lg">
          <Link href="/create-appointment">Randevu Al</Link>
        </Button>
      </div>
      <div className="p-5 flex-1"></div>
    </div>
  );
}
