export default {
  name: 'treatment',
  title: 'Treatments & Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Treatment / Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    {
      name: 'description',
      title: 'Short Summary',
      type: 'text',
      rows: 2,
    },
    {
      name: 'fullDescription',
      title: 'Full Clinical Narrative',
      type: 'text',
      rows: 4,
    },
    {
      name: 'treatmentsList',
      title: 'Sub-procedures / Pills',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Treatment Visual',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'clinic',
      title: 'Belongs to Clinic (Optional)',
      type: 'reference',
      to: [{ type: 'clinic' }],
    },
  ],
};
