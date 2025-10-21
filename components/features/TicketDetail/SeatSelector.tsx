// Thêm "use client" ở đầu file vì chúng ta dùng useState
"use client";

import React, { useState } from 'react';

// --- DỮ LIỆU GHẾ (DEMO) ---
// Layout ghế tầng dưới: mảng 2 chiều, 'null' là lối đi/khoảng trống
const lowerDeckLayout = [
  ['A01', 'A02', null],
  ['A03', 'A04', 'A05'],
  ['A06', 'A07', 'A08'],
  ['A09', 'A10', 'A11'],
  ['A12', 'A13', 'A14'],
  ['A15', 'A16', 'A17'],
];

// Layout ghế tầng trên
const upperDeckLayout = [
  ['B01', 'B02', null],
  ['B03', 'B04', 'B05'],
  ['B06', 'B07', 'B08'],
  ['B09', 'B10', 'B11'],
  ['B12', 'B13', 'B14'],
  ['B15', 'B16', 'B17'],
];

// Danh sách các ghế ĐÃ BÁN (dựa theo ảnh)
const soldSeats = new Set([
  'A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11',
  'A12', 'A13', 'A14', 'A15', 'A16', // A17 trống
  'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11',
  'B12', 'B13', 'B14', 'B15', 'B16', // B17 trống
]);
// ------------------------------

// Props cho từng item ghế
type SeatItemProps = {
  seatId: string | null;
  isSelected: boolean;
  isSold: boolean;
  onSelect: (id: string) => void;
};

// Component con cho MỖI CHIẾC GHẾ
const SeatItem: React.FC<SeatItemProps> = ({
  seatId,
  isSelected,
  isSold,
  onSelect,
}) => {
  // 1. Nếu seatId là null, render khoảng trống (lối đi)
  if (!seatId) {
    return <div className="w-12 h-10"></div>;
  }

  // 2. Xác định style dựa trên trạng thái
  let seatStyle =
    'bg-white border-blue-500 text-blue-600 cursor-pointer hover:bg-blue-50'; // 1. Trống (Available)

  if (isSold) {
    seatStyle = 'bg-gray-200 border-gray-200 text-gray-500 cursor-not-allowed'; // 2. Đã bán (Sold)
  }

  if (isSelected) {
    seatStyle = 'bg-pink-100 border-pink-400 text-pink-600 cursor-pointer'; // 3. Đang chọn (Selecting)
  }

  // 3. Xử lý click
  const handleClick = () => {
    if (!isSold) {
      onSelect(seatId);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSold}
      className={`w-12 h-10 flex items-center justify-center rounded-md border text-sm font-medium transition-colors ${seatStyle}`}
    >
      {seatId}
    </button>
  );
};

// Component con cho CHÚ THÍCH (Legend)
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

// Component CHÍNH
const SeatSelector: React.FC = () => {
  // State quản lý các ghế ĐANG CHỌN (dùng Set để tối ưu)
  const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());

  // Hàm xử lý khi chọn/bỏ chọn ghế
  const handleSelectSeat = (seatId: string) => {
    // Tạo một bản sao của Set
    const newSelectedSeats = new Set(selectedSeats);

    if (newSelectedSeats.has(seatId)) {
      newSelectedSeats.delete(seatId); // Bỏ chọn nếu đã chọn
    } else {
      newSelectedSeats.add(seatId); // Chọn nếu chưa chọn
    }

    setSelectedSeats(newSelectedSeats);
  };

  return (
    <div className="max-w-4xl p-6 mx-auto bg-white border border-gray-100 rounded-lg shadow-sm font-sans">
      {/* Tiêu đề */}
      <div className="flex items-center gap-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Chọn ghế</h2>
        <a
          href="#"
          className="text-blue-600 hover:underline font-medium"
        >
          Thông tin xe
        </a>
      </div>

      {/* Wrapper chính: chia Sơ đồ ghế và Chú thích */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* === PHẦN SƠ ĐỒ GHẾ === */}
        <div className="flex gap-8">
          
          {/* TẦNG DƯỚI */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Tầng dưới
            </h3>
            <div className="flex flex-col gap-2">
              {lowerDeckLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2">
                  {row.map((seatId) => (
                    <SeatItem
                      key={seatId || `empty-lower-${rowIndex}-${Math.random()}`}
                      seatId={seatId}
                      isSelected={seatId ? selectedSeats.has(seatId) : false}
                      isSold={seatId ? soldSeats.has(seatId) : false}
                      onSelect={handleSelectSeat}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* TẦNG TRÊN */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Tầng trên
            </h3>
            <div className="flex flex-col gap-2">
              {upperDeckLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-2">
                  {row.map((seatId) => (
                    <SeatItem
                      key={seatId || `empty-upper-${rowIndex}-${Math.random()}`}
                      seatId={seatId}
                      isSelected={seatId ? selectedSeats.has(seatId) : false}
                      isSold={seatId ? soldSeats.has(seatId) : false}
                      onSelect={handleSelectSeat}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* === PHẦN CHÚ THÍCH === */}
        <div className="flex flex-col gap-4 pt-12"> {/* pt-12 để căn lề giống ảnh */}
          <LegendItem colorClass="bg-gray-200 border border-gray-200" label="Đã bán" />
          <LegendItem colorClass="bg-blue-100 border border-blue-100" label="Còn trống" />
          <LegendItem colorClass="bg-pink-100 border border-pink-100" label="Đang chọn" />
        </div>

      </div>
    </div>
  );
};

export default SeatSelector;