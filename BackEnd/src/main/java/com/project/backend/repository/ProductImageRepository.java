package com.project.backend.repository;

import com.project.backend.entity.ProductEntity;
import com.project.backend.entity.ProductImageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductImageRepository extends JpaRepository<ProductImageEntity, Long> {
    @Query("SELECT p.image FROM ProductImageEntity p WHERE p.product=?1")
    public List<String> getImagesProductByProductId(ProductEntity productEntity);
}
