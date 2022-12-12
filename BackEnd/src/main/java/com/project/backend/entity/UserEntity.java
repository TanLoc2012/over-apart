package com.project.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "gender")
    private String gender;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "phone")
    private String phone;

    @Column(name = "shop_name")
    private String shopName;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "avatar", columnDefinition="text")
    private String avatar;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "is_deleted", nullable = false)
    private Boolean isDeleted;

    @ManyToOne(targetEntity = BankEntity.class, fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private BankEntity bankEntity;

    @OneToMany(mappedBy = "creator")
    private List<RealProjectEntity> realProjectEntityList;


    @OneToMany(mappedBy = "seller")
    @JsonIgnore
    private List<ProductEntity> productEntityList;

    @OneToMany(mappedBy = "creator")
    private List<SampleDesignEntity> sampleDesignEntityList;

    @OneToMany(mappedBy = "buyer")
    private List<OrderEntity> orderEntityList;

    @ManyToMany(targetEntity = RoleEntity.class)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "role_id", nullable = false))
    private List<RoleEntity> roleEntityList;

    @OneToMany(mappedBy = "user")
    private List<RealProjectFeedbackEntity> realProjectFeedbackEntityList;

    @ManyToMany
    @JoinTable(name = "real_project_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "real_project_id", nullable = false))
    private List<RealProjectEntity> realProjectLikeList;

    @OneToMany(mappedBy = "user")
    private List<ProductFeedbackEntity> productFeedbackEntityList;

    @ManyToMany
    @JoinTable(name = "product_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "product_id", nullable = false))
    private List<ProductEntity> productLikeList;

    @OneToMany(mappedBy = "user")
    private List<SampleDesignFeedbackEntity> sampleDesignFeedbackEntityList;

    @ManyToMany
    @JoinTable(name = "sample_design_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "sample_design_id", nullable = false))
    private List<SampleDesignEntity> sampleDesignLikeList;

    @OneToMany(mappedBy = "user")
    private List<UserAddressEntity> userAddressEntityList;
}
