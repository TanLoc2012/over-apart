package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "sample_design")
public class SampleDesign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "area", nullable = false)
    private Double area;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "share", nullable = false)
    private Boolean share;

    @Column(name = "total_price")
    private Double totalPrice;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @Column(name = "floor_texture_scale", nullable = false)
    private Double floorTextureScale;

    @ManyToOne
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;

    @ManyToOne(targetEntity = Texture.class)
    @JoinColumn(name = "floor_texture_id", nullable = false)
    private Texture floorTexture;

    @ManyToOne
    @JoinColumn(name = "room_type_id", nullable = false)
    private RoomType roomType;

    @OneToMany(mappedBy = "sampleDesign")
    private List<SampleDesignFeedback> sampleDesignFeedbackList;

    @ManyToMany(mappedBy = "sampleDesignLikeList")
    private List<User> userLikeList;

    @ManyToMany(targetEntity = Attribute.class)
    @JoinTable(name = "sample_design_attribute",
            joinColumns = @JoinColumn(name = "sample_design_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "attribute_id", nullable = false))
    private List<Attribute> attributeList;

    @OneToMany(mappedBy = "sampleDesign")
    private List<Wall> wallList;
}
