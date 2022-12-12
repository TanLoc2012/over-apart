package com.project.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "sold_quantity")
    private Integer soldQuantity;

    @Column(name = "model", columnDefinition = "text")
    private String model;

    @Column(name = "description")
    private String description;

    @Column(name = "warranty")
    private String warranty;

    @Column(name = "origin")
    private String origin;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "price")
    private Double price;

    @Column(name = "name", nullable = false)
    private String name;


    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "seller_id", nullable = false)
    private UserEntity seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity category;

    @OneToMany(mappedBy = "product")
    private List<ProductFeedbackEntity> productFeedbackEntityList;

    @ManyToMany(mappedBy = "productLikeList")
    private List<UserEntity> userEntityLikeList;

    @ManyToMany(targetEntity = AttributeEntity.class)
    @JoinTable(name = "product_attribute",
            joinColumns = @JoinColumn(name = "product_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "attribute_id", nullable = false))
    private List<AttributeEntity> attributeEntityList;

    @OneToMany(mappedBy = "product")
    private List<ProductImageEntity> productImageEntityList;
}
