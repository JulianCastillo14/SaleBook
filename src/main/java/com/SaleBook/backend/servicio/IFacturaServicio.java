/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.Factura;
import java.util.List;

/**
 *
 * @author juang
 */
public interface IFacturaServicio {

    Factura nuevaFactura(Factura factura);
    List<Factura> obtenerFacturasPorIdCliente(Cliente cliente);
}
