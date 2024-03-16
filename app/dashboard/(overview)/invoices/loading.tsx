import InvoicesTable from '@/app/ui/invoices/table';
import DashboardSkeleton, {
  InvoiceSkeleton,
  InvoicesTableSkeleton,
} from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <>
      <InvoicesTableSkeleton />
    </>
  );
}
