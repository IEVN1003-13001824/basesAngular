import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']  // Aquí debe ser styleUrls en plural
})
export class Ejemplo1Component implements OnInit {

  formulario!: FormGroup;
  resultado: number = 0;  // Inicializa resultado en 0

  constructor() {}  // Corrige el nombre del constructor

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required),
      numero2: new FormControl('', Validators.required),
    });
  }

  multiNumeros(): void {
    let numero1 = this.formulario.get('numero1')?.value;
    let numero2 = this.formulario.get('numero2')?.value;
    
    // Verifica si ambos valores son válidos antes de multiplicar
    if (numero1 && numero2) {
      this.resultado = numero1 * numero2;
    }
  }
}