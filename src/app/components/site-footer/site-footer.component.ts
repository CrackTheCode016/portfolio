import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-site-footer',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly links = input.required<readonly FooterLink[]>();
  protected readonly currentYear = new Date().getFullYear();
}
