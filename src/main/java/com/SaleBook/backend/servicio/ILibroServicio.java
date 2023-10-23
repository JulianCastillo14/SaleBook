/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Libro;
import java.util.List;

/**
 *
 * @author juang
 */
public interface ILibroServicio {
    public List<Libro> getLibros();
    
    public Libro getLibro(String isbn);
    
    public Libro grabarLibro(Libro libro);
    
    public void deleteLibro(String isbn);
}
