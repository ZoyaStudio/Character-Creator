import { Color, Garment, Hair} from './types';
export const makeFilterStyle = (filterSetObj : Color) : string => {
  const {
    hue, sat, brit, con, op,
  } = filterSetObj;
  if (
    hue === undefined
    || sat === undefined
    || brit === undefined
    || con === undefined
    || op === undefined
  ) {
    return `brightness(${3.5}) hue-rotate(${0}deg) saturate(${1}%) contrast(${144.5}%) opacity(${100}%)`;
  }
  return `brightness(${brit}) hue-rotate(${hue}deg) saturate(${sat}%) contrast(${con}%) opacity(${op}%)`;
};
export const getRandomColor = () : Color => ({
  hue: Math.random() * 360,
  sat: Math.random() * 180,
  brit: 1.5,
  con: 100,
  op: 100,
});
export const firstKeyOf = (obj: Record<string, any>) : string => Object.keys(obj)[0];
export const makeCopy = (obj: Garment) : Garment => JSON.parse(JSON.stringify(obj));