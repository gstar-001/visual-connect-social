import { User, Post, Story } from '../types';

export const currentUser: User = {
  id: 'me',
  username: 'alex_rivers',
  displayName: 'Alex Rivers',
  avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/avatar-2-8307d630-1774565636565.webp',
  bio: 'Building the future of the web. 🚀 | React & Tailwind Enthusiast',
  followers: 1250,
  following: 450,
};

export const users: User[] = [
  {
    id: '1',
    username: 'sarah_sky',
    displayName: 'Sarah Jenkins',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/avatar-1-75f4d42e-1774565637689.webp',
    followers: 5400,
    following: 320,
  },
  {
    id: '2',
    username: 'kai_vision',
    displayName: 'Kai Tanaka',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/avatar-3-273c01bc-1774565636912.webp',
    followers: 890,
    following: 1100,
  },
];

export const stories: Story[] = [
  {
    id: 's1',
    userId: '1',
    user: users[0],
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/post-travel-1-1fce19e1-1774565642456.webp',
    isViewed: false,
  },
  {
    id: 's2',
    userId: '2',
    user: users[1],
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/post-urban-1-70412a2f-1774565637940.webp',
    isViewed: false,
  },
];

export const mockPosts: Post[] = [
  {
    id: 'p1',
    userId: '1',
    user: users[0],
    content: 'Finally made it to this hidden paradise! The water is absolutely crystal clear. 🌊✨ #travel #paradise',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/post-travel-1-1fce19e1-1774565642456.webp',
    likes: 1240,
    comments: 48,
    createdAt: '2h ago',
    isLiked: false,
  },
  {
    id: 'p2',
    userId: 'me',
    user: currentUser,
    content: 'Morning productivity at its finest. New desk setup is complete! 💻☕️',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/post-tech-1-aaa48d9a-1774565637860.webp',
    likes: 85,
    comments: 12,
    createdAt: '4h ago',
    isLiked: true,
  },
  {
    id: 'p3',
    userId: '2',
    user: users[1],
    content: 'The best pasta I have ever had. Hands down. 🍝🤌 #foodie #italy',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7e009769-b2ca-4512-afe2-0fc66124e7e8/post-food-1-77f8fc0b-1774565641948.webp',
    likes: 312,
    comments: 24,
    createdAt: '6h ago',
    isLiked: false,
  },
];