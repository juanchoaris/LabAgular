import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public Titulo:string = "Curso de Guitarra";
  public image:string = "https://img.freepik.com/vector-gratis/plantilla-banner-horizontal-clases-guitarra_23-2149351508.jpg";
}
