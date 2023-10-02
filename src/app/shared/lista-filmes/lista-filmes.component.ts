import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/services/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent {
  page: number = 1;
  filmes: Filme[] = [];

  @Input() tipoLista: 'populares' | 'bem-avaliados' = 'populares';

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {
    this.carregarPagina(1);
  }

  carregarPagina(paginaAlterada: number){
    if(this.tipoLista == 'populares'){
      this.filmeService.selecionarFilmesPopulares(paginaAlterada)
      .subscribe((resposta) => {this.filmes = resposta})
    }else{
      this.filmeService.selecionarFilmesBemAvaliados(paginaAlterada)
      .subscribe((resposta) => {this.filmes = resposta})
    }
  }
}
