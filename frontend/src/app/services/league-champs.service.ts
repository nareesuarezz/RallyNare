import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const endpoint = 'http://localhost:8080/leagueChamps';
const httpOptions = {
  headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
}

@Injectable({
  providedIn: 'root'
})
export class LeagueChampsService {

  constructor(private httpClient : HttpClient) { }

  getChamps(){
    return this.httpClient.get(endpoint);
  }

  getOne(id: number){
    return this.httpClient.get(endpoint+`/${id}`);
  }

  deleteChamp(id: number){
    return this.httpClient.delete(endpoint+`/${id}`);
  }

  addChamp(champion: any){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", champion.name);
    bodyEncoded.append("role", champion.role);
    bodyEncoded.append("damage", champion.damage);
    const body = bodyEncoded.toString();
    

    return this.httpClient.post(endpoint, body, httpOptions);
  }

  updateChamp(id: number, champion: any){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", champion.name);
    bodyEncoded.append("role", champion.role);
    bodyEncoded.append("damage", champion.damage);
    const body = bodyEncoded.toString();
    

    return this.httpClient.put(endpoint+`/${id}`, body, httpOptions);
  }

}
