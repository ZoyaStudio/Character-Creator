import { bodyProfiles }from './sample-data';
import {GarmentCollection, Body, Hair} from './types'
import {getRandomColor} from './helper-functions'


export const defaultGarments : GarmentCollection = {
  defaultTop: {
    typeKey: 'Skin Tight',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 0,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 5,
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: { name: 'Center Front', type: 'line' },
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  defaultCollar: {
    typeKey: 'Skin Tight',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 0,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 0,
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: { name: 'Center Front', type: 'line' },
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  defaultBottom: {
    typeKey: 'Skin Tight',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 1,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 2,
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: { name: 'Center Front', type: 'line' },
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  defaultFeet: {
    typeKey: 'Body Suit',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 3,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 9,
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: { name: 'Center Front', type: 'line' },
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  defaultOnePiece: {
    typeKey: 'Skin Tight',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 0,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 0,
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: { name: 'Center Front', type: 'line' },
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  defaultSleeves: {
    typeKey: 'Puff Sleeves',
    upperBoundaryKey: null,
    upperBoundaryIndex: 0,
    lowerBoundaryKey: null,
    lowerBoundaryIndex: 0,
    necklineKey: null,
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: null,
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
};

export const defaultBody : Body = {
  bodySettings: {
    hasEarOverHair: false,
    mouthHeight: 0,
    noseHeight: 0,
    eyeBrowHeight: 0
  },
  filterSet: {
    blush: {
      hue: 0, sat: 100, brit: 1, con: 100, op: 100,
    },
    lightShade: {
      hue: 0, sat: 100, brit: 1, con: 100, op: 100,
    },
    darkShade: {
      hue: 0, sat: 100, brit: 1, con: 100, op: 100,
    },
    faceShade: {
      hue: 0, sat: 100, brit: 1, con: 100, op: 100,
    },
  },
  head: bodyProfiles.heads['Average Girl'],
  eyes: {
    baseFilter: getRandomColor(),
    typeKey: 'Round Eyes',
    irisStyle: 'normal',
    pupilStyle: 'normal',
    lashLength: 'longLashed',
  },
  mouth: bodyProfiles.mouths['Bright Smile'],
  eyebrows: bodyProfiles.eyebrows['Curled EyeBrows'],
  nose: bodyProfiles.noses['Classic Anime Nose'],
  ear: bodyProfiles.ears['Normal Ear'],
  torsoLegs: bodyProfiles.torsoLegs['Busty Not Muscular'],
  backArm: bodyProfiles.backArms.Skinny,
  frontArm: bodyProfiles.frontArms.Skinny,
}

export const defaultHair : Hair = {
  baseFilter: getRandomColor(),
  tintFilter: getRandomColor(),
  bases: {
    typeKey: 'Witchy Hair',
    index: 0
  }
}