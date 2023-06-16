import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import { Article } from '../modele/article.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getAllArticles() :Observable<Article[]>{
    let host= environment.host;
    return this.http.get<Article[]>(host+"/articles");
  }

  getPublishedArticles() :Observable<Article[]>{
    let host= environment.host;
    return this.http.get<Article[]>(host+"/articles?published=true");
  }
}
