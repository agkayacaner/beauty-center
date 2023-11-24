import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <main className="flex max-w-7xl p-5 md:mx-auto md:py-5 min-h-screen">
        <Sidebar />
        <div className="flex-1 md:border-l md:pl-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
