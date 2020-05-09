export const normalizeData = (arr) => {
  return arr.reduce((acc, item) => {
    return { ...acc, [item._id]: item };
  }, {});
};

export const denormalizeData = (obj) => {
  return Object.values(obj);
};
