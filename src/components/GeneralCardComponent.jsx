import "../styles/GeneralCardComponent.css";
import { environment } from "../config/environment";

const GeneralCardComponent = ({ singleElement }) => {
  return (
    <>
      <div className="column">
        <div className="card card-edit" style={{ width: "100%" }}>
          { 
          singleElement.imageUrl 
            ? <img 
                src={singleElement.imageUrl} 
                className="card-img-top" 
                alt="..."
                style={{ width: "90%" }}
              />
            : ""
          }          
          <div className="card-body card-edit-body">
            <h5 className="card-title">{singleElement.name}</h5>
            <p className="card-text">
              {
                singleElement.description.length > environment.maxCharacterToView
                 ? `${singleElement.description.slice(0, environment.maxCharacterToView)}...`
                 : singleElement.description                
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { GeneralCardComponent };
