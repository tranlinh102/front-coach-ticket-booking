"use client";

import DatePicker from "react-datepicker";
import { vi } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


export default function BookingSearchBox() {
    const [from, setFrom] = useState<string>("");
    const [to, setTo] = useState<string>("");

    const [suggestionsFrom, setSuggestionsFrom] = useState<{ id: number; name: string }[]>([]);
    const [suggestionsTo, setSuggestionsTo] = useState<{ id: number; name: string }[]>([]);

    const fromListRef = useRef<HTMLUListElement | null>(null);
    const toListRef = useRef<HTMLUListElement | null>(null);

    const [activeFrom, setActiveFrom] = useState<number>(-1);
    const [activeTo, setActiveTo] = useState<number>(-1);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    useEffect(() => {   
        if (activeFrom >= 0 && fromListRef.current) {
        const el = fromListRef.current.children[activeFrom] as HTMLElement | undefined;
        if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }, [activeFrom]);

    useEffect(() => {
        if (activeTo >= 0 && toListRef.current) {
        const el = toListRef.current.children[activeTo] as HTMLElement | undefined;
        if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }, [activeTo]);
  
    const locations = [
        { id: 1, name: "Hà Nội" },
        { id: 2, name: "Hải Phòng" },
        { id: 3, name: "Nam Định" },
        { id: 4, name: "Thanh Hóa" },
        { id: 5, name: "Nghệ An" },
        { id: 6, name: "Đà Nẵng" },
        { id: 7, name: "Huế" },
        { id: 8, name: "Nha Trang" },
        { id: 9, name: "TP. Hồ Chí Minh" },
        { id: 10, name: "Cần Thơ" },
    ];

    const handleInput = (value: string, type: "from" | "to") => {
        const filtered = locations.filter(loc =>
        loc.name.toLowerCase().includes(value.toLowerCase())
        );
        if (type === "from") {
        setFrom(value);
        setSuggestionsFrom(filtered);
        setActiveFrom(-1);
        } else {
        setTo(value);
        setSuggestionsTo(filtered);
        setActiveTo(-1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, type: "from" | "to") => {
        if (type === "from") {
        const len = suggestionsFrom.length;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveFrom(prev => (len === 0 ? -1 : (prev + 1) % len));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveFrom(prev => (len === 0 ? -1 : (prev <= 0 ? len - 1 : prev - 1)));
        } else if (e.key === "Enter") {
            if (activeFrom >= 0 && activeFrom < len) {
            selectSuggestion(suggestionsFrom[activeFrom].name, "from");
            setActiveFrom(-1);
            }
        } else if (e.key === "Escape") {
            setSuggestionsFrom([]);
            setActiveFrom(-1);
        }
        } else {
        const len = suggestionsTo.length;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveTo(prev => (len === 0 ? -1 : (prev + 1) % len));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveTo(prev => (len === 0 ? -1 : (prev <= 0 ? len - 1 : prev - 1)));
        } else if (e.key === "Enter") {
            if (activeTo >= 0 && activeTo < len) {
            selectSuggestion(suggestionsTo[activeTo].name, "to");
            setActiveTo(-1);
            }
        } else if (e.key === "Escape") {
            setSuggestionsTo([]);
            setActiveTo(-1);
        }
        }
    };

    const selectSuggestion = (name: string, type: "from" | "to") => {
        if (type === "from") {
          setFrom(name);
          setSuggestionsFrom([]);
        } else {
          setTo(name);
          setSuggestionsTo([]);
        }
      };
    
    const swapPlaces = () => {
        const prevFrom = from;
        const prevTo = to;
        setFrom(prevTo);
        setTo(prevFrom);
        // clear suggestion lists and active indices
        setSuggestionsFrom([]);
        setSuggestionsTo([]);
        setActiveFrom(-1);
        setActiveTo(-1);
    };

  return (
    <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg flex flex-wrap md:flex-nowrap items-center overflow-visible">
        <div className="relative w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0">
            <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right-from-arc">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M15 12h-12" />
                <path d="M7 8l-4 4l4 4" />
                <path d="M12 21a9 9 0 0 0 0 -18" />
                </svg>
            </div>


            <div className="w-[80%] flex flex-col justify-center px-3 py-2 relative">
                <label className="text-gray-600 text-left">Nơi đi</label>
                <input
                type="text"
                value={from}
                onChange={(e) => handleInput(e.target.value, "from")}
                onFocus={(e) => handleInput((e.target as HTMLInputElement).value, "from")}
                onBlur={() => { setSuggestionsFrom([]); setActiveFrom(-1); }}
                onKeyDown={(e) => handleKeyDown(e, "from")}
                placeholder="Nhập thành phố/địa điểm"
                className="w-full focus:outline-none mt-1"
                />
                {suggestionsFrom.length > 0 && (
                <ul ref={fromListRef} className="absolute bg-white border rounded-lg mt-1 w-full left-0 top-full max-h-40 overflow-auto z-50 text-left">
                    {suggestionsFrom.map((s, idx) => (
                    <li
                        key={s.id}
                        className={`px-3 py-1 cursor-pointer ${idx === activeFrom ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                        onMouseDown={() => selectSuggestion(s.name, "from")}
                        onMouseEnter={() => setActiveFrom(idx)}
                    >
                        {s.name}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            </div>
        </div>

        <div className="hidden md:border-r md:border-l md:flex items-center justify-center px-2">
            <button
            type="button"
            aria-label="Hoán đổi nơi đi và nơi đến"
            onClick={swapPlaces}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 mx-2 z-20"
            >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-transfer">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 10h-16l5.5 -6" />
                <path d="M4 14h16l-5.5 6" />
            </svg>
            </button>
        </div>

        <div className="relative w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0 md:border-r">
            <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-from-arc">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 12h12" />
                <path d="M17 16l4 -4l-4 -4" />
                <path d="M12 3a9 9 0 1 0 0 18" />
                </svg>
            </div>


            <div className="w-[80%] flex flex-col justify-center px-3 py-2 relative">
                <label className="text-gray-600 text-left">Nơi đến</label>
                <input
                type="text"
                value={to}
                onChange={(e) => handleInput(e.target.value, "to")}
                onFocus={(e) => handleInput((e.target as HTMLInputElement).value, "to")}
                onBlur={() => { setSuggestionsTo([]); setActiveTo(-1); }}
                onKeyDown={(e) => handleKeyDown(e, "to")}
                placeholder="Nhập thành phố/địa điểm"
                className="w-full focus:outline-none mt-1"
                />
                {suggestionsTo.length > 0 && (
                <ul ref={toListRef} className="absolute bg-white border rounded-lg mt-1 w-full left-0 top-full max-h-40 overflow-auto z-50 text-left">
                    {suggestionsTo.map((s, idx) => (
                    <li
                        key={s.id}
                        className={`px-3 py-1 cursor-pointer ${idx === activeTo ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                        onMouseDown={() => selectSuggestion(s.name, "to")}
                        onMouseEnter={() => setActiveTo(idx)}
                    >
                        {s.name}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0">
            {/* Icon */}
            <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event text-gray-600"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M16 3l0 4" />
                <path d="M8 3l0 4" />
                <path d="M4 11l16 0" />
                <path d="M8 15h2v2h-2z" />
                </svg>
            </div>

            {/* Datepicker */}
            <div className="w-[80%] flex flex-col justify-center px-3 py-2">
                <label className="text-gray-600 text-left mb-1">Ngày đi</label>

                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                locale={vi}
                placeholderText="Chọn ngày"
                minDate={new Date()}
                className="w-full focus:outline-none bg-transparent"
                />
            </div>
            </div>
        </div>

        <button
            className="font-bold cursor-pointer text-white p-4 md:p-8 md:rounded-r-2xl transition w-full md:w-auto whitespace-nowrap min-w-max bg-[var(--brand)] hover:bg-[var(--brand-dark)]"
        >
            Tìm kiếm xe khách
        </button>
        </div>
    </div>
  );
}
