import { useEffect } from 'react';

import { getPrestations } from '../../api';

/**
 *  Make the request durint the lifecycle phase.
 *
 * @param {Function} manageContext function to mutate the state
 * @param {Object} initialState object that represent actual state
 */
const useEffectPrestation = (manageContext, initialState) =>
  useEffect(
    () => {
      let changedAfterOrUnmounted = false;
      getPrestations().then(ressources => {
        if (!changedAfterOrUnmounted) {
          manageContext({
            ...initialState,
            ressources: {
              ...ressources,
            },
          });
        }
      });
      return () => (changedAfterOrUnmounted = true);
    },
    [initialState],
  );

export { useEffectPrestation };
