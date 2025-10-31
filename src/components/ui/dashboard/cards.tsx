import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';
import { fetchCardData } from '@/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  tickets: InboxIcon,
};

const colorMap = {
  collected: 'bg-green-300',   
  pending: 'bg-orange-300',
  tickets: 'bg-red-300',     
  customers: 'bg-fuchsia-300',  
};

export default async function CardWrapper() {
  const {
    numberOfTickets,
    numberOfCustomers,
    totalPaidTickets,
    totalBookedTickets,
  } = await fetchCardData();

  return (
    <>
      <Card title="Doanh Thu" value={totalPaidTickets} type="collected" />
      <Card title="Đã đặt" value={totalBookedTickets} type="pending" />
      <Card title="Tổng vé xe " value={numberOfTickets} type="tickets" />
      <Card
        title="Số Lượng Khách"
        value={numberOfCustomers}
        type="customers"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'tickets' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];
  const bgColor = colorMap[type];

  return (
    <div className={`rounded-xl p-2 shadow-sm ${bgColor}`}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-6 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
