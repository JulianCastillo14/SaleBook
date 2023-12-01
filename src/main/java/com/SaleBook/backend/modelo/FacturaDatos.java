/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.modelo;

import java.util.List;

/**
 *
 * @author juang
 */
public class FacturaDatos {
    
    private List<Integer> cantidades;
    private List<Libro> libros;
    private Factura factura;

    public FacturaDatos(List<Integer> cantidades, List<Libro> libros, Factura factura) {
        this.cantidades = cantidades;
        this.libros = libros;
        this.factura = factura;
    }

    public List<Integer> getCantidades() {
        return cantidades;
    }

    public void setCantidades(List<Integer> cantidades) {
        this.cantidades = cantidades;
    }

    public List<Libro> getLibros() {
        return libros;
    }

    public void setLibros(List<Libro> libros) {
        this.libros = libros;
    }

    public Factura getFactura() {
        return factura;
    }

    public void setFactura(Factura factura) {
        this.factura = factura;
    }

 
}
