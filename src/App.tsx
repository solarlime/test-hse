import { StoreProvider } from './store/StoreProvider';
import Store from './store/store';
import Page from './components/Page';

// eslint-disable-next-line mobx/missing-observer
const App = () => {
  return (
    <StoreProvider value={new Store()}>
      <Page />
    </StoreProvider>
  );
};

export default App;
