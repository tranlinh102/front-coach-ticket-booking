import SearchFilter from "@/components/pages/TicketSearch/SearchFilter";
import SearchTicketForm from "@/components/pages/TicketSearch/SearchTicketForm";
import TripCard from "@/components/pages/TicketSearch/TripCard";

const trips = [
    {
      id: 1,
      startTime: "00:02",
      endTime: "08:02",
      from: "Bến Xe An Sương",
      to: "Bến Xe Đà Lạt",
      duration: "8 giờ",
      type: "Limousine",
      available: 32,
      price: "290.000đ",
    },
    {
      id: 2,
      startTime: "00:30",
      endTime: "08:30",
      from: "Bến Xe Miền Tây",
      to: "Bến Xe Đà Lạt",
      duration: "8 giờ",
      type: "Limousine",
      available: 28,
      price: "290.000đ",
    },
    {
      id: 3,
      startTime: "00:35",
      endTime: "08:35",
      from: "BX Miền Đông Mới",
      to: "Bến Xe Đà Lạt",
      duration: "8 giờ",
      type: "Limousine",
      available: 33,
      price: "290.000đ",
    },
  ];

export default function SearchPage() {
  return (
    <div className="space-y-12">
      <SearchTicketForm />

      <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        {/* Bộ lọc */}
        <SearchFilter />

        {/* Danh sách chuyến */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              TP. Hồ Chí Minh – Đà Lạt <span className="text-gray-500">(84)</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {trips.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
