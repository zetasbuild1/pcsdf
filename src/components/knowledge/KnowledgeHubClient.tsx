"use client";

import React, { useState } from "react";
import KnowledgeHero from "./KnowledgeHero";
import CategoryExplorer from "./CategoryExplorer";
import KnowledgeContent from "./KnowledgeContent";
import KnowledgeBanner from "./KnowledgeBanner";

export default function KnowledgeHubClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <>
      <KnowledgeHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <CategoryExplorer
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <KnowledgeContent
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onClearFilters={handleClearFilters}
      />
      <KnowledgeBanner />
    </>
  );
}
