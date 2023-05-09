import React, { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";


const UpdateClassComponent = ({clase1}) => {

    const {name,type,description,duration,url,image,video,document,position} = clase1;

    
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#verEditarModal"
      >
               <AiOutlineEdit/>

      </button>

      <div
        className="modal fade"
        id="verEditarModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="staticBackdropLabel">
                Editar Clase: {name}
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
                        <table className="table">
                            <tr className="text-center">
                              <th scope="col">Nombre</th>
                              <th scope="col">{name}</th>
                            </tr>
                            <tr className="text-center">
                              <th scope="col">Nombre</th>
                              <th scope="col">{name}</th>
                            </tr>
                          <tbody>
                           
                          </tbody>
                        </table>
                       
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
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateClassComponent;
