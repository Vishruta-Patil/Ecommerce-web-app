export const composeFunc =
  (state, ...func) =>
  (data) => {
    return func.reduce((acc, curr) => curr(state, acc), data);
  };

export const filterByPrice = (state, data) => {
  const { filterByPrice } = state;
  const { lessPrice, mediumPrice, highPrice } = filterByPrice;
  let filterByPriceProducts = [];

  if (!lessPrice && !mediumPrice && !highPrice) {
    return data;
  }
  if (lessPrice) {
    let filteredData = data.filter(
      (product) => product?.price >= 1500 && product?.price <= 4000
    );
    filterByPriceProducts.push(...filteredData);
  }
  if (mediumPrice) {
    let filteredData = data.filter(
      (product) => product?.price >= 4001 && product?.price <= 7000
    );
    filterByPriceProducts.push(...filteredData);
  }
  if (highPrice) {
    let filteredData = data.filter((product) => product?.price >= 7001);
    filterByPriceProducts.push(...filteredData);
  }
  return filterByPriceProducts;
};

export const filterByTemplate = (state, data) => {
  if (state.template.length !== 0) {
    return data.filter((product) => state.template.includes(product.template));
  }
  return data;
};

export const filterByType = (state, data) => {
  if (state.type.length !== 0) {
    return data.filter((product) => state.type.includes(product.type));
  }
  return data;
};
