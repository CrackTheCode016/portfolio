import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';

@Component({
  selector: 'app-page-section',
  imports: [MatCardModule, SectionHeadingComponent],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageSectionComponent {
  readonly sectionId = input('');
  readonly headingId = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
