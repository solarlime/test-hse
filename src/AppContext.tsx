import { createContext, useState, useEffect, Context, ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AppContext = createContext({}) as Context<{ [key: string]: any }>;
// eslint-disable-next-line mobx/missing-observer
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCompact, setIsCompact] = useState(
    document.documentElement.clientWidth <= 500,
  );

  useEffect(() => {
    const compactMatcher = window.matchMedia('(max-width: 600px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsCompact(event.matches);
    };
    compactMatcher.addEventListener('change', handleChange);

    return () => {
      compactMatcher.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCompact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
