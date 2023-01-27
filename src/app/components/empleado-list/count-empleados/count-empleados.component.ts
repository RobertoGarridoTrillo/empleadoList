import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})

export class CountEmpleadosComponent {

  radioSeleccionado = "Masculino";

  @Input() todos: number = 0;
  @Input() masculino: number = 0;
  @Input() femenino: number = 0;
  @Output() radioEmitter = new EventEmitter<string>();


  constructor() {
  }

  radioChange(): void {
    this.radioEmitter.emit(this.radioSeleccionado);
  }
}
