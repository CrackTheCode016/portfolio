import type { ContactLink, ProjectItem } from '../data/portfolio-data';

export const DEFAULT_GITHUB_PROFILE_URL = 'https://github.com/CrackTheCode016';

export function projectPrimaryUrl(
  project: Pick<ProjectItem, 'liveUrl' | 'repoUrl'>,
  fallbackUrl = DEFAULT_GITHUB_PROFILE_URL,
): string {
  return project.liveUrl ?? project.repoUrl ?? fallbackUrl;
}

export function projectSecondaryRepoUrl(project: Pick<ProjectItem, 'liveUrl' | 'repoUrl'>): string | null {
  return project.liveUrl && project.repoUrl ? project.repoUrl : null;
}

export function projectModalLinks(
  project: Pick<ProjectItem, 'liveUrl' | 'repoUrl' | 'relatedLinks'>,
  fallbackUrl = DEFAULT_GITHUB_PROFILE_URL,
): readonly ContactLink[] {
  const links: ContactLink[] = [];

  if (project.liveUrl) {
    links.push({ label: 'View Project', href: project.liveUrl });

    if (project.repoUrl) {
      links.push({ label: 'GitHub', href: project.repoUrl });
    }
  } else {
    links.push({ label: 'View Project', href: project.repoUrl ?? fallbackUrl });
  }

  if (project.relatedLinks?.length) {
    links.push(...project.relatedLinks);
  }

  return links;
}
