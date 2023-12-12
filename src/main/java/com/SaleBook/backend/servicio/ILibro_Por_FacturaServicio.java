/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.modelo.Libro_Por_Factura;
import java.util.List;

/**
 *
 * @author juang
 */
public interface ILibro_Por_FacturaServicio {
    
    public Libro_Por_Factura grabarLibroFactura(Libro_Por_Factura libroFactura);
    public List<Libro_Por_Factura> obtenerPorFactura(Factura libroFactura);
}
