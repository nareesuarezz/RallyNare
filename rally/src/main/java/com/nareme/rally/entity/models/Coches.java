package com.nareme.rally.entity.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.util.Date;

@Entity
@Table(name = "Coches")
public class Coches {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private String Marca;
    private String Modelo;
    private int Year;
    private int Potencia;
    private String NumChasis;
    
    @ManyToOne
    @JoinColumn(name = "Escuderia_ID")
    private Escuderias escuderia;

    // Getters and setters

    public long getID() {
        return ID;
    }

    public void setID(long ID) {
        this.ID = ID;
    }

    public String getMarca() {
        return Marca;
    }

    public void setMarca(String Marca) {
        this.Marca = Marca;
    }

    public String getModelo() {
        return Modelo;
    }

    public void setModelo(String Modelo) {
        this.Modelo = Modelo;
    }

    public int getYear() {
        return Year;
    }

    public void setYear(int Year) {
        this.Year = Year;
    }

    public int getPotencia() {
        return Potencia;
    }

    public void setPotencia(int Potencia) {
        this.Potencia = Potencia;
    }

    public String getNumChasis() {
        return NumChasis;
    }

    public void setNumChasis(String NumChasis) {
        this.NumChasis = NumChasis;
    }

    public Escuderias getEscuderia() {
        return escuderia;
    }

    public void setEscuderia(Escuderias escuderia) {
        this.escuderia = escuderia;
    }
}
