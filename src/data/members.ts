export interface Member {
  id: string;
  name: string;
  profession: string;
  title: string; // Added for compatibility
  location: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
  skills: string[];
  portfolio: PortfolioItem[];
  socialLinks: {
    website?: string;
    instagram?: string;
    behance?: string;
    dribbble?: string;
  };
  isFollowing: boolean;
  verified: boolean;
  stats: { // Added for compatibility
    followers: number;
    following: number;
    likes: number;
    projects: number;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  likes: number;
}

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    profession: 'UI/UX Designer',
    title: 'UI/UX Designer',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b898?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=300&fit=crop',
    bio: 'Passionate UI/UX designer with 8+ years of experience creating delightful digital experiences. Currently working at a leading tech company in Silicon Valley.',
    followers: 12500,
    following: 890,
    posts: 145,
    skills: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Figma'],
    portfolio: [
      {
        id: '1',
        title: 'Banking App Redesign',
        description: 'Complete redesign of a mobile banking application with focus on user experience and accessibility.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
        category: 'UI Design',
        likes: 245
      },
      {
        id: '2',
        title: 'E-commerce Platform',
        description: 'User research and UX design for a modern e-commerce platform with seamless checkout flow.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
        category: 'UX Design',
        likes: 189
      }
    ],
    socialLinks: {
      website: 'https://sarahchen.design',
      dribbble: 'https://dribbble.com/sarahchen',
      behance: 'https://behance.net/sarahchen'
    },
    isFollowing: false,
    verified: true,
    stats: {
      followers: 12500,
      following: 890,
      likes: 8500,
      projects: 67
    }
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    profession: 'Brand Designer',
    title: 'Brand Designer',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=300&fit=crop',
    bio: 'Award-winning brand designer specializing in creating memorable identities for startups and Fortune 500 companies.',
    followers: 8750,
    following: 456,
    posts: 98,
    skills: ['Brand Identity', 'Logo Design', 'Typography', 'Packaging', 'Adobe Creative Suite'],
    portfolio: [
      {
        id: '3',
        title: 'Coffee Brand Identity',
        description: 'Complete brand identity design for an organic coffee company including logo, packaging, and marketing materials.',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop',
        category: 'Branding',
        likes: 312
      }
    ],
    socialLinks: {
      website: 'https://marcusjohnson.co',
      instagram: 'https://instagram.com/marcusdesigns'
    },
    isFollowing: true,
    verified: true,
    stats: {
      followers: 8750,
      following: 456,
      likes: 5200,
      projects: 42
    }
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    profession: 'Photographer',
    title: 'Photographer',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=300&fit=crop',
    bio: 'Fine art and commercial photographer capturing stories through urban landscapes and architectural photography.',
    followers: 15200,
    following: 1234,
    posts: 267,
    skills: ['Photography', 'Photo Editing', 'Architecture', 'Street Photography', 'Lightroom'],
    portfolio: [
      {
        id: '4',
        title: 'Urban Architecture',
        description: 'A photographic series exploring modern architectural design in urban environments.',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop',
        category: 'Photography',
        likes: 456
      }
    ],
    socialLinks: {
      website: 'https://elenarodriguez.photo',
      instagram: 'https://instagram.com/elena_captures'
    },
    isFollowing: false,
    verified: true,
    stats: {
      followers: 15200,
      following: 1234,
      likes: 12800,
      projects: 89
    }
  },
  {
    id: '4',
    name: 'David Kim',
    profession: 'Motion Designer',
    title: 'Motion Designer',
    location: 'Seoul, South Korea',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=300&fit=crop',
    bio: 'Creative motion designer and 3D artist with a passion for bringing ideas to life through animation and visual storytelling.',
    followers: 6890,
    following: 567,
    posts: 78,
    skills: ['Motion Graphics', '3D Animation', 'After Effects', 'Cinema 4D', 'Video Editing'],
    portfolio: [
      {
        id: '5',
        title: '3D Motion Reel',
        description: 'A collection of 3D motion graphics and animations showcasing various techniques and styles.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
        category: 'Motion Graphics',
        likes: 234
      }
    ],
    socialLinks: {
      website: 'https://davidkim.motion',
      instagram: 'https://instagram.com/david_motion'
    },
    isFollowing: true,
    verified: false,
    stats: {
      followers: 6890,
      following: 567,
      likes: 3400,
      projects: 28
    }
  },
  {
    id: '5',
    name: 'Priya Patel',
    profession: 'Illustrator',
    title: 'Illustrator',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=300&fit=crop',
    bio: 'Digital illustrator and character designer creating vibrant artwork for games, books, and digital media.',
    followers: 9340,
    following: 723,
    posts: 156,
    skills: ['Digital Illustration', 'Character Design', 'Concept Art', 'Procreate', 'Photoshop'],
    portfolio: [
      {
        id: '6',
        title: 'Fantasy Characters',
        description: 'Digital character illustrations for fantasy games and storytelling projects.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
        category: 'Illustration',
        likes: 389
      }
    ],
    socialLinks: {
      website: 'https://priyapatel.art',
      instagram: 'https://instagram.com/priya_illustrates'
    },
    isFollowing: false,
    verified: false,
    stats: {
      followers: 9340,
      following: 723,
      likes: 7800,
      projects: 156
    }
  }
];

export interface Resource {
  id: string;
  title: string;
  type: 'Tutorial' | 'Tool' | 'Template' | 'Inspiration' | 'Article';
  thumbnail: string;
  description: string;
  author: string;
  tags: string[];
  likes: number;
  bookmarks: number;
  url: string;
}

export const mockResources: Resource[] = [
  {
    id: '1',
    title: 'Complete Guide to Design Systems',
    type: 'Article',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop',
    description: 'Learn how to build and maintain scalable design systems for your organization.',
    author: 'Design Team',
    tags: ['Design Systems', 'UI', 'Components'],
    likes: 567,
    bookmarks: 234,
    url: '#'
  },
  {
    id: '2',
    title: 'Free Figma UI Kit - Mobile App',
    type: 'Template',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
    description: 'Complete mobile app UI kit with 50+ screens and components.',
    author: 'UI Store',
    tags: ['Figma', 'UI Kit', 'Mobile'],
    likes: 892,
    bookmarks: 445,
    url: '#'
  },
  {
    id: '3',
    title: 'Mastering Color Theory',
    type: 'Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop',
    description: 'Video series on understanding and applying color theory in design.',
    author: 'Color Academy',
    tags: ['Color Theory', 'Design', 'Tutorial'],
    likes: 423,
    bookmarks: 189,
    url: '#'
  }
];
