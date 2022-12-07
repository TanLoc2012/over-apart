package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "apartment")
public class Apartment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "district", nullable = false)
    private String district;

    @Column(name = "description")
    private String description;

    @Column(name = "area", nullable = false)
    private Double area;

    @OneToMany(mappedBy = "apartment")
    private List<Layout> layoutList;

    @OneToMany(mappedBy = "apartment")
    private List<ApartmentInvestor> apartmentInvestorList;
}
