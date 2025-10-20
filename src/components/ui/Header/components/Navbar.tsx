"use client";

import { HelpIcon, UserIcon, ChevronDownIcon } from "@/components/ui/Icon";
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
        <HelpIcon />
        Hỗ trợ
      </a>

      <div
        className="relative"
        onMouseEnter={() => setAccountOpen(true)}
        onMouseLeave={() => setAccountOpen(false)}
      >
        <button className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200">
          <UserIcon />
          Tài khoản
          <ChevronDownIcon />
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
