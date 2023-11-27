/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.LoginCliente;
import java.util.List;

/**
 *
 * @author juang
 */
public interface IClienteServicio {
    List<Cliente> getCliente();
    Cliente nuevoCliente(Cliente cliente);
    Cliente buscarCliente(Integer numeroDocumento);
    Cliente buscarClienteCorreo(String numeroDocumento);
    int borrarCliente(Integer numeroDocumento);
    int login(LoginCliente empleadoDto);
}
