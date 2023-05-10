import React, { useContext } from "react";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";

const DeleteClassComponent = ({ clase1 }) => {
  const {
    _id,
    name,
    type,
    description,
    duration,
    url,
    image,
    video,
    document,
    position,
  } = clase1;

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#eliminarClase${_id}`}
      >
        <AiFillDelete />
      </button>

      <div
        className="modal fade"
        id={`eliminarClase${_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="staticBackdropLabel"
              >
                Eliminar Clase: {name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <>
                    <div className="lead">
                      Estas seguro que quieres eliminar la clase {name}?
                    </div>
                  </>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Eliminar
              </button>
              <button type="button" className="btn btn-primary">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteClassComponent;
