import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaFilmesComponent } from './shared/lista-filmes/lista-filmes.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { DetalhesFilmeComponent } from './views/detalhes-filme/detalhes-filme.component';
import { NavbarComponent } from './shared/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaFilmesComponent,
    CardFilmeComponent,
    DetalhesFilmeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-center",
      preventDuplicates: true
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
