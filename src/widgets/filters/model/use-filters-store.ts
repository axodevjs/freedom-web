import { create } from "zustand";

interface FiltersStore {
  searchTerm: string;
  locationFilter: string;
  setSearchTerm: (term: string) => void;
  setLocationFilter: (location: string) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  searchTerm: "",
  locationFilter: "",
  setSearchTerm: (term) => set(() => ({ searchTerm: term })),
  setLocationFilter: (location) => set(() => ({ locationFilter: location })),
}));
