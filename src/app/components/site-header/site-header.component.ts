import { ChangeDetectionStrategy, Component, computed, signal, input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-site-header',
  imports: [MatButtonModule, MatIconModule, MatListModule, MatToolbarModule, RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  private readonly themeService = inject(ThemeService);

  readonly links = input.required<readonly NavLink[]>();
  protected readonly mobileNavOpen = signal(false);
  protected readonly themeIcon = computed(() => (this.themeService.mode() === 'dark' ? 'light_mode' : 'dark_mode'));
  protected readonly themeLabel = computed(() =>
    this.themeService.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((value) => !value);
  }

  protected toggleTheme(): void {
    this.themeService.toggle();
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }
}
