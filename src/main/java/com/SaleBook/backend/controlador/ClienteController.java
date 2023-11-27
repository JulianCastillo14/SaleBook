/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.controlador;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.LoginCliente;
import com.SaleBook.backend.servicio.ClienteServicio;
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
 * @author juang
 */
@RestController
@CrossOrigin("*")
@RequestMapping("api/clientes")
public class ClienteController {
    @Autowired
    ClienteServicio clienteServicio;
    
    //Listar a los empleados
    @GetMapping("/list")
    public List<Cliente> cargarEmpleados(){
        return clienteServicio.getCliente();
    }
    
    
    //Buscar por numero de documento
    @GetMapping("/list/{numeroDocumento}")
    public Cliente buscarPorId(@PathVariable Integer numeroDocumento){
        return clienteServicio.buscarCliente(numeroDocumento);
    }
    
    @GetMapping("/list/correo/{correo}")
    public Cliente buscarPorCorreo(@PathVariable String correo){
        return clienteServicio.buscarClienteCorreo(correo);
    }
    
    //Agregar empleado
    @PostMapping("/")
    public ResponseEntity<Cliente> agregar(@RequestBody Cliente cliente){
        Cliente obj = clienteServicio.nuevoCliente(cliente);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    //Actualiazar el empleado
    @PutMapping("/")
    public ResponseEntity<Cliente> editar(@RequestBody Cliente cliente){
        Cliente obj = clienteServicio.buscarCliente(cliente.getNumeroDocumento());
        if(obj != null){
            obj.setIdTipoDocumento(cliente.getIdTipoDocumento());
            obj.setPrimerNombre(cliente.getPrimerNombre());
            obj.setSegundoNombre(cliente.getSegundoNombre());
            obj.setPrimerApellido(cliente.getPrimerApellido());
            obj.setSegundoApellido(cliente.getSegundoApellido());
            obj.setFechaNacimiento(cliente.getFechaNacimiento());
            obj.setGenero(cliente.getGenero());
            obj.setCorreo(cliente.getCorreo());
            obj.setPassword(cliente.getPassword());
            clienteServicio.nuevoCliente(obj); 
        }else {
            return new ResponseEntity<>(obj,HttpStatus.INTERNAL_SERVER_ERROR);
        }
         return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    //Eliminar empleado
    @DeleteMapping("/{numeroDocumento}")
    public ResponseEntity<Cliente> eliminar(@PathVariable Integer numeroDocumento){
        Cliente obj = clienteServicio.buscarCliente(numeroDocumento);
        if(obj != null){
            clienteServicio.borrarCliente(numeroDocumento);
        }else{
            return new ResponseEntity<>(obj,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    
    @PostMapping("/login")
    public int login(@RequestBody LoginCliente usuario) {
        int responseLogin = clienteServicio.login(usuario);
        return responseLogin;
    }
}
