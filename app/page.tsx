import BookingHero from "@/components/sections/BookingHero";
import Highlights from "@/components/sections/Highlights";
import DownloadSection from "@/components/sections/DownloadSection";
import BookingPromo from "@/components/sections/BookingPromo";
import BookingFAQ from "@/components/sections/BookingFAQ";

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
