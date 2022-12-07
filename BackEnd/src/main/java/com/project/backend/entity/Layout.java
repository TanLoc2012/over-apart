package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "layout")
public class Layout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @Column(name = "block", nullable = false)
    private String block;

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
    private Apartment apartment;

    @ManyToOne(targetEntity = Texture.class)
    @JoinColumn(name = "floor_texture_id", nullable = false)
    private Texture floorTexture;

    @OneToMany(mappedBy = "layout")
    private List<RealProject> realProjectList;
}
