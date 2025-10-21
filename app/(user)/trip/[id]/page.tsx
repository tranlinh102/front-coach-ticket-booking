"use client";
import { useParams } from "next/navigation";
import { useTripStore } from "@/store/tripStore";
import { useEffect, useState } from "react";

export default function TripDetailPage() {
  const { id } = useParams();
  const { trips } = useTripStore();
  const [trip, setTrip] = useState<any>(null);

  useEffect(() => {
    // Lấy dữ liệu từ store nếu có
    const found = trips.find((t) => t.id === Number(id));
    if (found) setTrip(found);
    else {
      // fallback: nếu reload hoặc truy cập trực tiếp
      (async () => {
        const data = await fetch(`/api/trips/${id}`).then((r) => r.json());
        setTrip(data);
      })();
    }
  }, [id, trips]);

  if (!trip) return <p>Đang tải...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        {trip.from} → {trip.to}
      </h1>
      <p>Giờ khởi hành: {trip.time}</p>
      <p>Giá vé: {trip.price.toLocaleString()}đ</p>
    </div>
  );
}
