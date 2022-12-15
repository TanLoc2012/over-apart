package com.project.backend.controller;

import com.project.backend.entity.AttributeEntity;
import com.project.backend.entity.ProductEntity;
import com.project.backend.response.ProductCardPageResponse;
import com.project.backend.response.ProductCardResponse;
import com.project.backend.response.ProductInfoResponse;
import com.project.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("")
    public List<ProductEntity> getAllProduct(){
        return productService.getAllProduct();
    }
    @GetMapping("/category/{category-id}")
    public ProductCardPageResponse getProductsByCategoryId(@PathVariable("category-id") Long categoryId
            , @RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "12") Integer limit
            , @RequestParam(defaultValue = "newest") String sortBy){
        return productService.getProductsByCategoryId(categoryId, page - 1, limit, sortBy);
    }
    @GetMapping("/{product-id}")
    public ProductInfoResponse getProductInfoByProductId(@PathVariable("product-id") Long productId){
        return productService.getProductInfoByProductId(productId);
    }
    @GetMapping("/hot-sale/category/{category-id}")
    public List<ProductCardResponse> getProductsHotSaleByCategoryId(@PathVariable("category-id") Long categoryId
            , @RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "9") Integer limit){
        return productService.getProductsHotSaleByCategoryId(categoryId, page,limit);
    }
    @GetMapping("/attribute/{category-id}")
    public List<AttributeEntity> getAllAttributeByCategoryId(@PathVariable("category-id") Long categoryId){
        return productService.getAllAttributeByCategoryId(categoryId);
    }
}
