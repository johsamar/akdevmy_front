import "../styles/GeneralCardComponent.css";
import { environment } from "../config/environment";
import { FaReadme, FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GeneralCardComponent = ({ singleElement, options }) => {
  const navigate = useNavigate();
  /**
   * This function is used to send access to the course details path
   */

  const manageCourse = () => {
    const course = { ...singleElement };
    navigate(`/misCursos/${course.idCourse}`);
  };

  return (
    <>
      <div className="column">
        <div className="card card-edit" style={{ width: "100%" }}>
          {singleElement.imageUrl ? (
            <img
              src={singleElement.imageUrl}
              className="card-img-top"
              alt="..."
              style={{ width: "90%" }}
            />
          ) : (
            ""
          )}
          <div className="card-body card-edit-body">
            <h5 className="card-title text-start">{singleElement.name}</h5>
            <p className="card-text text-start">
              {singleElement.description.length > environment.maxCharacterToView
                ? `${singleElement.description.slice(
                    0,
                    environment.maxCharacterToView
                  )}...`
                : singleElement.description}
            </p>
            {/*  */}
            {options === "actions" ? (
              <div className="d-flex justify-content-around">
                <span className="card-edit-actions">
                  <FaReadme />
                </span>
                <span className="card-edit-actions">
                  <FaRegEdit />
                </span>
                <span className="card-edit-actions" onClick={manageCourse}>
                  M
                </span>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary">{options}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { GeneralCardComponent };
