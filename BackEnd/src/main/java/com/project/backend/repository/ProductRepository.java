package com.project.backend.repository;

import com.project.backend.entity.AttributeEntity;
import com.project.backend.entity.CategoryEntity;
import com.project.backend.entity.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    @Query("SELECT p FROM ProductEntity p WHERE p.category=?1 AND p.status=2 ORDER BY EXTRACT(year from p.createdAt) DESC, EXTRACT(month from p.createdAt) DESC, EXTRACT(DAY from p.createdAt) DESC")
    Page<ProductEntity> findByCategorySortByNewest(CategoryEntity categoryEntity, Pageable pageable);
    @Query("SELECT p FROM ProductEntity p WHERE p.category=?1 AND p.status=2 ORDER BY EXTRACT(year from p.createdAt) ASC, EXTRACT(month from p.createdAt) ASC, EXTRACT(DAY from p.createdAt) ASC")
    Page<ProductEntity> findByCategorySortByOldest(CategoryEntity categoryEntity, Pageable pageable);
    @Query("SELECT p FROM ProductEntity p WHERE p.category=?1 AND p.status=2 ORDER BY p.price ASC")
    Page<ProductEntity> findByCategorySortByPriceIncrease(CategoryEntity categoryEntity, Pageable pageable);
    @Query("SELECT p FROM ProductEntity p WHERE p.category=?1 AND p.status=2 ORDER BY p.price DESC")
    Page<ProductEntity> findByCategorySortByPriceDecrease(CategoryEntity categoryEntity, Pageable pageable);
    @Query("SELECT p FROM ProductEntity p WHERE p.category=?1 AND p.status=2")
    Page<ProductEntity> getProductsHotSaleByCategory(CategoryEntity categoryEntity, Pageable pageable);
    @Query("SELECT DISTINCT p.attributeEntityList FROM ProductEntity p WHERE p.category=?1 AND p.status=2")
    List<AttributeEntity> findAllAttributeByCategory(CategoryEntity categoryEntity);
}
