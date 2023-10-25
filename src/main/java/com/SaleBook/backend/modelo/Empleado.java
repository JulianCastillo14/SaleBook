package com.SaleBook.backend.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;

/**
 *
 * @author julia
 */
@Entity
@Table (name = Empleado.TABLE_NAME)

public class Empleado {
    public static final String TABLE_NAME = "Empleado";
    
    @Id
    @Column (name = "NUMERO_DOCUMENTO")
    private Integer numeroDocumento;
    
    @ManyToOne
    @JoinColumn(name = "ID_TIPO_DOCUMENTO")
    private Tipo_Documento idTipoDocumento;
    
    @Column (name = "PRIMER_NOMBRE")
    private String primerNombre;
    
    @Column (name = "SEGUNDO_NOMBRE")
    private String segundoNombre;
    
    @Column (name = "PRIMER_APELLIDO")
    private String primerApellido;
    
    @Column (name = "SEGUNDO_APELLIDO")
    private String segundoApellido;
    
    @Column (name = "FECHA_NACIMIENTO")
    private LocalDate fechaNacimiento;
    
    @Column (name = "GENERO")
    private String genero;
    
    @Column (name = "CORREO")
    private String correo;
    
    @Column (name = "USUARIO")
    private String usuario;
    
    @Column (name = "CONTRASEÑA")
    private String password;
    
    public Empleado(){
        
    }

    public Empleado(Integer numeroDocumento, Tipo_Documento idTipoDocumento, String primerNombre, String segundoNombre, String primerApellido, 
            String segundoApellido, LocalDate fechaNacimiento, String genero, String correo, String usuario, String password) {
        this.numeroDocumento = numeroDocumento;
        this.idTipoDocumento = idTipoDocumento;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.genero = genero;
        this.correo = correo;
        this.usuario = usuario;
        this.password = password;
    }

    public Integer getNumeroDocumento() {
        return numeroDocumento;
    }

    public void setNumeroDocumento(Integer numeroDocumento) {
        this.numeroDocumento = numeroDocumento;
    }

    public Tipo_Documento getIdTipoDocumento() {
        return idTipoDocumento;
    }

    public void setIdTipoDocumento(Tipo_Documento idTipoDocumento) {
        this.idTipoDocumento = idTipoDocumento;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public String getSegundoNombre() {
        return segundoNombre;
    }

    public void setSegundoNombre(String segundoNombre) {
        this.segundoNombre = segundoNombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}