package com.project.backend.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class WallTextureKey implements Serializable {
    @Column(name = "wall_id")
    private Long wallId;

    @Column(name = "texture_id")
    private Long textureId;
}
