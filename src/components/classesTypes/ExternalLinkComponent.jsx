import { useFormContext } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import PropTypes from "prop-types";

const ExternalLinkComponent = ({ initialValue }) => {
  // Form context
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormGroup>
        <Label for="name">Enlace externo</Label>
        <input
          type="text"
          id="url"
          className="form-control z-depth-1"
          placeholder="Coloca el enlace de la clase aquí..."
          {...register("url", {
            required: "La URL de la clase es requerida",
            minLength: {
              value: 1,
              message: "la longitud mínima es 1",
            },
          })}
          defaultValue={initialValue}
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

ExternalLinkComponent.propTypes = {
  initialValue: PropTypes.string,
};

export { ExternalLinkComponent };
