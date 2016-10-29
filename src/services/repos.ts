import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import { Repo } from '../entity/Repo';
import {Observable} from "rxjs";

@Injectable()
export class ReposService {

  constructor(private http:Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || [];
  }

  getRepos(provider): Observable<Repo[]> {
    let  url = 'https://api.github.com/search/repositories?q=' + provider + '&sort=stars&order=desc';
    return this.http.get(url).map(this.extractData)
  }




}
