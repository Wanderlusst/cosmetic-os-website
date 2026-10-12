import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lx4py5pl';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';
export const organizationId = process.env.SANITY_ORGANIZATION_ID || 'oyefN6i1C';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return null;
  // If it's already a relative path string or absolute URL (fallback data)
  if (typeof source === 'string') return source;
  try {
    return builder.image(source).auto('format').fit('max').url();
  } catch {
    return null;
  }
}
