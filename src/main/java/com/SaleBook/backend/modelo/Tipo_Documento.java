package com.SaleBook.backend.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author julia
 */
@Entity
@Table (name = Tipo_Documento.TABLE_NAME)
public class Tipo_Documento {
    
    public static final String TABLE_NAME = "Tipo_Documento";
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     @Column (name = "ID_TIPO_DOCUMENTO")
     private Integer idTipoDocumento;
     
     @Column (name = "ABREVIATURA")
     private String abreviatura;
     
     @Column (name = "DESCRIPCION")
     private String descripcion;
     
     public Tipo_Documento(){
         
     }
     
     public Tipo_Documento(Integer idTipoDocumento, String abreviatura,String descripcion){
         this.idTipoDocumento = idTipoDocumento;
         this.abreviatura = abreviatura;
         this.descripcion =  descripcion;
     }

    public Integer getIdTipoDocumento() {
        return idTipoDocumento;
    }

    public void setIdTipoDocumento(Integer idTipoDocumento) {
        this.idTipoDocumento = idTipoDocumento;
    }

    public String getAbreviatura() {
        return abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    } 
}