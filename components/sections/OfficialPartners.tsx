import Image from "next/image";

const partners = [
  { name: "Futa", logo: "/partners/futa.webp", url: "https://futabus.vn/" },
  { name: "Hoang Long", logo: "/partners/hoanglong.png", url: "https://hoanglongasia.com/" },
  { name: "InterBusLines", logo: "/partners/interbus.png", url: "https://interbuslines.com.vn/" },
  { name: "LongVan Limousine", logo: "/partners/longvan.png", url: "https://longvanlimousine.vn/" },
  { name: "LuxuryTrans", logo: "/partners/luxurytrans.png", url: "https://luxurytrans.vn/" },
  { name: "Nam Hai Limousine", logo: "/partners/namhai.png", url: "https://namhailimousine.vn/" },
  { name: "VieLimousine", logo: "/partners/vielimousine.png", url: "https://vielimousine.vn/" },
];

export default function OfficialPartners() {
  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-6 text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 uppercase">
          ĐỐI TÁC CHÍNH THỨC
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg border border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all p-4 flex flex-col items-center justify-center"
            >
              <div className="relative w-24 h-12 mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition"
                />
              </div>
              <p className="text-sm text-gray-700 whitespace-nowrap" title={partner.name}>{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
