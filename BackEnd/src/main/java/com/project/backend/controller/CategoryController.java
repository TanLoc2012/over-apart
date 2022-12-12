package com.project.backend.controller;

import com.project.backend.entity.ProductEntity;
import com.project.backend.response.CategoryResponse;
import com.project.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("")
    public List<CategoryResponse> getCategory(){
        return categoryService.getAllCategory();
    }

//    @GetMapping("/{category-id}/all-product")
//    public List<ProductEntity> getAllProductByCategoryId(@PathVariable("category-id") Long categoryId){
//        return categoryService.getAllProductByCategoryId(categoryId);
//    }
}
