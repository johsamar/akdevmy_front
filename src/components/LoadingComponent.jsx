import { Spinner } from "reactstrap";

const LoadingComponent = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="text-center text-secondary">Cargando</h2>
      <div className="text-center m-3">
        <Spinner color="secondary" style={{ width: "5rem", height: "5rem" }} />
      </div>
    </div>
  );
};

export default LoadingComponent;
