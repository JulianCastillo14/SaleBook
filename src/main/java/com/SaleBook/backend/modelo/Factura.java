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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.List;

/**
 *
 * @author juang
 */

@Entity
@Table (name = Factura.TABLE_NAME)
public class Factura {
   public static final String TABLE_NAME = "Factura";
            
    
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Column (name = "ID_FACTURA")
    private Integer idFactura; 
    
    @Column(name = "FECHA")
    private LocalDate fecha;
    
    @ManyToOne
    @JoinColumn (name = "NUMERO_DOCUMENTO")
    private Cliente numeroDocumento;
    
    @Column (name = "SUB_TOTAl")
    private float subTotal;
    
    @Column (name = "DESCUENTO")
    private float descuento;
    
    @Column (name = "IVA")
    private float iva;
    
    @Column (name = "VALOR_TOTAL")
    private float valorTotal;
    
    @OneToMany(mappedBy = "idFactura")
    private List<Libro_Por_Factura> libroFacturaIdFactura;
  
    public Factura(){
        
    }
    
    public Factura(Integer idFactura, LocalDate fecha, Cliente numeroDocumento, float subTotal, float descuento, float iva, float valorTotal) {
        this.idFactura = idFactura;
        this.fecha = fecha;
        this.numeroDocumento = numeroDocumento;
        this.subTotal = subTotal;
        this.descuento = descuento;
        this.iva = iva;
        this.valorTotal = valorTotal;
    }

    public Integer getIdFactura() {
        return idFactura;
    }

    public void setIdFactura(Integer idFactura) {
        this.idFactura = idFactura;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public Cliente getNumeroDocumento() {
        return numeroDocumento;
    }

    public void setNumeroDocumento(Cliente numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
    }

    public float getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(float subTotal) {
        this.subTotal = subTotal;
    }

    public float getDescuento() {
        return descuento;
    }

    public void setDescuento(float descuento) {
        this.descuento = descuento;
    }

    public float getIva() {
        return iva;
    }

    public void setIva(float iva) {
        this.iva = iva;
    }

    public float getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(float valorTotal) {
        this.valorTotal = valorTotal;
    }

    
}
