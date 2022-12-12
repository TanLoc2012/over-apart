package com.project.backend.service;

import com.project.backend.entity.RoomTypeEntity;
import com.project.backend.repository.RoomTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomTypeService {
    @Autowired
    private RoomTypeRepository roomTypeRepository;

    public List<RoomTypeEntity> getAllRoomType(){
        return roomTypeRepository.getAllRoomType();
    }
}
