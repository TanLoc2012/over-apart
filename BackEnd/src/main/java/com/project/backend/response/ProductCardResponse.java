package com.project.backend.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class ProductCardResponse {
    private Long id;
    private String productName;
    private Double price;
    private Double rating;
    private Integer sold;
    private String image;
}
