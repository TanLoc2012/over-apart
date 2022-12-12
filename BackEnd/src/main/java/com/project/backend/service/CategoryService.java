package com.project.backend.service;

import com.project.backend.entity.CategoryEntity;
import com.project.backend.entity.ProductEntity;
import com.project.backend.repository.CategoryRepository;
import com.project.backend.response.CategoryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public List<CategoryResponse> getAllCategory(){
        List<CategoryEntity> parentCategory = categoryRepository.getAllCategory(Long.valueOf(0));
        List<CategoryResponse> categoryResponseList = new ArrayList<>();
        for(CategoryEntity categoryEntity: parentCategory){
            categoryResponseList.add(new CategoryResponse(categoryEntity.getId()
                    , categoryEntity.getName(), categoryRepository.getAllCategory(Long.valueOf(categoryEntity.getId()))));
        }
        return categoryResponseList;
    }
//    public List<ProductEntity> getAllProductByCategoryId(Long categoryId){
//        return categoryRepository.getAllProductByCategoryId(categoryId);
//    }
}
