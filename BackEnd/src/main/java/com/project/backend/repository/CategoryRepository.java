package com.project.backend.repository;

import com.project.backend.entity.CategoryEntity;
import com.project.backend.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {
    @Query("SELECT c FROM CategoryEntity c WHERE c.parentCategoryId=?1")
    public List<CategoryEntity> getAllCategory(Long parentCategoryId);

//    @Query("SELECT c.productEntityList FROM CategoryEntity c WHERE c.id=?1")
//    public  List<ProductEntity> getAllProductByCategoryId(Long categoryId);
}
