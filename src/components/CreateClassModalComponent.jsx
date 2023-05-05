import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import { ExternalLinkComponent } from "./ExternalLinkComponent";
import InputArticleComponent from "./InputArticleComponent";
import FileUploader from "./FileComponent";
import DragDropFile from "./MultimediaComponent";

const CreateClassModalComponent = ({
  modalVisibility,
  changeModalVisibility,
}) => {
  const [componentToRender, setComponentToRender] = useState("");
  const [article, setArticle] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const options = [
    { value: "1", label: "Documento" },
    { value: "2", label: "Multimedia" },
    { value: "3", label: "Enlace externo" },
    { value: "4", label: "Articulo" },
  ];

  const addArticle = (newArticle) => {
    setArticle(newArticle);
  };

  const changeChoice = (choice) => {
    switch (choice.value) {
      case "1":
        setComponentToRender(<FileUploader />);
        break;
      case "2":
        setComponentToRender(<DragDropFile />);
        break;
      case "3":
        setComponentToRender(<ExternalLinkComponent />);
        break;
      case "4":
        setComponentToRender(<InputArticleComponent addArticle={addArticle} />);
        break;
    }
  };

  return (
    <>
      {/* Modal Container */}
      <Modal className="modalCreateCourses" isOpen={modalVisibility}>
        {/* Header */}
        <ModalHeader>Crear Clase</ModalHeader>
        {/* Body */}
        <ModalBody>
          <form>
            <label>Tipo de Clase</label>
            <Select
              options={options}
              onChange={(choice) => changeChoice(choice)}
              placeholder="Seleccione el tipo de clase"
            />
            <FormGroup>
              <Label for="name">Nombre</Label>
              <input
                type="text"
                id="name"
                className="form-control z-depth-1"
                placeholder="Escribe el nombre de la clase..."
                {...register("name", {
                  required: "El nombre de la clase es requerida",
                  minLength: {
                    value: 1,
                    message: "la longitud mínima es 1",
                  },
                })}
              />
              {errors.name && (
                <div className="alert alert-danger" role="alert">
                  {errors.name.message}
                </div>
              )}
            </FormGroup>
            <FormGroup className="form-group shadow-textarea">
              <Label for="description">Descripción</Label>
              <textarea
                type="text"
                id="description"
                className="form-control z-depth-1"
                placeholder="Escribe la descripción de la clase..."
                {...register("description", {
                  required: "la descripción de la clase es requerida",
                  minLength: {
                    value: 5,
                    message: "la longitud mínima es 5",
                  },
                })}
              />
              {errors.description && (
                <div className="alert alert-danger" role="alert">
                  {errors.description.message}
                </div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="time">Duración</Label>
              <input
                type="text"
                id="time"
                className="form-control z-depth-1"
                placeholder="La duración de la clase va aquí..."
                {...register("time", {
                  required: "la duración de la clase es requerida",
                  minLength: {
                    value: 1,
                    message: "la longitud mínima es 1",
                  },
                })}
              />
              {errors.time && (
                <div className="alert alert-danger" role="alert">
                  {errors.time.message}
                </div>
              )}
            </FormGroup>
            {/* Print Component to render */}
            {componentToRender != "" && componentToRender}
          </form>
        </ModalBody>
        {/* Footer */}
        <ModalFooter>
          <Button color="secondary" onClick={changeModalVisibility}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export { CreateClassModalComponent };
