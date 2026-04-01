import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinsSection from "@/components/CabinsSection";
import BookingCalendar from "@/components/BookingCalendar";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CabinsSection />
      <BookingCalendar />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
}
