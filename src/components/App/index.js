import React, { useContext, Suspense } from 'react';

import Home from '../Home';
import Store from '../../context';
import WecasaPage from '../Page';
import { useContextManager } from '../../hooks';

const App = () => {
  const store = useContext(Store);

  const { state, call } = useContextManager(store);

  return (
    <Store.Provider value={[state, call]}>
      <Suspense fallback={<div>Loading ...</div>}>
        <WecasaPage>
          <Home />
        </WecasaPage>
      </Suspense>
    </Store.Provider>
  );
};

export default App;
