export class TrailerFilme {
  id: number;
  sourceUrl: string;

  constructor(id: number, sourceUrl: string) {
    this.id = id;
    this.sourceUrl = 'https://www.youtube.com/embed/' + sourceUrl;
  }
}