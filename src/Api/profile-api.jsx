import { useQuery, useMutation } from '@tanstack/react-query';

// Fetch user profile data
const fetchUserProfile = async () => {
  const response = await fetch('http://localhost:8081/users/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use the JWT token from localStorage
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return response.json();
};

// Update user profile data
const updateUserProfile = async (updatedUser) => {
  const response = await fetch('http://localhost:8081/users/complete-profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Use the JWT token from localStorage
    },
    body: JSON.stringify(updatedUser),
  });
  if (!response.ok) {
    throw new Error('Failed to update user profile');
  }
  return response.json();
};

// React Query hooks
export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });
};

export const useUpdateUserProfile = () => {
  return useMutation({
    mutationFn: updateUserProfile,
  });
};