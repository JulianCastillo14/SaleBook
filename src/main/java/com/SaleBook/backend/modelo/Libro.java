                /*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;

/**
 *
 * @author juang
 */
@Entity
@Table(name=Libro.TABLE_NAME)
public class Libro {
    public static final String TABLE_NAME = "Libro";
    
    @Id
    private String isbn;
    private String titulo;
    private String autor;
    private String edicion;
    private String categoria;
    private Date fecha_publicacion;
    private String editorial;
    private String idioma;
    private float valor_unitario;
    private int stock;

    public Libro(){
        
    }
    
    public Libro( String isbn, String titulo, String autor, String edicion,String categoria, 
            Date fecha_publicacion, String editorial, String idioma, float valor_unitario, int stock) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.edicion = edicion;
        this.categoria = categoria;
        this.fecha_publicacion = fecha_publicacion;
        this.editorial = editorial;
        this.idioma = idioma;
        this.valor_unitario = valor_unitario;
        this.stock = stock;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getEdicion() {
        return edicion;
    }

    public void setEdicion(String edicion) {
        this.edicion = edicion;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Date getFecha_publicacion() {
        return fecha_publicacion;
    }

    public void setFecha_publicacion(Date fecha_publicacion) {
        this.fecha_publicacion = fecha_publicacion;
    }

    public String getEditorial() {
        return editorial;
    }

    public void setEditorial(String editorial) {
        this.editorial = editorial;
    }

    public String getIdioma() {
        return idioma;
    }

    public void setIdioma(String idioma) {
        this.idioma = idioma;
    }

    public float getValor_unitario() {
        return valor_unitario;
    }

    public void setValor_unitario(float valor_unitario) {
        this.valor_unitario = valor_unitario;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
        
}
