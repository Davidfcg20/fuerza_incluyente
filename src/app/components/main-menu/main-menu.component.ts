import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [NgClass ],
  templateUrl: './main-menu.component.html',

})
export class MainMenuComponent {

  gridOpen = false; // Estado inicial

  toggleGrid() {
    this.gridOpen = !this.gridOpen; // Cambia el estado al hacer clic
  }
}

