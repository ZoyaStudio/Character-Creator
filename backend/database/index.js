const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/creator');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database!')
});

const topSchema = new mongoose.Schema({
  upperBoundary: String,
  neckline: String,
  lowerBoundary: String,
  base:
  baseFilter:
  seams:
  decoration:
  decorationFilter

})


var defaultTop = {
  upperBoundary: '',
  neckline: '',
  lowerBoundary: '',
  base: {
    outlineUrl: "/simpleTop-Outline.png",
    gradientUrl: "/simpleTop-GradientA.png",
    shadingUrl: "/stretched-top.png",
  },
  baseFilter: {hue: 0, sat: 100, brit: 1, con: 100, op: 100},
  seams: ["./curved-seam.png"],
  decoration:  {outlineUrl: "./bowoutline.png", gradientUrl: './bowgrad.png', shadingUrl: "./bowshading.png", hasBoundaries: false},
  decorationFilter: {hue: 180, sat: 100, brit: 1.2, con: 100, op: 100}
}