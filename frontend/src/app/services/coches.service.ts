import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:8080/coches'; 
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private httpClient: HttpClient) { }

  getCoches() {
    return this.httpClient.get(endpoint);
  }

  getCoche(id: number) {
    return this.httpClient.get(`${endpoint}/${id}`);
  }

  deleteCoche(id: number) {
    return this.httpClient.delete(`${endpoint}/${id}`);
  }

  addCoche(coche: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("marca", coche.marca);
    bodyEncoded.append("modelo", coche.modelo);
    bodyEncoded.append("year", coche.year.toString());
    bodyEncoded.append("potencia", coche.potencia.toString());
    bodyEncoded.append("numChasis", coche.numChasis);
    bodyEncoded.append("escuderia", coche.escuderia.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.post(endpoint, body, httpOptions);
  }

  updateCoche(id: number, coche: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("marca", coche.marca);
    bodyEncoded.append("modelo", coche.modelo);
    bodyEncoded.append("year", coche.year.toString());
    bodyEncoded.append("potencia", coche.potencia.toString());
    bodyEncoded.append("numChasis", coche.numChasis);
    bodyEncoded.append("escuderia", coche.escuderia.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.put(`${endpoint}/${id}`, body, httpOptions);
  }
}
