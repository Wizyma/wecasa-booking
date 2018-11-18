import React, { useContext } from 'react';

import Store from '../../context';
import { useContextManager } from '../../hooks';

const App = () => {
  const store = useContext(Store);

  const { state, addToBaskest, resetBasket } = useContextManager(store);

  return (
    <Store.Provider values={[state, addToBaskest, resetBasket]}>
      <div>
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Store.Provider>
  );
};

export default App;
