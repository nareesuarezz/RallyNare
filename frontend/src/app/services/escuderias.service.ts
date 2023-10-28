import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'http://localhost:8080/escuderias'; // Endpoint para la tabla "Escuderias"
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
};

@Injectable({
  providedIn: 'root'
})
export class EscuderiasService {

  constructor(private httpClient: HttpClient) { }

  getEscuderias() {
    return this.httpClient.get(endpoint);
  }

  getEscuderia(id: number) {
    return this.httpClient.get(`${endpoint}/${id}`);
  }

  deleteEscuderia(id: number) {
    return this.httpClient.delete(`${endpoint}/${id}`);
  }

  addEscuderia(escuderia: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombreEscuderia", escuderia.nombreEscuderia);
    bodyEncoded.append("pais", escuderia.pais);
    bodyEncoded.append("yearFundacion", escuderia.yearFundacion.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.post(endpoint, body, httpOptions);
  }

  updateEscuderia(id: number, escuderia: any) {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombreEscuderia", escuderia.nombreEscuderia );
    bodyEncoded.append("pais", escuderia.pais);
    bodyEncoded.append("yearFundacion", escuderia.yearFundacion.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.put(`${endpoint}/${id}`, body, httpOptions);
  }
}
