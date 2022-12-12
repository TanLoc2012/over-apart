package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "sample_design_product")
public class SampleDesignProductEntity {
    @EmbeddedId
    private SampleDesignProductKeyEntity id;

    @ManyToOne
    @MapsId("sample_design_id")
    @JoinColumn(name = "sample_design_id", nullable = false)
    private SampleDesignEntity sampleDesignEntity;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id", nullable = false)
    private ProductEntity productEntity;
}
