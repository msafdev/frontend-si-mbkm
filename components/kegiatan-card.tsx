import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmptyState from '@/components/empty-state';
import Link from 'next/link';

export interface KegiatanItem {
  id: string;
  category: string;
  company: string;
  semester: string;
}

export const KegiatanCard: React.FC<KegiatanItem> = ({
  id,
  category,
  company,
  semester
}) => (
  <Link
    href={`/dashboard/kegiatan/${id}`}
    className="flex w-full cursor-pointer flex-col rounded-lg border bg-card p-4 text-card-foreground shadow-sm hover:border-primary/40"
  >
    <p className="mb-1 text-xs font-medium text-foreground">{category}</p>
    <h3 className="mb-4 line-clamp-2 text-ellipsis text-lg font-semibold">
      {company}
    </h3>
    <div className="mt-auto flex items-center justify-between gap-x-3">
      <p className="text-xs text-muted-foreground">{semester}</p>
      <ChevronsRight size={16} />
    </div>
  </Link>
);

export const ListKegiatan: React.FC<{ kegiatan: KegiatanItem[] }> = ({
  kegiatan
}) => (
  <Tabs defaultValue="active" className="space-y-4">
    <TabsList className="mb-2">
      <TabsTrigger value="active">Kegiatan Aktif</TabsTrigger>
      <TabsTrigger value="status">Status Pendaftaran</TabsTrigger>
    </TabsList>
    <TabsContent value="active" className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {kegiatan.map((item, index: number) => (
          <KegiatanCard key={index} {...item} />
        ))}
      </div>
    </TabsContent>
    <TabsContent value="status" className="space-y-4">
      <EmptyState
        title="Tidak ada kegiatan"
        description="Tidak ada kegiatan yang sedang berlangsung. Coba cek kembali pada tab Kegiatan Aktif atau Status Pendaftaran"
      />
    </TabsContent>
  </Tabs>
);
