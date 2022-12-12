package com.project.backend.response;

import com.project.backend.entity.CategoryEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CategoryResponse {
    Long id;
    String name;
    List<CategoryEntity> subCategory;
}
