import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { ProjectItem } from '../../data/portfolio-data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-project-detail',
  imports: [RevealDirective],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent {
  readonly project = input.required<ProjectItem>();
}
