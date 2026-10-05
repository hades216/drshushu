import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/dermalaseContent';
import { ArrowUpRight, X } from 'lucide-react';

interface V14BlogProps {
  onBookFromPost: (category: string) => void;
}

export const V14Blog: React.FC<V14BlogProps> = ({ onBookFromPost }) => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">CLINICAL MONOGRAPHS &amp; DERMATOLOGY JOURNAL</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              The Dermalase Journal
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Scientific monographs on Endolift interstitial physics, seasonal laser safety in
              Pakistan, and monsoon barrier restoration authored by Dr. Shumaila Khan.
            </p>
          </div>
          <span className="badge">PEER-REVIEWED PERSPECTIVES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              onClick={() => setSelectedPost(post)}
              className="p-8 bg-white border border-[var(--ink-faint)] flex flex-col justify-between space-y-6 cursor-pointer group hover:border-[#1A1A1A] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="badge !border-[#E8C1B0] text-[#1A1A1A]">
                    {post.category}
                  </span>
                  <span className="label">{post.readTime}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#1A1A1A] group-hover:opacity-75 transition-opacity leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--ink-faint)] flex items-center justify-between">
                <span className="label">READ MONOGRAPH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1A1A]" />
              </div>
            </article>
          ))}
        </div>

        {/* Reader Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-[#F8F7F4] border border-[#1A1A1A] max-w-2xl w-full p-8 sm:p-14 relative max-h-[85vh] overflow-y-auto space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-9 h-9 border border-[var(--ink-faint)] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="badge">{selectedPost.category}</div>

              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                {selectedPost.title}
              </h3>

              <div className="label border-b border-[var(--ink-faint)] pb-3">
                AUTHORED BY DR. SHUMAILA KHAN · CARDIFF UNIVERSITY (WALES, UK)
              </div>

              <div className="space-y-4 text-sm text-[#1A1A1A]/80 font-light leading-relaxed">
                <p>{selectedPost.summary}</p>
                <p>{selectedPost.content}</p>
              </div>

              <div className="pt-6 border-t border-[var(--ink-faint)] flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const cat = selectedPost.category;
                    setSelectedPost(null);
                    onBookFromPost(cat);
                  }}
                  className="btn btn-primary"
                >
                  Consult On This Protocol
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="label hover:underline cursor-pointer"
                >
                  Close Monograph
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
