import * as React from 'react';
import { useState } from 'react';

const MyComponent= () => {
  const [data, setData] = useState("");

 
  const conexion="mongodb+srv://proyectosemillersoftlond2023:9wmMGugx9qr4a7jR@dbakdevmy.gsrlzpc.mongodb.net/?retryWrites=true&w=majority"

  console.log("test");

  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        conexion,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ yourData: data }),
        }
      );
      
      if (!response.ok) {
        console.log("error al enviar dato");
        throw new Error("Failed to send data to MongoDB");
      }
      
      // handle successful response
    } catch (error) {
      console.log("error al conectar");
      console.error(error);
      // handle error
    }
  };

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleButtonClick}>Send Data to MongoDB</button>
    </div>
  );
};

export { MyComponent };
