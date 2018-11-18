import { useState } from 'react';

import { useEffectPrestation } from './effects';
import { add, reset } from './basket';

export const useContextManager = initialState => {
  const [state, manageContext] = useState(initialState);

  useEffectPrestation(manageContext, initialState);

  const addToBaskest = item => add(manageContext, initialState, item);
  const resetBasket = () => reset(manageContext, initialState);

  return {
    state,
    addToBaskest,
    resetBasket,
  };
};
