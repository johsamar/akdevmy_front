import React from "react";

const ImagenComponent = ({ src, alt }) => {
  //Convertir su forma a cuadrada
  const style = {
    width: "200px"
  };

  return (
    <div>
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

export { ImagenComponent };