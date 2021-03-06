export default function(data, value) {
  if (data === undefined) return false;
  const res = Array.isArray(data) ? data.length : Object.keys(data).length;
  return value === 'false' ? res > 0 : res === 0;
}
