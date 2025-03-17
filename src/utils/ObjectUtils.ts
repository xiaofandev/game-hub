export function removeEmptyProperties(obj: any): any {
  if (!obj) return {};
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete obj[key];
    }
  });
  return obj;
}
