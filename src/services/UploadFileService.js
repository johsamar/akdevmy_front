function uploadFile(file) {
    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
    const allowedSize = 10 * 1024 * 1024; // 10 MB in bytes
  
    if (!allowedTypes.includes(file.type)) {
      return Promise.reject(new Error("Tipo de archivo no permitido."));
    }
  
    if (file.size > allowedSize) {
      return Promise.reject(new Error("El archivo es demasiado grande."));
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    return fetch("/api/upload", {
      method: "POST",
      body: formData
    }).then(response => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo.");
      }
      return response.json();
    });
  }

  export { uploadFile }
  