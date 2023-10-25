/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SaleBook.backend.modelo.Tipo_Documento;

/**
 *
 * @author julia
 */
public interface Tipo_DocumentoRepositorio extends JpaRepository<Tipo_Documento, Integer> {
    
}
