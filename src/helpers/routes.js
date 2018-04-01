export const routeFor = (path, ...vars) => {
  let pathVar = 0;
  return path.replace(/:\w+/, () => {
    const retVal = vars[pathVar];
    pathVar += 1;
    return retVal;
  });
};

export default {
  home: {
    index: '/',
  },
  projects: {
    index: '/projects',
    show: '/projects/:id',
  },
  about: {
    index: '/about',
  },
};
