export const add = (manageContext, initialState, item) =>
  manageContext({
    ...initialState,
    basket: initialState.basket ? initialState.basket.concat(item) : [item],
  });

export const reset = (manageContext, initialState) =>
  manageContext({
    ...initialState,
    basket: null,
  });
