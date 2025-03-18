import { useMutation } from '@tanstack/react-query';

const login = async (credentials) => {
  const response = await fetch('http://localhost:8081/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });

};