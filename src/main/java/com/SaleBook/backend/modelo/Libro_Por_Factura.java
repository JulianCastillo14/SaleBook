/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 *
 * @author juang
 */
@Entity
@Table(name=Libro_Por_Factura.TABLE_NAME)
public class Libro_Por_Factura {
    public static final String TABLE_NAME = "Libro_Por_Factura";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idLibroFactura;
    
    @ManyToOne
    @JoinColumn(name = "ISBN")
    private Libro isbn;

    @ManyToOne
    @JoinColumn(name = "ID_FACTURA")
    private Factura idFactura;

    @Column(name = "CANTIDAD")
    private int cantidad;

     public Libro_Por_Factura() {
    }
    
    public Libro_Por_Factura(Libro isbn, Factura idFactura, int cantidad) {
        this.isbn = isbn;
        this.idFactura = idFactura;
        this.cantidad = cantidad;
    }

    public int getIdLibroFactura() {
        return idLibroFactura;
    }

    public void setIdLibroFactura(int idLibroFactura) {
        this.idLibroFactura = idLibroFactura;
    }

    public Libro getIsbn() {
        return isbn;
    }

    public void setIsbn(Libro isbn) {
        this.isbn = isbn;
    }

    public Factura getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(Factura idFactura) {
        this.idFactura = idFactura;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}
