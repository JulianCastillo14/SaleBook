import React, { useState } from 'react';
import '../styles/EditarEmpleado.css';
import { Peticion } from '../js/Peticion';

const EditarEmpleado = () => {
    const [form, setForm] = useState({
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        numeroDocumento: '',
        tipoDocumento: '',
        fechaNacimiento: '',
        genero: '',
        correo: '',
        usuario: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tipoDocumentoMap = {
            "TI": {
                "idTipoDocumento": 1,
                "abreviatura": "TI",
                "descripcion": "TARJETA DE IDENTIDAD"
            },
            "CC": {
                "idTipoDocumento": 2,
                "abreviatura": "CC",
                "descripcion": "CEDULA DE CIUDADANIA"
            },
            "TE": {
                "idTipoDocumento": 3,
                "abreviatura": "TE",
                "descripcion": "TARJETA DE EXTRANJERIA"
            },
            "CE": {
                "idTipoDocumento": 4,
                "abreviatura": "CE",
                "descripcion": "CEDULA DE EXTRANJERIA"
            }
        };

        const data = {
            ...form,
            idTipoDocumento: tipoDocumentoMap[form.tipoDocumento],
            fechaNacimiento: new Date(form.fechaNacimiento).toISOString().split('T')[0]
        };

        const { status } = await Peticion("http://localhost:2020/api/Empleados/", "PUT", data);

        if (status) {
            alert("Empleado editado correctamente");
        } else {
            alert("Ocurrió un error al editar el empleado");
        }
    };

    return (
        <section id="container-ediEmpleado">
            <form onSubmit={handleSubmit}>
                <div className="ajustar-div-ede">
                    <input name="primerNombre" type="text" placeholder=" Primer nombre" onChange={handleChange} className="input-ede" />
                    <input name="segundoNombre" type="text" placeholder=" Segundo nombre" onChange={handleChange} className="input-ede" />
                    <input name="primerApellido" type="text" placeholder=" Primer apellido" onChange={handleChange} className="input-ede" />
                    <input name="segundoApellido" type="text" placeholder=" Segundo apellido" onChange={handleChange} className="input-ede" />
                </div>
                <div className="ajustar-div-ede">
                    <input name="numeroDocumento" type="text" placeholder=" Documento" onChange={handleChange} className="input-ede" />
                    <select name="tipoDocumento" onChange={handleChange} className="select-ede">
                        <option value="" disabled selected>Selecciona un tipo de documento</option>
                        <option value="TI">Tarjeta de identidad</option>
                        <option value="CC">Cédula de ciudadanía </option>
                        <option value="TE">Tarjeta de extranjería</option>
                        <option value="CE">Cédula de extranjería </option>
                    </select>
                    <div id="Fecha-Nacimiento">
                        Fecha de Nacimiento:
                        <input name="fechaNacimiento" type="date" onChange={handleChange} className="input-ede" />
                    </div>
                </div>
                <div className="ajustar-div-ede">
                    <select name="genero" onChange={handleChange} className="select-ede">
                        <option value="" disabled selected>Selecciona una identidad de género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                    <input name="correo" type="email" placeholder=" Correo electrónico" onChange={handleChange} className="input-ede" id="Correo" />
                </div>
                <div className="ajustar-div-ede">
                    <input name="usuario" type="text" placeholder=" Usuario" onChange={handleChange} className="input-ede" />
                    <input name="password" type="text" placeholder=" Contraseña" onChange={handleChange} className="input-ede" />
                    <button type="submit" className="btn-editar">Editar Empleado</button>
                </div>
            </form>
        </section>
    );
}

export default EditarEmpleado;
