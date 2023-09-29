import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable, map } from "rxjs";
import { Filme } from "src/app/models/filme";

@Injectable({
  providedIn: "root"
})
export class FilmeService {
  private API = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient){}

  public selecionarFilmesPopulares(): Observable<Filme[]>{
    const url = this.API + 'popular';

    return this.http.get<any>(url, this.obterHeaders())
      .pipe(
        map(res => res.results),
        map(objetos => this.mapearFilmes(objetos))
      );
  }

  public selecionarFilmesBemAvaliados(): Observable<Filme[]>{
    const url = this.API + 'top_rated';

    return this.http.get<any>(url, this.obterHeaders())
      .pipe(
        map(res => res.results),
        map(objetos => this.mapearFilmes(objetos))
      );
  }

  private mapearFilmes(objetos: any[]): Filme[]{
    return objetos.map((obj: any): Filme => {
      return new Filme(obj.id, obj.title, obj.poster_path);
    })
  }

  private obterHeaders() {
    return {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          environment.API_URL
      },
    };
  }
}