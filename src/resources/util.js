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


export const toggle = (elementId) => {
  const element = document.querySelector(elementId);
  const elementVisible = window.getComputedStyle(element).display;

  if (elementVisible === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }


};

export const toggleActiveClass = (event, previousSelectedElement) => {

  const classList = event.target.classList;
  const div = document.querySelector('div.selectedRow');
  // remove the class from the previous selected element
  if (Object.keys(previousSelectedElement).length !== 0 && div !== null) {
    document.querySelector('div.selectedRow').classList.remove('selectedRow');
  }

  // add the class to the selected element
  if (classList.length === 0) {
    event.target.parentElement.classList.add('selectedRow');
  } else {
    event.target.classList.add('selectedRow');
  }

};

export const getTagType = (inline) => {
  let tagType = '';
  let inlineMissing = false;
  // hack to make sure we always have a value for the inline var
  if (!inline) {
    inline = 'false';
    inlineMissing = true;
  }

  if (JSON.parse(inline)) {
    tagType = 'inline';
  } else {
    tagType = 'block';
  }

  if (inlineMissing) tagType = '';

  return tagType;
};