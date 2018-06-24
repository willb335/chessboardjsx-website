const info = require('./docgen.json');

const props = info[Object.keys(info).filter(k => k === 'props')];

const filteredProps = Object.keys(props).map(k => {
  return {
    name: k,
    type: props[k].type,
    default: props[k].defaultValue,
    description: props[k].description
  };
});

console.log(filteredProps);
