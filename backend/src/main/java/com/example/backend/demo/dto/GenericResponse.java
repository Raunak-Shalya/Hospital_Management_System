package com.example.backend.demo.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GenericResponse {
    private String result;
    private String message;
    private Object data;
}
