import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { LegalInformationComponent } from "./components/legal-information/legal-information.component";

@Component({
  selector: 'app-header',
  imports: [MainMenuComponent, LegalInformationComponent],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  menuOpen = signal<boolean>(false);

  setMenuOpen(value: boolean) {
    this.menuOpen.set(value);
  }
}
