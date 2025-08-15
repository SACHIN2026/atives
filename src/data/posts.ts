export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    profession: string;
    followers: number;
  };
  content: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  createdAt: string;
}

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b898?w=150&h=150&fit=crop&crop=face',
      profession: 'UI/UX Designer',
      followers: 12500
    },
    content: {
      title: 'Modern Dashboard Design',
      description: 'Clean and intuitive dashboard interface for a fintech startup. Focused on user experience and accessibility.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['UI Design', 'Dashboard', 'Fintech', 'Figma']
    },
    engagement: {
      likes: 245,
      comments: 18,
      shares: 32
    },
    createdAt: '2024-08-14'
  },
  {
    id: '2',
    author: {
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      profession: 'Brand Designer',
      followers: 8750
    },
    content: {
      title: 'Organic Coffee Brand Identity',
      description: 'Complete brand identity design for an organic coffee company. From logo to packaging design.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop',
      tags: ['Branding', 'Logo Design', 'Packaging', 'Identity']
    },
    engagement: {
      likes: 189,
      comments: 24,
      shares: 15
    },
    createdAt: '2024-08-13'
  },
  {
    id: '3',
    author: {
      name: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      profession: 'Photographer',
      followers: 15200
    },
    content: {
      title: 'Urban Architecture Series',
      description: 'Capturing the essence of modern architecture in downtown cityscapes. Shot with Canon 5D Mark IV.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      tags: ['Photography', 'Architecture', 'Urban', 'Canon']
    },
    engagement: {
      likes: 312,
      comments: 45,
      shares: 67
    },
    createdAt: '2024-08-12'
  },
  {
    id: '4',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      profession: 'Motion Designer',
      followers: 6890
    },
    content: {
      title: '3D Motion Graphics Reel',
      description: 'Latest motion graphics work featuring 3D animations and dynamic typography for various brands.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Motion Graphics', '3D Animation', 'After Effects', 'Cinema 4D']
    },
    engagement: {
      likes: 156,
      comments: 12,
      shares: 28
    },
    createdAt: '2024-08-11'
  },
  {
    id: '5',
    author: {
      name: 'Priya Patel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      profession: 'Illustrator',
      followers: 9340
    },
    content: {
      title: 'Digital Illustration Collection',
      description: 'Fantasy-themed digital illustrations created for a mobile game. Vibrant colors and detailed characters.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      tags: ['Illustration', 'Digital Art', 'Character Design', 'Procreate']
    },
    engagement: {
      likes: 278,
      comments: 31,
      shares: 42
    },
    createdAt: '2024-08-10'
  }
];
