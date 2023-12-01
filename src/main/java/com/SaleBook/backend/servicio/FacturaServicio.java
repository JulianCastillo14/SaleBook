/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.repositorio.FacturaRepositorio;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juang
 */
@Service
@Transactional
public class FacturaServicio implements IFacturaServicio {
    
    @Autowired
    private FacturaRepositorio facturaRepo;

    @Override
    public Factura nuevaFactura(Factura factura) {
        return facturaRepo.save(factura);
    }

}
