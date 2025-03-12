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
            'Descripción del proyecto',
          text: 'Facilitar condiciones para el desarrollo de habilidades adaptativas, actitudes y valores necesarios para el desarrollo personal y social.',
        },
        {
          title:
            'Talleres para la vida independiente de las personas con discapacidad física',
          text: 'Lograr que las personas con discapacidad física utilicen herramientas prácticas para aumentar su independencia, su autosuficiencia, autoestima y que sean más productivas y participativas, tanto en su entorno inmediato como en la ciudad. \n Entrenamiento práctico y teórico enfocado hacia la rehabilitación integral, con el fin de facilitar los procesos de rehabilitación de personas con discapacidad.',
        },
        {
          title: 'Servicios',
          text: 'Apoyar en la toma de decisiones, siempre respetando la autodeterminación de la persona. \n Promover una participación plena en la comunidad favoreciendo la igualdad de oportunidades.',
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
          text: 'Creación y fortalecimiento de entidades y organizaciones publico privadas. \n Consultoría en temas de derecho jurídico. \n Gestión corporativa. \n Insolvencia. \n Seguros. \n Propiedad intelectual. Litigación. \n Pensiones. \n Privacidad y seguridad de datos. \n Bienes raíces.',
        },
      ],
    },
    {
      id: 'CONSEJERÍA ENTRE PARES',
      information: [
        {
          title: 'Descripción del servicio',
          text: 'Mecanismo de apoyo emocional, se brinda a través de diferentes talleres impartidos por personas con discapacidad que darán el acompañamiento necesario en su proceso de fortalecimiento a otra PcD, que esté empezando con su proceso de fortalecimiento emocional.',
        },
      ],
    },
    {
      id: 'PARTICIPACIÓN',
      information: [
        {
          title: 'Formación en derechos de las personas con discapacidad',
          text: 'Formar en derechos y enfoque de género a las personas con discapacidad, para garantizar la participación efectiva en los diferentes espacios de participación y sus entornos. \n General conocimiento en las diferentes normativas nacionales para el desarrollo de capacidad de intervención de las personas con discapacidad en la construcción de procesos sociales en sus territorios.',
        },
      ],
    },
    {
      id: 'MOVILIDAD Y ACCESIBILIDAD',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Impulsar la aplicación de las normas de accesibilidad y las políticas públicas relacionadas en la ciudad de Medellín y el área metropolitana. Se presenta como un proceso de acción interinstitucional e interdisciplinar de diferentes ámbitos que busca la equidad de oportunidades, de inclusión social y de respeto a la diversidad humana y el Diseño para todos. \n Beneficios de la accesibilidad para personas mayores y personas con cualquier tipo discapacidad.',
        },
        {
          title:
            'Reconocimiento de áreas de uso Público para una Mayor Movilidad',
          text: 'Consiste en la generación de adecuación de entornos accesibles, bajo los parámetros del diseño universal, espacios y escenarios que permitan una movilidad adecuada y segura de la población con discapacidad, personas con movilidad reducida temporal, personas mayores, madres gestantes y con niños en coches.',
        },
      ],
    },
    {
      id: 'COMUNICACIÓN ACCESIBLE',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Generar estrategias comunicacionales y acciones que permitan el acceso y la participación de las personas con discapacidad, en los espacios de consulta y toma de decisiones.',
        },
      ],
    },
    {
      id: 'FORMACIÓN CIUDADANA',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Construir un modelo de formación ciudadana sobre diseños universales de inclusión y ajustes razonables, dirigido a agentes educativos, docentes, directivos docentes, público y privado, familias, cuidadores, asistentes personales, comunidad y organizaciones sociales. Formación para los profesionales de la salud que atienden a las personas con discapacidad (fisioterapeutas, rehabilitadores...)',
        },
      ],
    },
    {
      id: 'CAPACITACIÓN',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Implementar campañas de conciencia ciudadana sobre temas de inclusión, accesibilidad y corresponsabilidad con el estado, familia y sociedad. \n Verificar el cumplimiento de las leyes, normas y políticas, destinadas a proteger y garantizar los derechos de las personas con discapacidad con oportunidades, promoviendo esencialmente su inclusión educativa y su participación efectiva en la sociedad. \n Favorecer la participación de niños y adolescentes con discapacidad, en los espacios del entorno escolar. \n Promover la participación de niños, niñas y adolescentes con discapacidad en la promoción de sus derechos.',
        },
      ],
    },
    {
      id: 'GENERACIÓN DE INGRESOS',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Promoción de la Inclusión de las personas con discapacidad, familiares y cuidadores mediante la generación de ingresos y empleabilidad. \n Promoción de la Inclusión de las personas con discapacidad, familiares y cuidadores mediante la generación de ingresos relacionados a emprendimientos.',
        },
      ],
    },
    {
      id: 'SALUD DESDE LA EDUCACIÓN',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Desarrollo de programas de capacitación y transformación de imaginarios en relación a las necesidades y derechos en el ámbito de la salud de las personas con discapacidad.',
        },
      ],
    },
    {
      id: 'VIVIENDA ACCESIBLE',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Acciones para garantizar que las viviendas otorgadas a personas con discapacidad y que se consideran ‘adaptadas’ respondan efectivamente a las necesidades de la persona y las familias que vivirán en ellas. \n Acciones para garantizar que las viviendas otorgadas a personas con discapacidad y que se consideran ‘adaptadas’ respondan efectivamente a las necesidades de la persona y las familias que vivirán en ellas.',
        },
      ],
    },
    {
      id: 'PROGRAMA DE APOYO',
      information: [
        {
          title: 'Descripción del proyecto',
          text: 'Brindar apoyo a las personas con discapacidad con personal formado en el área de cuidado y derechos, con conocimiento en normativa y derechos de la población con discapacidad de la Ley 1996 de 2019 y su aplicación.',
        },
      ],
    },
  ];
}
