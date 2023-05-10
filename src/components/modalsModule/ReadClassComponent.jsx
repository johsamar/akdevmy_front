import React, { useContext } from "react";
import {  AiOutlineSearch } from "react-icons/ai";


const ReadClassComponent = ({clase1}) => {

    const {_id,name,type,description,duration,url,image,video,document,position} = clase1;

    
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#verModulo${_id}`}
      >
        <AiOutlineSearch/>
      </button>

      <div
        className="modal fade"
        id={`verModulo${_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-center" id="staticBackdropLabel">
                Clase: {name}
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
                        <table className="table table-striped">
                          <tbody>

                            <tr className="text-center">
                              <th scope="col">Nombre</th>
                              <th scope="col" className="lead">{name}</th>
                            </tr>
                            <tr className="text-center">
                              <th scope="col" >Type</th>
                              <th scope="col" className="lead">{type}</th>
                            </tr>

                            <tr className="text-center">
                              <th scope="col">Description</th>
                              <th scope="col" className="lead">{description}</th>
                            </tr>

                            <tr className="text-center">
                              <th scope="col">Duration</th>
                              <th scope="col" className="lead">{duration}</th>
                            </tr>

                            <tr className="text-center">
                              <th scope="col">Url</th>
                              <th scope="col" className="lead">{url}</th>
                            </tr>

                            <tr className="text-center">
                              <th scope="col">Document</th>
                              <th scope="col" className="lead">{document}</th>
                            </tr>

                            <tr className="text-center">
                              <th scope="col">Position</th>
                              <th scope="col" className="lead">{position}</th>
                            </tr>
                           
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
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadClassComponent;
