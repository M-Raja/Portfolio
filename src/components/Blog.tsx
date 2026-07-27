import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Newspaper, PenLine } from 'lucide-react';

// Drop your Medium handle/feed in here whenever your blog is live and this
// section switches itself on automatically. No other code changes needed.
//
// MEDIUM_FEED_URL examples:
//   'https://medium.com/feed/@yourhandle'        (personal Medium profile)
//   'https://medium.com/feed/your-publication'   (a Medium publication)
//   'https://yourdomain.com/feed'                (custom-domain Medium blog)
const MEDIUM_FEED_URL = '';
const MEDIUM_PROFILE_URL = '';

type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string;
};

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');

  useEffect(() => {
    if (!MEDIUM_FEED_URL) return;
    setStatus('loading');

    const url = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_FEED_URL)}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'ok' || !Array.isArray(data.items)) throw new Error('Feed unavailable');
        const parsed: Post[] = data.items.slice(0, 3).map((item: Record<string, string>) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          excerpt: stripHtml(item.description).slice(0, 140),
          thumbnail: item.thumbnail || '',
        }));
        setPosts(parsed);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  const profileHref = MEDIUM_PROFILE_URL || MEDIUM_FEED_URL;

  return (
    <section id="blog" className="relative py-28 sm:py-32 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0B60B0]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
                Writing
              </span>
            </div>
            <h2 className="font-display font-bold tracking-tighter text-4xl sm:text-5xl text-slate-900">
              BLOG
            </h2>
          </motion.div>

          {profileHref && (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              href={profileHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white text-slate-900 text-sm font-semibold px-5 py-3 hover:border-[#0B60B0]/50 hover:text-[#0B60B0] transition-colors w-fit shadow-sm"
            >
              Read on Medium
              <ArrowUpRight className="h-4 w-4 text-[#0B60B0]" />
            </motion.a>
          )}
        </div>

        {status === 'ready' && posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:border-[#0B60B0]/30 hover:shadow-lg transition-all duration-300"
              >
                {post.thumbnail && (
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-3">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.pubDate)}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug mb-2 group-hover:text-[#0B60B0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B60B0]">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white/60 py-20 px-6 text-center"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EAF2FB] mb-4">
              {status === 'error' ? (
                <Newspaper className="h-5 w-5 text-[#0B60B0]" />
              ) : (
                <PenLine className="h-5 w-5 text-[#0B60B0]" />
              )}
            </span>
            <p className="text-slate-900 font-semibold mb-1">
              {status === 'error' ? 'Posts are taking a break' : 'First article coming soon'}
            </p>
            <p className="text-slate-500 text-sm max-w-sm">
              {status === 'error'
                ? "Couldn't load the latest posts right now, check back shortly."
                : "I'm writing up my first breakdowns on incident response and SOC workflows, they'll land here as soon as they're published."}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
