import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { RevealDirective } from '../../directives/reveal.directive';
import type { SkillGroup } from '../../data/portfolio-data';

interface SkillTone {
  readonly background: string;
  readonly foreground: string;
  readonly outline: string;
}

@Component({
  selector: 'app-skills-grid',
  imports: [MatCardModule, MatChipsModule, MatDividerModule, RevealDirective],
  templateUrl: './skills-grid.component.html',
  styleUrl: './skills-grid.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsGridComponent {
  readonly groups = input.required<readonly SkillGroup[]>();

  protected toneForSkill(skill: string): SkillTone {
    const normalized = skill.toLowerCase();

    if (normalized.includes('rust') || normalized.includes('subxt')) {
      return this.tone('rust');
    }

    if (normalized.includes('javascript')) {
      return this.tone('js');
    }

    if (normalized.includes('typescript') || normalized.includes('papi')) {
      return this.tone('ts');
    }

    if (normalized.includes('python')) {
      return this.tone('python');
    }

    if (normalized.includes('bash') || normalized.includes('shell')) {
      return this.tone('shell');
    }

    if (normalized.includes('java') || normalized.includes('swift') || normalized.includes('solidity')) {
      return this.tone('java');
    }

    if (
      normalized.includes('angular') ||
      normalized.includes('ionic') ||
      normalized.includes('capacitor') ||
      normalized.includes('taiga') ||
      normalized.includes('pwa')
    ) {
      return this.tone('angular');
    }

    if (normalized.includes('vue')) {
      return this.tone('vue');
    }

    if (normalized.includes('firebase')) {
      return this.tone('firebase');
    }

    if (
      normalized.includes('stripe') ||
      normalized.includes('payment') ||
      normalized.includes('api') ||
      normalized.includes('rss') ||
      normalized.includes('sync') ||
      normalized.includes('caching') ||
      normalized.includes('indexing') ||
      normalized.includes('serverless')
    ) {
      return this.tone('api');
    }

    if (
      normalized.includes('mkdocs') ||
      normalized.includes('docusaurus') ||
      normalized.includes('tutorial') ||
      normalized.includes('workshop') ||
      normalized.includes('documentation')
    ) {
      return this.tone('docs');
    }

    if (normalized.includes('git') || normalized.includes('github') || normalized.includes('cli')) {
      return this.tone('devops');
    }

    if (normalized.includes('substrate') || normalized.includes('polkadot')) {
      return this.tone('web3');
    }

    return this.tone('frontend');
  }

  private tone(name: string): SkillTone {
    return {
      background: `var(--tone-${name}-bg)`,
      foreground: `var(--tone-${name}-fg)`,
      outline: `var(--tone-${name}-outline)`,
    };
  }
}
