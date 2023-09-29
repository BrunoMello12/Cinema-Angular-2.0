import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/services/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent {
  filmes: Filme[] = [];

  @Input() tipoLista: 'populares' | 'bem-avaliados' = 'populares';

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {

    if(this.tipoLista == 'populares'){
      this.filmeService.selecionarFilmesPopulares()
      .subscribe((resposta) => {this.filmes = resposta})
    }else{
      this.filmeService.selecionarFilmesBemAvaliados()
      .subscribe((resposta) => {this.filmes = resposta})
    }
  }
}
