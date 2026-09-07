import React, { useState, useMemo } from 'react';
import { JournalHeroSection } from '../components/JournalHeroSection';
import { JournalFeaturedArticleSection } from '../components/JournalFeaturedArticleSection';
import { JournalCategoriesSection } from '../components/JournalCategoriesSection';
import { JournalGridSection } from '../components/JournalGridSection';
import { JournalCtaSection } from '../components/JournalCtaSection';
import { JournalArticleModal } from '../components/JournalArticleModal';
import {
  ARTICLES_DATA,
  JOURNAL_CATEGORIES,
  JournalCategory,
  Article,
} from '../data/journalData';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<JournalCategory>('همه مقالات');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'همه مقالات') {
      return ARTICLES_DATA;
    }
    return ARTICLES_DATA.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  // Compute category counts dynamically from JOURNAL_CATEGORIES
  const categoryCounts = useMemo(() => {
    const counts = JOURNAL_CATEGORIES.reduce((acc, cat) => {
      acc[cat] = cat === 'همه مقالات'
        ? ARTICLES_DATA.length
        : ARTICLES_DATA.filter((a) => a.category === cat).length;
      return acc;
    }, {} as Record<JournalCategory, number>);
    return counts;
  }, []);

  return (
    <div id="page-journal">
      <JournalHeroSection />
      <JournalFeaturedArticleSection onSelectArticle={setActiveArticle} />
      <JournalCategoriesSection
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />
      <JournalGridSection
        articles={filteredArticles}
        onSelectArticle={setActiveArticle}
        activeCategory={selectedCategory}
      />
      <JournalCtaSection />

      {/* Article Lightbox Modal */}
      <JournalArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onSelectArticle={setActiveArticle}
        allArticles={ARTICLES_DATA}
      />
    </div>
  );
};
