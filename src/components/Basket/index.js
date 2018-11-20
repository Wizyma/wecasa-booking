import React, { useContext, memo, useState } from 'react';

import { FixedWrapper } from './styles';
import Store from '../../context';

const renderBasket = basket => <div>{basket.length}</div>;
//     <p>Prix total: {basket.map(b => b.price).reduce((a, b) => a + b, 0)}</p>

const renderBasketItems = (basket, call) =>
  basket ? (
    <div>
      <p>Prix total: {basket.map(b => b.price).reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)}</p>
      <p>Durée éstimé: {basket.map(b => b.duration).reduce((a, b) => a + b, 0)}</p>
      <button type="button" onClick={() => call({ type: 'RESET_BASKET' })}>
        Vider le panier
      </button>
      <button type="button">
        Voir le panier
        {/* this should be done using react router */}
      </button>
    </div>
  ) : (
    0
  );

const Basket = () => {
  const [store, call] = useContext(Store);
  const [showItems, setState] = useState(false);

  return (
    <FixedWrapper
      onMouseEnter={() => setState(!showItems)}
      onMouseLeave={() => setState(!showItems)}
      basket={store.basket}
    >
      {!showItems ? (
        store.basket ? (
          renderBasket(store.basket)
        ) : (
          <div>0</div>
        )
      ) : (
        renderBasketItems(store.basket, call)
      )}
    </FixedWrapper>
  );
};

export default memo(Basket);
