import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HowHelpComponent } from "./components/how-help/how-help.component";

interface InformationI {
  title: string;
  path: string;
}
@Component({
  selector: 'app-information',
  imports: [HowHelpComponent],
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
  informationToShare = signal<InformationI[]>([
    {
      title: 'Ley 1996 de 2019.',
      path: 'https://escuelajudicial.ramajudicial.gov.co/sites/default/files/abece_ley_1996_de_2019.pdf',
    },
    {
      title: 'Video ley 1996 de 2019.',
      path: 'https://youtu.be/XSk1nZcR33w?t=19',
    },
    {
      title: 'Ley estatutaria 1618 de 2013.',
      path: 'https://escuelajudicial.ramajudicial.gov.co/sites/default/files/abece_ley_1996_de_2019.pdf',
    },
    {
      title:
        'Acuerdo 144 de 20, por cual se actualiza la Política Pública para la Inclusión de las Personas con Discapacidad del Distrito de Ciencia Tecnología e Innovación de Medellín.',
      path: 'https://www.cipdh.gob.ar/catalogo-politicas-publicas/politica-publica/acuerdo-144-de-2019-diciembre-3-por-el-cual-se-actualiza-la-politica-publica-para-la-inclusion-de-las-personas-con-discapacidad-del-municipio-de-medellin-y-se-dictan-otras-disposiciones/',
    },
    {
      title:
        'Conoce la Convención sobre los Derechos de las Personas con Discapacidad.',
      path: 'https://www.mincit.gov.co/ministerio/ministerio-en-breve/docs/ley-1346-de-2009.aspx ',
    },
  ]);
}
