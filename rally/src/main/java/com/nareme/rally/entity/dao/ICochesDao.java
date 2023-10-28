package com.nareme.rally.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.nareme.rally.entity.models.Coches;

public interface ICochesDao extends CrudRepository<Coches, Long> {
}
