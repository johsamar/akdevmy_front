import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

function FileUploader() {
  const [file, setFile] = useState(null);

  // Form context
  const {
    register,
    formState: { errors },
  } = useFormContext();

  function handleFileSelect(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    uploadFile(file)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelect} {...register("document")} />
      <button onClick={handleUpload}>Cargar archivo</button>
    </div>
  );
}

export default FileUploader;
