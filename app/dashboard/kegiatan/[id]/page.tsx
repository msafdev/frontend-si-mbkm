// app/kegiatan/[id]/page.tsx
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DetailItem {
  label: string;
  value: string | number | boolean;
}

interface KegiatanDetail {
  id: number;
  company: string;
  semester: string;
  description: string;
  category: string;
  detail: {
    code: string;
    description: string;
    location: string;
    environment: string;
    duration: string;
    certificate: boolean;
    conversion: boolean;
    salary: string;
    point: number;
  };
}

const DetailItem: React.FC<DetailItem> = ({ label, value }) => (
  <div className="flex justify-between py-2">
    <span className="font-medium">{label}</span>
    <span>{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}</span>
  </div>
);

async function getKegiatanData(id: string): Promise<KegiatanDetail | null> {
  // In a real application, you would fetch this data from an API or database
  // For this example, we're using the static data you provided
  const kegiatan: KegiatanDetail = {
    id: 1,
    company: 'Bangkit Academy 2024 By Google, GoTo, Traveloka',
    semester: 'Genap 2023/2024',
    description: 'Cloud Computing Learning Path',
    category: 'Bangkit Academy',
    detail: {
      code: 'BA-9754',
      description: 'Lorem ipsum dolor sit ammet.',
      location: 'Bandung, Jawa Barat',
      environment: 'remote',
      duration: '4 months',
      certificate: true,
      conversion: true,
      salary: '-',
      point: 21
    }
  };

  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (kegiatan.id.toString() !== id) {
    return null;
  }

  return kegiatan;
}

export default async function KegiatanDetailPage({
  params
}: {
  params: { id: string };
}) {
  const kegiatan = await getKegiatanData(params.id);

  if (!kegiatan) {
    notFound();
  }

  const breadcrumbItems = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Kegiatan', link: '/dashboard/kegiatan' },
    { title: kegiatan.company, link: `/kegiatan/${kegiatan.id}` }
  ];

  return (
    <PageContainer scrollable={true}>
      <div className="flex h-full flex-col gap-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex flex-col items-start justify-between gap-y-4 border-b pb-4 lg:flex-row">
          <Heading
            title={kegiatan.company}
            description={kegiatan.description}
          />
          <Badge variant={'secondary'}>{kegiatan.category}</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Kegiatan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <DetailItem label="Code" value={kegiatan.detail.code} />
            <DetailItem
              label="Description"
              value={kegiatan.detail.description}
            />
            <DetailItem label="Location" value={kegiatan.detail.location} />
            <DetailItem
              label="Environment"
              value={kegiatan.detail.environment}
            />
            <DetailItem label="Duration" value={kegiatan.detail.duration} />
            <DetailItem
              label="Certificate"
              value={kegiatan.detail.certificate}
            />
            <DetailItem label="Conversion" value={kegiatan.detail.conversion} />
            <DetailItem label="Salary" value={kegiatan.detail.salary} />
            <DetailItem label="Point" value={kegiatan.detail.point} />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
