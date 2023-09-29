import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {

  @Input({ required: true }) filme = new Filme(0,'', '');
}
