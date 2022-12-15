package com.project.backend.service;

import com.project.backend.converter.ProductConverter;
import com.project.backend.entity.AttributeEntity;
import com.project.backend.entity.CategoryEntity;
import com.project.backend.entity.ProductEntity;
import com.project.backend.exception.NotFoundException;
import com.project.backend.repository.CategoryRepository;
import com.project.backend.repository.ProductImageRepository;
import com.project.backend.repository.ProductRepository;
import com.project.backend.response.ProductCardPageResponse;
import com.project.backend.response.ProductCardResponse;
import com.project.backend.response.ProductInfoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductImageRepository productImageRepository;
    @Autowired
    private ProductConverter productConverter;

    public List<ProductEntity> getAllProduct(){
        return productRepository.findAll();
    }
    public List<AttributeEntity> getAllAttributeByCategoryId(Long categoryId){
        Optional<CategoryEntity> categoryEntityOptional = categoryRepository.findById(categoryId);
        if(categoryEntityOptional.isPresent()){
            return productRepository.findAllAttributeByCategory(categoryEntityOptional.get());
        }
        throw new NotFoundException("not found category id: " + categoryId.toString());
    }
    public ProductCardPageResponse getProductsByCategoryId(Long categoryId, Integer page, Integer limit, String sortBy){
        Optional<CategoryEntity> categoryEntityOptional = categoryRepository.findById(categoryId);
        if(categoryEntityOptional.isPresent()){
            Pageable pageable = PageRequest.of(page, limit);
            Page<ProductEntity> productEntityList = null;
            if(sortBy.equals("newest")){
                productEntityList = productRepository.findByCategorySortByNewest(categoryEntityOptional.get(), pageable);
            }
            else if(sortBy.equals("oldest")){
                productEntityList = productRepository.findByCategorySortByOldest(categoryEntityOptional.get(), pageable);
            }
            else if (sortBy.equals("price_increase")) {
                productEntityList = productRepository.findByCategorySortByPriceIncrease(categoryEntityOptional.get(), pageable);
            }else if(sortBy.equals("price_decrease")){
                productEntityList = productRepository.findByCategorySortByPriceDecrease(categoryEntityOptional.get(), pageable);
            }
            if(productEntityList.isEmpty())
                throw new NotFoundException("not found product of category id: " + categoryId);
            return new ProductCardPageResponse(getImageProduct(productEntityList), productEntityList.getTotalPages());
        }
        else throw new NotFoundException("not found category id: " + categoryId);
    }
    List<ProductCardResponse> getImageProduct(Page<ProductEntity> productEntityList){
        List<ProductCardResponse> productCardResponseList = new ArrayList<>();
        for(ProductEntity productEntity : productEntityList.getContent()){
            List<String> imageProductList = new ArrayList<>();
            imageProductList = productImageRepository.getImagesProductByProductId(productEntity);
            productCardResponseList.add(productConverter.productEntityToProductCardResponse(productEntity, imageProductList.get(0)));
        }
        return productCardResponseList;
    }
    public ProductInfoResponse getProductInfoByProductId(Long productId){
        Optional<ProductEntity> productEntityOptional = productRepository.findById(productId);
        if(productEntityOptional.isPresent()){
            List<String> imageProductList = new ArrayList<>();
            imageProductList = productImageRepository.getImagesProductByProductId(productEntityOptional.get());
            ProductInfoResponse productInfoResponse = new ProductInfoResponse();
            return productConverter.productEntityToProductInfoResponse(productEntityOptional.get(), imageProductList);
        }
        throw new NotFoundException("not found product info " + productId);
    }
    public List<ProductCardResponse> getProductsHotSaleByCategoryId(Long categoryId, int page, int limit){
        Optional<CategoryEntity> categoryEntityOptional = categoryRepository.findById(categoryId);
        if(categoryEntityOptional.isPresent()){
            Pageable pageable = PageRequest.of(page, limit);
            Page<ProductEntity> productEntityPage = productRepository.getProductsHotSaleByCategory(categoryEntityOptional.get(), pageable);
            if(productEntityPage.isEmpty())
                throw new NotFoundException("not found product of category id: " + categoryId);
            return getImageProduct(productEntityPage);
        }
        throw new NotFoundException("not found product of category id: " + categoryId);
    }
}
