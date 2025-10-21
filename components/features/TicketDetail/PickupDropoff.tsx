// Thêm "use client" ở đầu file vì chúng ta dùng useState
"use client";

import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho lựa chọn
type LocationType = 'station' | 'shuttle';

// Component Icon Info (đã style bằng Tailwind)
const InfoIcon: React.FC = () => (
  <span className="inline-flex items-center justify-center w-[18px] h-[18px] border-[1.5px] border-orange-600 rounded-full text-orange-600 text-xs font-bold ml-2 cursor-pointer">
    ⓘ
  </span>
);

const PickupDropoff: React.FC = () => {
  // State cho điểm đón
  const [pickupType, setPickupType] = useState<LocationType>('station');
  const [pickupLocation, setPickupLocation] = useState<string>('BX Miền Tây');

  // State cho điểm trả
  const [dropoffType, setDropoffType] = useState<LocationType>('station');
  const [dropoffLocation, setDropoffLocation] = useState<string>('NGÃ TƯ GA');

  // Hard-code thời gian
  const pickupTime = '10:45 21/10/2025';

  // Event Handlers với Type
  const handlePickupTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickupType(e.target.value as LocationType);
  };

  const handleDropoffTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropoffType(e.target.value as LocationType);
  };

  const handlePickupLocationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPickupLocation(e.target.value);
  };

  const handleDropoffLocationChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropoffLocation(e.target.value);
  };

  return (
    <div className="max-w-3xl p-6 mx-auto bg-white border border-gray-100 rounded-lg shadow-sm font-sans">
      {/* Tiêu đề chính */}
      <h2 className="flex items-center text-xl font-semibold text-gray-800">
        Thông tin đón trả <InfoIcon />
      </h2>

      {/* Wrapper 2 cột */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* CỘT ĐIỂM ĐÓN */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            ĐIỂM ĐÓN
          </h3>

          {/* Nhóm Radio Button */}
          <div className="flex items-center gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="pickupType"
                value="station"
                className="hidden peer"
                checked={pickupType === 'station'}
                onChange={handlePickupTypeChange}
              />
              <span className="w-5 h-5 border-2 border-gray-300 rounded-full p-[3px] bg-clip-content peer-checked:border-orange-600 peer-checked:bg-orange-600 transition-all"></span>
              <span className="ml-2 text-base text-gray-700 peer-checked:text-orange-600 peer-checked:font-medium">
                Bến xe/VP
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="pickupType"
                value="shuttle"
                className="hidden peer"
                checked={pickupType === 'shuttle'}
                onChange={handlePickupTypeChange}
              />
              <span className="w-5 h-5 border-2 border-gray-300 rounded-full p-[3px] bg-clip-content peer-checked:border-orange-600 peer-checked:bg-orange-600 transition-all"></span>
              <span className="ml-2 text-base text-gray-700 peer-checked:text-orange-600 peer-checked:font-medium">
                Trung chuyển
              </span>
            </label>
            <span className="ml-auto">
              <InfoIcon />
            </span>
          </div>

          {/* Select Dropdown */}
          <div className="relative">
            <select
              value={pickupLocation}
              onChange={handlePickupLocationChange}
              className="w-full p-3 font-medium text-gray-800 bg-gray-100 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="BX Miền Tây">BX Miền Tây</option>
              <option value="BX An Sương">BX An Sương</option>
              <option value="BX Miền Đông">BX Miền Đông</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 pointer-events-none">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>

          {/* Thông báo chi tiết (hiển thị có điều kiện) */}
          {pickupType === 'station' && (
            <p className="p-3 text-sm leading-relaxed text-gray-700 bg-orange-50 border border-orange-200 rounded-lg">
              Quý khách vui lòng có mặt tại Bến xe/Văn Phòng
              <strong className="font-semibold text-black">
                {' '}
                {pickupLocation}
              </strong>{' '}
              Trước
              <strong className="font-semibold text-red-600">
                {' '}
                {pickupTime}
              </strong>
              {' '}để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.
            </p>
          )}
        </div>

        {/* CỘT ĐIỂM TRẢ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            ĐIỂM TRẢ
          </h3>

          {/* Nhóm Radio Button */}
          <div className="flex items-center gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="dropoffType"
                value="station"
                className="hidden peer"
                checked={dropoffType === 'station'}
                onChange={handleDropoffTypeChange}
              />
              <span className="w-5 h-5 border-2 border-gray-300 rounded-full p-[3px] bg-clip-content peer-checked:border-orange-600 peer-checked:bg-orange-600 transition-all"></span>
              <span className="ml-2 text-base text-gray-700 peer-checked:text-orange-600 peer-checked:font-medium">
                Bến xe/VP
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="dropoffType"
                value="shuttle"
                className="hidden peer"
                checked={dropoffType === 'shuttle'}
                onChange={handleDropoffTypeChange}
              />
              <span className="w-5 h-5 border-2 border-gray-300 rounded-full p-[3px] bg-clip-content peer-checked:border-orange-600 peer-checked:bg-orange-600 transition-all"></span>
              <span className="ml-2 text-base text-gray-700 peer-checked:text-orange-600 peer-checked:font-medium">
                Trung chuyển
              </span>
            </label>
          </div>

          {/* Select Dropdown */}
          <div className="relative">
            <select
              value={dropoffLocation}
              onChange={handleDropoffLocationChange}
              className="w-full p-3 font-medium text-gray-800 bg-gray-100 border border-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="NGÃ TƯ GA">NGÃ TƯ GA</option>
              <option value="Công viên 23/9">Công viên 23/9</option>
              <option value="Sân bay Tân Sơn Nhất">Sân bay Tân Sơn Nhất</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 pointer-events-none">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;