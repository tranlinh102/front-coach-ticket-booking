import BookingHero from "@/components/pages/HomePage/BookingHero/BookingHero";
import Highlights from "@/components/pages/HomePage/Highlights";
import DownloadSection from "@/components/pages/HomePage/DownloadSection";
import BookingPromo from "@/components/pages/HomePage/BookingPromo";
import BookingFAQ from "@/components/pages/HomePage/BookingFAQ";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <BookingHero />
      <Highlights />
      <DownloadSection />
      <BookingPromo />
      <BookingFAQ />
    </div>
  );
}
