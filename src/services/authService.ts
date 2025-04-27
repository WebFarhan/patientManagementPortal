export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'clinician';
  avatar?: string;
}

// Mock user data - replace with actual API calls in production
const mockUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin' as const,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    email: 'doctor@example.com',
    password: 'doctor123',
    role: 'clinician' as const,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export const loginUser = async (email: string, password: string): Promise<User> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const user = mockUsers.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  // Don't include password in the returned user object
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};