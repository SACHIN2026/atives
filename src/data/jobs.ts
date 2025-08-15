export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  remote: boolean;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  tags: string[];
  postedAt: string;
  postedDate: string; // Added for compatibility
  applicants: number;
  logo: string;
  experience: string; // Added for compatibility
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior UI/UX Designer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    remote: true,
    salary: {
      min: 80000,
      max: 120000,
      currency: 'USD'
    },
    description: 'We are looking for a Senior UI/UX Designer to join our growing design team. You will be responsible for creating intuitive and engaging user experiences across our digital products.',
    requirements: [
      '5+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio showcasing mobile and web design',
      'Experience with design systems and component libraries'
    ],
    tags: ['UI Design', 'UX Design', 'Figma', 'Design Systems'],
    postedAt: '2024-08-14',
    postedDate: '2024-08-14',
    applicants: 23,
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    experience: '5+ years'
  },
  {
    id: '2',
    title: 'Brand Designer',
    company: 'Creative Studio Co.',
    location: 'New York, NY',
    type: 'Contract',
    remote: false,
    salary: {
      min: 60000,
      max: 85000,
      currency: 'USD'
    },
    description: 'Join our creative team to work on exciting branding projects for startups and established companies. This is a 6-month contract with potential for extension.',
    requirements: [
      '3+ years of brand design experience',
      'Strong typography and layout skills',
      'Experience with brand strategy and identity design',
      'Proficiency in Adobe Illustrator and InDesign'
    ],
    tags: ['Branding', 'Logo Design', 'Typography', 'Adobe'],
    postedAt: '2024-08-13',
    postedDate: '2024-08-13',
    applicants: 18,
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop',
    experience: '3+ years'
  },
  {
    id: '3',
    title: 'Motion Graphics Designer',
    company: 'Media Dynamics',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    remote: true,
    salary: {
      min: 70000,
      max: 95000,
      currency: 'USD'
    },
    description: 'Create compelling motion graphics and animations for various media projects including commercials, social media content, and digital campaigns.',
    requirements: [
      '4+ years of motion graphics experience',
      'Expert level in After Effects and Cinema 4D',
      'Experience with video editing and compositing',
      'Strong understanding of animation principles'
    ],
    tags: ['Motion Graphics', 'After Effects', 'Animation', 'Video'],
    postedAt: '2024-08-12',
    postedDate: '2024-08-12',
    applicants: 31,
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    experience: '4+ years'
  },
  {
    id: '4',
    title: 'Freelance Illustrator',
    company: 'Book Publishing House',
    location: 'Remote',
    type: 'Freelance',
    remote: true,
    description: 'We need a talented illustrator for a children\'s book series. The project involves creating 20-30 illustrations in a consistent style.',
    requirements: [
      'Experience in children\'s book illustration',
      'Strong character design skills',
      'Ability to work with tight deadlines',
      'Digital illustration proficiency'
    ],
    tags: ['Illustration', 'Children\'s Books', 'Character Design', 'Digital Art'],
    postedAt: '2024-08-11',
    postedDate: '2024-08-11',
    applicants: 42,
    logo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop',
    experience: '2+ years'
  },
  {
    id: '5',
    title: 'Web Designer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    type: 'Part-time',
    remote: true,
    salary: {
      min: 35000,
      max: 50000,
      currency: 'USD'
    },
    description: 'Help us redesign our company website and create landing pages for our marketing campaigns. Perfect for someone looking for flexible part-time work.',
    requirements: [
      '2+ years of web design experience',
      'Proficiency in HTML, CSS, and responsive design',
      'Experience with WordPress or similar CMS',
      'Basic understanding of SEO principles'
    ],
    tags: ['Web Design', 'HTML', 'CSS', 'WordPress'],
    postedAt: '2024-08-10',
    postedDate: '2024-08-10',
    applicants: 15,
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=100&h=100&fit=crop',
    experience: '2+ years'
  },
  {
    id: '6',
    title: 'Product Designer',
    company: 'FinTech Innovations',
    location: 'Chicago, IL',
    type: 'Full-time',
    remote: true,
    salary: {
      min: 90000,
      max: 130000,
      currency: 'USD'
    },
    description: 'Lead the design of our mobile banking app and web platform. Work closely with product managers and developers to create user-centered financial products.',
    requirements: [
      '6+ years of product design experience',
      'Experience in fintech or financial services',
      'Strong user research and testing skills',
      'Proficiency in design thinking methodologies'
    ],
    tags: ['Product Design', 'FinTech', 'Mobile App', 'User Research'],
    postedAt: '2024-08-09',
    postedDate: '2024-08-09',
    applicants: 28,
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
    experience: '6+ years'
  }
];
