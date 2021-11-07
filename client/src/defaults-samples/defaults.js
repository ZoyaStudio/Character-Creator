import colors from './colors.js';
import data from './sample-data.js';
//defalt top object
var defaults = {
  defaultTop: {
    upperBoundary: null,//data.tops.skinTight.upperBoundaries['Up Chevron'][0],
    lowerBoundary: data.tops.skinTight.lowerBoundaries['Up Chevron'][0],
    neckline: null,
    base: data.tops.skinTight.bases.plain,
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],
    decoration:  null,
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  defaultSleeves: data.sleeves.caps['Puff Sleeve'],
  defaultBody: {
    filterSet: {
      blush: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      lightShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      darkShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100}
    },
    head: data.bodies.heads['Average Girl'],
    ear: data.bodies.ears['Normal Ear'],
    torsoLegs: data.bodies.torsoLegs['Busty Not Muscular'],
    backArm: data.bodies.backArms['Skinny'],
    frontArm: data.bodies.frontArms['Skinny'],
  }
}
export default defaults;