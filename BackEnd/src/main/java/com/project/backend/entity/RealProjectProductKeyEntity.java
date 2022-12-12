package com.project.backend.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class RealProjectProductKeyEntity implements Serializable {
    @Column(name = "real_project_id")
    private Long realProjectId;

    @Column(name = "product_id")
    private Long productId;
}
