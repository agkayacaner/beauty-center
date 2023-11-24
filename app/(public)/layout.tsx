import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Props = {
  children: React.ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl px-5 md:mx-auto py-5 min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
