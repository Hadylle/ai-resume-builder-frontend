import { useMutation } from '@tanstack/react-query';

// Upload file function
const uploadFile = async ({ file, email}) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('email', email);

  const response = await fetch(`http://localhost:8081/users/upload-picture`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload file');
  }
  return response.json();
};

// React Query hook for file upload
export const useUploadFile = () => {
  return useMutation({
    mutationFn: uploadFile,
  });
};