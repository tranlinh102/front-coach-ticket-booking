"use client";

import { useParams, useRouter } from "next/navigation";
import { useTripStore } from "@/store/tripStore";
import { useEffect, useState } from "react";
import PickupDropoff from "@/components/features/TicketDetail/PickupDropoff";
import CustomerInfo from "@/components/features/TicketDetail/CustomerInfo";
import SeatSelector from "@/components/features/TicketDetail/SeatSelector";
import TripSummary from "@/components/features/TicketDetail/TripSummary";
import { ChevronLeftIcon } from "@/components/ui/Icon";

export default function TripDetailPage() {
  const { id } = useParams();
  const { selectedTrip } = useTripStore();
  const [trip, setTrip] = useState<typeof selectedTrip>(null);
  const router = useRouter();

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
      <div className="space-y-12">
        {/* Nội dung chính */}
        <div className="max-w-7xl mx-auto px-6 py-5 items-center">
          <button
            onClick={() => router.back()}
            className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline transition mb-2"
          >
            <ChevronLeftIcon />
            <span>Quay lại</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-8">
              <PickupDropoff />
              <SeatSelector />
              <CustomerInfo />
            </div>

            <div className="w-full lg:w-96">
              <TripSummary />
            </div>
          </div>
        </div>
      </div>
    );
  }
