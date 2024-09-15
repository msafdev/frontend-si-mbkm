import { Breadcrumbs } from '@/components/breadcrumbs';
import { ListKegiatan } from '@/components/kegiatan-card';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { kegiatan } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Kegiatan', link: '/dashboard/kegiatan' }
];

export default function page() {
  const kegiatanItems = kegiatan.map(item => ({
    ...item,
    id: item.id.toString()
  }));

  return (
    <PageContainer scrollable={true}>
      <div className="flex h-full flex-col gap-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex flex-col items-start justify-between gap-y-4 border-b pb-4 lg:flex-row">
          <Heading
            title={`Kegiatan`}
            description="Kegiatan yang sedang berlangsung dan status pendaftaran program. Cek kembali informasi kegiatan yang sedang berlangsung dengan dosen/pihak yang bersangkutan."
          />
          <Button className="text-xs md:text-sm">Sejarah Kegiatan</Button>
        </div>
        <ListKegiatan kegiatan={kegiatanItems} />
      </div>
    </PageContainer>
  );
}
