import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  resistenciaForm: FormGroup;
  resistencias: any[] = [];

  valorColores: { [key: string]: number } = {
    Negro: 0, Cafe: 1, Rojo: 2, Naranja: 3, 
    Amarillo: 4, Verde: 5, Azul: 6, Violeta: 7, 
    Gris: 8, Blanco: 9
  };

  multValores: { [key: string]: number } = {
    Negro: 1, Cafe: 10, Rojo: 100, Naranja: 1000, 
    Amarillo: 10000, Verde: 100000, Azul: 1000000, 
    Violeta: 10000000, Gris: 100000000, Blanco: 1000000000
  };

  selTolerancia: { [key: string]: number } = {
    Oro: 5, Plata: 10
  };

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario reactivo
    this.resistenciaForm = this.fb.group({
      PrimeraBanda: ['Violeta'],
      SegundaBanda: ['Violeta'],
      TercerBanda: ['Violeta'],
      Tolerancia: ['']
    });
  }

  calcular() {
    const formValues = this.resistenciaForm.value;
    const band1 = this.valorColores[formValues.PrimeraBanda];
    const band2 = this.valorColores[formValues.SegundaBanda];
    const multi = this.multValores[formValues.TercerBanda];
    const tole = this.selTolerancia[formValues.Tolerancia];

    const baseValor = (band1 * 10) + band2;
    const resisValor = baseValor * multi;

    const toleranciaDecimal = tole / 100;
    const resisMax = resisValor + (resisValor * toleranciaDecimal);
    const resisMin = resisValor - (resisValor * toleranciaDecimal);

    // Guardar el resultado en la lista de resistencias
    this.resistencias.push({
      primeraBanda: formValues.PrimeraBanda,
      segundaBanda: formValues.SegundaBanda,
      tercerBanda: formValues.TercerBanda,
      tolerancia: formValues.Tolerancia,
      valor: resisValor,
      min: resisMin,
      max: resisMax
    });
  }

  getColor(banda: string | null): string {
    const colores: { [key: string]: string } = {
      Negro: '#000000',
      Cafe: '#8B4513',
      Rojo: '#FF0000',
      Naranja: '#FFA500',
      Amarillo: '#FFFF00',
      Verde: '#008000',
      Azul: '#0000FF',
      Violeta: '#EE82EE',
      Gris: '#808080',
      Blanco: '#FFFFFF',
      Oro: '#FFD700',
      Plata: '#C0C0C0'
    };
    
    // Si la banda es nula, retorna '#FFFFFF'. Si no, busca en colores o retorna '#FFFFFF' si no lo encuentra.
    return banda ? colores[banda] || '#FFFFFF' : '#FFFFFF';
  }
}
