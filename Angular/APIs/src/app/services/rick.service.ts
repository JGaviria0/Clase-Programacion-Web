import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  constructor(private http: HttpClient) { }

  // URL = 'https://rickandmortyapi.com/api';
  URL = 'http://localhost:3000';

  //url = 'https://localhost:3000/products';

  getCharacters(){
    return this.http.get(`${this.URL}/character`);
  }

  createCharacter(character: any){
    return this.http.post("https://api.escuelajs.co/api/v1/users", character )
  }

  deleteCharacter(id: number){
    return this.http.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}
  