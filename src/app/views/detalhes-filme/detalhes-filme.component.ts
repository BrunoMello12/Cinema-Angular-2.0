import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { FilmeService } from 'src/services/filmes.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {
  filme: DetalhesFilme | undefined;
  urlSeguroTrailer: SafeResourceUrl | undefined;

  constructor(private filmeService: FilmeService, 
    private sanitazer: DomSanitizer) {}

  ngOnInit(): void {
    this.filmeService
    .selecionarDetalhesFilme(5)
    .subscribe((resposta) => {
      this.filme = resposta;

      this.urlSeguroTrailer =  this.sanitazer.bypassSecurityTrustResourceUrl(
        this.filme.trailers[0].sourceUrl);
    });
  }
}
