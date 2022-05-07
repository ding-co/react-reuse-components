import { ObjectSignatureType } from './type';

const dateCompareFn = (
  a: ObjectSignatureType,
  b: ObjectSignatureType,
  key: string
) => new Date(a[key]).getTime() - new Date(b[key]).getTime();

export { dateCompareFn };
