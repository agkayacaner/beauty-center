"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "1",
    name: "Kadın Saç Kesimi",
    price: 50,
  },
  {
    id: "2",
    name: "Saç Kesimi",
    price: 40,
  },
  {
    id: "3",
    name: "Saç Boyama",
    price: 100,
  },
  {
    id: "4",
    name: "Saç Bakımı",
    price: 80,
  },
  {
    id: "5",
    name: "Saç Düzleştirme",
    price: 200,
  },
  {
    id: "6",
    name: "Saç Örgüsü",
    price: 150,
  },
];

export function CreateForm() {
  const [date, setDate] = React.useState<Date>();
  return (
    <Card>
      <CardHeader className="border-b relative">
        <CardTitle>Yeni Randevu Oluştur</CardTitle>
        <CardDescription>
          Randevu oluşturmak için aşağıdaki formu doldurunuz.
        </CardDescription>
        <div className="hidden md:block absolute top-5 right-5 space-x-2">
          <span className="text-black/50 dark:text-white/50">Bugün:</span>
          <span className="">
            {new Date().toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 p-5">
        {/* Tarih Seç */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Tarih Seçin</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* Saat Seç */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Saat Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Uygun Saatler</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Hizmet Seç */}
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Hizmet Seçin" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Hizmetler</SelectLabel>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Randevu Oluştur</Button>
      </CardContent>
    </Card>
  );
}
