package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Empleado;
import com.SaleBook.backend.repositorio.EmpleadoRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author julia
 */
@Service
@Transactional
public class EmpleadoServicio implements IEmpleadoServicio {
    
    @Autowired
    EmpleadoRepositorio empleadoRepositorio;
    

    @Override
    public List<Empleado> getEmpleados() {
        return empleadoRepositorio.findAll();
    }

    @Override
    public Empleado nuevoEmpleado(Empleado empleado) {
        return empleadoRepositorio.save(empleado);
    }

    @Override
    public Empleado buscarEmpleado(Integer numeroDocumento) {
        Empleado empleado = null;
        empleado = empleadoRepositorio.findById(numeroDocumento).orElse(null);
        if (empleado == null){
            return null;
        }
        return empleado;
    }

    @Override
    public int borrarEmpleado(Integer numeroDocumento) {
        empleadoRepositorio.deleteById(numeroDocumento);
        return 1;
    }
}
