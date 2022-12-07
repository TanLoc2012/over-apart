package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "real_project_product")
public class RealProjectProduct {
    @EmbeddedId
    private RealProjectProductKey id;

    @ManyToOne
    @MapsId("real_project_id")
    @JoinColumn(name = "real_project_id", nullable = false)
    private RealProject realProject;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;
}
