export function toCssVarNames<T>(themeObj: T, prefix = '-'): T {
  const vars: any = {};
  for (const [key, value] of Object.entries(themeObj)) {
    const varName = `${prefix}-${key}`;
    if (typeof value === 'object') {
      vars[key] = toCssVarNames(value, varName);
    } else {
      vars[key] = `var(${varName})`;
    }
  }
  return vars;
}

export function toCssVars<T>(themeObj: T, prefix = '-') {
  const vars: any = {};

  for (const [key, value] of Object.entries(themeObj)) {
    const varName = `${prefix}-${key}`;
    if (typeof value === 'object') {
      const nestedVars = toCssVars(value, varName);
      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue;
      }
    } else {
      vars[varName] = value;
    }
  }
  return vars;
}
