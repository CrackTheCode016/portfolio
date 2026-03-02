import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RevealDirective } from '../../directives/reveal.directive';
import type { MediaItem } from '../../data/portfolio-data';

@Component({
  selector: 'app-media-grid',
  imports: [MatButtonModule, MatCardModule, RevealDirective],
  templateUrl: './media-grid.component.html',
  styleUrl: './media-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaGridComponent {
  readonly title = input.required<string>();
  readonly actionLabel = input.required<string>();
  readonly items = input.required<readonly MediaItem[]>();

  protected mediaMonogram(item: MediaItem): string {
    return item.publisher.slice(0, 2).toUpperCase();
  }
}
