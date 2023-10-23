/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Libro;
import com.SaleBook.backend.repositorio.LibroRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juang
 */
@Service
@Transactional
public class LibroServicio implements ILibroServicio{
     
    @Autowired
    private LibroRepositorio libroRepo;
    
    @Override
    public List<Libro> getLibros() {
        return libroRepo.findAll();
    }

    @Override
    public Libro getLibro(String isbn) {
        return libroRepo.findById(isbn).orElse(null);
    }

    @Override
    public Libro grabarLibro(Libro libro) {
        return libroRepo.save(libro);
    }

    @Override
    public void deleteLibro(String isbn) {
        libroRepo.deleteById(isbn);
    }
    
}
