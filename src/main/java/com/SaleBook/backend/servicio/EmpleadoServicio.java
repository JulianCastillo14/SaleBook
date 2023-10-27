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

    @Override
    public ResponseEntity<?> ingresar(Login empleadoDto){
        Map<String, Object> response = new HashMap<>();
        Empleado empleado = null;
        try {
            empleado = empleadoRepositorio.findByUsuarioYContraseña(empleadoDto.getUsuario(), empleadoDto.getContraseña());
            if(empleado == null) {
                response.put("Usuario", null);
                response.put("Mensaje", "Alerta:Usuario o Password incorrectos");
                response.put("statusCode", HttpStatus.NOT_FOUND.value());
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }else{
               response.put ("Usuario", empleado);
               response. put ("Mensaje", "Datos correctos");
               response .put ("statusCode", HttpStatus.OK. value ());
               return new ResponseEntity<>(response, HttpStatus.OK);
            }
        
        }catch (Exception e) {
               response.put("Usuario", null);
               response.put("Mensaje", "Ha ocurrido un erroz");
               response.put("statusCode", HttpStatus.INTERNAL_SERVER_ERROR.value());
               return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
           }    
    }
 
}

