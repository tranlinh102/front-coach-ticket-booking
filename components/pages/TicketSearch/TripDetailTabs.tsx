"use client";

import { useState } from "react";

const tabs = [
  { id: "seat", label: "Chọn ghế" },
  { id: "schedule", label: "Lịch trình" },
  { id: "transfer", label: "Trung chuyển" },
  { id: "policy", label: "Chính sách" },
];

export default function TripDetailTabs() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="w-full rounded-xl overflow-hidden bg-white">
      {/* Tabs Header */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-medium transition-all border-b-2 ${
              activeTab === tab.id
                ? "border-[#f15a24] text-[#f15a24]"
                : "border-transparent text-gray-700 hover:text-[#f15a24]"
            }`}
          >
            {tab.label}
          </button>
        ))}
        <button className="ml-auto bg-[#f15a24] text-white px-4 py-2 rounded-full m-2 hover:bg-[#e04e18] transition">
          Chọn chuyến
        </button>
      </div>

      {/* Tabs Content */}
        {activeTab === "" && (
            <div></div>
        )}
        {activeTab !== "" && (
            <div className="p-5 text-sm text-gray-700">
                {activeTab === "seat" && (
                <div>
                    <h3 className="font-semibold mb-2">Sơ đồ ghế (demo)</h3>
                    <p className="text-gray-500">
                    Hiển thị danh sách ghế, trạng thái “Còn trống”, “Đã bán”, “Đang chọn”.
                    </p>
                </div>
                )}

                {activeTab === "schedule" && (
                <div>
                    <h3 className="font-semibold mb-2">Lịch trình chuyến xe</h3>
                    <ul className="space-y-1 text-gray-600">
                    <li>00:00 — BX Miền Tây</li>
                    <li>23:00 — BX An Sương</li>
                    <li>23:45 — 205 Phạm Ngũ Lão</li>
                    </ul>
                </div>
                )}

                {activeTab === "transfer" && (
                <div>
                    <h3 className="font-semibold mb-2">Đón / trả tận nơi</h3>
                    <ul className="list-disc list-inside">
                    <li>Thời gian nhận khách: Trước 4 tiếng.</li>
                    <li>Chuẩn bị trước 2–3 tiếng.</li>
                    <li>Xe trung chuyển sẽ đón khách đầu hẻm / đầu đường.</li>
                    </ul>
                </div>
                )}

                {activeTab === "policy" && (
                <div>
                    <h3 className="font-semibold mb-2">Yêu cầu khi lên xe</h3>
                    <ul className="list-disc list-inside">
                    <li>Có mặt trước 30 phút để làm thủ tục lên xe.</li>
                    <li>Không mang thức ăn, đồ uống có mùi lên xe.</li>
                    <li>Không hút thuốc hoặc sử dụng chất kích thích.</li>
                    </ul>
                </div>
                )}
            </div>
        )}
    </div>
  );
}
