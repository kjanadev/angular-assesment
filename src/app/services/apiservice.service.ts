import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public headers: any;
  constructor(
    private http: HttpClient
  ) { }

  public prepareHeader() {
    this.headers = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + 'ASDFGHJKL' 
      })
    };
  }

  getdata(url: string): Observable<any> {
    this.prepareHeader();
    return this.http.get(url, this.headers);
  }
}
