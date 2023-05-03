import { useEffect, useState } from "react";
import { GeneralCardComponent } from "../components/GeneralCardComponent";
import { getCourses } from "../services/courseService";
import "../styles/MyCoursePage.css";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap"

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
        <Button  className="buttomCreateCourse"
        color="success"
        onClick= {changeModalState}>
          Agregar curso
        </Button>

        <Modal className="modalCreateCourses" isOpen={modal}>
          <ModalHeader>
            Nuevo curso
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <Label for="name">Nombre del curso</Label>
              <Input type="text" id="name"/>
            </FormGroup>

            <FormGroup>
              <Label for="description">Descripcion</Label>
              <Input type="text" id="description"/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Crear curso</Button>
            <Button color="secondary" onClick={changeModalState}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export { MyCoursePage };
