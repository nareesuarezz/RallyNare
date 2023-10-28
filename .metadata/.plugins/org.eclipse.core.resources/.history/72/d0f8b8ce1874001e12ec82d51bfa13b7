package com.nareme.rally.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nareme.rally.entity.dao.ICochesDao;
import com.nareme.rally.entity.models.Coches;

@Service
public class CochesServiceImpl implements ICochesService {

    @Autowired
    private ICochesDao cochesDao;

    @Override
    public Coches get(long id) {
        return cochesDao.findById(id).get();
    }

    @Override
    public List<Coches> getAll() {
        return (List<Coches>) cochesDao.findAll();
    }

    @Override
    public void post(Coches coche) {
        cochesDao.save(coche);
    }

    @Override
    public void put(Coches coche, long id) {
        cochesDao.findById(id).ifPresent((x) -> {
            coche.setID(id);
            cochesDao.save(coche);
        });
    }

    @Override
    public void delete(long id) {
        cochesDao.deleteById(id);
    }
}
