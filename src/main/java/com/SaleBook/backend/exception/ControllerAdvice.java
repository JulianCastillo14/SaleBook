/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 *
 * @author juang
 */

@RestControllerAdvice
public class ControllerAdvice {
    
    @ExceptionHandler(value = RuntimeException.class)
    public ResponseEntity<RespuestaError> runtimeExceptionHandler(RuntimeException ex){
        RespuestaError respuesta = RespuestaError.builder().codeError("400").mensaje(ex.getMessage()).build();
        return new ResponseEntity<>(respuesta,HttpStatus.BAD_REQUEST);
    }
}
