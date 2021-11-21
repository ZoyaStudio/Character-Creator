import colors from './colors.js';
import data from './sample-data.js';
//defalt top object
var defaults = {
  defaultTop: {
    upperBoundary: null,//data.tops.skinTight.upperBoundaries['Up Chevron'][0],
    lowerBoundary: data.tops.skinTight.lowerBoundaries['Gentle Curve'][4],
    neckline: null,
    base: data.tops.skinTight.bases.plain,
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],
    decoration:  null,
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  defaultBottom: {
    upperBoundary: null,//data.tops.skinTight.upperBoundaries['Up Chevron'][0],
    lowerBoundary: data.bottoms.skinTight.lowerBoundaries['Gentle Curve'][0],
    neckline: null,
    base: data.bottoms.skinTight.bases.plain,
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],
    decoration:  null,
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  defaultFeet: {
    upperBoundary: null,
    lowerBoundary: data.feets.skinTight.lowerBoundaries['Gentle Curve'][0],
    neckline: null,
    base: data.feets.skinTight.bases.plain,
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],
    decoration:  null,
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  defaultSleeves: {
    upperBoundary: null,
    lowerBoundary: null,
    neckline: null,
    base: data.sleeves['Puff Sleeves'].bases.plain,
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],
    decoration:  null,
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
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
  defaultBody: {
    filterSet: {
      blush: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      lightShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      darkShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      faceShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      eyewhite: colors.white,
      iris: colors.blue,
    },
    head: data.bodies.heads['Average Girl'],
    eyes: {
      iris: data.bodies.eyes['Round Eyes'].normalIris,
      pupil: data.bodies.eyes['Round Eyes'].normalPupilOutline,
      eyewhite: data.bodies.eyes['Round Eyes'].eyewhite
    },
    mouth: data.bodies.mouths["Bright Smile"],
    eyebrows: data.bodies.eyebrows['Curled EyeBrows'],
    nose: data.bodies.noses["Classic Anime Nose"],
    ear: data.bodies.ears['Normal Ear'],
    torsoLegs: data.bodies.torsoLegs['Busty Not Muscular'],
    backArm: data.bodies.backArms['Skinny'],
    frontArm: data.bodies.frontArms['Skinny'],
  },
  defaultHair: {
    base: data.hair.bases['Short Hair'],
  }
}
export default defaults;