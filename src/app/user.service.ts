import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User} from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = "";
  private headers = new HttpHeaders()
    .set('Content-Type','application/json');

    getUsers():Observable<User[]>{
      return this.http.get<User[]>(
        this.url + "/user"
      );
    }

    compare(user:User):Observable<any>{
      return this.http.post<any>(
        this.url + "/user", user,
        {headers:this.headers}
      );
    }

  constructor(private http:HttpClient) { }
}
