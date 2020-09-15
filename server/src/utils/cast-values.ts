const castValues = <T>(object: Record<string, unknown>, castFn: (value: unknown) => T): Record<string, T> =>
  Object.fromEntries(Object.entries(object).map(([key, val]) => [key, castFn(val)]));

export default castValues;
