package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Empleado;
import com.SaleBook.backend.modelo.Login;
import com.SaleBook.backend.repositorio.EmpleadoRepositorio;
import jakarta.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

   @Override
    public int login(Login empleadoDto){
        int u = empleadoRepositorio.findByUsuarioYContraseñaCount(empleadoDto.getUsuario(), empleadoDto.getContraseña());
        return u;
    }
 
}

