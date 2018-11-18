import { createContext } from 'react';

const Store = createContext({
  ressources: null,
  basket: null,
  appointment: null,
});

export default Store;
