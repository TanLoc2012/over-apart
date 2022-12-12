package com.project.backend.repository;

import com.project.backend.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
    @Query("SELECT r.name FROM RoleEntity r WHERE r.id=1")
    public String getAllRole();
}
