export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  supportingText?: string;
  backgroundVariant?: 'gradient' | 'solid';
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureSectionProps {
  badge?: string;
  title: string;
  description: string;
  features: FeatureCardProps[];
  layout: 'grid' | 'showcase';
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  videoAlt?: string;
}

export interface SocialProofProps {
  avatars: string[];
  text?: string;
  highlightText?: string;
}

export interface VideoPreviewProps {
  thumbnailSrc: string;
  title: string;
  subtitle: string;
  videoUrl?: string;
}
