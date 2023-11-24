"use client";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
        <MoreVertical />
      </Button>
      <div></div>
    </div>
  );
}
