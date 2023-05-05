import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findModuleById } from "../services/moduleService";

const ModuleDetailsPage = () => {
  const { idModule } = useParams();

  const [module, setModule] = useState(idModule);

  async function getModule() {
    const moduleFind = findModuleById(Number(idModule));
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
            <table className="table  h4">
                <thead className="thead-dark">
                  <tr className="text-center">
                    <th scope="col">Nombre clase</th>
                    <th scope="col">ver</th>
                    <th scope="col">editar</th>
                    <th scope="col">eliminar</th>
                  </tr>
                </thead>
                <tbody>
                {
                    console.log(module.classes) 
                    

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
