package com.nareme.rally.entity.services;

import java.util.List;
import com.nareme.rally.entity.models.Coches;

public interface ICochesService {
    Coches get(long id);
    List<Coches> getAll();
    void post(Coches coche);
    void put(Coches coche, long id);
    void delete(long id);
}
