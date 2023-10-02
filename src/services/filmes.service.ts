import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Observable, map } from "rxjs";
import { Filme } from "src/app/models/filme";
import { DetalhesFilme } from "src/app/models/detalhes-filme";
import { TrailerFilme } from "src/app/models/trailer-filme";
import { CreditosFilme } from "src/app/models/creditos-filme";

@Injectable({
  providedIn: "root"
})
export class FilmeService {
  private API = 'https://api.themoviedb.org/3/movie/';

  constructor(private http: HttpClient){}

  public selecionarDetalhesFilme(id: number): Observable<DetalhesFilme> {
    const url = `${this.API}${id}?append_to_response=videos,credits`;

    return this.http.get<any>(url, this.obterHeaders())
      .pipe(
        map(obj => this.mapearDetalhesFilme(obj))
      );
  }

  public selecionarFilmesPopulares(paginaAlterada: number): Observable<Filme[]>{
    const url = this.API + 'popular' + '?page=' + paginaAlterada;

    return this.http.get<any>(url, this.obterHeaders())
      .pipe(
        map(res => res.results),
        map(objetos => this.mapearFilmes(objetos))
      );
  }

  public selecionarFilmesBemAvaliados(paginaAlterada: number): Observable<Filme[]>{
    const url = this.API + 'top_rated' + '?page=' + paginaAlterada;;

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

  private mapearDetalhesFilme(obj: any): DetalhesFilme {
    return new DetalhesFilme(
      obj.id,
      obj.title,
      obj.poster_path,
      obj.vote_average,
      obj.vote_count,
      obj.release_date,
      obj.overview,
      obj.genres,
      this.mapearTraleirsFilme(obj.videos.results),
      this.mapearCreditosFilme(obj.credits.crew.concat(obj.credits.cast))
    )
  }

  private mapearTraleirsFilme(objetos: any[]): TrailerFilme[]{
    return objetos.map((obj) => {
      return new TrailerFilme(obj.id, obj.key)
    })
  }

  private mapearCreditosFilme(objetos: any[]): CreditosFilme[]{
    return objetos.map(obj => {
      return new CreditosFilme(
        obj.order,
        obj.name,
        obj.known_for_department,
        obj.profile_path,
        obj.character
      )
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