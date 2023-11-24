import FeaturedServices from "./_components/featured-services";
import Hero from "./_components/hero";
import MapView from "./_components/map-view";

export default function Home() {
  return (
    <main className="space-y-5">
      <Hero />
      <FeaturedServices />
      <div className="grid md:grid-cols-12 gap-5">
        <div className="md:col-span-6 lg:col-span-8 bg-red-50 p-5 rounded-xl">
          Section 1
        </div>
        <div className="md:col-span-6 lg:col-span-4 bg-red-100 p-5 rounded-xl">
          Section 2
        </div>
        <div className="md:col-span-6 lg:col-span-6 bg-red-200 p-5 rounded-xl">
          Section 3
        </div>
        <div className="md:col-span-6 lg:col-span-6 bg-red-300 p-5 rounded-xl">
          Section 4
        </div>
        <div className="md:col-span-6 lg:col-span-12 bg-red-400 p-5 rounded-xl">
          Section 5
        </div>
      </div>
    </main>
  );
}
