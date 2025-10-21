"use client";
import { useParams } from "next/navigation";
import { useTripStore } from "@/store/tripStore";
import { useEffect, useState } from "react";
import PickupDropoff from "@/components/features/TicketDetail/PickupDropoff";
import CustomerInfo from "@/components/features/TicketDetail/CustomerInfo";
import SeatSelector from "@/components/features/TicketDetail/SeatSelector";
import TripSummary from "@/components/features/TicketDetail/TripSummary";

export default function TripDetailPage() {
  const { id } = useParams();
  const { selectedTrip } = useTripStore();
  const [trip, setTrip] = useState<typeof selectedTrip>(null);

  // useEffect(() => {
  //   if (selectedTrip) {
  //     setTrip(selectedTrip);
  //     console.log(selectedTrip);
  //   } else {
  //     // fallback: nếu reload hoặc truy cập trực tiếp
  //     (async () => {
  //       const data = await fetch(`/api/trip/${id}`).then((r) => r.json());
  //       setTrip(data);
  //     })();
  //   }
  // }, [id, selectedTrip]);

  // if (!trip) return <p>Đang tải...</p>;

  return (
    // div ngoài cùng dùng để tạo khoảng cách giữa các KHỐI lớn
    <div className="space-y-12 p-4 md:p-8">
      
      {/* KHỐI 1: Chọn điểm đón (Full-width) */}

      {/* KHỐI 2: Layout 2 cột (flex) */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cột trái (co giãn) */}
        <div className="flex-1 space-y-8">
          <PickupDropoff />
          <SeatSelector />
          <CustomerInfo />
        </div>

        {/* Cột phải (cố định chiều rộng trên desktop) */}
        <div className="w-full lg:w-96">
          <TripSummary />
        </div>

      </div>

      {/* Bạn có thể thêm các khối full-width khác ở đây */}
    </div>
  );
}
