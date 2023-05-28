import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { EventEmitter } from 'stream';
import { Router } from '@angular/router';
import { LoginRequestPayload } from '../login-page/login-request.payload';
import { User } from '../register-page/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  // @Output() username: EventEmitter<string> = new EventEmitter();
  
  token;
  username: string;

  private baseUrl = 'http://localhost:8080/api/users';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private readonly apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.http.post<string>('http://localhost:8080/api/users/login', JSON.stringify(loginRequestPayload), { headers: this.headers, responseType: 'text' as 'json' })
      .pipe(
        tap(res => {
          this.setJwtToken(res);
        }),
        map(res => true),
        catchError(() => {
          return of(false);
        })
      );
  }

  getProfileInfo(): Observable<any> {
    this.token = 'Bearer ' + this.getToken();
    console.log('Token:', this.token); // Dodajte ovu liniju
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token});
    let options = {headers: headers};
    return this.http.get<User>(`http://localhost:8080/api/users/${this.username}`, options);
  }

  private setJwtToken(jwt: string): void {
    console.log(jwt);
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  public getJwtToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getToken() {
    let token = localStorage.getItem('JWT_TOKEN');
    return token
  }

  getUsername(): string {
    let token = this.parseToken();

    if (token) {
      console.log(this.parseToken());
      console.log(this.parseToken()['username']);
      return this.parseToken()['username'];
    }
    return "";
  }

  private parseToken() {
    let jwt = localStorage.getItem('JWT_TOKEN');
    if (jwt !== null) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = atob(jwtData);
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      return decodedJwtData;
    }
  }

  // public isUserLoggedIn(): boolean {
  //   const jwt = this.getJwtToken();
  //   return jwt && !this.jwtHelper.isTokenExpired(jwt);
  // }

  public logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  // loginUser(loginRequestPayload: LoginRequestPayload): Observable<any>{
  //   return this.http.post<string>('http://localhost:8080/api/users/login', JSON.stringify(loginRequestPayload))
  //   .pipe(map((res) => {
  //     console.log('Login success');
  //     localStorage.setItem("jwt", res)
  //   }));
  // }

  // logout() {
  //   localStorage.removeItem('jwt')
  //   this.router.navigateByUrl('/login');
  // }

  // tokenIsPresent(): Boolean {
  //   let token = this.getToken()
  //   return token != null;
  // }

  // getToken() {
  //   let token = localStorage.getItem('jwt');
  //   return token
  // }

  // getUserID(): string {
  //   let token = this.parseToken();

  //   if (token) {
  //     return this.parseToken()['id']
  //   }
  //   return "";
  // }

  // getUsername(): string {
  //   let token = this.parseToken();

  //   if (token) {
  //     return this.parseToken()['username']
  //   }
  //   return "";
  // }

  // getRole(): string {
  //   let token = this.parseToken();

  //   if (token) {
  //     return this.parseToken()['role']
  //   }
  //   return "";
  // }

  // getExpiration(): string {
  //   let token = this.parseToken();

  //   if (token) {
  //     return this.parseToken()['exp']
  //   }
  //   return "";
  // }

  // private parseToken() {
  //   let jwt = localStorage.getItem('jwt');
  //   if (jwt !== null) {
  //     let jwtData = jwt.split('.')[1];
  //     let decodedJwtJsonData = atob(jwtData);
  //     let decodedJwtData = JSON.parse(decodedJwtJsonData);
  //     return decodedJwtData;
  //   }
  // }
  
}
