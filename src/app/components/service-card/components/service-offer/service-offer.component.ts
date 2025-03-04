import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

interface ServiceOfferI {
  id: string;
  information: OfferI[];
}

interface OfferI {
  title: string;
  text: string;
}

@Component({
  selector: 'app-service-offer',
  imports: [UpperCasePipe],
  templateUrl: './service-offer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceOfferComponent {
  offerId = input.required<string>();
  serviceOffer = computed(() => {
    return (
      this.offer.find((offerX) => offerX.id === this.offerId())?.information ||
      []
    );
  });

  offer = [
    {
      id: 'PROGRAMA DE VIDA INDEPENDIENTE',
      information: [
        {
          title:
            'Talleres para la vida independiente de las personas con discapacidad física',
          text: 'Lograr que las personas con discapacidad física utilicen herramientas prácticas para aumentar su independencia, su autosuficiencia, autoestima y que sean más productivas y participativas, tanto en su entorno inmediato como en la ciudad.',
        },
        {
          title: 'Servicios',
          text: '1. Apoyar en la toma de decisiones, siempre respetando la autodeterminación de la persona. <br> 2. Promover una participación plena en la comunidad favoreciendo la igualdad de oportunidades. <br> 3. Facilitar condiciones para el desarrollo de habilidades adaptativas, actitudes y valores necesarios para el desarrollo personal y social.',
        },
      ],
    },
    {
      id: 'ASESORAMIENTO JURÍDICO',
      information: [
        {
          title: 'Elementos Legales de Derecho',
          text: 'Brindar representación legal y asesoría juridica a la comunidad en general con énfasis a población vulnerable.',
        },
        {
          title: 'Consultoría',
          text: 'Creación y fortalecimiento de entidades y organizaciones publico privadas. <br> Consultoría en temas de derecho jurídico. <br> Gestión corporativa. <br> Insolvencia. <br> Seguros. <br> Propiedad intelectual. Litigación. <br> Pensiones. <br> Privacidad y seguridad de datos. <br> Bienes raíces.',
        },
      ],
    },
  ];
}
