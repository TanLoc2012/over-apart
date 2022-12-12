package com.project.backend.repository;

import com.project.backend.entity.RoomTypeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomTypeRepository extends JpaRepository<RoomTypeEntity, Long> {
    @Query("SELECT r FROM RoomTypeEntity r")
    public List<RoomTypeEntity> getAllRoomType();
}
