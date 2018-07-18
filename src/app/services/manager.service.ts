import { Injectable } from '@angular/core';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpService } from './http.service';



@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  constructor(private httpService: HttpService) { }



  loadCupStandings() {
    const uri = 'v2/competitions/2000/standings';
    let result = this.httpService.requestData(uri).subscribe(
      data => { console.error(data) },
      err => console.error(err),
      () => console.log('done loading ')
    );
  }
  // connectToServer(): Observable<Response> {
  //   const connectionString = apiUrl;
  //   console.log('Link----', connectionString);
  //   return this.http.get(connectionString).pipe(map(res => res),
  //     catchError(err => {
  //       // Do messaging and error handling here
  //       return throwError(err)
  //     }));
  // }

  // requestdDataFromServer() {
  //   console.log("Data Requesting....");
  //   this.connectToServer().subscribe(Response => console.log("Headers ----- " + Response)/*, (err: JSON) => console.log("Error: " + err)*/);
  // }



}
