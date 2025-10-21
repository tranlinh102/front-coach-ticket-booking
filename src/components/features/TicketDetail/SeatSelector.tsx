"use client";

import { CircleDenseIcon, CircleThinIcon } from '@/components/ui/Icon';
import React, { useEffect, useRef, useState } from 'react';

const scheduleData = [
  { time: "14:30", stop: "BX Miền Tây", address: "VP BX Miền Tây: 395 Kinh Dương Vương, P.An Lạc, Q.Bình Tân, TP.HCM", isFirst: true },
  { time: "13:30", stop: "205 Phạm Ngũ Lão", address: "VP Phạm Ngũ Lão: 205 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Q.1, TP.HCM" },
  { time: "13:30", stop: "Đồng Đen", address: "VP Đồng Đen: 288 Đồng Đen, P. 10, Q. Tân Bình, TP Hồ Chí Minh" },
  { time: "13:30", stop: "Lũy Bán Bích", address: "973 Lũy Bán Bích" },
  { time: "13:30", stop: "43 Nguyễn Cư Trinh", address: "43 Nguyễn Cư Trinh, Phường Phạm Ngũ Lão, Quận 1, TP Hồ Chí Minh" },
  { time: "13:30", stop: "BẠCH KHOA", address: "6B Đường số 2, Cư Xá Lữ Gia, Phường 15, Quận 11" },
];

const VehicleInfoPopover: React.FC = () => {
  return (
    <div
      className="absolute top-full right-0 mt-2 z-40 bg-white rounded-lg shadow-xl w-[410px] max-w-[90vw] border border-gray-200 overflow-hidden"
      onClick={(e) => e.stopPropagation()} 
    >
      <div className="max-h-[70vh]">
        {/* Timeline Lịch trình */}
        <div className="p-6 pb-0 relative overflow-y-auto max-h-[50vh]">
          {scheduleData.map((item, index) => (
            <div key={index} className="relative pb-6 flex">
              {/* Thời gian */}
              <span className="text-sm font-medium text-gray-600">
                {item.time}
              </span>
              
              {/* Nội dung điểm dừng */}
              <div className="relative flex flex-col border-l-2 border-gray-200 pl-6 ml-4">
                <h4 className="font-semibold text-gray-800">{item.stop}</h4>
                <p className="text-sm text-gray-500">{item.address}</p>

                {item.isFirst && (
                  <div className="absolute -left-[13px] top-0 text-green-500">
                    <CircleDenseIcon />
                  </div>
                )}

                {!item.isFirst && (
                  <div className="absolute -left-[13px] top-0 text-gray-400">
                    <CircleThinIcon />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lưu ý */}
        <div className="p-4 bg-gray-100 rounded-md text-sm text-gray-600 leading-relaxed max-h-[20vh]">
          <p className="font-semibold mb-2 text-gray-800">Lưu ý</p>
          <p>Thời gian các mốc lịch trình là thời gian dự kiến. Lịch trình này có thể thay đổi tuỳ vào tình hình thực tế xuất bến sớm hay trễ.</p>
        </div>
      </div>
    </div>
  );
};

type SeatStatus = "available" | "sold";
interface Seat {
  id: string;
  status: SeatStatus;
}

const lowerCol1: Seat[] = [
  { id: "A01", status: "sold" },
  { id: "A03", status: "sold" },
  { id: "A06", status: "sold" },
  { id: "A09", status: "sold" },
  { id: "A12", status: "available" },
  { id: "A15", status: "available" },
];

const lowerCol2: Seat[] = [
  { id: "A04", status: "available" },
  { id: "A07", status: "sold" },
  { id: "A10", status: "sold" },
  { id: "A13", status: "available" }, 
  { id: "A16", status: "available" },
];

const lowerCol3: Seat[] = [
  { id: "A02", status: "sold" },
  { id: "A05", status: "sold" },
  { id: "A08", status: "sold" },
  { id: "A11", status: "sold" },
  { id: "A14", status: "sold" },
  { id: "A17", status: "available" },
];

const upperCol1: Seat[] = [
  { id: "B01", status: "available" },
  { id: "B03", status: "available" },
  { id: "B06", status: "available" },
  { id: "B09", status: "available" },
  { id: "B12", status: "available" },
  { id: "B15", status: "available" },
];

const upperCol2: Seat[] = [
  { id: "B04", status: "available" },
  { id: "B07", status: "available" },
  { id: "B10", status: "available" },
  { id: "B13", status: "available" },
  { id: "B16", status: "available" },
];

const upperCol3: Seat[] = [
  { id: "B02", status: "available" },
  { id: "B05", status: "available" },
  { id: "B08", status: "available" },
  { id: "B11", status: "available" },
  { id: "B14", status: "available" },
  { id: "B17", status: "available" },
];

// Component CHÚ THÍCH (Legend)
type LegendItemProps = {
  colorClass: string;
  label: string;
};

const LegendItem: React.FC<LegendItemProps> = ({ colorClass, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-5 h-5 rounded ${colorClass}`}></div>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

const SeatSelector: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsModalOpen(false); 
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleSelectSeat = (seatId: string, status: SeatStatus) => {
    if (status === "sold") return;
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  return (
    <div className="relative max-w-4xl p-6 mx-auto bg-white border border-gray-100 rounded-lg shadow-md">
      {/* Tiêu đề */}
      <div className="flex items-center justify-between gap-6 mb-6 w-full">
        <h2 className="flex items-center text-xl font-semibold text-gray-800">Chọn ghế</h2>
        
        <div className="relative" ref={popoverRef}>
          <button
            type="button"
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="cursor-pointer text-blue-600 hover:underline font-medium"
          >
            Lịch trình
          </button>

          {isModalOpen && <VehicleInfoPopover />}
        </div>
      </div>

      {/* Sơ đồ ghế và Chú thích (giữ nguyên) */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* === SƠ ĐỒ GHẾ === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-lg">
          {/* Tầng dưới */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-3">Tầng dưới</h4>
            <div className="flex gap-2">
              {[lowerCol1, lowerCol2, lowerCol3].map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {col.map((seat) => {
                    const isSelected = selectedSeats.includes(seat.id);
                    const isDisabled = seat.status === "sold";
                    let seatClass = "bg-white border-blue-400 text-blue-500 hover:bg-blue-50";
                    if (isDisabled) seatClass = "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed";
                    if (isSelected) seatClass = "bg-orange-50 border-orange-400 text-orange-500";
                    return (
                      <button
                        key={seat.id}
                        onClick={() => handleSelectSeat(seat.id, seat.status)}
                        disabled={isDisabled}
                        className={`cursor-pointer w-12 h-8 text-xs rounded border flex items-center justify-center font-medium transition-colors ${seatClass}`}
                      >
                        {seat.id}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Tầng trên */}
          <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-3">Tầng trên</h4>
            <div className="flex gap-2">
              {[upperCol1, upperCol2, upperCol3].map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-2">
                  {col.map((seat) => {
                    const isSelected = selectedSeats.includes(seat.id);
                    const isDisabled = seat.status === "sold";
                    let seatClass = "bg-white border-blue-400 text-blue-500 hover:bg-blue-50";
                    if (isDisabled) seatClass = "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed";
                    if (isSelected) seatClass = "bg-orange-50 border-orange-400 text-orange-500";
                    return (
                      <button
                        key={seat.id}
                        onClick={() => handleSelectSeat(seat.id, seat.status)}
                        disabled={isDisabled}
                        className={`cursor-pointer w-12 h-8 text-xs rounded border flex items-center justify-center font-medium transition-colors ${seatClass}`}
                      >
                        {seat.id}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === CHÚ THÍCH === */}
        <div className="flex flex-col gap-4 pt-12"> 
          <LegendItem colorClass="bg-gray-100 border border-gray-300" label="Đã bán" />
          <LegendItem colorClass="bg-blue-100 border border-blue-300" label="Còn trống" />
          <LegendItem colorClass="bg-orange-100 border border-orange-300" label="Đang chọn" />
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;