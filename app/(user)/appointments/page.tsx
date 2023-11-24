import { TableDemo } from "./_components/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Salon | Randevularım",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <div>
      <h3 className="text-xl">Randevularım</h3>
      <div className="mt-5">
        <TableDemo />
      </div>
    </div>
  );
}
