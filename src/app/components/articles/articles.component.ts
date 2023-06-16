import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article} from '../../modele/article.model';
import { Observable , of} from 'rxjs';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<Article[]> | null=null; //le caractère pipe spécifie une valeur par défaut <=> syntaxe ?

  constructor(private articlesService: ArticlesService ) { }

  ngOnInit(): void { }

  onGetAllArticles(){
    this.articles$=this.articlesService.getAllArticles()
    
    }

}
