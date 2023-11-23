import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CreateServiceForm } from "./_components/create-form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DataTableDemo } from "./_components/data-table";

export default function Page() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Hizmetler</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">
              <Plus className="mr-2" /> Yeni Hizmet
            </Button>
          </SheetTrigger>
          <SheetContent>
            <CreateServiceForm />
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Tüm Hizmetler</CardTitle>
            <CardDescription>
              Tüm hizmetlerinizi buradan görüntüleyebilirsiniz.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTableDemo />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
