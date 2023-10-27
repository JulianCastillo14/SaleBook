/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.exception;

import java.util.Date;

/**
 *
 * @author juang
 */
public class ExecptionResponse {
    private Date timestamp;
    private String mensaje;
    private String detalles;
    
    public ExecptionResponse(Date timestamp, String mensaje, String detalles){
        this.timestamp = timestamp;
        this.mensaje = mensaje;
        this.detalles = detalles;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getDetalles() {
        return detalles;
    }

    public void setDetalles(String detalles) {
        this.detalles = detalles;
    }
}
