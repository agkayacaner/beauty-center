import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const services = [
  {
    name: "Saç Bakımı",
    image: "/images/sac-bakimi.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Saç Bakımı",
    image: "/images/sac-bakimi.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Saç Bakımı",
    image: "/images/sac-bakimi.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Saç Bakımı",
    image: "/images/sac-bakimi.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

export default function FeaturedServices() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {services.map((service) => (
        <Card key={service.name} className="rounded-xl overflow-auto">
          <CardContent className="p-0">
            <Image
              src="https://via.placeholder.com/500"
              alt="Profil Resmi"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
