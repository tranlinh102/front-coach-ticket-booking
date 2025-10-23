import BookingHero from "@/components/features/HomePage/BookingHero/BookingHero";
import Highlights from "@/components/features/HomePage/Highlights";
import DownloadSection from "@/components/features/HomePage/DownloadSection";
import BookingPromo from "@/components/features/HomePage/BookingPromo";
import BookingFAQ from "@/components/features/HomePage/BookingFAQ";

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
