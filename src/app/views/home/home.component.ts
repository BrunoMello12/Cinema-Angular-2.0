import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  filmesPopulares: Filme[] = [];
  filmesBemAvaliados: Filme[] = [];

  constructor(private filmeService: FilmeService){}

  ngOnInit(): void {
    this.filmeService.selecionarFilmesPopulares()
      .subscribe((resposta) => {this.filmesPopulares = resposta})

      this.filmeService.selecionarFilmesBemAvaliados()
      .subscribe((resposta) => {this.filmesBemAvaliados = resposta})
  }
}
