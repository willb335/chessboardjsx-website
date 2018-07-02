const info = require('./docgen.json');

const props = info[Object.keys(info).filter(k => k === 'props')];

const filteredProps = Object.keys(props).map(k => {
  if (!props[k].defaultValue.computed) {
    return {
      name: k,
      type: props[k].type,
      default: props[k].defaultValue,
      description: props[k].description
    };
  }
});

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

const sortedProps = filteredProps.sort(compare);

export default sortedProps;
