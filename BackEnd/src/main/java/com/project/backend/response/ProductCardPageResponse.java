package com.project.backend.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class ProductCardPageResponse {
    private List<ProductCardResponse> productCardResponseList;
    private int totalPage;
}
