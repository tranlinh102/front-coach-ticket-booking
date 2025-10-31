import { CheckIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TicketStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'booked',
          'bg-red-400 text-white': status === 'canceled',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'booked' ? (
        <>
          Đặt trước  
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Thanh toán 
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'canceled' ? (
        <>
          Đã hủy
          <XMarkIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
