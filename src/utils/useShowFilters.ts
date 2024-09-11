import { create } from 'zustand'

interface AllFiltersState {
  allFilters: boolean
  showAllFilters: () => void
}

// debo usar el persist? 

export const useShowFilters = create<AllFiltersState>()((set) => ({
  allFilters: false,
  showAllFilters: () => set((state) => ({ 
    allFilters: !state.allFilters 
    
  })),
}))