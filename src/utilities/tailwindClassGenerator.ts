export const generateClass = (obj: Record<string, string>) => {
  let classToReturn = '';

  for (const key in obj) {
    if (obj[key]) {
      classToReturn += obj[key] + ' ';
    }
  }

  return classToReturn;
};
