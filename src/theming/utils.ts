const INVALID_CSS_ERROR = new Error('Invalid CSS value: Expects a string');

export function toCssVarNames<T>(themeObj: T, prefix = '-'): T {
  const vars: any = {};
  for (const [key, value] of Object.entries(themeObj)) {
    const varName = `${prefix}-${key}`;
    if (typeof value === 'object') {
      vars[key] = toCssVarNames(value, varName);
    } else if (typeof value === 'string') {
      vars[key] = `var(${varName})`;
    } else {
      throw INVALID_CSS_ERROR;
    }
  }
  return vars;
}

interface CssVarMap {
  [cssVarName: string]: string;
}

export function toCssVars<T>(themeObj: T, prefix = '-') {
  const vars: CssVarMap = {};

  for (const [key, value] of Object.entries(themeObj)) {
    const varName = `${prefix}-${key}`;
    if (typeof value === 'object') {
      const nestedVars = toCssVars(value, varName);
      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars[nestedKey] = nestedValue;
      }
    } else if (typeof value === 'string') {
      vars[varName] = value;
    } else {
      throw INVALID_CSS_ERROR;
    }
  }
  return vars;
}
