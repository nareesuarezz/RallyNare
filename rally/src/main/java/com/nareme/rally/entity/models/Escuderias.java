package com.nareme.rally.entity.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Escuderias")
public class Escuderias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private String NombreEscuderia;
    private String Pais;
    private int YearFundacion;

    // Getters and setters

    public long getID() {
        return ID;
    }

    public void setID(long ID) {
        this.ID = ID;
    }

    public String getNombreEscuderia() {
        return NombreEscuderia;
    }

    public void setNombreEscuderia(String NombreEscuderia) {
        this.NombreEscuderia = NombreEscuderia;
    }

    public String getPais() {
        return Pais;
    }

    public void setPais(String Pais) {
        this.Pais = Pais;
    }

    public int getYearFundacion() {
        return YearFundacion;
    }

    public void setYearFundacion(int YearFundacion) {
        this.YearFundacion = YearFundacion;
    }
}
