package com.nareme.rally.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nareme.rally.entity.dao.IPilotosDao;
import com.nareme.rally.entity.models.Pilotos;

@Service
public class PilotosServiceImpl implements IPilotosService {

    @Autowired
    private IPilotosDao pilotosDao;

    @Override
    public Pilotos get(long id) {
        return pilotosDao.findById(id).get();
    }

    @Override
    public List<Pilotos> getAll() {
        return (List<Pilotos>) pilotosDao.findAll();
    }

    @Override
    public void post(Pilotos piloto) {
        pilotosDao.save(piloto);
    }

    @Override
    public void put(Pilotos piloto, long id) {
        pilotosDao.findById(id).ifPresent((x) -> {
            piloto.setID(id);
            pilotosDao.save(piloto);
        });
    }

    @Override
    public void delete(long id) {
        pilotosDao.deleteById(id);
    }
}
