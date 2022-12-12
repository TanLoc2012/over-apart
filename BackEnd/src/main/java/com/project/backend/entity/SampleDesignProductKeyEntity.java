package com.project.backend.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SampleDesignProductKeyEntity implements Serializable {
    @Column(name = "sample_design_id")
    private Long sampleDesignId;

    @Column(name = "product_id")
    private Long productId;
}
