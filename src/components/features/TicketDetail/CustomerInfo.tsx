"use client";

import React, { useState } from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type,
  value,
  onChange,
  placeholder,
}) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
      <span className="text-red-600 ml-1">*</span>
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent"
    />
  </div>
);

const CustomerInfo: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="max-w-5xl p-6 mx-auto bg-white border border-gray-100 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CỘT BÊN TRÁI: FORM THÔNG TIN */}
        <div className="flex flex-col gap-5">
          <h2 className="flex items-center text-xl font-semibold text-gray-800">
            Thông tin khách hàng
          </h2>

          <form className="flex flex-col gap-4">
            <FormField
              label="Họ và tên"
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <FormField
              label="Số điện thoại"
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <FormField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </div>

        {/* CỘT BÊN PHẢI: ĐIỀU KHOẢN & LƯU Ý */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-medium text-[var(--brand)] uppercase">
            ĐIỀU KHOẢN & LƯU Ý
          </h2>

          <div className="space-y-3 text-sm text-gray-800">
            <p className="leading-relaxed">
              (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít
              nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán
              vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINES.
              Vui lòng liên hệ Trung tâm tổng đài{' '}
              <strong className="font-bold text-[var(--brand-dark)]">1900 6067</strong> để
              được hỗ trợ.
            </p>
            <p className="leading-relaxed">
              (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng
              đài trung chuyển{' '}
              <strong className="font-bold text-[var(--brand-dark)]">1900 6918</strong>{' '}
              trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những
              điểm xe trung chuyển không thể tới được.
            </p>
            <p className="leading-relaxed">
              (*) Nếu quý khách có nhu cầu đi chuyến chặng đường ngắn hơn so
              với hành trình, vui lòng gọi Tổng đài{' '}
              <strong className="font-bold text-[var(--brand-dark)]">1900 6067</strong> để
              được hướng chính sách giá vé tốt nhất.
            </p>
          </div>
        </div>

        <div className="flex items-center col-span-2">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-4 h-4 text-[var(--brand-dark)] text-[var(--brand-dark)] border-gray-300 rounded focus:ring-[var(--brand-dark)]"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            Chấp nhận{' '}
            <span className="text-[var(--brand-dark)] font-medium cursor-pointer hover:underline">
              điều khoản đặt vé
            </span>{' '}&{' '}
            <span className="text-[var(--brand-dark)] font-medium cursor-pointer hover:underline">
              chính sách bảo mật
            </span>{' '}
            thông tin của LongDistanceBuses.
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;