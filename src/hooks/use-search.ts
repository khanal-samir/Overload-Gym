'use client';

import { useState, useMemo } from 'react';

export function useSearch<T>(
  items: T[],
  searchFields: (keyof T)[],
  nestedSearchFields?: { field: keyof T; nestedField: string }[]
) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    return items.filter(item => {
      // Search in direct fields
      const directMatch = searchFields.some(field => {
        const value = item[field];
        return (
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      // Search in nested fields
      const nestedMatch = nestedSearchFields?.some(({ field, nestedField }) => {
        const nestedArray = item[field] as any[];
        return (
          Array.isArray(nestedArray) &&
          nestedArray.some(
            nestedItem =>
              typeof nestedItem[nestedField] === 'string' &&
              nestedItem[nestedField]
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
        );
      });

      return directMatch || nestedMatch;
    });
  }, [items, searchTerm, searchFields, nestedSearchFields]);

  return {
    searchTerm,
    setSearchTerm,
    filteredItems,
  };
}
