import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RevealDirective } from '../../directives/reveal.directive';
import type { ExperienceItem } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience-timeline',
  imports: [MatButtonModule, MatCardModule, RevealDirective],
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceTimelineComponent {
  readonly items = input.required<readonly ExperienceItem[]>();
  readonly roleSelected = output<ExperienceItem>();
}
