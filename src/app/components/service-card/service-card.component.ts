import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ServiceOfferComponent } from './components/service-offer/service-offer.component';

@Component({
  selector: 'app-service-card',
  imports: [NgClass, ServiceOfferComponent],
  templateUrl: './service-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceCardComponent {
  public serviceCard = signal<string[][]>([]);
  public offerId = signal<string>('');

  setOfferId(id: string) {
    this.offerId.set(id);
  }

  openModal(subItem: string) {
    this.setOfferId(subItem);
    const modal = document.getElementById(
      'service_offer_modal'
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

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
