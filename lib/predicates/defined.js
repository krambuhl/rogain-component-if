export default function Defined(data, value) {
  return (value && value.toString()) === 'false' ? data === undefined : data !== undefined;
}