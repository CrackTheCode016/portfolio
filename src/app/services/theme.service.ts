import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-theme';

  readonly mode = signal<ThemeMode>('dark');

  constructor() {
    this.mode.set(this.initialMode());

    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const mode = this.mode();
      const root = this.document.documentElement;
      root.dataset['theme'] = mode;
      root.style.colorScheme = mode;
      window.localStorage.setItem(this.storageKey, mode);
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  private initialMode(): ThemeMode {
    if (!isPlatformBrowser(this.platformId)) {
      return 'dark';
    }

    const stored = window.localStorage.getItem(this.storageKey);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return 'dark';
  }
}
