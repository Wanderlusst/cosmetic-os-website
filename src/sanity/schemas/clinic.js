export default {
  name: 'clinic',
  title: 'Clinics & Global Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Clinic Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. Aurelia Clinic - Harley Street',
    },
    {
      name: 'slug',
      title: 'Clinic Identifier / Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Global Tagline',
      type: 'string',
      description: 'e.g. Luxury Aesthetic Medicine | London & Beverly Hills',
    },
    {
      name: 'isDefault',
      title: 'Set as Default Clinic',
      type: 'boolean',
      description: 'If active, this clinic will be the primary global theme/content',
      initialValue: true,
    },

    // --- Header & Global Navigation ---
    {
      name: 'header',
      title: 'Header & Navigation Control',
      type: 'object',
      fields: [
        { name: 'logoText', title: 'Logo Text', type: 'string', initialValue: 'AURELIA' },
        { name: 'logoSubtext', title: 'Logo Subtext', type: 'string', initialValue: 'CLINIC' },
        { name: 'logoImage', title: 'Custom Logo Image (Optional)', type: 'image', options: { hotspot: true } },
        {
          name: 'announcement',
          title: 'Top Announcement Banner',
          type: 'object',
          fields: [
            { name: 'enabled', title: 'Enable Banner', type: 'boolean', initialValue: false },
            { name: 'text', title: 'Announcement Text', type: 'string' },
            { name: 'linkUrl', title: 'Link URL', type: 'string' },
          ],
        },
        {
          name: 'navLinks',
          title: 'Navigation Menu Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Section Anchor / Link URL', type: 'string' },
              ],
            },
          ],
        },
        { name: 'ctaLabel', title: 'Header Button Label', type: 'string', initialValue: 'Book Consultation' },
      ],
    },

    // --- Hero Section Layout & Control ---
    {
      name: 'hero',
      title: 'Hero Section Layout',
      type: 'object',
      fields: [
        { name: 'eyebrow', title: 'Eyebrow Text', type: 'string', initialValue: 'Aesthetic Excellence · London & Beverly Hills' },
        { name: 'headline', title: 'Main Headline', type: 'string', initialValue: 'The Architecture of' },
        { name: 'italicWord', title: 'Italic Accent Word', type: 'string', initialValue: 'Timeless Beauty' },
        {
          name: 'subheadline',
          title: 'Subheadline / Narrative',
          type: 'text',
          rows: 3,
          initialValue: 'Bespoke aesthetic medicine blending surgical precision with artistic discretion. Serving London Harley Street and Beverly Hills.',
        },
        { name: 'primaryCta', title: 'Primary Button Label', type: 'string', initialValue: 'Book Private Consultation' },
        { name: 'secondaryCta', title: 'Secondary Button Label', type: 'string', initialValue: 'Explore Treatments' },
        { name: 'badgeText', title: 'Trust Badge Tagline', type: 'string', initialValue: 'GMC Registered · CQC Outstanding' },
        { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } },
      ],
    },

    // --- Footer & Legal Schema ---
    {
      name: 'footer',
      title: 'Footer Layout & Settings',
      type: 'object',
      fields: [
        {
          name: 'about',
          title: 'About Summary',
          type: 'text',
          rows: 3,
          initialValue: 'Aurelia is a private aesthetic medicine practice combining surgical excellence with refined artistic discretion across London and Beverly Hills.',
        },
        {
          name: 'locations',
          title: 'Clinic Physical Locations',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'city', title: 'City / Region', type: 'string' },
                { name: 'address', title: 'Full Street Address', type: 'string' },
                { name: 'phone', title: 'Direct Phone', type: 'string' },
                { name: 'email', title: 'Concierge Email', type: 'string' },
              ],
            },
          ],
        },
        { name: 'openingHours', title: 'Opening Hours', type: 'string', initialValue: 'Mon – Sat: 09:00 – 19:00 · By Appointment Only' },
        {
          name: 'socialLinks',
          title: 'Social Media Profiles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'platform', title: 'Platform (Instagram, LinkedIn, etc.)', type: 'string' },
                { name: 'url', title: 'Profile URL', type: 'url' },
              ],
            },
          ],
        },
        {
          name: 'disclaimer',
          title: 'Medical Compliance Disclaimer',
          type: 'text',
          rows: 2,
          initialValue: 'All procedures performed by fully registered GMC / Medical Board practitioners. Results vary by individual anatomical profile.',
        },
        { name: 'copyright', title: 'Copyright Line', type: 'string', initialValue: '© 2026 Aurelia Clinic Ltd. All rights reserved.' },
      ],
    },

    // --- Theme & Brand Palette Control ---
    {
      name: 'branding',
      title: 'Brand Styling & Theme Controls',
      type: 'object',
      fields: [
        { name: 'accentColor', title: 'Accent Color (Hex)', type: 'string', initialValue: '#D7B38A' },
        { name: 'accentDeep', title: 'Deep Accent Color (Hex)', type: 'string', initialValue: '#B8936A' },
        { name: 'bgPrimary', title: 'Primary Background (Hex)', type: 'string', initialValue: '#FAF7F2' },
        { name: 'bgSecondary', title: 'Secondary Background (Hex)', type: 'string', initialValue: '#F5F0E8' },
      ],
    },
  ],
};
