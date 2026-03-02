import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal.component';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline.component';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';
import { ProjectMediaComponent } from '../../components/project-media/project-media.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { SkillsGridComponent } from '../../components/skills-grid/skills-grid.component';
import {
  portfolioProfile,
  type ContactLink,
  type DetailModalData,
  type ExperienceItem,
  type ProjectItem,
} from '../../data/portfolio-data';
import { RevealDirective } from '../../directives/reveal.directive';

interface HeroTag {
  readonly label: string;
  readonly background: string;
  readonly foreground: string;
  readonly outline: string;
}

interface ContactMethod {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly icon: string;
}

@Component({
  selector: 'app-home',
  imports: [
    DetailModalComponent,
    ExperienceTimelineComponent,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MediaGridComponent,
    ProjectCarouselComponent,
    ProjectMediaComponent,
    RevealDirective,
    SectionHeadingComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SkillsGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly githubProfileUrl = 'https://github.com/CrackTheCode016';
  protected readonly profile = portfolioProfile;
  protected readonly featuredProjects = this.profile.projects.filter((project) => project.spotlight);
  protected readonly additionalProjects = this.profile.projects.filter((project) => !project.spotlight);
  protected readonly heroTags: readonly HeroTag[] = [
    { label: 'Angular', background: 'var(--tone-angular-bg)', foreground: 'var(--tone-angular-fg)', outline: 'var(--tone-angular-outline)' },
    { label: 'TypeScript', background: 'var(--tone-ts-bg)', foreground: 'var(--tone-ts-fg)', outline: 'var(--tone-ts-outline)' },
    { label: 'Rust', background: 'var(--tone-rust-bg)', foreground: 'var(--tone-rust-fg)', outline: 'var(--tone-rust-outline)' },
    { label: 'Ionic', background: 'var(--tone-angular-bg)', foreground: 'var(--tone-angular-fg)', outline: 'var(--tone-angular-outline)' },
    { label: 'Firebase', background: 'var(--tone-firebase-bg)', foreground: 'var(--tone-firebase-fg)', outline: 'var(--tone-firebase-outline)' },
    { label: 'Vue', background: 'var(--tone-vue-bg)', foreground: 'var(--tone-vue-fg)', outline: 'var(--tone-vue-outline)' },
    { label: 'Polkadot SDK', background: 'var(--tone-web3-bg)', foreground: 'var(--tone-web3-fg)', outline: 'var(--tone-web3-outline)' },
    { label: 'Substrate', background: 'var(--tone-web3-bg)', foreground: 'var(--tone-web3-fg)', outline: 'var(--tone-web3-outline)' },
    { label: 'APIs', background: 'var(--tone-api-bg)', foreground: 'var(--tone-api-fg)', outline: 'var(--tone-api-outline)' },
    { label: 'Developer Education', background: 'var(--tone-docs-bg)', foreground: 'var(--tone-docs-fg)', outline: 'var(--tone-docs-outline)' },
  ];
  protected readonly activeModal = signal<DetailModalData | null>(null);
  protected readonly contactMethods: readonly ContactMethod[] = [
    {
      label: 'Email',
      value: this.profile.contact.email,
      href: `mailto:${this.profile.contact.email}`,
      icon: 'mail',
    },
    {
      label: 'Website',
      value: 'badery.co',
      href: 'https://badery.co',
      icon: 'language',
    },
    {
      label: 'GitHub',
      value: 'CrackTheCode016',
      href: 'https://github.com/CrackTheCode016',
      icon: 'code',
    },
    {
      label: 'X',
      value: 'baderyo_o',
      href: 'https://x.com/baderyo_o',
      icon: 'alternate_email',
    },
  ];
  protected readonly navLinks = [
    { label: 'Experience', href: '#experience', external: true },
    { label: 'Projects', href: '#projects', external: true },
    { label: 'More Work', href: '#additional-work', external: true },
    { label: 'Writing & Talks', href: '#media', external: true },
    { label: 'Contact', href: '#contact', external: true },
  ] as const;
  protected readonly footerLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'GitHub', href: 'https://github.com/CrackTheCode016', external: true },
  ] as const;

  protected openProject(slug: string): void {
    const project = [...this.profile.projects, ...this.profile.tooling].find((item) => item.slug === slug);
    if (project) {
      this.openProjectModal(project);
    }
  }

  protected openProjectModal(project: ProjectItem): void {
    this.activeModal.set({
      eyebrow: project.category,
      title: project.name,
      subtitle: project.period,
      summary: project.description,
      details: project.details,
      chips: project.stack,
      links: this.projectLinks(project),
    });
  }

  protected openExperienceModal(role: ExperienceItem): void {
    this.activeModal.set({
      eyebrow: role.company,
      title: role.role,
      subtitle: role.period,
      summary: role.summary,
      details: role.highlights,
    });
  }

  protected closeModal(): void {
    this.activeModal.set(null);
  }

  protected githubUrl(project: ProjectItem): string {
    return project.repoUrl ?? this.githubProfileUrl;
  }

  private projectLinks(project: ProjectItem): readonly ContactLink[] {
    const links: ContactLink[] = [];
    if (project.liveUrl) {
      links.push({ label: 'Live site', href: project.liveUrl });
    }
    if (project.repoUrl) {
      links.push({ label: 'GitHub repo', href: project.repoUrl });
    } else {
      links.push({ label: 'GitHub profile', href: this.githubProfileUrl });
    }
    if (project.relatedLinks?.length) {
      links.push(...project.relatedLinks);
    }
    return links;
  }
}
