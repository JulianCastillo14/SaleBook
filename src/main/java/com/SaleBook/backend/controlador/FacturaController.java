/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.controlador;

import com.SaleBook.backend.modelo.Cliente;
import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.modelo.Libro;
import com.SaleBook.backend.modelo.FacturaDatos;
import com.SaleBook.backend.modelo.Libro_Por_Factura;
import com.SaleBook.backend.servicio.FacturaServicio;
import com.SaleBook.backend.servicio.LibroServicio;
import com.SaleBook.backend.servicio.Libro_Por_FacturaServicio;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author juang
 */

@RestController
@CrossOrigin("*")
@RequestMapping("api/facturas")
public class FacturaController {
    
    @Autowired
    private Libro_Por_FacturaServicio libroFacturaServicio;
    @Autowired
    private FacturaServicio facturaServicio;
    @Autowired
    private LibroServicio libroServicio;
    
    
    @PostMapping("/")
    public ResponseEntity<FacturaDatos> agregar(@RequestBody FacturaDatos datos){
        
        List<Integer> cantidades = datos.getCantidades();
        List<Libro> libros = datos.getLibros();
        Factura factura = datos.getFactura();
        facturaServicio.nuevaFactura(factura);
        
        for (int i = 0; i < libros.size(); i++) {
            Libro_Por_Factura libroFactura = new Libro_Por_Factura(libros.get(i),factura, cantidades.get(i));
            libroFacturaServicio.grabarLibroFactura(libroFactura);
            Libro libro = libroServicio.getLibro(libros.get(i).getIsbn());
            libro.setStock(libro.getStock()- cantidades.get(i));
            libroServicio.grabarLibro(libro);
        }
        
        return new ResponseEntity<>(datos,HttpStatus.OK);
    }
    
    @PostMapping("/list")
    public List<FacturaDatos> obtenerPorCliente(@RequestBody Cliente cliente){
        List<Factura> facturas =  facturaServicio.obtenerFacturasPorIdCliente(cliente);
        List<FacturaDatos> facturasDatos = new ArrayList<>();
        for(Factura factura: facturas){
            List<Libro_Por_Factura> librosPorFacturas = libroFacturaServicio.obtenerPorFactura(factura);
            List<Libro> libros  = new ArrayList<>();
            List<Integer> cantidades = new ArrayList<>(); 
            for(Libro_Por_Factura librosPorFactura : librosPorFacturas){
                libros.add(librosPorFactura.getIsbn());
                cantidades.add(librosPorFactura.getCantidad());
            }
            facturasDatos.add(new FacturaDatos(cantidades, libros, librosPorFacturas.get(0).getIdFactura()));
        }
        return facturasDatos;
    }
}
