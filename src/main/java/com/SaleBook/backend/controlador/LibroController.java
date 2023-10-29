/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.controlador;

import com.SaleBook.backend.modelo.Libro;
import com.SaleBook.backend.servicio.LibroServicio;
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
@RequestMapping("api/libros")
public class LibroController {
    @Autowired
    private LibroServicio libroServicio;
    
    @GetMapping("/list")
    public List<Libro> consultarTodo(){
        return libroServicio.getLibros();
    }
    
    @GetMapping("/list/{isbn}")
    public ResponseEntity<Libro> buscarId(@PathVariable("isbn") String isbn){
        Libro obj = libroServicio.getLibro(isbn);
        if(obj != null){
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        throw new RuntimeException("No se encontro un libro con ese ISBN");
    }
    
    @PostMapping("/")
    public ResponseEntity<Libro> agregar(@RequestBody Libro libro){
        Libro obj = libroServicio.getLibro(libro.getIsbn());
        if(obj != null){
            throw new RuntimeException("El libro ya existe");
        }
        obj = libroServicio.grabarLibro(libro);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    @PutMapping("/")
    public ResponseEntity<Libro> editar(@RequestBody Libro libro){
        Libro obj = libroServicio.getLibro(libro.getIsbn());
        if(obj != null){    
            obj.setTitulo(libro.getTitulo());
            obj.setAutor(libro.getAutor());
            obj.setEdicion(libro.getEdicion());
            obj.setCategoria(libro.getCategoria());
            obj.setFecha_publicacion(libro.getFecha_publicacion());
            obj.setEditorial(libro.getEditorial());
            obj.setIdioma(libro.getIdioma());
            obj.setValor_unitario(libro.getValor_unitario());
            obj.setStock(libro.getStock());
        }else{
            throw new RuntimeException("El libro no existe");
        }
        libroServicio.grabarLibro(obj);
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
    
    @DeleteMapping("/{isbn}")
     public ResponseEntity<Libro> eliminar(@PathVariable String isbn){
        Libro obj = libroServicio.getLibro(isbn);
        if(obj != null){
           libroServicio.deleteLibro(isbn);
        }else{
            throw new RuntimeException("El libro no existe");
        }
        return new ResponseEntity<>(obj,HttpStatus.OK);
    }
}
    