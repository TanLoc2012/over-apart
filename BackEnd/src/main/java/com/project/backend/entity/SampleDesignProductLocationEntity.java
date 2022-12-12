package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "sample_design_product_location")
public class SampleDesignProductLocationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "x_pos", nullable = false)
    private Double xPos;

    @Column(name = "y_pos", nullable = false)
    private Double yPos;

    @Column(name = "z_pos", nullable = false)
    private Double zPos;

    @Column(name = "rot_x", nullable = false)
    private Double rotX;

    @Column(name = "rot_y", nullable = false)
    private Double rotY;

    @Column(name = "rot_z", nullable = false)
    private Double rotZ;

    @Column(name = "scale_x", nullable = false)
    private Double scaleX;

    @Column(name = "scale_y", nullable = false)
    private Double scaleY;

    @Column(name = "scale_z", nullable = false)
    private Double scaleZ;

    @ManyToOne(targetEntity = SampleDesignEntity.class)
    @JoinColumn(name = "sample_design_id")
    private SampleDesignEntity sampleDesignEntity;

    @ManyToOne(targetEntity = ProductEntity.class)
    @JoinColumn(name = "product_id")
    private ProductEntity productEntity;
}
