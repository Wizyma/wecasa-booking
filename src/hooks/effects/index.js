import { useEffect } from 'react';

import { getPrestations } from '../../api';

export const useEffectPrestation = (manageContext, initialState) =>
  useEffect(
    () => {
      let changedAfterOrUnmounted = false;
      getPrestations().then(ressources => {
        if (!changedAfterOrUnmounted) {
          manageContext({
            ...initialState,
            ressources,
          });
        }
      });
      return () => (changedAfterOrUnmounted = true);
    },
    [initialState],
  );
