import React from "react";

const Academia = () => {
    return (
        <>
            <div className="container vh-100">
                <div className="row my-5">
                    <div className="col">
                        <h1>Tu información</h1>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-4">
                                <p>Nombre: </p>
                                <p>Nit: </p>
                                <p>Teléfono: </p>
                                <p>Correo: </p>
                                <p>Descripción: </p>
                                <p>Cantidad de alumnos activos: </p>
                                <p>Cantidad de alumnos graduados: </p>
                                <p>Redes sociales: </p>
                            </div>
                            <div className="col-4">
                                <p>La Academia</p>
                                <p>100000100</p>
                                <p>88888</p>
                                <p>lacademia@academy.com</p>
                                <p>Lorem ipsum dolor </p>
                                <p>26</p>
                                <p>101</p>
                                <p>

                                    <div className="btn-group">
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="bi bi-facebook"></i>

                                            <span className="visually-hidden">Button</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="bi bi-instagram"></i>

                                            <span className="visually-hidden">Button</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-secondary">
                                            <i className="bi bi-whatsapp"></i>

                                            <span className="visually-hidden">Button</span>
                                        </button>
                                    </div>
                                </p>
                            </div>
                            <div className="col-4 d-grid justify-content-end">
                                <img className="border" src="src/assets/academy.png" />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <div className="col-2 d-flex justify-content-end">
                            <button type="button" className="btn btn-primary button-edit m-0">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Academia;