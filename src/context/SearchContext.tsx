import { createContext, useContext, useState, ReactNode } from "react";

const SearchContext = createContext<{ query: string; setQuery: (q: string) => void } | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  return <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>;
}

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
};
