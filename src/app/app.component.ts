import { Component, OnInit } from '@angular/core';

interface Targeta{
  titulo:string;
  subtitulo:string;
  image:string;
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
      {titulo: 'Video 1', subtitulo :'Subtitulo Video 1', image:"https://www.superprof.co/blog/wp-content/uploads/2020/03/historia-bajo-instrumento-1060x707.jpg"},
      {titulo: 'Video 2', subtitulo :'Subtitulo Video 2', image:"https://i.ytimg.com/vi/tizeqcKwum4/maxresdefault.jpg"},
      {titulo: 'Video 3', subtitulo :'Subtitulo Video 3', image:"https://musicopolix.com/blog/wp-content/uploads/2021/12/cuales-son-las-mejores-marcas-de-baterias-acusticas-portada.jpg"}    
    ]

  }

  
}
