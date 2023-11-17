import React, { useState } from 'react';
import '../styles/EditarEmpleado.css';
import { Peticion } from '../js/Peticion';

const EditarEmpleado = () => {
    const [form, setForm] = useState({
        Documento: '',
        'Primer-nombre': '',
        'Segundo-nombre': '',
        'Primer-apellido': '',
        'Segundo-apellido': '',
        'Tipo-Documento': '',
        'Fecha-nacimiento': '',
        Genero: '',
        Correo: '',
        Usuario: '',
        Password: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {status, respuesta: Empleados } = await Peticion("http://localhost:2020/api/Empleados/","PUT", form);
        if(status){
            alert("Empleado editado correctamente");
        } else {
            alert("Ocurrió un error al editar el empleado");
        }
    };

    return (
        <div id='container-ediEmpleado'>
        <form onSubmit={handleSubmit}>
            <div>
                <input className='input-ede' type="text" id="Documento" name="nombre" placeholder=" Documento" value={form.Documento} onChange={handleChange}/>
                <input className='input-ede' id="Primer-nombre" type="text" placeholder=" Primer nombre" value={form['Primer-nombre']} onChange={handleChange}/>
                <input className='input-ede' id="Segundo-nombre" type="text" placeholder=" Segundo nombre" value={form['Segundo-nombre']} onChange={handleChange}/>
                <input className='input-ede' id="Primer-apellido" type="text" placeholder=" Primer apellido" value={form['Primer-apellido']} onChange={handleChange}/>
            </div>
            <div>
                <input className='input-ede' id="Segundo-apellido" type="text" placeholder=" Segundo apellido" value={form['Segundo-apellido']} onChange={handleChange}/>
                <select className='select-ede' id="Tipo-Documento" value={form['Tipo-Documento']} onChange={handleChange}>
                    <option value="" disabled selected>Selecciona un tipo de documento</option>
                    <option value="TI">Tarjeta de identidad</option>
                    <option value="CC">Cédula de ciudadanía </option>
                    <option value="TE">Tarjeta de extranjería</option>
                    <option value="CE">Cédula de extranjería </option>
                </select>
                <div id="Fecha-Nacimiento">
                    Fecha de Nacimiento:
                    <input className='input-ede' id="Fecha-nacimiento" type="date" value={form['Fecha-nacimiento']} onChange={handleChange}/>
                </div>
            </div>
            <div className='ajustar-div-ede'>
                <select className='select-ede' id="Genero" name="genero" value={form.Genero} onChange={handleChange}>
                    <option value="" disabled selected>Selecciona una identidad de género</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                <input className='input-ede' id="Correo" type="email" placeholder=" Correo electrónico" value={form.Correo} onChange={handleChange}/>
            </div>
            <div className='ajustar-div-ede'>
                <input className='input-ede' id="Usuario" type="text" placeholder=" Usuario" value={form.Usuario} onChange={handleChange}/>
                <input className='input-ede' id="Password" type="text" placeholder=" Contraseña" value={form.Password} onChange={handleChange}/>
                <button className="btn-editar" type="submit">Editar Empleado</button>
            </div>
        </form>
    </div>
    );
};

export default EditarEmpleado;




