import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/dermalaseContent';
import { ArrowUpRight, X } from 'lucide-react';

interface MinimalBlogProps {
  onBookFromPost: (category: string) => void;
}

export const MinimalBlog: React.FC<MinimalBlogProps> = ({ onBookFromPost }) => {
  const [activePost, setActivePost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            Clinical Monographs &amp; Insights
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
            The Dermalase Journal
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light">
            Scientific commentary on non-surgical facial sculpting, seasonal laser physics, and
            barrier health authored by Dr. Shumaila Khan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              onClick={() => setActivePost(post)}
              className="p-8 bg-[var(--bg-card)] hairline-all flex flex-col justify-between space-y-6 cursor-pointer group hover:border-[var(--text-main)] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                  <span className="text-[var(--accent)] font-mono-tabular">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 hairline-t flex items-center justify-between text-xs text-[var(--text-main)]">
                <span className="uppercase tracking-wider text-[11px] font-medium">
                  Read Full Monograph
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)]" />
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Monograph Reader Modal */}
        {activePost && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePost(null)}
          >
            <div
              className="bg-[var(--bg-main)] hairline-all max-w-2xl w-full p-8 sm:p-12 relative max-h-[85vh] overflow-y-auto space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 w-8 h-8 hairline-all flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-xs font-mono-tabular text-[var(--accent)]">
                {activePost.category} · {activePost.readTime}
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[var(--text-main)]">
                {activePost.title}
              </h3>

              <div className="text-xs text-[var(--text-muted)] hairline-b pb-4">
                By Dr. Shumaila Khan · PGDip Dermatology (Cardiff, Wales UK) · Diplomat AAAM
              </div>

              <div className="text-sm text-[var(--text-muted)] font-light leading-relaxed space-y-4">
                <p>{activePost.summary}</p>
                <p>{activePost.content}</p>
              </div>

              <div className="pt-6 hairline-t flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const cat = activePost.category;
                    setActivePost(null);
                    onBookFromPost(cat);
                  }}
                  className="px-5 py-2.5 bg-[var(--text-main)] text-[var(--bg-main)] text-xs uppercase tracking-widest font-medium cursor-pointer"
                >
                  Consult on this Subject
                </button>
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
