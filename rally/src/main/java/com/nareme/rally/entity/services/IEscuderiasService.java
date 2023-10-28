package com.nareme.rally.entity.services;

import java.util.List;
import com.nareme.rally.entity.models.Escuderias;

public interface IEscuderiasService {
    Escuderias get(long id);
    List<Escuderias> getAll();
    void post(Escuderias escuderia);
    void put(Escuderias escuderia, long id);
    void delete(long id);
}
