import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoggleBox} from './bogglebox'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoggleService {

  private apiUrl = "https://localhost:44391/api/boggle/getbogglebox"
  private scoreUrl = "https://localhost:44391/api/boggle/isvalidword"

  constructor(private http:HttpClient) { }


  getBoggleBox() : Observable<BoggleBox>{
    return this.http.get<BoggleBox>(this.apiUrl);
  }

  getScore(id: string, word: string) : Promise<number>{
    return this.http.get<number>(this.scoreUrl + "/" + id + "/" + word).toPromise();
  }

}
