// src/hooks/useKanbanData.js
import { useState, useEffect } from 'react';
import { fetchKanbanData } from '../services/api';

export const useKanbanData = () => {
  const [data, setData] = useState(null);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchKanbanData();
        setData(result);
      } catch (error) {
        // Handle error (e.g., show error message to user)
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    // Load user preferences from localStorage
    const savedGrouping = localStorage.getItem('grouping');
    const savedSorting = localStorage.getItem('sorting');
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedSorting) setSorting(savedSorting);
  }, []);

  useEffect(() => {
    // Save user preferences to localStorage
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const updateGrouping = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const updateSorting = (newSorting) => {
    setSorting(newSorting);
  };

  return {
    data,
    grouping,
    sorting,
    updateGrouping,
    updateSorting,
  };
};