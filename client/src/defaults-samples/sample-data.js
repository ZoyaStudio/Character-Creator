
//placeholder data for garment pieces
//TO DO: move data to database, fetch with API call
const data = {
  bases: [
    { //simple top
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: "/simpleTop-GradientA.png",
    shadingUrl: "/simpleTop-ShadingA.png",
  },
    { //floral top
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/simpleTopFlower-ShadingA.png",
    },
    { //stretched top
      outlineUrl: "/simpleTop-Outline.png",
      gradientUrl: "/simpleTop-GradientA.png",
      shadingUrl: "/stretched-top.png",
    },
  ],
  seams: ["./princessline.png", "./curved-seam.png"],
  decorations:  [
    //bow
    {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
    //button down
    {outlineUrl: "./buttonOut.png", gradientUrl: './buttonGrad.png', shadingUrl: "./buttonShad.png", hasBoundaries: true}
  ],

}
export default data;