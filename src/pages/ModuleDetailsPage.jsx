import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateClassComponent from "../components/modalsModule/UpdateClassComponent";
import ReadClassComponent from "../components/modalsModule/ReadClassComponent";
import DeleteClassComponent from "../components/modalsModule/DeleteClassComponent";
import { CreateClassModalComponent } from "../components/CreateClassModalComponent";
import { getModuleById } from "../services/ModulesService";
import LoadingComponent from "../components/LoadingComponent";
// Import hook useForm
import { FormProvider, useForm } from "react-hook-form";
//import { Button } from "reactstrap";

const ModuleDetailsPage = () => {
  const { idModule } = useParams();

  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {
      type: "",
      name: "",
      description: "",
      duration: "",
    },
  });

  const [module, setModule] = useState(idModule);
  const [modalCreateClass, setModalCreateClass] = useState(false); //* modalVisibility

  async function getModule() {
    const moduleList = await getModuleById(idModule);
    setModule(moduleList);
  }

  useEffect(() => {
    getModule();
  }, []);

  //* changeModalVisibility
  const changeCreateClassModal = () => {
    setModalCreateClass(!modalCreateClass);
  };

  if (!module.classes) {
    return <LoadingComponent />;
  } else {
    return (
      <>
        {/* Pass all methods into the context */}
        <FormProvider {...methods}>
          <div className="containerPage">
            {/* module */}
            <p className="title-section-course">{module.name}</p>
            <button
              type="button"
              className="btn btn-primary "
              onClick={changeCreateClassModal}
            >
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
                      {module.classes.map((clase1) => {
                        return (
                          <tr className="text-center h6" key={clase1._id}>
                            <th scope="col">{clase1.name}</th>
                            <th scope="col">
                              <ReadClassComponent clase1={clase1} />
                            </th>
                            <th scope="col">
                              <UpdateClassComponent clase1={clase1} moduleId={idModule} />
                            </th>
                            <th scope="col">
                              <DeleteClassComponent clase1={clase1} />
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
          {/* CreateClassModal */}
          <CreateClassModalComponent
            modalVisibility={modalCreateClass}
            changeModalVisibility={changeCreateClassModal}
          />
        </FormProvider>
      </>
    );
  }
};
export default ModuleDetailsPage;
