import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './AppContext';
import GlobalStyles from './globalStyles';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
);
