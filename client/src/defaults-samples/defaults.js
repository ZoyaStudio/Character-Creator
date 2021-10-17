import colors from './colors.js';
import data from './sample-data.js';
//defalt top object
var defaults = {
  defaultTop: {
    upperBoundary: null,
    neckline: null,
    lowerBoundary: null,
    base: {
      outlineUrl: "/SkinTightBodySuit/TightBodySuitOutline.svg",
      gradientUrl: "/SkinTightBodySuit/TightBodySuitGradient.svg",
      shadingUrl: "/SkinTightBodySuit/TightBodySuitShading.svg",
    },
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: [],//"./curved-seam.png"],
    decoration:  null,//{outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
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