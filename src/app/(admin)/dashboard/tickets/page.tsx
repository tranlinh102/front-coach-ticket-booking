import Pagination from '@/components/ui/tickets/pagination';
import Search from '@/components/ui/search';
import Table from '@/components/ui/tickets/table';
import { CreateTicket } from '@/components/ui/tickets/buttons';
import { lusitana } from '@/components/ui/fonts';
import { TicketsTableSkeleton } from '@/components/ui/skeletons';
import { Suspense } from 'react';
import { fetchTicketsPages } from '@/lib/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Vé Xe',
};
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTicketsPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Hóa Đơn</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Tìm kiếm" />
        <CreateTicket />
      </div>
      <Suspense key={query + currentPage} fallback={<TicketsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}