import { CreditosFilme } from './creditos-filme';
import { TrailerFilme } from './trailer-filme';

export class DetalhesFilme {
  id: number;
  titulo: string;
  imagem: string;
  mediaNota: number;
  dataLancamento: string;
  contagemVotos: number;
  sinopse: string;
  generos: string[];

  trailers: TrailerFilme[] = [];
  creditos: CreditosFilme[] = [];

  constructor(
    id: number,
    titulo: string,
    imagem: string,
    mediaNota: number,
    contagemVotos: number,
    dataLancamento: string,
    sinopse: string,
    generos: string[],
    trailers: TrailerFilme[],
    creditos: CreditosFilme[]
  ) {
    (this.id = id),
      (this.titulo = titulo),
      (this.imagem = 'https://image.tmdb.org/t/p/original/' + imagem),
      (this.mediaNota = mediaNota),
      (this.contagemVotos = contagemVotos),
      (this.dataLancamento = dataLancamento.slice(0, 4)),
      (this.sinopse = sinopse),
      (this.generos = generos?.map((g: any) => g.name as string));
      this.trailers = trailers;
      this.creditos = creditos;
  }
}
