import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  formulario!: FormGroup;
  total: number = 0;  // Inicializa el total en 0
  ticketPrice: number = 12.00;  // Precio por boletos
  maxBoletosPorPersona: number = 7;  // Máximo de boletos por persona

  constructor() {}

  ngOnInit(): void {
    // Definir el formulario con los campos necesarios
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
      cantidadCompradores: new FormControl('', [Validators.required, Validators.min(1)]),  // Campo para la cantidad de compradores
      cinecoCard: new FormControl(false)  // Booleano para indicar si tiene tarjeta CINECO
    });
  }

  calcularTotal(): void {
    let cantidadBoletos = this.formulario.get('cantidadBoletos')?.value;
    let cantidadCompradores = this.formulario.get('cantidadCompradores')?.value;
    let cinecoCard = this.formulario.get('cinecoCard')?.value;

    // Calcula el máximo de boletos permitidos (7 por persona)
    let maxBoletos = this.maxBoletosPorPersona * cantidadCompradores;

    // Verifica que la cantidad de boletos no exceda el máximo permitido por el número de compradores
    if (cantidadBoletos > maxBoletos) {
      alert(`El número total de boletos no puede exceder ${maxBoletos} para ${cantidadCompradores} compradores.`);
      return;
    }

    let descuento = 0;

    // Lógica de descuento por cantidad de boletos
    if (cantidadBoletos > 5) {
      descuento = 0.15;
    } else if (cantidadBoletos >= 3) {
      descuento = 0.10;
    }

    // Calcular el total sin el descuento adicional de la tarjeta CINECO
    let totalParcial = cantidadBoletos * this.ticketPrice;
    totalParcial -= totalParcial * descuento;

    // Aplicar el descuento adicional si tiene tarjeta CINECO
    if (cinecoCard) {
      totalParcial -= totalParcial * 0.10;
    }

    // Actualizar el total a pagar
    this.total = totalParcial;
  }
}
