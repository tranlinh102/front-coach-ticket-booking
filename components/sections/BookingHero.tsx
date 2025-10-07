export default function BookingHero() {
  return (
    <section className="relative bg-[url('/images/BookingHeroImg.jpg')] bg-cover bg-center py-50 text-white">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
        <div className="bg-white text-gray-800 rounded-2xl shadow-lg flex flex-wrap md:flex-nowrap items-center overflow-hidden">
          <div className="w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0 md:border-r">
              <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right-from-arc">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15 12h-12" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M12 21a9 9 0 0 0 0 -18" />
                </svg>
              </div>


              <div className="w-[80%] flex flex-col justify-center px-3 py-2">
                <label className="text-gray-600 text-left">Nơi đi</label>
                <input type="text" placeholder="Nhập thành phố/địa điểm" className="w-full focus:outline-none mt-1" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0 md:border-r">
              <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left-from-arc">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 12h12" />
                  <path d="M17 16l4 -4l-4 -4" />
                  <path d="M12 3a9 9 0 1 0 0 18" />
                </svg>
              </div>


              <div className="w-[80%] flex flex-col justify-center px-3 py-2">
                <label className="text-gray-600 text-left">Nơi đến</label>
                <input type="text" placeholder="Nhập thành phố/địa điểm" className="w-full focus:outline-none mt-1" />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex w-full h-full border-b md:border-b-0 md:border-r">
              <div className="w-[20%] flex items-center justify-center px-4 py-3">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-event">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3l0 4" />
                  <path d="M8 3l0 4" />
                  <path d="M4 11l16 0" />
                  <path d="M8 15h2v2h-2z" />
                </svg>
              </div>


              <div className="w-[80%] flex flex-col justify-center px-3 py-2">
                <label className="text-gray-600 text-left">Ngày đi</label>
                <input type="date" className="w-full focus:outline-none" />
              </div>
            </div>
          </div>

          <button className="font-bold cursor-pointer text-white p-4 md:p-8 md:rounded-r-2xl transition w-full md:w-auto whitespace-nowrap min-w-max" style={{ backgroundColor: 'var(--brand)' }}>
            Tìm kiếm xe khách
          </button>
        </div>
      </div>
    </section>
  );
}
