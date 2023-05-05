import { useForm } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";

const ExternalLinkComponent = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <FormGroup>
        <Label for="name">Enlace externo</Label>
        <input
          type="text"
          id="url"
          className="form-control z-depth-1"
          placeholder="Coloca el enlace de la clase aquí..."
          {...register("name", {
            required: "El nombre del curso es requerido",
            minLength: {
              value: 1,
              message: "la longitud mínima es 1",
            },
          })}
        />
        {errors.url && (
          <div className="alert alert-danger" role="alert">
            {errors.url.message}
          </div>
        )}
      </FormGroup>
    </>
  );
};

export { ExternalLinkComponent };
