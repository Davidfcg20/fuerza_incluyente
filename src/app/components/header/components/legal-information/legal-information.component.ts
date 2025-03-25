import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface LegalInformationI {
  title: string;
  path: string;
}

@Component({
  selector: 'app-legal-information',
  imports: [],
  templateUrl: './legal-information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalInformationComponent {
  legalInformation = signal<LegalInformationI[]>([
    {
      title: 'CÁMARA DE COMERCIO',
      path: 'documents/CAMARA_COMERCIO.pdf',
    },
    {
      title: 'CERTIFICADO GOBERNACIÓN DE ANTIOQUIA',
      path: 'documents/CERTIFICADO_GOBERNACION.pdf',
    },

    {
      title: 'ESTATUTOS CORPORACIÓN FUERZA INCLUYENTE',
      path: 'documents/ESTATUTOS_CORPORACION.pdf',
    },
    {
      title: 'INFORME DE GESTION',
      path: 'documents/INFORME_DE_GESTION.pdf',
    },
    {
      title: 'REGLAMENTO INTERNO',
      path: 'documents/REGLAMENTO_INTERNO.pdf',
    },
    {
      title: 'RUT',
      path: 'documents/RUT.pdf',
    },
  ]);
}
