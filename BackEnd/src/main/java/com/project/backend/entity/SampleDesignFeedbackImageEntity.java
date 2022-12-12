package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "sample_design_feedback_image")
public class SampleDesignFeedbackImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", columnDefinition = "text", nullable = false)
    private String image;

    @ManyToOne
    @JoinColumn(name = "sample_design_feedback_id", nullable = false)
    private SampleDesignFeedbackEntity sampleDesignFeedback;
}
