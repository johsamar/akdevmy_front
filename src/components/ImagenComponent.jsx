import React from "react";

const ImagenComponent = ({ src, alt }) => {
  //Convertir su forma a cuadrada
  const style = {};

  return (
    <div className="ratio ratio-1x1">
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

export { ImagenComponent };