import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import type { DetailModalData } from '../../data/portfolio-data';

@Component({
  selector: 'app-detail-modal',
  imports: [MatButtonModule, MatCardModule, MatChipsModule],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'handleEscape()',
  },
})
export class DetailModalComponent {
  readonly data = input<DetailModalData | null>(null);
  readonly closed = output<void>();

  protected close(): void {
    this.closed.emit();
  }

  protected handleEscape(): void {
    if (this.data()) {
      this.close();
    }
  }
}
