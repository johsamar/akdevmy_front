import { useForm } from "react-hook-form";
import CourseDetailsComponent from "../components/CourseDetailsComponent";
import InputArticleComponent from "../components/InputArticleComponent";
// Import personal styles
import "../styles/MyCoursePage.css";
import { useState } from "react";

const CourseDetailsPage = () => {
  /**
   * !DELETE
   * Esta función y estados, son solo para dar un ejemplo de como implementarla en el formulario de la ventana modal,
   * apenas se implemente (de cualquier forma) se puede eliminar, por eso pongo esto en español jaja.
   */
  const { handleSubmit } = useForm();
  const [article, setArticle] = useState("");

  // Una función sencilla que solo sirva para actualizar el estado en el que se van a guardar los datos de el editor de texto.
  const addArticle = (newArticle) => {
    setArticle(newArticle);
  };

  const onSubmit = (data) => {
    console.log(article);
  };
  // FIn de lo que se debe eliminar, este archivo solo es una vista del componente de detalles cursos, lo demas sobra.

  return (
    <>
      <CourseDetailsComponent />

      {/* !DELETE Probando componente */}
      <div className="container w-50">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Se le pasa la función que modifica el estado */}
          <InputArticleComponent addArticle={addArticle} />
          <button type="input">Probar</button>
        </form>
      </div>
    </>
  );
};

export default CourseDetailsPage;
