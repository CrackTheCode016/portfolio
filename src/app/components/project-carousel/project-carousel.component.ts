import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  PLATFORM_ID,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { isPlatformBrowser } from '@angular/common';
import type { ProjectItem } from '../../data/portfolio-data';
import { RevealDirective } from '../../directives/reveal.directive';
import { ProjectMediaComponent } from '../project-media/project-media.component';

const PROJECT_CAROUSEL_INTERVAL_MS = 8200;

@Component({
  selector: 'app-project-carousel',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatTabsModule, ProjectMediaComponent, RevealDirective],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCarouselComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly githubProfileUrl = 'https://github.com/CrackTheCode016';

  readonly projects = input.required<readonly ProjectItem[]>();
  readonly projectSelected = output<string>();
  protected readonly carouselIndex = signal(0);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const items = this.projects();
      if (items.length < 2) {
        return;
      }

      this.carouselIndex.update((index) => (index + 1) % items.length);
    }, PROJECT_CAROUSEL_INTERVAL_MS);

    this.destroyRef.onDestroy(() => window.clearInterval(intervalId));
  }

  protected nextProject(): void {
    this.carouselIndex.update((index) => (index + 1) % this.projects().length);
  }

  protected previousProject(): void {
    this.carouselIndex.update((index) => (index - 1 + this.projects().length) % this.projects().length);
  }

  protected selectProject(index: number): void {
    this.carouselIndex.set(index);
  }

  protected githubUrl(project: ProjectItem): string {
    return project.repoUrl ?? this.githubProfileUrl;
  }
}
