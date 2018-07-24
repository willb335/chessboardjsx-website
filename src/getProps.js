const v1 = require('./docgenV1.json');
const v2 = require('./docgenV2.json');

const getDocGen = version => {
  const props = version[Object.keys(version).filter(k => k === 'props')];

  const filteredProps = Object.keys(props)
    .filter(k => !props[k].defaultValue.computed)
    .map(k => ({
      name: k,
      type: props[k].type,
      default: props[k].defaultValue,
      description: props[k].description
    }));

  function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }

  return filteredProps.sort(compare);
};

export const version1 = getDocGen(v1);
export const version2 = getDocGen(v2);
