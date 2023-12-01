/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.controlador;

import com.SaleBook.backend.modelo.Factura;
import com.SaleBook.backend.modelo.Libro;
import com.SaleBook.backend.modelo.FacturaDatos;
import com.SaleBook.backend.modelo.Libro_Por_Factura;
import com.SaleBook.backend.servicio.FacturaServicio;
import com.SaleBook.backend.servicio.Libro_Por_FacturaServicio;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
    
    @PostMapping("/")
    public ResponseEntity<FacturaDatos> agregar(@RequestBody FacturaDatos datos){
        
        List<Integer> cantidades = datos.getCantidades();
        List<Libro> libros = datos.getLibros();
        Factura factura = datos.getFactura();
        facturaServicio.nuevaFactura(factura);
        
        for (int i = 0; i < libros.size(); i++) {
            Libro_Por_Factura libroFactura = new Libro_Por_Factura(libros.get(i),factura, cantidades.get(i));
            libroFacturaServicio.grabarLibroFactura(libroFactura);
        }
        
        return new ResponseEntity<>(datos,HttpStatus.OK);
    }
    
}
