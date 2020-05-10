export const normalizeData = (arr) => {
  return arr.reduce((acc, item) => {
    return { ...acc, [item._id]: item };
  }, {});
};

export const denormalizeData = (obj) => {
  return Object.values(obj);
};

export const filterItem = (items, id) => {
  delete items[id];
  return items;
};
