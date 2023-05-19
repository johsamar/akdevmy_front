import "../styles/MyCoursePage.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";
import { 
  createCourseAsync,
  updateCoursesAsync,
} from "../services/courseService";
import { useForm } from "react-hook-form";
import { ActionEnum } from "../enums/action";
import { alertError, alertSuccess } from "../utils/Alerts"
import PropTypes from "prop-types";

const CourseModalComponent = ({
  courseAction,
  action,
  modal,
  changeModalState,
  courses,
  setCourses,
  setFilteredCourses,
}) => {

  //* new
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //* new
  const createCourse = async (data) => {
    try {
      let response = await createCourseAsync({ body: data });
      //* close modal if response is success
      changeModalState();
      //* Set new course to the courses list
      courses.push(response.data.data);
      //* Reset filtered courses
      setFilteredCourses(courses);
      //* Reset form data
      reset();
      //* Alert create
      alertSuccess({
        title: "¡Curso creado con exito!",
        text: `¡${data.name} fue creado exitosamente!`
      })
    } catch (error) {
      console.log(error);
      //* Alert create error
      alertError({
        title: "¡Ha ocurrido un error al crear el curso!",
        text: `¡${data.name} no se se pudo crear!`
      })
    }
  };

  const updateCourse = async (data) => {
    try {
      //* set id to update
      data.id = courseAction.id;
      let response = await updateCoursesAsync({ body: data })
      console.log(response);
      changeModalState();
      let newCourses = courses.map((course) => {
        if(data.id == course.id){
          return data;
        }
        return course;
      })

      setCourses(newCourses);
      setFilteredCourses(newCourses);
      //* Alert update
      alertSuccess({
        title: "¡Curso actualizado con exito!", 
        text: `¡${data.name} fue actualizado exitosamente!`
        })
    } catch (error) {
      console.log(error)
      //* Alert update error
      alertError({
        title: "¡Ha ocurrido un error al actualizar el curso!",
        text: `¡${data.name} no se se pudo actualizar!`
      })
    }
  }

  const changeState = () => {
    changeModalState();
    reset();
  };

  return (
    <>
      <Modal className="modalCreateCourses" isOpen={modal}>
        <ModalHeader>
          {
            action === ActionEnum.read 
              ? "Consultar curso"
              : action === ActionEnum.update
                ? "Actualizar curso"
                : "Nuevo curso"
          }
        </ModalHeader>

        <ModalBody>
          <form onSubmit={ action === ActionEnum.create ? handleSubmit(createCourse) : handleSubmit(updateCourse)}>
            <FormGroup>
              <Label for="name">Nombre del curso</Label>
              <input
                defaultValue={
                  action === ActionEnum.read || action === ActionEnum.update
                    ? courseAction.name
                    : ""
                }
                type="text"
                id="name"
                className="form-control z-depth-1"
                placeholder="Escribe el nombre del curso aquí..."
                disabled={action === ActionEnum.read}
                {
                  ...register("name", {
                  required: "El nombre del curso es requerido",
                  minLength: {
                    value: 1,
                    message: "la longitud mínima es 1",
                  },
                  })
                }
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
                defaultValue={
                  action === ActionEnum.read || action === ActionEnum.update
                    ? courseAction.description
                    : ""
                }              
                type="text"
                id="description"
                className="form-control z-depth-1"
                rows="3"
                placeholder="Escribe la descripción del curso aquí..."
                disabled={action === ActionEnum.read}
                {...register("description", {
                  required: "La descripción del curso es requerida",
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
              <Label for="imageUrl">Imagen url</Label>
              <input
                defaultValue={
                  action === ActionEnum.read || action === ActionEnum.update
                    ? courseAction.imageUrl
                    : ""
                }              
                type="text"
                id="imageUrl"
                className="form-control z-depth-1"
                placeholder="Escribe la url de la imagen del curso aquí..."
                disabled={action === ActionEnum.read}
                {...register("imageUrl", {
                  required: "La url de la imagen del curso es requerida",
                  minLength: {
                    value: 1,
                    message: "la longitud mínima es 1",
                  },
                })}
              />
              {errors.imageUrl && (
                <div className="alert alert-danger" role="alert">
                  {errors.imageUrl.message}
                </div>
              )}
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              style={{ 
                width: "100%",
                visibility: action !== ActionEnum.read
                  ? "visible"
                  : "hidden"
              }}
            >
              {action === ActionEnum.create ? "Crear curso" : "Actualizar curso"}
            </Button>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={changeState}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

CourseModalComponent.propTypes = {
  courseAction: PropTypes.object.isRequired,
  action: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired,
  changeModalState: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  setCourses: PropTypes.func.isRequired,
  setFilteredCourses: PropTypes.func.isRequired,
}

export { CourseModalComponent };
