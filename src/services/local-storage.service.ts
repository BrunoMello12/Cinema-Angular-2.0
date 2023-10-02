import { Injectable } from "@angular/core";
import { Filme } from "src/app/models/filme";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService{
  private localStorage: Storage;
  private chave: string = 'apmdb_favoritos@2.0';

  private favoritos: Filme[] = [];

  constructor(){
    this.localStorage = window.localStorage;

    this.favoritos = this.carregarFavoritos();
  }

  public favoritar(filme: Filme): void {
    if (this.favoritos.find((f) => f.id == filme.id)) return;

    this.favoritos.push(filme);
    this.gravar();
  }

  public desfavoritar(id: number): void {
    this.favoritos = this.favoritos.filter((x) => x.id != id);
    this.gravar();
  }

  public carregarFavoritos(): Filme[] {
    const dados = this.localStorage.getItem(this.chave);

    if (!dados) return [];

    const objetos = JSON.parse(dados);

    const filmes = new Array<Filme>();

    for (const obj of objetos) {
      filmes.push(new Filme(obj.id, obj.titulo, obj.imagem));
    }

    return filmes;
  }

  public selecionarPorId(id: number): Filme | undefined {
    return this.favoritos.find((x) => x.id == id);
  }

  private gravar(): void {
    const favoritosJsonString = JSON.stringify(this.favoritos);

    this.localStorage.setItem(this.chave, favoritosJsonString);
  }
}