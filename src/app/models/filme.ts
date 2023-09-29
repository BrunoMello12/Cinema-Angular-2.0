export class Filme{
  id: number;
  titulo: string;
  imagem: string;

  constructor(id: number, titulo: string, imagem: string){
    this.id = id;
    this.titulo = titulo;
    this.imagem = 'https://image.tmdb.org/t/p/original/' + imagem;
  }
}