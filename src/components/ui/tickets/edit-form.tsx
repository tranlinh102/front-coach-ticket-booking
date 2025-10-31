'use client';

import { CustomerField, TicketForm } from '@/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { updateTicket, State } from '@/lib/actions';
import { useActionState } from 'react';

export default function EditTicketForm({
  ticket,
  customers,
}: {
  ticket: TicketForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateTicketWithId = updateTicket.bind(null, ticket.id);
  const [state, formAction] = useActionState(updateTicketWithId, initialState);

  return (
  <form action={formAction}>
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div className="mb-4">
        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
          Chọn khách hàng 
        </label>
        <div className="relative">
          <select
            id="customer"
            name="customerId"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={ticket.customer_id}
          >
            <option value="" disabled>
              Chọn khách hàng 
            </option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="price_paid" className="mb-2 block text-sm font-medium">
          Nhập số tiền 
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              id="price_paid"
              name="price_paid"
              type="number"
              step="0.01"
              defaultValue={ticket.price_paid}
              placeholder="Nhập giá vé"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium">
          Đặt trạng thái 
        </legend>
        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="booked"
                name="status"
                type="radio"
                value="booked"
                defaultChecked={ticket.status === 'booked'}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="booked"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
              >
                Đặt trước <ClockIcon className="h-4 w-4" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="paid"
                name="status"
                type="radio"
                value="paid"
                defaultChecked={ticket.status === 'paid'}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="paid"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                Đã trả <CheckIcon className="h-4 w-4" />
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="canceled"
                name="status"
                type="radio"
                value="canceled"
                defaultChecked={ticket.status === 'canceled'}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-white focus:ring-2"
              />
              <label
                htmlFor="canceled"
                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
              >
                Hủy vé <XMarkIcon className="h-4 w-4" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

    <div className="mt-6 flex justify-end gap-4">
      <Link
        href="/dashboard/tickets"
        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
      >
        Hủy 
      </Link>
      <Button type="submit">Cập Nhập</Button>
    </div>
  </form>
);

}
