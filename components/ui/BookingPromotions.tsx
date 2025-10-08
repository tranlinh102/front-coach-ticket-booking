"use client";

import { useState } from "react";

export default function BookingPromotions() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const copyCode = async (code: string) => {
        try {
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
        console.error("Failed to copy code:", err);
        }
    };

    const promotionList = [
        {
            id: 1,
            gradient: 'from-blue-500 to-indigo-600',
            title: 'Tiết kiệm tới 30% khi đặt vé xe lần đầu',
            subtitle: 'Hiệu lực đến 31 tháng 12',
            code: 'DAUTIEN',
            img: '/images/icon-secure-payment.svg',
        },
        {
            id: 2,
            gradient: 'from-teal-400 to-teal-600',
            title: 'Giảm ngay 20% cho chuyến đi cuối tuần',
            subtitle: 'Áp dụng đến 15 tháng 11',
            code: 'WEEKEND',
            img: '/images/icon-secure-payment.svg',
        },
        {
            id: 3,
            gradient: 'from-orange-400 to-orange-600',
            title: 'Ưu đãi 40% cho nhóm 4 người',
            subtitle: 'Chỉ trong tháng này',
            code: 'GROUP40',
            img: '/images/icon-secure-payment.svg',
        },
    ];

  return (
    <section className="relative -mt-20 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 uppercase">Ưu đãi đang hot</h2>
              <button className="cursor-pointer text-base font-bold px-4 py-2 rounded-full border border-gray-300 text-blue-700 hover:bg-gray-50 hover:shadow-lg">Xem tất cả</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {promotionList.map((p) => (
                <div key={p.id} className={`rounded-2xl overflow-hidden shadow-md`}>
                  <div className={`bg-gradient-to-br ${p.gradient} p-5 text-white rounded-2xl h-full`}> 
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center overflow-hidden">
                          <img src={p.img} alt="promo" className="w-12 h-12 object-cover" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold leading-tight">
                          {p.title}
                        </h4>
                        <p className="text-sm opacity-90 mt-2">{p.subtitle}</p>

                        <div className="mt-4 flex items-center gap-3">
                          <div className="px-3 py-1 border-2 border-dashed border-white rounded-md text-xs font-semibold tracking-wider">{p.code}</div>
                          <button onClick={() => copyCode(p.code)} aria-label={`Copy ${p.code}`} className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                            {copiedCode === p.code ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>    
  );
}
