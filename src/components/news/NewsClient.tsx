"use client";

import React, { useState } from "react";
import NewsHero from "./NewsHero";
import NewsContent from "./NewsContent";
import NewsCtaBanner from "./NewsCtaBanner";

export default function NewsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <>
      <NewsHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <NewsContent
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedTag={selectedTag}
        onSelectCategory={setSelectedCategory}
        onSelectTag={setSelectedTag}
        onClearFilters={handleClearFilters}
      />
      <NewsCtaBanner />
    </>
  );
}
