"use client";

import { useState } from "react";

export default function NavBar() {
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
      <a
        href="#"
        className="px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
      >
        Vé xe khách
      </a>

      <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-1">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round" strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-cancel">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M18.364 5.636l-12.728 12.728" />
        </svg>
        Hủy vé
      </a>
      <a href="#" className="px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-1">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-help">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 17l0 .01" />
          <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
        </svg>
        Hỗ trợ
      </a>

      <div
        className="relative"
        onMouseEnter={() => setAccountOpen(true)}
        onMouseLeave={() => setAccountOpen(false)}
      >
        <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
          Tài khoản
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>

        {accountOpen && (
          <div className="absolute right-0 bg-white shadow-md rounded-lg py-2 w-40 text-sm text-gray-700 z-50">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Đăng nhập / Đăng ký
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
