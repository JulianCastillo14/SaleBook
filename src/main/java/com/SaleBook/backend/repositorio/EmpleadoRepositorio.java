package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author julia
 */
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer>{
  
    @Query("select count (*) from Empleado as p where p.usuario= :usuario and p.password=:contraseña")
    Integer findByUsuarioYContraseñaCount (@Param("usuario") String usuario,
            @Param("contraseña") String contraseña);
    @Query("select p from Empleado as p where p.usuario= :usuario and p.password=:contraseña")
    Empleado findByUsuarioYContraseña(@Param("usuario") String usuario, 
            @Param("contraseña") String contraseña);
}
