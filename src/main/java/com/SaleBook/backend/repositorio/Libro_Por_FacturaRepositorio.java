/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.modelo.Libro_Por_Factura;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author juang
 */
public interface Libro_Por_FacturaRepositorio extends JpaRepository<Libro_Por_Factura, Integer>{
    @Query("select p from Libro_Por_Factura as p where p.idFactura = :idFactura")
    List<Libro_Por_Factura> findByFactura(@Param("idFactura") Factura idFactura);
}
