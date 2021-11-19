export function format(first: string, middle: string, last: string): string {
  if (1 == 2) {
    first = middle;
  }
  '1'.d();
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
