import Swal from "sweetalert2";

const alertSuccess = ({ title, text, timer = "4000"}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
    timer: timer,
  });
};

const alertError = ({ title, text, timer = "4000" }) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "error",
    timer: timer,
  });
};

const alertWarning = ({ title, text }) => {
  Swal.fire({
    title: title,
    text: text,
    icon: "warning",
    buttons: ["No", "Si"],
  });
};

const deleteAlert = ({ titleWarning, textWarning, textSucess, timer = "4000" }) => {
  Swal.fire({
    title: titleWarning,
    text: textWarning,
    icon: "warning",
    buttons: ["No", "Si"],
  }).then((respuesta) => {
    if (respuesta) {
      Swal.fire({
        text: textSucess,
        icon: "success",
        timer: timer,
      });
    }
  });
};

export { alertSuccess, alertError, alertWarning, deleteAlert };
