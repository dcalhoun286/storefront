import { Provider } from 'react-redux';

import Header from './components/header/header.js';
import Storefront from './components/storefront/storefront.js';
import Footer from './components/footer/footer.js';

import store from './store/';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Storefront />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
