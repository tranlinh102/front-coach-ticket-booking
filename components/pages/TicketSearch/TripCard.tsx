"use client";

import { useState } from "react";
import TripDetailTabs from "./TripDetailTabs";

interface TripCardProps {
  startTime: string;
  endTime: string;
  from: string;
  to: string;
  duration: string;
  type: string;
  available: number;
  price: string;
}

export default function TripCard({
  startTime,
  endTime,
  from,
  to,
  duration,
  type,
  available,
  price,
}: TripCardProps) {
  const [showTabs, setShowTabs] = useState(false); // 👈 quản lý hiển thị tab

  const toggleTabs = () => setShowTabs(!showTabs);

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-3 transition-all">
      {/* Thông tin chuyến */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold">{startTime}</div>
          <p className="text-sm text-gray-500">{from}</p>
        </div>

        <div className="text-center text-gray-500">
          <div className="text-sm">{duration}</div>
          <div className="text-xs">(Asian/Ho Chi Minh)</div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold">{endTime}</div>
          <p className="text-sm text-gray-500">{to}</p>
        </div>

        <div className="flex gap-4 text-gray-500">
          <span>{type}</span>
          <span className="text-green-600 font-medium">{available} chỗ trống</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-orange-600 text-lg">{price}</span>
        </div>
      </div>

      {/* Hàng nút tab */}
      <div className="flex gap-4 text-gray-500 text-sm border-t pt-3">
        <TripDetailTabs />
      </div>
    </div>
  );
}
