import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import type { ProjectThumbnail } from '../../data/portfolio-data';

type ProjectMediaVariant = 'project' | 'tool';
const PROJECT_MEDIA_INTERVAL_MS = 6800;

@Component({
  selector: 'app-project-media',
  imports: [MatIconModule],
  templateUrl: './project-media.component.html',
  styleUrl: './project-media.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectMediaComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly title = input.required<string>();
  readonly category = input.required<string>();
  readonly thumbnails = input<readonly ProjectThumbnail[]>();
  readonly variant = input<ProjectMediaVariant>('project');
  protected readonly activeIndex = signal(0);
  protected readonly mediaItems = computed(() => this.thumbnails() ?? []);
  protected readonly hasGallery = computed(() => this.mediaItems().length > 1);
  protected readonly placeholderInitials = computed(() =>
    this.title()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join(''),
  );
  protected readonly placeholderIcon = computed(() => {
    const category = this.category().toLowerCase();

    if (category.includes('dashboard') || category.includes('tool')) {
      return 'dashboard_customize';
    }

    if (category.includes('course') || category.includes('education') || category.includes('docs')) {
      return 'menu_book';
    }

    if (category.includes('sdk') || category.includes('api') || category.includes('integration')) {
      return 'terminal';
    }

    if (category.includes('mobile') || category.includes('app')) {
      return 'smartphone';
    }

    return 'deployed_code';
  });
  protected readonly placeholderMessage = computed(() => {
    const category = this.category().toLowerCase();

    if (category.includes('dashboard') || category.includes('tool')) {
      return 'Interface preview coming soon';
    }

    if (category.includes('course') || category.includes('education') || category.includes('docs')) {
      return 'Preview artwork coming soon';
    }

    return 'Project preview coming soon';
  });
  protected readonly isToolVariant = computed(() => this.variant() === 'tool');

  constructor() {
    effect((onCleanup) => {
      const items = this.mediaItems();
      this.activeIndex.set(0);

      if (!isPlatformBrowser(this.platformId) || this.variant() === 'tool' || items.length < 2) {
        return;
      }

      const intervalId = window.setInterval(() => {
        this.activeIndex.update((index) => (index + 1) % items.length);
      }, PROJECT_MEDIA_INTERVAL_MS);

      onCleanup(() => window.clearInterval(intervalId));
    });
  }

  protected selectImage(index: number): void {
    this.activeIndex.set(index);
  }
}
