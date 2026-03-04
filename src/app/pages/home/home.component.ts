import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal.component';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline.component';
import { MediaGridComponent } from '../../components/media-grid/media-grid.component';
import { PageSectionComponent } from '../../components/page-section/page-section.component';
import { ProjectActionCardComponent } from '../../components/project-action-card/project-action-card.component';
import { ProjectCarouselComponent } from '../../components/project-carousel/project-carousel.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { SkillsGridComponent } from '../../components/skills-grid/skills-grid.component';
import {
  portfolioProfile,
  type DetailModalData,
  type ExperienceItem,
  type ProjectItem,
} from '../../data/portfolio-data';
import { RevealDirective } from '../../directives/reveal.directive';
import { DEFAULT_GITHUB_PROFILE_URL, projectModalLinks } from '../../utils/project-links';

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
    PageSectionComponent,
    ProjectActionCardComponent,
    ProjectCarouselComponent,
    RevealDirective,
    SiteHeaderComponent,
    SiteFooterComponent,
    SkillsGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly bookingUrl = 'https://calendly.com/d/cxjw-8v3-j6w';
  protected readonly profile = portfolioProfile;
  protected readonly featuredProjects = this.profile.projects.filter((project) => project.spotlight);
  protected readonly additionalProjects = this.profile.projects.filter((project) => !project.spotlight);
  protected readonly heroTags: readonly HeroTag[] = [
    { label: 'Fullstack Development', background: 'var(--tone-angular-bg)', foreground: 'var(--tone-angular-fg)', outline: 'var(--tone-angular-outline)' },
    { label: 'Hybrid Mobile Apps', background: 'var(--tone-ts-bg)', foreground: 'var(--tone-ts-fg)', outline: 'var(--tone-ts-outline)' },
    { label: 'Web3', background: 'var(--tone-rust-bg)', foreground: 'var(--tone-rust-fg)', outline: 'var(--tone-rust-outline)' },
    { label: 'Developer Education', background: 'var(--tone-docs-bg)', foreground: 'var(--tone-docs-fg)', outline: 'var(--tone-docs-outline)' },
  ];
  protected readonly activeModal = signal<DetailModalData | null>(null);
  protected readonly contactMethods: readonly ContactMethod[] = [
    {
      label: 'Calendly',
      value: 'Book an appointment',
      href: this.bookingUrl,
      icon: 'calendar_month',
    },
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
      href: DEFAULT_GITHUB_PROFILE_URL,
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
    { label: 'Email', href: `mailto:${this.profile.contact.email}` },
    { label: 'GitHub', href: DEFAULT_GITHUB_PROFILE_URL, external: true },
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
      links: projectModalLinks(project),
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
}
