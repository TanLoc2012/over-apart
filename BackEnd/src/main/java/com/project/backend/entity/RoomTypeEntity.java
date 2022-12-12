package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "room_type")
public class RoomTypeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "roomType")
    private List<SampleDesignEntity> sampleDesignEntityList;

    @ManyToMany(targetEntity = CategoryEntity.class)
    @JoinTable(name = "room_type_category",
            joinColumns = @JoinColumn(name = "room_type_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "category_id", nullable = false))
    private List<CategoryEntity> categoryEntityList;
}
