/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.Factura;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author juang
 */
public interface FacturaRepositorio extends JpaRepository<Factura, Integer>{
    @Query("select p from Factura as p where p.numeroDocumento = :numeroDocumento")
    List<Factura> findByCliente(@Param("numeroDocumento") Cliente numeroDocumento);
}
