import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - ${personalInfo.title} Portfolio`,
    short_name: `${personalInfo.name} Portfolio`,
    description: personalInfo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#9333ea',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

