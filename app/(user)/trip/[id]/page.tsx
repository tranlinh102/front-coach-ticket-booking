"use client";
import { useParams } from "next/navigation";
import { useTripStore } from "@/store/tripStore";
import { useEffect, useState } from "react";

export default function TripDetailPage() {
  const { id } = useParams();
  const { selectedTrip } = useTripStore();
  const [trip, setTrip] = useState<typeof selectedTrip>(null);

  useEffect(() => {
    if (selectedTrip) {
      setTrip(selectedTrip);
      console.log(selectedTrip);
    } else {
      // fallback: nếu reload hoặc truy cập trực tiếp
      (async () => {
        const data = await fetch(`/api/trip/${id}`).then((r) => r.json());
        setTrip(data);
      })();
    }
  }, [id, selectedTrip]);

  if (!trip) return <p>Đang tải...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        {trip.from} → {trip.to}
      </h1>
      <p>Giờ khởi hành: {trip.startTime}</p>
      <p>Giá vé: {trip.price.toLocaleString()}đ</p>
    </div>
  );
}
