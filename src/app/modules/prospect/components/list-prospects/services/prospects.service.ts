import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {

  constructor(private http: HttpClient) {}

  get_propects() {
    return this.http.get('../assets/data/prospects.json');
  }
}

