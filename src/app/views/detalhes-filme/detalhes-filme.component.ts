import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetalhesFilme } from 'src/app/models/detalhes-filme';
import { Filme } from 'src/app/models/filme';
import { FilmeService } from 'src/services/filmes.service';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit {
  filme: DetalhesFilme | undefined;
  urlSeguroTrailer: SafeResourceUrl | undefined;
  favorito: boolean = false;

  constructor(private filmeService: FilmeService, 
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private sanitazer: DomSanitizer,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if(!id) return;

    this.filmeService
    .selecionarDetalhesFilme(id)
    .subscribe((resposta) => {
      this.filme = resposta;

      this.urlSeguroTrailer =  this.sanitazer.bypassSecurityTrustResourceUrl(
        this.filme.trailers[0].sourceUrl);
    });
  }

  favoritar() {
    if (this.favorito) {
      this.localStorageService.desfavoritar(this.filme!.id);

      this.toastrService.success(
        'Filme removido dos favoritos com sucesso!',
        'Sucesso'
      );
    } else {
      const filmeParaFavoritar = new Filme(
        this.filme!.id,
        this.filme!.titulo,
        this.filme!.imagem
      );

      this.localStorageService.favoritar(filmeParaFavoritar);

      this.toastrService.success(
        'Filme adicionado aos favoritos com sucesso!',
        'Sucesso'
      );
    }

    this.carregarStatusFavorito();
  }

  private carregarStatusFavorito() {
    const favoritoEncontrado = this.localStorageService.selecionarPorId(
      this.filme!.id
    );

    if (favoritoEncontrado) {
      this.favorito = true;
    } else {
      this.favorito = false;
    }
  }
}
