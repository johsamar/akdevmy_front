import { AiFillDelete } from "react-icons/ai";
import { deleteClassModule } from "../../services/ModulesService";
import { alertError, alertSuccess } from "../../utils/Alerts";
import PropTypes from "prop-types";

const DeleteClassModalComponent = ({ classes, moduleId, updateModules }) => {
  const { _id, name } = classes;

  const deleteClassesModuleFromService = async () => {
    try {
      let response = await deleteClassModule({
        classId: _id,
        moduleId: moduleId,
      });
      //* Update the module in parent component
      updateModules();
      //* Alert delete
      alertSuccess({
        title: `¡${response}!`,
        text: `¡${name} fue eliminada exitosamente!`,
      });
    } catch (error) {
      //* Alert Delete error
      alertError({
        title: "¡Ha ocurrido un error al eliminar la clase!",
        text: `¡${name} no se se pudo eliminar!`,
      });
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#eliminarClase${_id}`}
      >
        <AiFillDelete />
      </button>

      <div
        className="modal fade"
        id={`eliminarClase${_id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center"
                id="staticBackdropLabel"
              >
                Eliminar Clase: {name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <>
                    <div className="lead">
                      Estas seguro que quieres eliminar la clase {name}?
                    </div>
                  </>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={deleteClassesModuleFromService}
              >
                Eliminar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteClassModalComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  moduleId: PropTypes.string.isRequired,
  updateModules: PropTypes.func.isRequired,
};

export default DeleteClassModalComponent;
