/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.modelo.Libro_Por_Factura;
import com.SaleBook.backend.repositorio.Libro_Por_FacturaRepositorio;
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
public class Libro_Por_FacturaServicio implements ILibro_Por_FacturaServicio {
    
    @Autowired
    private Libro_Por_FacturaRepositorio libroFacturaRepositorio;


    @Override
    public Libro_Por_Factura grabarLibroFactura(Libro_Por_Factura libroFactura) {
        return libroFacturaRepositorio.save(libroFactura);
    }

    @Override
    public List<Libro_Por_Factura> obtenerPorFactura(Factura factura) {
         return libroFacturaRepositorio.findByFactura(factura);
    }   

    
}
