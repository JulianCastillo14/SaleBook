/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Factura;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author juang
 */
public interface FacturaRepositorio extends JpaRepository<Factura, Integer>{
    
}
