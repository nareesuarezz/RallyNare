package com.nareme.rally.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.nareme.rally.entity.models.Pilotos;

public interface IPilotosDao extends CrudRepository<Pilotos, Long> {
}
