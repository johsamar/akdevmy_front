import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

// Class types components
import FileUploader from "../classesTypes/FileComponent";
import DragDropFile from "../classesTypes/MultimediaComponent";
import { ExternalLinkComponent } from "../classesTypes/ExternalLinkComponent";
import InputArticleComponent from "../classesTypes/InputArticleComponent";

// Import models
import { TYPES } from "../../models/types.enum";
import { Classes } from "../../models/classes.class";

// Import Services
import { updateClassModule } from "../../services/ModulesService";

// Import reactstrap components
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Select from "react-select";
import { alertError, alertSuccess } from "../../utils/Alerts";

const UpdateClassModalComponent = ({
  classes,
  setClasses,
  moduleId,
  modalVisibility,
  changeModalVisibility,
}) => {
  const {
    _id,
    name,
    type,
    description,
    duration,
    url,
    image,
    video,
    audio,
    article,
    document,
    position,
  } = classes;

  // Form context
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormContext();

  const [componentToRender, setComponentToRender] = useState("");
  const [articleState, setArticleState] = useState("");
  const [classType, setClassType] = useState("");

  const initialValues = () => {
    reset({
      type: type,
      name: name,
      description: description,
      duration: duration,
      url: url,
      image: image,
      video: video,
      audio: audio,
      article: article,
      document: document,
      position: position,
    });
  };

  const defineClassType = () => {
    switch (type) {
      case TYPES.DOCUMENT:
        setComponentToRender(<FileUploader />);
        break;
      case TYPES.MULTIMEDIA:
        setComponentToRender(<DragDropFile />);
        break;
      case TYPES.LINK:
        setComponentToRender(<ExternalLinkComponent initialValue={url} />);
        break;
      case TYPES.ARTICLE:
        setComponentToRender(
          <InputArticleComponent
            addArticle={addArticle}
            initialValue={article}
          />
        );
        break;
    }
  };

  useEffect(() => {
    initialValues();
    defineClassType();
  }, [classes, reset]);

  const addArticle = (newArticle) => {
    setArticleState(newArticle);
  };

  const options = [
    { value: <FileUploader />, label: "Documento" },
    { value: <DragDropFile />, label: "Multimedia" },
    {
      value: <ExternalLinkComponent initialValue={url} />,
      label: "Enlace externo",
    },
    {
      value: (
        <InputArticleComponent addArticle={addArticle} initialValue={article} />
      ),
      label: "Articulo",
    },
  ];

  /**
   * This function changes the content to render according to the option selected in the select
   * but also makes a set with the selected class type
   */
  const changeChoice = (choice) => {
    setComponentToRender(choice.value);
    switch (choice.label) {
      case "Documento":
        setClassType(TYPES.DOCUMENT);
        break;
      case "Multimedia":
        setClassType(TYPES.MULTIMEDIA);
        break;
      case "Enlace externo":
        setClassType(TYPES.LINK);
        break;
      case "Articulo":
        setClassType(TYPES.ARTICLE);
        break;
    }
  };

  // This function is used to submit the form data and update the class
  const sendData = async (data) => {
    try {
      // Pass the data to the new construct
      const updateClass = new Classes()
        .setGet_id(_id)
        .setType(classType)
        .setName(data.name)
        .setDescription(data.description)
        .setDuration(data.duration)
        .setUrl(data.url)
        .setImage(data.multimedia)
        .setVideo(data.multimedia)
        .setArticle(articleState)
        .setDocument(data.document)
        .setPosition(position)
        .build();

      let response = await updateClassModule({
        body: updateClass,
        moduleId: moduleId,
      });

      //* close modal if response is success
      changeModalVisibility();
      //* Reset form data
      reset();
      //* Update classes state in parent component
      setClasses(updateClass);
      // Validate the status of the response before displaying the message on the screen
      if (response.includes("AxiosError")) {
        //* Alert Update error
        alertError({
          title: `¡${response}!`,
          text: `¡${data.name} no se se pudo modificar!`,
        });
      } else {
        //* Alert update
        alertSuccess({
          title: `¡${response}!`,
          text: `¡${data.name} fue modificado exitosamente!`,
        });
      }
    } catch (error) {
      //* Alert Update error
      alertError({
        title: "¡Ha ocurrido un error al modificar la clase!",
        text: `¡${data.name} no se se pudo modificar!`,
      });
    }
  };

  return (
    <>
      {/* Modal Container */}
      <Modal className="modalCreateCourses" isOpen={modalVisibility}>
        {/* Header */}
        <ModalHeader>Actualizar Clase: {name}</ModalHeader>
        {/* Body */}
        <ModalBody>
          <form onSubmit={handleSubmit(sendData)}>
            <label>Tipo de Clase</label>
            <Select
              options={options}
              onChange={(choice) => changeChoice(choice)}
              placeholder="Seleccione el tipo de clase"
              defaultValue={{ label: type, value: componentToRender }}
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
                type="number"
                id="duration"
                className="form-control z-depth-1"
                placeholder="La duración de la clase va aquí..."
                {...register("duration", {
                  required: "la duración de la clase es requerida",
                  minLength: {
                    value: 1,
                    message: "la longitud mínima es 1",
                  },
                })}
              />
              {errors.duration && (
                <div className="alert alert-danger" role="alert">
                  {errors.duration.message}
                </div>
              )}
            </FormGroup>
            {/* Print Component to render */}
            {componentToRender != "" && componentToRender}
            <Button type="submit" color="primary" className="w-100">
              Actualizar
            </Button>
          </form>
        </ModalBody>
        {/* Footer */}
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              reset();
              changeModalVisibility();
            }}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

UpdateClassModalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  setClasses: PropTypes.func.isRequired,
  moduleId: PropTypes.string.isRequired,
  modalVisibility: PropTypes.bool.isRequired,
  changeModalVisibility: PropTypes.func.isRequired,
};

export default UpdateClassModalComponent;
