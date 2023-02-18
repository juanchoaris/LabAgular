import { Component, OnInit } from '@angular/core';

interface Targeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppNew';  
  public ArregloTargetas: Targeta[]=[];

  ngOnInit(): void {
    
    this.ArregloTargetas = [
      {titulo: 'Video 1', subtitulo :'Subtitulo Video 1'},
      {titulo: 'Video 2', subtitulo :'Subtitulo Video 2'},
      {titulo: 'Video 3', subtitulo :'Subtitulo Video 3'},
      {titulo: 'Video 4', subtitulo :'Subtitulo Video 4'},
    ]

  }

  
}
