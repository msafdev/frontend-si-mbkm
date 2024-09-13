'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Program } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface ProgramProps {
  data: Program[];
}

export const ProgramTable: React.FC<ProgramProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-start justify-between gap-y-4 lg:flex-row">
        <Heading
          title={`Program (${data.length})`}
          description="Kumpulan program SI-MBKM yang tersedia."
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/program/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator className="mt-4" />
      <DataTable searchKey="company" columns={columns} data={data} />
    </>
  );
};
