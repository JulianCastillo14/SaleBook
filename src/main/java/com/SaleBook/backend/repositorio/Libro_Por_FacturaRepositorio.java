/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Libro_Por_Factura;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author juang
 */
public interface Libro_Por_FacturaRepositorio extends JpaRepository<Libro_Por_Factura, Integer>{
    
}
