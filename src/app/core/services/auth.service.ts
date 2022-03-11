import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public authUser: any;
  public headers: HttpHeaders;
  public baseUrl: string = "";

  constructor(private http: HttpClient, private router: Router) {
    this.setConfig();
  }

  public setConfig() {
    this.baseUrl = environment.baseUrl;
    this.headers = new HttpHeaders();
    this.headers = this.headers.set("Content-Type", "application/json");
  }

  public authenticateUser({ email, password }) {
    return this.http.post(
      `${this.baseUrl}auth/login`,
      { email, password },
      { headers: this.headers }
    );
  }

  public register({ email, password, name }) {
    return this.http.post(
      `${this.baseUrl}auth/register`,
      { email, password, name },
      { headers: this.headers }
    );
  }

  public storeUser({ user }) {
    localStorage.setItem("user", JSON.stringify(user));
    this.authUser = user;
  }

  public logout() {
    this.authUser = null;
    localStorage.clear();
    this.router.navigate(["/authentication"]);
  }
}
