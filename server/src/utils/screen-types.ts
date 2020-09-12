const screenTypes: { [key: string]: number } = {
  small: 0,
  medium: 768,
  large: 1280,
  xlarge: 1440,
};

const getType = (width: number): string =>
  Object.entries(screenTypes)
    .sort((a, b) => a[1] - b[1])
    .reduce((acc, curr) => (width >= curr[1] ? curr[0] : acc), "");

export default getType;
