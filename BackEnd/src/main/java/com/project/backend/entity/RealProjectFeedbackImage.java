package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "real_project_feedback_image")
public class RealProjectFeedbackImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @ManyToOne
    @JoinColumn(name = "real_project_feedback_id", nullable = false)
    private RealProjectFeedback realProjectFeedback;
}
