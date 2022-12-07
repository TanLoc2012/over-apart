package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "wall_texture")
public class WallTexture {
    @EmbeddedId
    private WallTextureKey id;

    @ManyToOne
    @MapsId("wall_id")
    @JoinColumn(name = "wall_id", nullable = false)
    private Wall wall;

    @ManyToOne
    @MapsId("texture_id")
    @JoinColumn(name = "texture_id", nullable = false)
    private Texture texture;

    @Column(name = "scale", nullable = false)
    private Double scale;

    @Column(name = "position", nullable = false)
    private String position;
}
