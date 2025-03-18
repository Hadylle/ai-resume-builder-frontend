import React, { useState } from 'react';
import { useUploadFile } from '../Api/upload-picture-api';

const UploadPicture = ({ label, endpoint, email, onUploadSuccess, onUploadError }) => {
  const [file, setFile] = useState(null);
  const uploadFileMutation = useUploadFile();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    try {
      const response = await uploadFileMutation.mutateAsync({ file, email, endpoint });
      onUploadSuccess(response);
    } catch (error) {
      onUploadError(error);
    }
  };

  return (
    <div className="upload-file">
      <label>{label}</label>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPicture;