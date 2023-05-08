import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findModuleByid } from "../services/moduleService";
import { AiFillDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";

const ModuleDetailsPage = () => {
  const { idModule } = useParams();

  const [module, setModule] = useState(idModule);

  async function getModule() {
    const moduleFind = findModuleByid(Number(idModule));
    setModule(moduleFind);
  }

  useEffect(() => {
    getModule();
    
  }, []);

  return (
    <>
      <div className="containerPage">
        {/* module */}
        <p className="title-section-course">{module.name}</p>
       
        <button type="button" className="btn btn-primary ">
          Crear Clase
        </button>
        &nbsp; &nbsp; &nbsp;
        <button type="button" className="btn btn-primary">
          Crear Examen
        </button>
        <br />
        <br />
        
        <div className="container h3">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            {/* TABLA DE CLASES */}
            <table className="table table-striped">
                <thead className="thead-dark h4">
                  <tr className="text-center">
                    <th scope="col">Nombre clase</th>
                    <th scope="col">ver</th>
                    <th scope="col">editar</th>
                    <th scope="col">eliminar</th>
                  </tr>
                </thead>
                <tbody>

                {!module.classes ?(
                                <h1>CARGANDO CLASES ...</h1>
                            ) : (
                              module.classes.map((clase1)=>{
                                    return(
                                      <tr className="text-center h6">
                                        <th scope="col">{clase1.name}</th>
                                        <th scope="col"><AiOutlineSearch/></th>
                                        <th scope="col"><AiOutlineEdit/></th>
                                        <th scope="col"><AiFillDelete/></th>
                                      </tr>
                                        
                                    );
                                })
                            )
                        }
                </tbody>
              </table>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleDetailsPage;
