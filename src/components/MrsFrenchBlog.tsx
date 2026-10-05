import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/dermalaseContent';
import { ArrowUpRight, X, BookOpen } from 'lucide-react';

interface MrsFrenchBlogProps {
  onBookFromPost: (category: string) => void;
}

export const MrsFrenchBlog: React.FC<MrsFrenchBlogProps> = ({ onBookFromPost }) => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="mrs-badge">The Dermalase Journal</span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              Clinical Monographs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              Scientific perspectives on Endolift interstitial laser surgery, summer and monsoon
              laser safety in Pakistan, and epidermal barrier preservation authored by Dr. Shumaila Khan.
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono-micro">
            03 ARTICLES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              onClick={() => setSelectedPost(post)}
              className="p-8 rounded-3xl bg-[#FAF9F7] border border-[#EAEAEA] flex flex-col justify-between space-y-6 cursor-pointer group hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-micro text-[#C49A86] uppercase font-bold">
                    {post.category}
                  </span>
                  <span className="text-neutral-400">{post.readTime}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-neutral-900 group-hover:text-neutral-700 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider font-mono-micro text-[0.68rem] text-neutral-800">
                  Read Article
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Reader Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-3xl border border-neutral-200 shadow-2xl max-w-2xl w-full p-8 sm:p-14 relative max-h-[85vh] overflow-y-auto space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mrs-badge !bg-[#FAF7F4] !text-[#9B7563] !border-[#EEDBD0]">
                {selectedPost.category}
              </div>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-neutral-900">
                {selectedPost.title}
              </h3>

              <div className="text-xs text-neutral-500 border-b border-neutral-100 pb-4">
                Authored by Dr. Shumaila Khan · PGDip Dermatology (Cardiff University, Wales UK) · AAAM Diplomat
              </div>

              <div className="space-y-4 text-sm text-neutral-700 font-light leading-relaxed">
                <p>{selectedPost.summary}</p>
                <p>{selectedPost.content}</p>
              </div>

              <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const cat = selectedPost.category;
                    setSelectedPost(null);
                    onBookFromPost(cat);
                  }}
                  className="btn-mrs btn-mrs-dark"
                >
                  Consult On This Subject
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="text-xs text-neutral-500 hover:text-black cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
