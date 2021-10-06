import colors from './colors.js';
//defalt top object
var defaults = {
  defaultTop: {
    upperBoundary: null,
    neckline: null,
    lowerBoundary: null,
    base: {
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/stretched-top.png",
    },
    baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
    seams: ["./curved-seam.png"],
    decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  defaultTop2 : {
    upperBoundary: '',
    neckline: '',
    lowerBoundary: '',
    base: {
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl:  "/simpleTop-ShadingA.png",
    },
    baseFilter: {hue: 190, sat: 100, brit: 1, con: 100, op: 100},
    seams: ["./princessline.png"],
    decoration:  {outlineUrl: "./buttonOut.png", gradientUrl: './buttonGrad.png', shadingUrl: "./buttonShad.png", hasBoundaries: true},
    decorationFilter: {hue: 180, sat: 10, brit: 2, con: 100, op: 100}
  },
  defaultTop3 : {
    upperBoundary: null,
    neckline: null,
    lowerBoundary: null,
    base: {
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/simpleTopFlower-ShadingA.png",
    },
    baseFilter: {hue: 90, sat: 25, brit: 1, con: 100, op: 100},
    seams: ["./curved-seam.png"],
    decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
    decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
  },
  previewTop : {
    upperBoundary: '',
    neckline: '',
    lowerBoundary: '',
    base: {
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl:  "/simpleTop-ShadingA.png",
    },
    baseFilter: colors.white,
    seams: null,
    decoration:  null,
    decorationFilter: null
  },
  defaultBody: {
    filterSet: {
      blush: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      lightShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
      darkShade: {hue: 0, sat: 100, brit: 1, con: 100, op: 100}
    },
    head: {
      outline:'./Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
    },
    ear: {
      outline:'./Body-Layers/OutlineA.svg',
      gradient: './Body-Layers/GradientA.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingADark.svg',
      lightShade: './Body-Layers/ShadingALight.svg',
    },
    torsoLegs: {
      outline:'./Body-Layers/OutlineA.svg',
      gradient: './Body-Layers/GradientA.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingADark.svg',
      lightShade: './Body-Layers/ShadingALight.svg',
    },
    backArm: {
      outline:'./Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
    },
    frontArm: {
      outline:'./Body-Layers/OutlineB.svg',
      gradient: './Body-Layers/GradientB.svg',
      blush: './Body-Layers/Blush.svg',
      darkShade: './Body-Layers/ShadingBDark.svg',
      lightShade: './Body-Layers/ShadingBLight.svg',
    },
  }
}
export default defaults;