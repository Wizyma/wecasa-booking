import React, { useContext, memo } from 'react';

import { Grid, GridColumn, Paragraph } from './styles';
import { formatPrice } from '../../helpers';
import Store from '../../context';
import Title from '../Title';

const Home = () => {
  const [store, call] = useContext(Store);
  const { ressources } = store;

  if (!ressources) return null;

  return (
    <Grid>
      <Title>{ressources.title}</Title>
      {ressources.categories.map(({ reference, title, prestations }) => (
        <Grid key={reference}>
          <Title variant="h2">{title}</Title>
          {prestations.map(({ duration, price, reference: ref, title: tit }) => (
            <GridColumn key={ref}>
              <Title variant="h4">{tit}</Title>
              <Paragraph>
                PRIX: <strong>{`${formatPrice(price)}€`}</strong>
              </Paragraph>
              <Paragraph>
                DUREE: <strong>{duration}</strong>
              </Paragraph>
              <button
                type="button"
                onClick={() =>
                  call({
                    type: 'ADD_TO_BASKEST',
                    payload: {
                      ref,
                      price: formatPrice(price),
                      duration,
                    },
                  })
                }
              >
                Ajouter prestations
              </button>
            </GridColumn>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(Home);
