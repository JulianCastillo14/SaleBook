/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.servicio;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.LoginCliente;
import com.SaleBook.backend.repositorio.ClienteRepositorio;
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
public class ClienteServicio implements IClienteServicio {
    @Autowired
    ClienteRepositorio clienteRepositorio;

    @Override
    public List<Cliente> getCliente() {
        return clienteRepositorio.findAll();
    }

    @Override
    public Cliente nuevoCliente(Cliente cliente) {
        return clienteRepositorio.save(cliente);
    }

    @Override
    public Cliente buscarCliente(Integer numeroDocumento) {
        Cliente cliente = null;
        cliente = clienteRepositorio.findById(numeroDocumento).orElse(null);
        if (cliente == null){
            return null;
        }
        return cliente;
    }

    @Override
    public int borrarCliente(Integer numeroDocumento) {
        clienteRepositorio.deleteById(numeroDocumento);
        return 1;
    }

    @Override
    public int login(LoginCliente cliente) {
        int u = clienteRepositorio.findByUsuarioYContraseñaCount(cliente.getCorreo(), cliente.getContraseña());
        return u;
    }

    @Override
    public Cliente buscarClienteCorreo(String correo) {
        return clienteRepositorio.findByCorreo(correo);
    }
    
    
    
}
