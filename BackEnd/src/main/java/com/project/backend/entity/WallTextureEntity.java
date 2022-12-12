package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "wall_texture")
public class WallTextureEntity {
    @EmbeddedId
    private WallTextureKeyEntity id;

    @ManyToOne
    @MapsId("wall_id")
    @JoinColumn(name = "wall_id", nullable = false)
    private WallEntity wallEntity;

    @ManyToOne
    @MapsId("texture_id")
    @JoinColumn(name = "texture_id", nullable = false)
    private TextureEntity textureEntity;

    @Column(name = "scale", nullable = false)
    private Double scale;

    @Column(name = "position", nullable = false)
    private String position;
}
