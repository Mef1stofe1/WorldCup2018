import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'X-Auth-Token': '0f73383a0c324b7f9a7155e19bacfcdb' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  requestData(uri: any): Observable<any> {
    console.log('Data requesting');
    return this.http.get(uri, httpOptions);
  }

}
