export const formatPrice = price => {
  const princeStr = price.toString();

  return `${princeStr.slice(0, 2)}.${princeStr.slice(2, princeStr.length)}`;
};
