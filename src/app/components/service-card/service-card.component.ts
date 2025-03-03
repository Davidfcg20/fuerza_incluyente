import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [NgClass],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  public serviceCard = signal<string[][]>([]);

  ngOnInit() {
    this.serviceCard.set([
      [
        'PROGRAMA DE VIDA INDEPENDIENTE',
        'ASESORAMIENTO JURÍDICO',
        'CONSEJERÍA ENTRE PARES',
        'PARTICIPACIÓN',
      ],
      [
        'MOVILIDAD Y ACCESIBILIDAD',
        'COMUNICACIÓN ACCESIBLE',
        'FORMACIÓN CIUDADANA',
        'CAPACITACIÓN',
      ],
      [
        'GENERACIÓN DE INGRESOS',
        'SALUD DESDE LA EDUCACIÓN',
        'VIVIENDA ACCESIBLE',
        'PROGRAMA DE APOYO',
      ],
    ]);
  }
}
