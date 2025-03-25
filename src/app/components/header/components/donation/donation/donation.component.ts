import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface DonationInformationI {
  title: string;
  text: string;
}

@Component({
  selector: 'app-donation',
  imports: [NgClass],
  templateUrl: './donation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationComponent {
  copyAccountAlert = signal<boolean>(false);

  legalInformation = signal<DonationInformationI[]>([
    {
      title: 'CUENTA DE AHORROS BANCOLOMBIA # 625-000030-99',
      text: 'Si es otro tipo de donación puedes ponerte en contacto con nosotros. \n fuerzaincluyentecomunidad@gmail.com - fuerzaincluyente@hotmail.com \n 3106055556 - 3153648965 \n ¡Con tu ayuda cambiamos la vida de otros!',
    },
  ]);

  copyBankAccount() {
    navigator.clipboard.writeText('62500003099');
    this.copyAccountAlert.set(true);
    setTimeout(() => {
      {
        this.copyAccountAlert.set(false);
      }
    }, 2500);
  }
}
