import React, { useState, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { Article } from '../types';
import {
  Search,
  BookOpen,
  Clock,
  User,
  ArrowRight,
  X,
  Share2,
  Bookmark,
  Sparkles
} from 'lucide-react';

export const KnowledgeHub: React.FC = () => {
  const [state, store] = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);

  const categories = [
    'All',
    'Ayurveda',
    'Health Technology',
    'Corporate Wellness',
    'Student Wellness',
    'Yoga',
    'Preventive Health',
    'Nutrition',
    'Sports Wellness'
  ];

  const filteredArticles = useMemo(() => {
    return state.articles.filter((art) => {
      const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [state.articles, selectedCategory, searchQuery]);

  return (
    <section id="resources" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Evidence & Insights</div>
          <h2 className="section-title">Ayunexis Knowledge Hub</h2>
          <p className="section-subtitle">
            Rigorous, peer-informed publications bridging classical Ayurvedic clinical treatises, chronobiology, and preventive health technology.
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div style={{ marginBottom: '40px' }}>
          
          {/* Search bar */}
          <div style={{ maxWidth: '540px', margin: '0 auto 24px auto', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search articles by topic, keyword (e.g. Dinacharya, AI, Ergonomics)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px 12px 44px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                background: 'var(--surface-light)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all var(--transition-snappy)',
                  background: selectedCategory === cat ? 'var(--emerald-800)' : 'var(--surface-light)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: selectedCategory === cat ? '1px solid var(--emerald-800)' : '1px solid var(--border-light)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => setReadingArticle(article)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-emerald">
                    {article.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <Clock size={13} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', lineHeight: 1.35, marginBottom: '12px' }}>
                  {article.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        background: 'var(--surface-light)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Action */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--emerald-900)' }}>
                    {article.author.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {article.author.role}
                  </div>
                </div>

                <span style={{
                  color: 'var(--emerald-700)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Read Article <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* FULL ARTICLE READER MODAL */}
        {readingArticle && (
          <div className="modal-overlay" onClick={() => setReadingArticle(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px' }}>
              
              {/* Reader Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 28px',
                borderBottom: '1px solid var(--border-light)',
                background: 'var(--surface-light)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="badge badge-emerald">{readingArticle.category}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{readingArticle.publishedDate}</span>
                </div>

                <button
                  onClick={() => setReadingArticle(null)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--surface-white)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Reader Body */}
              <div style={{ padding: '36px 32px' }}>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--emerald-900)', lineHeight: 1.3, marginBottom: '16px' }}>
                  {readingArticle.title}
                </h2>

                {/* Author Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'var(--surface-light)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '28px',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--emerald-800)',
                    color: 'var(--gold-400)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                  }}>
                    {readingArticle.author.name.split(' ').slice(1, 3).map(n => n[0]).join('') || 'AY'}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--emerald-900)' }}>
                      {readingArticle.author.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {readingArticle.author.role} • {readingArticle.author.credentials}
                    </div>
                  </div>
                </div>

                {/* Article Content Paragraphs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '32px' }}>
                  {readingArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Related tags */}
                <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {readingArticle.tags.map((t) => (
                      <span key={t} className="badge" style={{ background: 'var(--surface-light)', color: 'var(--text-muted)' }}>
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      store.showToast('Article link copied to clipboard', 'info');
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    <Share2 size={14} />
                    <span>Share Publication</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
