"use client";

import { useState } from "react";

export default function SearchTicketForm() {
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [from, setFrom] = useState("TP. Hồ Chí Minh");
  const [to, setTo] = useState("Đà Lạt");
  const [date, setDate] = useState("2025-10-18");
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tìm chuyến xe từ ${from} đến ${to} (${date}), số vé: ${tickets}`);
  };

  return (
    <section className="container max-w-7xl mx-auto px-6 text-left py-5 mb-0">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-[var(--brand)] bg-white p-6 shadow-sm"
        style={{ outline: "8px solid rgba(127,216,88,.1)" }}
      >
        {/* Trip type */}
        <div className="mb-4 flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
              className="text-[var(--brand)] accent-[var(--brand)]"
            />
            <span>Một chiều</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={tripType === "roundtrip"}
              onChange={() => setTripType("roundtrip")}
              className="text-[var(--brand)] accent-[var(--brand)]"
            />
            <span>Khứ hồi</span>
          </label>
          <a href="#" className="ml-auto text-sm text-[var(--brand)] hover:underline">
            Hướng dẫn mua vé
          </a>
        </div>

        {/* Main inputs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* From */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Điểm đi</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          {/* To */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Điểm đến</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Ngày đi</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          {/* Tickets */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Số vé</label>
            <select
              value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="rounded-2xl bg-[var(--brand)] px-8 py-2 text-white hover:bg-[var(--brand-dark)] font-bold transition"
          >
            Tìm chuyến xe
          </button>
        </div>

      </form>
    </section>
  );
}
