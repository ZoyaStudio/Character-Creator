
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
  }
}
export default defaults;