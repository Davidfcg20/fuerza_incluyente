import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [NgClass],
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent {
  menuOpen = input.required<boolean>();
}
