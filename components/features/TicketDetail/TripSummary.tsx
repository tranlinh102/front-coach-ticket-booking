import React from 'react';

interface InfoRowProps {
  label: string;
  value: string | React.ReactNode;
  valueClassName?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  valueClassName = 'text-gray-900 font-medium', 
}) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-gray-600">{label}</span>
    <span className={valueClassName}>{value}</span>
  </div>
);

const TripSummary: React.FC = () => {
  const tripInfo = {
    route: 'Mien Tay - Da Lat',
    time: '11:00 21/10/2025',
    seatCount: 0,
    seats: '',
    dropoff: '',
    totalTicketPrice: 0,
  };

  const priceInfo = {
    basePrice: 0,
    fee: 0,
    total: 0,
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-6 sticky top-4 self-start">
      {/* CARD: THÔNG TIN LƯỢT ĐI */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Thông tin lượt đi
        </h3>
        <div className="flex flex-col gap-3">
          <InfoRow label="Tuyến xe" value={tripInfo.route} />
          <InfoRow
            label="Thời gian xuất bến"
            value={tripInfo.time}
            valueClassName="text-green-600 font-medium"
          />
          <InfoRow label="Số lượng ghế" value={`${tripInfo.seatCount} Ghế`} />
          <InfoRow label="Số ghế" value={tripInfo.seats || '...'} />
          <InfoRow label="Điểm trả khách" value={tripInfo.dropoff || '...'} />
          <InfoRow
            label="Tổng tiền lượt đi"
            value={`${tripInfo.totalTicketPrice.toLocaleString('vi-VN')}đ`}
            valueClassName="text-gray-900 font-medium"
          />
        </div>
      </div>

      {/* CARD: CHI TIẾT GIÁ */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5">
        <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
          Chi tiết giá
        </h3>
        
        <div className="flex flex-col gap-3">
          <InfoRow
            label="Giá vé lượt đi"
            value={`${priceInfo.basePrice.toLocaleString('vi-VN')}đ`}
          />
          <InfoRow
            label="Phí thanh toán"
            value={`${priceInfo.fee.toLocaleString('vi-VN')}đ`}
          />
        </div>

        {/* Đường kẻ ngang */}
        <hr className="my-4 border-t border-gray-200" />

        {/* Tổng tiền */}
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-800">Tổng tiền</span>
          <span className="text-xl font-bold text-green-600">
            {`${priceInfo.total.toLocaleString('vi-VN')}đ`}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-full bg-[var(--brand)] px-8 py-2 text-white hover:bg-[var(--brand-dark)] font-bold transition"
      >
        Thanh toán
      </button>
    </div>
  );
};

export default TripSummary;