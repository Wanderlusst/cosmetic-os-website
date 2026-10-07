export default {
  name: 'fatLossTreatment',
  title: 'Fat Loss & Body Contouring',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number Prefix (e.g. 01, 02)',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Modality Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. Ultrasonic Cavitation, Cryolipolysis',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. Targeted sound-wave fat disruption',
    },
    {
      name: 'tag',
      title: 'Badge Tag',
      type: 'string',
      initialValue: 'Non-Invasive',
    },
    {
      name: 'description',
      title: 'Detailed Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Treatment Visual',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'specs',
      title: 'Treatment Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Spec Label (e.g. Sessions, Downtime)', type: 'string' },
            { name: 'value', title: 'Spec Value (e.g. 6–8 Sessions, None)', type: 'string' },
          ],
        },
      ],
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
