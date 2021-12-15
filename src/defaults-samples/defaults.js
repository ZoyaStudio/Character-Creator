import data from './sample-data';
// defalt top object
const getRandomColor = () => ({
  hue: Math.random() * 360,
  sat: Math.random() * 180,
  brit: 1.5,
  con: 100,
  op: 100,
});
const defaults = {
  defaultTop: {
    typeKey: 'Skin Tight',
    upperBoundaryKey: 'Gentle Curve',
    upperBoundaryIndex: 0,
    lowerBoundaryKey: 'Gentle Curve',
    lowerBoundaryIndex: 5,
    necklineKey: null,
    neckLineIndex: null,
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
    necklineKey: null,
    neckLineIndex: null,
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
    lowerBoundaryIndex: 1,
    necklineKey: null,
    neckLineIndex: null,
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
    necklineKey: null,
    neckLineIndex: null,
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
    necklineKey: null,
    neckLineIndex: null,
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
    necklineKey: '',
    neckLineIndex: 0,
    baseKey: 'Plain',
    baseFilter: getRandomColor(),
    seamKey: null,
    decoration: { hasBoundaries: false },
    decorationFilter: {
      hue: 180, sat: 100, brit: 1.2, con: 100, op: 100,
    },
  },
  // eyes: {
  //   "Round Eyes": {
  //     normalIris: {
  //       outline: './RoundEyeNormalIris-Outline.svg',
  //       shading: './RoundEyeNormalIris-Shading.svg',
  //     },
  //     glazedIris: {
  //       shadingA: '',
  //       shading4: '',
  //     },
  //     intenseIris: {
  //       outline: '',
  //       shading: '',
  //     }
  //     normalPupilOutline: './RoundEyePupil.svg',
  //     catPupilOutline: '',
  //     longLashed: './RoundEyesLongLashed-Outline',
  //     midLashed: '',
  //     noLash: ''
  //   }
  // },
  eyes: {
    typeKey: 'Round Eyes',
    irisStyle: 'normal',
    pupilStyle: 'normal',
    lashLength: 'noLash',
  },

  defaultBody: {
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
    head: data.bodies.heads['Average Girl'],
    eyes: {
      eyeColor: getRandomColor(),
      typeKey: 'Round Eyes',
      irisStyle: 'normal',
      pupilStyle: 'normal',
      lashLength: 'longLashed',
    },
    mouth: data.bodies.mouths['Bright Smile'],
    eyebrows: data.bodies.eyebrows['Curled EyeBrows'],
    nose: data.bodies.noses['Classic Anime Nose'],
    ear: data.bodies.ears['Normal Ear'],
    torsoLegs: data.bodies.torsoLegs['Busty Not Muscular'],
    backArm: data.bodies.backArms.Skinny,
    frontArm: data.bodies.frontArms.Skinny,
  },
  defaultHair: {
    hairFilter: getRandomColor(),
    base: {
      typeKey: 'Short Hair',
    },
  },
};
export default defaults;
