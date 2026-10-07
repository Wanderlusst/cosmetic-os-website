export default {
  name: 'doctor',
  title: 'Doctors & Medical Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. Dr. Julian Vance',
    },
    {
      name: 'role',
      title: 'Title / Role',
      type: 'string',
      description: 'e.g. Medical Director & Plastic Surgeon',
    },
    {
      name: 'credentials',
      title: 'Qualifications / Degrees',
      type: 'string',
      description: 'e.g. MD, FRCS (Plast)',
    },
    {
      name: 'bio',
      title: 'Biography / Editorial Profile',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Portrait Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'specialities',
      title: 'Key Specialities',
      type: 'array',
      of: [{ type: 'string' }],
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
