package com.project.backend.converter;

import com.project.backend.entity.ProductEntity;
import com.project.backend.exception.InternalServerException;
import com.project.backend.response.ProductCardResponse;
import com.project.backend.response.ProductInfoResponse;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductConverter {
    public ProductCardResponse productEntityToProductCardResponse(ProductEntity productEntity, String imageProductList){
        try {
            ProductCardResponse productCardResponse = new ProductCardResponse();
            productCardResponse.setId(productEntity.getId());
            if(productEntity.getSoldQuantity() == null){
                productCardResponse.setSold(0);
            }
            else productCardResponse.setSold(productEntity.getSoldQuantity());
            productCardResponse.setPrice(productEntity.getPrice());
            productCardResponse.setProductName(productEntity.getName());
            productCardResponse.setImage(imageProductList);
            productCardResponse.setRating(Double.valueOf(5));
            return productCardResponse;
        }
        catch (Exception e){
            throw new InternalServerException(e.getMessage());
        }
    }
    public ProductInfoResponse productEntityToProductInfoResponse(ProductEntity productEntity, List<String> imageProductList){
        try {
            ProductInfoResponse productInfoResponse = new ProductInfoResponse();
            productInfoResponse.setId(productEntity.getId());
            if(productEntity.getSoldQuantity() == null){
                productInfoResponse.setSold(0);
            }
            else productInfoResponse.setSold(productEntity.getSoldQuantity());
            productInfoResponse.setCode(productEntity.getCode());
            productInfoResponse.setShop(productEntity.getSeller().getShopName());
            productInfoResponse.setLike(0);
            productInfoResponse.setComment(0);
            productInfoResponse.setPrice(productEntity.getPrice());
            productInfoResponse.setProductName(productEntity.getName());
            productInfoResponse.setImages(imageProductList);
            productInfoResponse.setRating(Double.valueOf(5));
            productInfoResponse.setCategoryId(productEntity.getCategory().getId());
            return productInfoResponse;
        }
        catch (Exception e){
            throw new InternalServerException(e.getMessage());
        }
    }
}
