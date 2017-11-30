// @flow

export function map([head, ...tail]: Array<any>, fn: any => any) {
  if (head === undefined && !tail.length) return [];
  return tail.length ? [fn(head), ...map(tail, fn)] : [fn(head)];
}
