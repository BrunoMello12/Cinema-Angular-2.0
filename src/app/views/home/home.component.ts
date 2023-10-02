import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/services/filmes.service';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  filmesFavoritos: Filme[] = [];

  constructor(private localStorage: LocalStorageService){}

  ngOnInit(): void {
    this.filmesFavoritos = this.localStorage.carregarFavoritos()
  }
}
