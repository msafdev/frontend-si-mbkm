import { NavItemOrSeparator } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};

export type Program = {
  id: number;
  company: string;
  role: string;
  description: string;
  category:
    | 'Magang MSIB'
    | 'Studi Independen'
    | 'Kampus Mengajar'
    | 'IISMA'
    | 'Pertukaran Mahasiswa Merdeka'
    | 'Bootcamp'
    | 'Bangkit Academy';
  status: string;
  date: string;
};

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Kegiatan = {
  id: number;
  company: string;
  semester: string;
  description: string;
  category: string;
  detail: {
    code: string;
    description: string;
    location: string;
    environment: 'onsite' | 'remote' | 'hybrid';
    duration: string;
    certificate: boolean;
    conversion: boolean;
    salary?: string;
    point?: number;
  };
};

export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export const programs: Program[] = [
  {
    id: 1,
    company: 'Dell',
    role: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Magang MSIB',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 2,
    company: 'TechCorp',
    role: 'Backend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Magang MSIB',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 3,
    company: 'WebTech',
    role: 'UI Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Studi Independen',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 4,
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Magang MSIB',
    status: 'Inactive',
    date: '2021-07-01'
  },
  {
    id: 5,
    company: 'TechGuru',
    role: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Kampus Mengajar',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 6,
    company: 'CodeGenius',
    role: 'QA Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Magang MSIB',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 7,
    company: 'SoftWorks',
    role: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Studi Independen',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 8,
    company: 'DevCraft',
    role: 'DevOps Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Magang MSIB',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 9,
    company: 'Harvard University',
    role: 'Visiting Student',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'IISMA',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 10,
    company: 'Denpasar University',
    role: 'Visiting Student',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Pertukaran Mahasiswa Merdeka',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 11,
    company: 'Google, GoTo, and Traveloka',
    role: 'Cloud Computing Cohort',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Bangkit Academy',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 12,
    company: 'Google, GoTo, and Traveloka',
    role: 'Mobile Programming Cohort',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Bangkit Academy',
    status: 'Active',
    date: '2021-07-01'
  },
  {
    id: 13,
    company: 'Google, GoTo, and Traveloka',
    role: 'Machine Learning Cohort',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Bangkit Academy',
    status: 'Active',
    date: '2021-07-01'
  }
];

export const kegiatan: Kegiatan[] = [
  {
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
  },
  {
    id: 2,
    company: 'TokoPedia',
    semester: 'Genap 2023/2024',
    description: 'Frontend Developer Internship',
    category: 'Magang MSIB',
    detail: {
      code: 'MS-1293',
      description: 'Lorem ipsum dolor sit ammet.',
      location: 'Jakarta Selatan, DKI Jakarta',
      environment: 'onsite',
      duration: '4 months',
      certificate: true,
      conversion: true,
      salary: 'IDR 3.600.000',
      point: 20
    }
  },
  {
    id: 3,
    company: 'Bangkit Academy 2024 By Google, GoTo, Traveloka',
    semester: 'Genap 2023/2024',
    description: 'Machine Learning Path',
    category: 'Bangkit Academy',
    detail: {
      code: 'BA-CCLP',
      description: 'Lorem ipsum dolor sit ammet.',
      location: 'Jakarta Pusat, DKI Jakarta',
      environment: 'remote',
      duration: '3 months',
      certificate: true,
      conversion: true,
      salary: '-',
      point: 21
    }
  },
  {
    id: 4,
    company: 'Innovate Inc.',
    semester: 'Genap 2023/2024',
    description: 'Mobile Developer Internship',
    category: 'Magang MSIB',
    detail: {
      code: 'MS-4513',
      description: 'Lorem ipsum dolor sit ammet.',
      location: 'Bandung, Jawa Barat',
      environment: 'hybrid',
      duration: '3 months',
      certificate: true,
      conversion: false,
      salary: 'IDR 3.000.000',
      point: 0
    }
  }
];

export const navItems: Record<
  string,
  { label: string; items: NavItemOrSeparator[] }
> = {
  general: {
    label: 'Overview',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: 'dashboard',
        label: 'Dashboard'
      },
      {
        title: 'Program',
        href: '/dashboard/program',
        icon: 'briefcase',
        label: 'program'
      },
      {
        title: 'Kegiatan',
        href: '/dashboard/kegiatan',
        icon: 'profile',
        label: 'kegiatan'
      },
      { separator: true },
      {
        title: 'Laporan',
        href: '/dashboard/laporan',
        icon: 'file-check',
        label: 'laporan'
      },
      {
        title: 'Logbook',
        href: '/dashboard/logbook',
        icon: 'book-open-text',
        label: 'logbook'
      },
      {
        title: 'Kanban',
        href: '/dashboard/kanban',
        icon: 'kanban',
        label: 'kanban'
      },
      { separator: true },
      {
        title: 'Dokumen',
        href: '/dashboard/dokumen',
        icon: 'help',
        label: 'dokumen'
      }
    ]
  },
  user: {
    label: 'Dosen',
    items: [
      {
        title: 'Data Mahasiswa',
        href: '/dashboard/data-mahasiswa',
        icon: 'graduation-cap',
        label: 'data-mahasiswa'
      },
    ]
  },
  auth: {
    label: 'Akun',
    items: [
      {
        title: 'Sertifikat',
        href: '/dashboard/sertifikat',
        icon: 'book-check',
        label: 'sertifikat'
      },
      {
        title: 'Profil',
        href: '/dashboard/profil',
        icon: 'profile',
        label: 'profil'
      }
    ]
  }
};
