import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface HowHelpI {
  title: string;
  text: string;
}

@Component({
  selector: 'app-how-help',
  imports: [],
  templateUrl: './how-help.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowHelpComponent {
  howCanHelp = signal<HowHelpI[]>([
    {
      title: 'CÓMO AYUDAR',
      text: 'Puedes ayudar de diferentes maneras, realizando voluntariado en las actividades que realizamos, donando artículos de oficina, aseo, vestuario, dispositivos de apoyo como sillas de ruedas, bastones, muletas. \nInsumos como sondas para cateterismo, guantes, pañales. También puedes apadrinar procesos de formación a la población con discapacidad, familiares y apoyos.',
    },
  ]);
}
