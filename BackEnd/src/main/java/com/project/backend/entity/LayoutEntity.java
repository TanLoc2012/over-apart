package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "layout")
public class LayoutEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @Column(name = "room", nullable = false)
    private String room;

    @Column(name = "area", nullable = false)
    private Double area;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "floor_texture_scale", nullable = false)
    private Double floorTextureScale;

    @ManyToOne
    @JoinColumn(name = "apartment_id", nullable = false)
    private ApartmentEntity apartment;

    @ManyToOne(targetEntity = TextureEntity.class)
    @JoinColumn(name = "floor_texture_id", nullable = false)
    private TextureEntity floorTextureEntity;

    @OneToMany(mappedBy = "layout")
    private List<RealProjectEntity> realProjectEntityList;

    @ManyToOne
    @JoinColumn(name = "block_id", nullable = false)
    private BlockEntity block;
}
