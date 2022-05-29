import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  getToken() {
    return this.cookies.get("token");
  }

  searchAfiliado( input: string, fecha: string ){

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${this.getToken()}`
    });

    return this.http.get("http://develsig.odontopraxis.com.ar:9876/api/externos/afiliado?query="+input+"&fecha="+fecha, { headers })
  }

  getter( field: string ){

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${this.getToken()}`
    });

    return this.http.get("http://develsig.odontopraxis.com.ar:9876/api/"+field+"?_perPage=0", { headers })
  }

  poster( field: string, body:any ){

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${this.getToken()}`
    });

    return this.http.post("http://develsig.odontopraxis.com.ar:9876/api/"+field, body, { headers })
  }

  
}
