// Takes a base classname, an array or object of modifiers, and an
// array or object of global modifiers and returns a BEM-formatted classname.
// examples:
//   bem('Heading' { isHidden: true }) returns "Heading Heading--is-hidden"
//   bem('Heading', { isBlinking: false }) returns "Heading"
//   bem('Heading', { isBlinking: true }, ['isHidden'])
//   returns "Heading Heading--is-blinking --is-hidden"

const hyphenize = str => str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);

const buildModifiers = (modifiers, base = '') => {
  const classNames = [];
  if (Array.isArray(modifiers)) {
    modifiers.forEach(m => classNames.push(`${base}--${m}`));
  } else {
    const currentModifiers = Object.keys(modifiers).filter(k => modifiers[k]);
    currentModifiers.forEach(modifier => {
      classNames.push(`${base}--${hyphenize(modifier)}`);
    });
  }
  return classNames;
};

export default (base, modifiers = {}, globalModifiers = {}) =>
  [
    base,
    ...buildModifiers(modifiers, base),
    ...buildModifiers(globalModifiers),
  ].join(' ');
