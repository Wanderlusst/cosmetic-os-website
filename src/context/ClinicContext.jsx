'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity/client';
import { initialDataQuery } from '@/sanity/queries';
import {
  defaultClinic,
  defaultTreatments,
  defaultCaseStudies,
  defaultFatLoss,
} from '@/sanity/defaultData';
import { reviews as defaultReviews } from '@/components/MarqueeDemo';

const ClinicContext = createContext(null);

export function ClinicProvider({ children }) {
  const [clinics, setClinics] = useState([defaultClinic]);
  const [activeClinic, setActiveClinic] = useState(defaultClinic);
  const [treatments, setTreatments] = useState(defaultTreatments);
  const [caseStudies, setCaseStudies] = useState(defaultCaseStudies);
  const [fatLoss, setFatLoss] = useState(defaultFatLoss);
  const [reviews, setReviews] = useState(defaultReviews);
  const [isLoading, setIsLoading] = useState(true);
  const [isSanityConnected, setIsSanityConnected] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchSanityData() {
      try {
        const data = await client.fetch(initialDataQuery);
        if (!isMounted) return;

        if (data) {
          setIsSanityConnected(true);

          // Clinics
          if (data.clinics && data.clinics.length > 0) {
            setClinics(data.clinics);
            const primary = data.defaultClinic || data.clinics[0];
            setActiveClinic(primary);
          }

          // Treatments
          if (data.treatments && data.treatments.length > 0) {
            const mappedTreatments = data.treatments.map((t, idx) => ({
              id: t._id || idx + 1,
              name: t.name,
              description: t.description || '',
              fullDescription: t.fullDescription || '',
              treatmentsList: t.treatmentsList || [],
              image: t.image ? urlFor(t.image) : defaultTreatments[idx % defaultTreatments.length]?.image,
              order: t.order || idx + 1,
            }));
            setTreatments(mappedTreatments);
          }

          // Case Studies (Before & After)
          if (data.caseStudies && data.caseStudies.length > 0) {
            const mappedCases = data.caseStudies.map((c, idx) => ({
              id: c._id || idx + 1,
              label: c.label,
              category: c.category || '',
              before: c.beforeImage ? urlFor(c.beforeImage) : defaultCaseStudies[idx % defaultCaseStudies.length]?.before,
              after: c.afterImage ? urlFor(c.afterImage) : defaultCaseStudies[idx % defaultCaseStudies.length]?.after,
              result: c.result || '',
              doctor: c.doctor || 'Dr. Julian Vance, MD, FRCS',
              patient: c.patient || 'Patient',
              downtime: c.downtime || '24–48 Hours',
              sessions: c.sessions || '1 Session',
              longevity: c.longevity || '18–24 Months',
              details: c.details || '',
              highlights: c.highlights || [],
              order: c.order || idx + 1,
            }));
            setCaseStudies(mappedCases);
          }

          // Fat Loss
          if (data.fatLoss && data.fatLoss.length > 0) {
            const mappedFatLoss = data.fatLoss.map((f, idx) => ({
              id: f._id || idx + 1,
              num: f.num || `0${idx + 1}`,
              name: f.name,
              tagline: f.tagline || '',
              tag: f.tag || 'Non-Invasive',
              description: f.description || '',
              image: f.image ? urlFor(f.image) : defaultFatLoss[idx % defaultFatLoss.length]?.image,
              specs: f.specs || [],
              order: f.order || idx + 1,
            }));
            setFatLoss(mappedFatLoss);
          }

          // Reviews
          if (data.reviews && data.reviews.length > 0) {
            const mappedReviews = data.reviews.map((r, idx) => ({
              id: r._id || idx + 1,
              name: r.name,
              username: r.username || `@${r.name.toLowerCase().replace(/\s+/g, '')}`,
              location: r.location || 'London',
              procedure: r.procedure || 'Bespoke Procedure',
              category: r.category || 'surgical',
              doctor: r.doctor || 'Dr. Julian Vance',
              rating: r.rating || 5,
              date: r.date || '2026',
              img: r.avatar ? urlFor(r.avatar) : r.avatarUrl || defaultReviews[idx % defaultReviews.length]?.img,
              initials: r.name ? r.name.split(' ').map((n) => n[0]).join('').slice(0, 2) : 'A',
              body: r.body,
              detailedQuote: r.detailedQuote || r.body,
              verified: r.verified ?? true,
            }));
            setReviews(mappedReviews);
          }
        }
      } catch (err) {
        console.warn('[Sanity] Using default curated luxury clinic data:', err?.message || err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchSanityData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Switch clinic by slug or ID
  const switchClinic = (slugOrId) => {
    const found = clinics.find(
      (c) => c._id === slugOrId || (c.slug && c.slug.current === slugOrId)
    );
    if (found) {
      setActiveClinic(found);
    }
  };

  return (
    <ClinicContext.Provider
      value={{
        clinic: activeClinic,
        clinics,
        treatments,
        caseStudies,
        fatLoss,
        reviews,
        isLoading,
        isSanityConnected,
        switchClinic,
        urlFor,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
}
