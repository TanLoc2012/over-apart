package com.project.backend.controller;

import com.project.backend.entity.ProductEntity;
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
}
