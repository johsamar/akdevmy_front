import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateClassComponent from "../components/modalsModule/UpdateClassModalComponent";
import ReadClassComponent from "../components/modalsModule/ReadClassModalComponent";
import DeleteClassComponent from "../components/modalsModule/DeleteClassModalComponent";
import { CreateClassModalComponent } from "../components/modalsModule/CreateClassModalComponent";
import { getModuleById } from "../services/ModulesService";
import LoadingComponent from "../components/LoadingComponent";
// Import hook useForm
import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
//import { Button } from "reactstrap";

const ModuleDetailsPage = () => {
  const { idModule } = useParams();

  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {
      type: "",
      name: "",
      description: "",
      duration: 0,
      url: "",
      image: "",
      video: "",
      audio: "",
      article: "",
      document: "",
      position: 0,
    },
  });

  const [module, setModule] = useState(idModule);
  const [classes, setClasses] = useState({});
  const [modalCreateClass, setModalCreateClass] = useState(false); //* modalVisibility
  const [modalUpdateClass, setModalUpdateClass] = useState(false); //* modalVisibility

  async function getModule() {
    const moduleList = await getModuleById(idModule);
    setModule(moduleList);
  }

  useEffect(() => {
    getModule();
  }, [classes]);

  //* changeModalVisibility
  const changeCreateClassModal = () => {
    setModalCreateClass(!modalCreateClass);
  };

  //* changeModalVisibility
  const changeUpdateClassModal = () => {
    setModalUpdateClass(!modalUpdateClass);
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
                      {module.classes.map((class1) => {
                        return (
                          <tr className="text-center h6" key={class1._id}>
                            <th scope="col">{class1.name}</th>
                            <th scope="col">
                              <ReadClassComponent clase1={class1} />
                            </th>
                            <th scope="col">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                  setClasses(class1);
                                  changeUpdateClassModal();
                                }}
                              >
                                <AiOutlineEdit />
                              </button>
                            </th>
                            <th scope="col">
                              <DeleteClassComponent
                                classes={class1}
                                moduleId={idModule}
                                updateModules={getModule}
                              />
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
            moduleId={idModule}
            updateModules={getModule}
          />
          {/* UpdateClassModal */}
          <UpdateClassComponent
            classes={classes}
            setClasses={setClasses}
            moduleId={idModule}
            modalVisibility={modalUpdateClass}
            changeModalVisibility={changeUpdateClassModal}
          />
        </FormProvider>
      </>
    );
  }
};
export default ModuleDetailsPage;
