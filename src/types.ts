export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ActiveTab = 'code' | 'snippets' | 'styles' | 'copilot' | 'settings';

export type ActiveView = 'workspace' | 'portfolio-preview' | 'docs';

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  author: string;
  description: string;
  previewImage?: string;
  initialCode: string;
  badge?: string;
}

export interface AiPromptOption {
  id: string;
  label: string;
  prompt: string;
  iconName: string;
}
