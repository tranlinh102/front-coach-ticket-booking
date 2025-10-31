import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BriefcaseIcon className="h-12 w-12" />
      <p className="text-[38px]">   Admin</p>
    </div>
  );
}
