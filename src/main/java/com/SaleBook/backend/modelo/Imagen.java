package com.SaleBook.backend.modelo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 *
 * @author julia
 */
@Entity
@Table(name = Imagen.TABLE_NAME)
public class Imagen {
    public static final String TABLE_NAME = "Imagen";
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_IMAGEN")
    private Integer ID_IMAGEN;
    
    @ManyToOne
    @JoinColumn(name="ISBN")
    @JsonBackReference
    private Libro isbn;
    
    @Column(name = "URL")
    private String URL;

    public Imagen() {
    }

    public Imagen(Libro ISBN, String URL) {
        this.isbn = ISBN;
        this.URL = URL;
    }

    public Integer getID_IMAGEN() {
        return ID_IMAGEN;
    }

    public void setID_IMAGEN(Integer ID_IMAGEN) {
        this.ID_IMAGEN = ID_IMAGEN;
    }

    public Libro getISBN() {
        return isbn;
    }

    public void setISBN(Libro ISBN) {
        this.isbn = ISBN;
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    @Override
    public String toString() {
        return "Imagen{" + "ID_IMAGEN=" + ID_IMAGEN + ", ISBN=" + isbn + ", URL=" + URL + '}';
    }
}
