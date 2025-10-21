"use client";

import { ChevronDownIcon } from '@/components/ui/Icon';
import React, { useState } from 'react';

const PickupDropoff: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState<string>('BX Miền Tây');
  const [dropoffLocation, setDropoffLocation] = useState<string>('NGÃ TƯ GA');

  const pickupTime = '10:45 21/10/2025';

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
    <div className="max-w-4xl p-6 mx-auto bg-white border border-gray-100 rounded-lg shadow-md">
      <h2 className="flex items-center text-xl font-semibold text-gray-800">
        Thông tin đón trả
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            ĐIỂM ĐÓN
          </h3>

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
              <ChevronDownIcon />
            </div>
          </div>

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
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase">
            ĐIỂM TRẢ
          </h3>

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
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;