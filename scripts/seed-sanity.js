import { createClient } from '@sanity/client';
import {
  defaultClinic,
  defaultTreatments,
  defaultCaseStudies,
  defaultFatLoss,
} from '../src/sanity/defaultData.js';
import { reviews } from '../src/components/MarqueeDemo.jsx';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lx4py5pl';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.log(`
========================================================================
[Sanity Seeder] Notice:
To push data directly into your Sanity dataset from the terminal,
create a Write token in your Sanity Management Console (https://sanity.io/manage),
then run:
  SANITY_API_TOKEN="your_token_here" npm run seed:sanity

Alternatively, you can open http://localhost:3000/studio and edit/publish
documents interactively!
========================================================================
  `);
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-03-01',
  useCdn: false,
});

async function seed() {
  console.log(`[Sanity Seeder] Connecting to project: ${projectId}, dataset: ${dataset}...`);

  // 1. Create Default Clinic
  const clinicDoc = {
    _type: 'clinic',
    _id: 'clinic-aurelia-london',
    name: defaultClinic.name,
    slug: { _type: 'slug', current: 'aurelia-london' },
    tagline: defaultClinic.tagline,
    isDefault: true,
    header: defaultClinic.header,
    hero: defaultClinic.hero,
    footer: defaultClinic.footer,
    branding: defaultClinic.branding,
  };
  await client.createOrReplace(clinicDoc);
  console.log('✓ Seeded Clinic Master Settings');

  // 2. Seed Treatments
  for (const t of defaultTreatments) {
    await client.createOrReplace({
      _type: 'treatment',
      _id: `treatment-${t.id}`,
      name: t.name,
      slug: { _type: 'slug', current: t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      description: t.description,
      fullDescription: t.fullDescription,
      treatmentsList: t.treatmentsList,
      order: t.order,
      clinic: { _type: 'reference', _ref: 'clinic-aurelia-london' },
    });
  }
  console.log(`✓ Seeded ${defaultTreatments.length} Treatments`);

  // 3. Seed Case Studies (Before & After)
  for (const c of defaultCaseStudies) {
    await client.createOrReplace({
      _type: 'caseStudy',
      _id: `case-study-${c.id}`,
      label: c.label,
      category: c.category,
      result: c.result,
      doctor: c.doctor,
      patient: c.patient,
      downtime: c.downtime,
      sessions: c.sessions,
      longevity: c.longevity,
      details: c.details,
      highlights: c.highlights,
      order: c.order,
      clinic: { _type: 'reference', _ref: 'clinic-aurelia-london' },
    });
  }
  console.log(`✓ Seeded ${defaultCaseStudies.length} Case Studies`);

  // 4. Seed Fat Loss Modalities
  for (const f of defaultFatLoss) {
    await client.createOrReplace({
      _type: 'fatLossTreatment',
      _id: `fat-loss-${f.id}`,
      num: f.num,
      name: f.name,
      tagline: f.tagline,
      tag: f.tag,
      description: f.description,
      specs: f.specs,
      order: f.order,
      clinic: { _type: 'reference', _ref: 'clinic-aurelia-london' },
    });
  }
  console.log(`✓ Seeded ${defaultFatLoss.length} Fat Loss Modalities`);

  // 5. Seed Reviews
  if (reviews && reviews.length > 0) {
    for (const r of reviews.slice(0, 8)) {
      await client.createOrReplace({
        _type: 'review',
        _id: `review-${r.id}`,
        name: r.name,
        username: r.username,
        location: r.location,
        procedure: r.procedure,
        category: r.category,
        doctor: r.doctor,
        rating: r.rating,
        date: r.date,
        body: r.body,
        detailedQuote: r.detailedQuote,
        verified: r.verified,
        clinic: { _type: 'reference', _ref: 'clinic-aurelia-london' },
      });
    }
    console.log(`✓ Seeded Patient Reviews`);
  }

  console.log('[Sanity Seeder] All initial data seeded successfully!');
}

seed().catch((err) => {
  console.error('[Sanity Seeder] Error:', err);
  process.exit(1);
});
