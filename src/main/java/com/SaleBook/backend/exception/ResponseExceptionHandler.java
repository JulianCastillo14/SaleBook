/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.exception;


import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 *
 * @author juang
 */

@ControllerAdvice
@RestController
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {
    private static final Logger logger =  LoggerFactory.getLogger(ResponseExceptionHandler.class);
    
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExecptionResponse> manejarTodasExcepciones(Exception e){
            ExecptionResponse execptionresponse = new ExecptionResponse(
            new Date(),
            "Ocurrio un Error",
            e.getMessage());
            return new ResponseEntity<>(execptionresponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
