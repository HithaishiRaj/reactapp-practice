import React from 'react';
import pdfToText from 'react-pdftotext'

const FileUploader = ({ onFileUpload }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the first file from the FileList
    pdfToText(file)
            .then(text =>onFileUpload(text))
            .catch(error => console.error("Failed to extract text from pdf"))
   
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUploader;