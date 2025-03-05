import { useMutation } from '@tanstack/react-query';


const register = async (formData) => {
  const response = await fetch('http://localhost:8081/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData), 
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  const data = await response.json();
  return data; 
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
