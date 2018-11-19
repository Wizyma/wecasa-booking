import { useState } from 'react';

import { useEffectPrestation } from './effects';
import { add, reset } from './basket';

/**
 *  use react hooks to share state and manage it across the application.
 *
 * @param {Object} initialState represent the actual state of the app
 * @returns {Object} return a nn object with a state and a function for
 * the mutations
 */
const useContextManager = initialState => {
  const [state, manageContext] = useState(initialState);

  useEffectPrestation(manageContext, initialState);

  const call = ({ type, payload }) => {
    const actions = {
      ADD_TO_BASKEST: item => add(manageContext, initialState, item),
      RESET_BASKET: () => reset(manageContext, initialState),
    };

    return actions[type](payload);
  };

  return {
    state,
    call,
  };
};

export { useContextManager };
