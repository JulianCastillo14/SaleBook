package com.SaleBook.backend.repositorio;

import com.SaleBook.backend.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author julia
 */
public interface EmpleadoRepositorio extends JpaRepository<Empleado, Integer>{
    
}
