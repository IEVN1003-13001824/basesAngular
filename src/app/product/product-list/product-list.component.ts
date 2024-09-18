import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list', //como se va a referenciar el componente con otros componentes. 
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saluno de variable";

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[
    {
      "productoId":1,
      "Modelo": 'Sentra',
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2022",
      "Precio":20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/7bbf41000ad29100d1d754dde8b36d4750f714d6/preview-928x522.jpg"
    },
    {
      "productoId":2,
      "Modelo": 'A4',
      "Descripcion":"2 puertas",
      "year":"marzo 4 1993",
      "Precio":50000,
      "Marca":"TOSHIBA",
      "Color":"GRIS",
      "imagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8KckqU2oFP4BT_M3sIK6eQ0-DaWJxV6D3Xg&s"
    },
    {
      "productoId":3,
      "Modelo": 'A5',
      "Descripcion":"3 puertas",
      "year":"MAYO 5 2024",
      "Precio":30000,
      "Marca":"IROSHIMA",
      "Color":"BLANCO",
      "imagenUrl":"https://cdn.buttercms.com/TXZYYboZR2WaJMRDOhR9"
    },
  ]
}