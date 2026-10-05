import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/dermalaseContent';
import { ArrowUpRight, Filter } from 'lucide-react';

interface MinimalTreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const MinimalTreatments: React.FC<MinimalTreatmentsProps> = ({
  onSelectTreatment,
}) => {
  // Option filters: by Concern or All
  const [selectedConcern, setSelectedConcern] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string>(TREATMENTS_DATA[0].id);

  const concerns = [
    'All',
    'Facial Harmonization & Diagnostics',
    'Melasma, Texture & Pore Health',
    'Hair Removal & Resurfacing',
    'Thinning Hair & Scalp Health',
    'Non-Surgical Lifting & Contouring',
    'Deep Dermal Tightening'
  ];

  const filteredCategories =
    selectedConcern === 'All'
      ? TREATMENTS_DATA
      : TREATMENTS_DATA.filter((c) => c.concern === selectedConcern);

  return (
    <section id="treatments" className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
              Clinical Suites &amp; Repertoire
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
              Signature Treatments
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-lg">
              Covering all 6 core categories: Aesthetic Consultation, Skin Care, Laser,
              Hair, Cosmetic, and Medical Aesthetic Treatments.
            </p>
          </div>

          <div className="text-xs text-[var(--text-muted)]">
            Showing <strong className="text-[var(--text-main)]">{filteredCategories.length}</strong> of 6 Categories
          </div>
        </div>

        {/* Concern Option Filter Bar */}
        <div className="mb-10 p-3 bg-[var(--bg-subtle)] hairline-all flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mr-2 font-medium">
            <Filter className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>Filter by Concern:</span>
          </div>

          {concerns.map((concern) => (
            <button
              key={concern}
              type="button"
              onClick={() => setSelectedConcern(concern)}
              className={`px-3 py-1.5 text-xs transition-colors cursor-pointer whitespace-nowrap ${
                selectedConcern === concern
                  ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-medium'
                  : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              {concern === 'All' ? 'All Treatment Suites' : concern}
            </button>
          ))}
        </div>

        {/* Category Accordion / List */}
        <div className="space-y-4">
          {filteredCategories.map((category) => {
            const isExpanded = expandedId === category.id;
            return (
              <div
                key={category.id}
                className="bg-[var(--bg-card)] hairline-all transition-colors duration-200"
              >
                {/* Header row */}
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? '' : category.id)}
                  className="w-full p-6 sm:p-8 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 text-xs font-mono-tabular text-[var(--accent)]">
                      <span>SUITE {category.number}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[var(--text-muted)]">{category.concern}</span>
                    </div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[var(--text-main)]">
                      {category.name}
                    </h3>
                    <div className="text-xs text-[var(--text-muted)] font-light italic font-serif-luxury">
                      {category.tagline}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-start sm:self-center">
                    <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
                      {isExpanded ? 'Collapse Suite' : 'View Protocols'}
                    </span>
                    <span className="w-8 h-8 hairline-all flex items-center justify-center text-xs font-mono-tabular text-[var(--text-main)]">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 hairline-t space-y-6">
                    <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed max-w-3xl">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.procedures.map((proc, pIdx) => (
                        <div
                          key={proc.title}
                          className="p-4 bg-[var(--bg-subtle)] hairline-all flex flex-col justify-between space-y-3"
                        >
                          <div>
                            <div className="text-xs font-mono-tabular text-[var(--accent)] mb-1">
                              0{pIdx + 1}
                            </div>
                            <h4 className="font-serif-luxury text-base text-[var(--text-main)] mb-1">
                              {proc.title}
                            </h4>
                            <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed">
                              {proc.details}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => onSelectTreatment(`${category.name}: ${proc.title}`)}
                            className="self-start text-[11px] uppercase tracking-wider text-[var(--text-main)] hover:text-[var(--accent)] inline-flex items-center gap-1 cursor-pointer font-medium pt-2"
                          >
                            <span>Reserve This Protocol</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectTreatment(category.name)}
                        className="px-5 py-2.5 bg-[var(--text-main)] text-[var(--bg-main)] text-xs uppercase tracking-widest font-medium hover:opacity-90 cursor-pointer"
                      >
                        Book {category.name} Consultation
                      </button>
                      <span className="text-xs text-[var(--text-muted)]">
                        Sector F-10/1, Islamabad
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
