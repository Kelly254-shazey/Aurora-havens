'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const maxVisible = 5;
    const pages: (number | 'dots')[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push('dots');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push('dots');

    pages.push(totalPages);
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-1.5 sm:gap-2 mt-12" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-gold-500/30 hover:text-gold-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
      >
        <ChevronLeft className="w-4 h-4 hidden sm:block" />
        <span className="sm:hidden">Prev</span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {pages.map((page, i) =>
        page === 'dots' ? (
          <span key={`dots-${i}`} className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-xl text-sm font-semibold flex items-center justify-center transition-all ${
              page === currentPage
                ? 'bg-gold-500 text-dark-900 shadow-lg shadow-gold-500/20'
                : 'border border-gray-200 text-gray-600 hover:border-gold-500/30 hover:text-gold-600'
            }`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-gold-500/30 hover:text-gold-600 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-all"
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">Next</span>
        <ChevronRight className="w-4 h-4 hidden sm:block" />
      </button>
    </nav>
  );
}
