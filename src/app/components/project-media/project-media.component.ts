import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import type { ProjectThumbnail } from '../../data/portfolio-data';

type ProjectMediaVariant = 'project' | 'tool';

@Component({
  selector: 'app-project-media',
  imports: [MatIconModule],
  templateUrl: './project-media.component.html',
  styleUrl: './project-media.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectMediaComponent {
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

  protected selectImage(index: number): void {
    this.activeIndex.set(index);
  }
}
