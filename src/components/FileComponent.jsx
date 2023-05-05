import React, { useState } from "react";

function FileUploader() {
  const [file, setFile] = useState(null);

  function handleFileSelect(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    uploadFile(file)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Cargar archivo</button>
    </div>
  );
}

export default FileUploader;
