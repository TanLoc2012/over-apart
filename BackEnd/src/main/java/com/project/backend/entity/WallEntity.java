package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "wall")
public class WallEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "height", nullable = false)
    private Double height;

    @Column(name = "type", nullable = false)
    private String type;

    @ManyToOne
    @JoinColumn(name = "real_project_id")
    private RealProjectEntity realProject;

    @ManyToOne
    @JoinColumn(name = "sample_design_id")
    private SampleDesignEntity sampleDesign;

    @ManyToMany(targetEntity = CornerEntity.class)
    @JoinTable(name = "wall_corner",
            joinColumns = @JoinColumn(name = "wall_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "corner_id", nullable = false))
    private List<CornerEntity> cornerEntityList;
}
