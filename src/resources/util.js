export const filterElementsByUserQuery = (elements, userQuery) => {
  return elements.filter(el => el.name.includes(userQuery));
};

export const giveMeABetterName = (obj, trueFilters) => {
  let allTrue = [];

  for (let i = 0; i < trueFilters.length; i++) {
    let currentFilter = trueFilters[i];
    if (obj[currentFilter] !== 'true') {
      break;
    }
    allTrue.push(true);
  }
  return allTrue.length === trueFilters.length;
};

export const getStringFilters = (filters) => {
  let trueFilters = filters.filter(el => el[Object.keys(el)]);
  return trueFilters.flatMap(el => Object.keys(el));
};

export const getDisplayElements = (elements, filters) => {
  let trueElements = [];

  for (let i = 0; i < elements.length; i++) {
    let currentElement = elements[i];
    const goodElement = giveMeABetterName(currentElement, filters);
    if (goodElement) {
      trueElements.push(currentElement);
    }
  }

  return trueElements;


};
