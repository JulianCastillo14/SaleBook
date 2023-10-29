/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.SaleBook.backend.exception;

import lombok.Builder;
import lombok.Data;

/**
 *
 * @author juang
 */

@Data
@Builder
class RespuestaError {
    private String codeError;
    private String mensaje;
}
