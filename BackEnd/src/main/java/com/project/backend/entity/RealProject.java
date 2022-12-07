package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "real_project")
public class RealProject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "create_at", nullable = false)
    private LocalDateTime createAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @Column(name = "share", nullable = false)
    private Boolean share;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @Column(name = "total_price")
    private Double totalPrice;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "creator_id")
    private User creator;

    @ManyToOne
    @JoinColumn(name = "layout_id")
    private Layout layout;

    @OneToMany(mappedBy = "realProject")
    private List<RealProjectFeedback> realProjectFeedbackList;

    @ManyToMany(mappedBy = "realProjectLikeList")
    private List<User> userLikeList;

    @ManyToMany(targetEntity = Attribute.class)
    @JoinTable(name = "real_project_attribute",
            joinColumns = @JoinColumn(name = "real_project_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "attribute_id", nullable = false))
    private List<Attribute> attributeList;

    @OneToMany(mappedBy = "realProject")
    private List<Wall> wallList;
}
