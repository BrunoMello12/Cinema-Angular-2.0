export class CreditosFilme {
  ordem: number;
  nome: string;
  departamento: string;
  imagem: string;
  personagem: string;

  constructor(
    ordem: number,
    nome: string,
    departamento: string,
    imagem: string,
    personagem: string
  ) {
    this.ordem = ordem;
    this.nome = nome;
    this.departamento = departamento;
    this.imagem = 'https://image.tmdb.org/t/p/original/' + imagem;
    this.personagem = personagem;
  }
}