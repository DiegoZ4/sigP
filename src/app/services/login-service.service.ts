import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  login(user: any): Observable<any> {
    return this.http.post("http://develsig.odontopraxis.com.ar:9876/api/auth/externos/login", user);
  }

  logout() {
    return this.cookies.delete("token");
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUserInfo( ){

    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${this.getToken()}`
    });

    return this.http.get("http://develsig.odontopraxis.com.ar:9876/api/auth/externos/me", { headers })
  }
}
