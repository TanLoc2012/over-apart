package com.project.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Table(name = "user")
public class User {
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

    @ManyToOne(targetEntity = Bank.class)
    @JoinColumn(name = "bank_id")
    private Bank bank;

    @OneToMany(mappedBy = "creator")
    private List<RealProject> realProjectList;

    @OneToMany(mappedBy = "seller")
    private List<Product> productList;

    @OneToMany(mappedBy = "creator")
    private List<SampleDesign> sampleDesignList;

    @OneToMany(mappedBy = "buyer")
    private List<Order> orderList;

    @ManyToMany(targetEntity = Role.class)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "role_id", nullable = false))
    private List<Role> roleList;

    @OneToMany(mappedBy = "user")
    private List<RealProjectFeedback> realProjectFeedbackList;

    @ManyToMany
    @JoinTable(name = "real_project_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "real_project_id", nullable = false))
    private List<RealProject> realProjectLikeList;

    @OneToMany(mappedBy = "user")
    private List<ProductFeedback> productFeedbackList;

    @ManyToMany
    @JoinTable(name = "product_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "product_id", nullable = false))
    private List<Product> productLikeList;

    @OneToMany(mappedBy = "user")
    private List<SampleDesignFeedback> sampleDesignFeedbackList;

    @ManyToMany
    @JoinTable(name = "sample_design_like",
            joinColumns = @JoinColumn(name = "user_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "sample_design_id", nullable = false))
    private List<SampleDesign> sampleDesignLikeList;

    @OneToMany(mappedBy = "user")
    private List<UserAddress> userAddressList;
}
