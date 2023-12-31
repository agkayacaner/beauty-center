import { Metadata } from "next";
import { CreateForm } from "./_components/create-form";

export const metadata: Metadata = {
  title: "Beauty Salon | Randevu Al",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <div>
      <h3 className="text-xl">Randevu Oluştur</h3>
      <div className="mt-5">
        <CreateForm />
      </div>
    </div>
  );
}
