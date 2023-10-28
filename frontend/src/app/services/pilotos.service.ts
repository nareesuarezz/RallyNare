import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:8080/pilotos'; // Endpoint para la tabla "Pilotos"
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  constructor(private httpClient: HttpClient) { }

  getPilotos() {
    return this.httpClient.get(endpoint);
  }

  getPiloto(id: number) {
    return this.httpClient.get(`${endpoint}/${id}`);
  }

  deletePiloto(id: number) {
    return this.httpClient.delete(`${endpoint}/${id}`);
  }

  addPiloto(piloto: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", piloto.nombre);
    bodyEncoded.append("apellido", piloto.apellido);
    bodyEncoded.append("fechaNacimiento", piloto.fechaNacimiento);
    bodyEncoded.append("nacionalidad", piloto.nacionalidad);
    bodyEncoded.append("coche", piloto.coche.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.post(endpoint, body, httpOptions);
  }

  updatePiloto(id: number, piloto: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", piloto.nombre);
    bodyEncoded.append("apellido", piloto.apellido);
    bodyEncoded.append("fechaNacimiento", piloto.fechaNacimiento);
    bodyEncoded.append("nacionalidad", piloto.nacionalidad);
    bodyEncoded.append("coche", piloto.coche.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.put(`${endpoint}/${id}`, body, httpOptions);
  }
}
