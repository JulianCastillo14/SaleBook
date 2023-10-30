package com.SaleBook.backend.controlador;

import com.SaleBook.backend.modelo.Empleado;
import com.SaleBook.backend.modelo.Login;
import com.SaleBook.backend.servicio.EmpleadoServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author julia
 */
@RestController
@CrossOrigin("*")
@RequestMapping("api/Empleados")
public class EmpleadoController {
    
    @Autowired
    EmpleadoServicio empleadoServicio;
    
    //Listar a los empleados
    @GetMapping("/list")
    public List<Empleado> cargarEmpleados(){
        return empleadoServicio.getEmpleados();
    }
    
    
    //Buscar por numero de documento
    @GetMapping("/list/{numeroDocumento}")
    public Empleado buscarPorId(@PathVariable Integer numeroDocumento){
        return empleadoServicio.buscarEmpleado(numeroDocumento);
    }
    
    //Agregar empleado
    @PostMapping("/")
    public ResponseEntity<Empleado> agregar(@RequestBody Empleado empleado){
        Empleado obj = empleadoServicio.nuevoEmpleado(empleado);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    //Actualiazar el empleado
    @PutMapping("/")
    public ResponseEntity<Empleado> editar(@RequestBody Empleado empleado){
        Empleado obj = empleadoServicio.buscarEmpleado(empleado.getNumeroDocumento());
        if(obj != null){
            obj.setIdTipoDocumento(empleado.getIdTipoDocumento());
            obj.setPrimerNombre(empleado.getPrimerNombre());
            obj.setSegundoNombre(empleado.getSegundoNombre());
            obj.setPrimerApellido(empleado.getPrimerApellido());
            obj.setSegundoApellido(empleado.getSegundoApellido());
            obj.setFechaNacimiento(empleado.getFechaNacimiento());
            obj.setGenero(empleado.getGenero());
            obj.setCorreo(empleado.getCorreo());
            obj.setUsuario(empleado.getUsuario());
            obj.setPassword(empleado.getPassword());
            empleadoServicio.nuevoEmpleado(obj); 
        }else {
            return new ResponseEntity<>(obj,HttpStatus.INTERNAL_SERVER_ERROR);
        }
         return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    //Eliminar empleado
    @DeleteMapping("/{numeroDocumento}")
    public ResponseEntity<Empleado> eliminar(@PathVariable Integer numeroDocumento){
        Empleado obj = empleadoServicio.buscarEmpleado(numeroDocumento);
        if(obj != null){
            empleadoServicio.borrarEmpleado(numeroDocumento);
        }else{
            return new ResponseEntity<>(obj,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    @PostMapping("/login")
    public int login(@RequestBody Login usuario) {
        int responseLogin = empleadoServicio.login(usuario);
        return responseLogin;
    }
   
}
