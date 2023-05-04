import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap"
import { AiFillPlusCircle } from "react-icons/ai"
//import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

const MyCoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [modal, setModal] = useState(false);

  const getCoursesFromService = async () => {
    let coursesList = await getCourses();
    setCourses(coursesList.data);
    setFilteredCourses(coursesList.data);
    console.log(coursesList.data); //! to delete
  };

  useEffect(() => {
    getCoursesFromService();
  }, []);

  const handleChange = (e) => {
    let textToFilter = e.target.value;
    //console.log(e.target.value);

    const filter = courses.filter((course) =>
      course.name.toLowerCase().includes(textToFilter.toLowerCase())
    );

    setFilteredCourses(filter);
  };

  const changeModalState=()=>{
    setModal(!modal)
  }

  const createCourse = async (data) => {
    console.log("creado con data: ");
    console.log(data);
    reset();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <div className="containerPage">
        {/* My Courses title */}
        <p className="title-section-course">Mis cursos</p>

        {/* Search filter */}
        <div className="searchBarContainer">
          <div className="containerInput">
            <input
              className="inputBuscar form-control"
              placeholder="Busqueda por nombre del curso"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Course cards */}
        <div className="rows-container">
          {filteredCourses &&
            filteredCourses.map((course) => {
              return (
                <GeneralCardComponent
                  key={course.courseId}
                  singleElement={course}
                  options={"actions"}
                />
              );
            })}
        </div>

        {/* add course button */}
        <Button href="#" className="btn-flotante"
        
        onClick= {changeModalState}>
          {/* Add course icon */}
          <AiFillPlusCircle className="addCourseIcon"/>
        </Button>

        <Modal className="modalCreateCourses" isOpen={modal}>
          <ModalHeader>
            Nuevo curso
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(createCourse)}>
              <FormGroup>
                <Label for="name">Nombre del curso</Label>
                <input 
                  type="text"
                  id="name"
                  className="form-control z-depth-1"
                  placeholder="Escribe el nombre del curso aquí..."
                  {...register("name", {
                    required: "El nombre del curso es requerido",
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
                  rows="3"
                  placeholder="Escribe la descripción del curso aquí..."
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
                  type="text" 
                  id="imageUrl"
                  className="form-control z-depth-1"
                  placeholder="Escribe la url de la imagen del curso aquí..."
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
              <Button type="submit" color="primary" style={{width: "100%"}}>Crear curso</Button>
            </form>
          

          </ModalBody>

          <ModalFooter>
            
            <Button color="secondary" onClick={changeModalState}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export { MyCoursePage };
