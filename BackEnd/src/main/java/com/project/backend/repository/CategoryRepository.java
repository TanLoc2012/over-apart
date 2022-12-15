package com.project.backend.repository;

import com.project.backend.entity.CategoryEntity;
import com.project.backend.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
    public List<CategoryEntity> getCategoryByParentCategoryId(Long parentCategoryId);

}
