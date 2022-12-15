package com.project.backend.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class ProductInfoResponse {
    private Long id;
    private String productName;
    private Double price;
    private Double rating;
    private Integer sold;
    private Integer comment;
    private Integer like;
    private String code;
    private String shop;
    private Long categoryId;
    private List<String> images;
}
