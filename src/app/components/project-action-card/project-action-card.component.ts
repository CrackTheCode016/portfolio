import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import type { ProjectItem } from '../../data/portfolio-data';
import { RevealDirective } from '../../directives/reveal.directive';
import { projectPrimaryUrl, projectSecondaryRepoUrl } from '../../utils/project-links';
import { ProjectMediaComponent } from '../project-media/project-media.component';

type ProjectCardMediaVariant = 'project' | 'tool';

@Component({
  selector: 'app-project-action-card',
  imports: [MatButtonModule, MatCardModule, MatDividerModule, ProjectMediaComponent, RevealDirective],
  templateUrl: './project-action-card.component.html',
  styleUrl: './project-action-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectActionCardComponent {
  readonly project = input.required<ProjectItem>();
  readonly showMedia = input(false);
  readonly mediaVariant = input<ProjectCardMediaVariant>('project');
  readonly textOnly = input(false);
  readonly revealDelay = input(0);
  readonly detailsRequested = output<ProjectItem>();

  protected readonly primaryUrl = computed(() => projectPrimaryUrl(this.project()));
  protected readonly secondaryRepoUrl = computed(() => projectSecondaryRepoUrl(this.project()));

  protected openDetails(): void {
    this.detailsRequested.emit(this.project());
  }
}
