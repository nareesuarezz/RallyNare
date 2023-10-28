package com.nareme.rally.entity.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nareme.rally.entity.dao.IEscuderiasDao;
import com.nareme.rally.entity.models.Escuderias;

@Service
public class EscuderiasServiceImpl implements IEscuderiasService {

    @Autowired
    private IEscuderiasDao escuderiasDao;

    @Override
    public Escuderias get(long id) {
        return escuderiasDao.findById(id).get();
    }

    @Override
    public List<Escuderias> getAll() {
        return (List<Escuderias>) escuderiasDao.findAll();
    }

    @Override
    public void post(Escuderias escuderia) {
        escuderiasDao.save(escuderia);
    }

    @Override
    public void put(Escuderias escuderia, long id) {
        escuderiasDao.findById(id).ifPresent((x) -> {
            escuderia.setID(id);
            escuderiasDao.save(escuderia);
        });
    }

    @Override
    public void delete(long id) {
        escuderiasDao.deleteById(id);
    }
}
