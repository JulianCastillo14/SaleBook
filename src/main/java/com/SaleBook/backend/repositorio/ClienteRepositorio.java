/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author juang
 */
public interface ClienteRepositorio extends JpaRepository<Cliente, Integer>{
    @Query("select count (*) from Cliente as p where p.correo = :correo and p.password=:contraseña")
    Integer findByUsuarioYContraseñaCount (@Param("correo") String correo,
            @Param("contraseña") String contraseña);
    
    @Query("select p from Cliente as p where p.correo= :correo ")
    Cliente findByCorreo (@Param("correo") String correo);
}
