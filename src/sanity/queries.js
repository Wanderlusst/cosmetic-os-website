// GROQ Queries for Sanity Dynamic Content Binding

export const allClinicsQuery = `*[_type == "clinic"] | order(name asc) {
  _id,
  name,
  slug,
  tagline,
  isDefault,
  header,
  hero,
  footer,
  branding
}`;

export const defaultClinicQuery = `*[_type == "clinic" && (isDefault == true || !defined(isDefault))][0] {
  _id,
  name,
  slug,
  tagline,
  isDefault,
  header,
  hero,
  footer,
  branding
}`;

export const clinicBySlugQuery = `*[_type == "clinic" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  isDefault,
  header,
  hero,
  footer,
  branding
}`;

export const treatmentsQuery = `*[_type == "treatment"] | order(order asc, _createdAt asc) {
  _id,
  name,
  slug,
  description,
  fullDescription,
  treatmentsList,
  image,
  order
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(order asc, _createdAt asc) {
  _id,
  label,
  category,
  beforeImage,
  afterImage,
  result,
  doctor,
  patient,
  downtime,
  sessions,
  longevity,
  details,
  highlights,
  order
}`;

export const fatLossQuery = `*[_type == "fatLossTreatment"] | order(order asc, _createdAt asc) {
  _id,
  num,
  name,
  tagline,
  tag,
  description,
  image,
  specs,
  order
}`;

export const doctorsQuery = `*[_type == "doctor"] | order(order asc, _createdAt asc) {
  _id,
  name,
  role,
  credentials,
  bio,
  image,
  specialities,
  order
}`;

export const reviewsQuery = `*[_type == "review"] | order(order asc, _createdAt asc) {
  _id,
  name,
  username,
  location,
  procedure,
  category,
  doctor,
  rating,
  date,
  avatar,
  avatarUrl,
  body,
  detailedQuote,
  verified,
  order
}`;

// Single Combined Query for high-performance instant loading
export const initialDataQuery = `{
  "clinics": *[_type == "clinic"] | order(name asc) {
    _id, name, slug, tagline, isDefault, header, hero, footer, branding
  },
  "defaultClinic": *[_type == "clinic" && (isDefault == true || !defined(isDefault))][0] {
    _id, name, slug, tagline, isDefault, header, hero, footer, branding
  },
  "treatments": *[_type == "treatment"] | order(order asc, _createdAt asc) {
    _id, name, slug, description, fullDescription, treatmentsList, image, order
  },
  "caseStudies": *[_type == "caseStudy"] | order(order asc, _createdAt asc) {
    _id, label, category, beforeImage, afterImage, result, doctor, patient, downtime, sessions, longevity, details, highlights, order
  },
  "fatLoss": *[_type == "fatLossTreatment"] | order(order asc, _createdAt asc) {
    _id, num, name, tagline, tag, description, image, specs, order
  },
  "doctors": *[_type == "doctor"] | order(order asc, _createdAt asc) {
    _id, name, role, credentials, bio, image, specialities, order
  },
  "reviews": *[_type == "review"] | order(order asc, _createdAt asc) {
    _id, name, username, location, procedure, category, doctor, rating, date, avatar, avatarUrl, body, detailedQuote, verified, order
  }
}`;
