const express = require('express');

const app = express();
const port = 3002;

const createPiece = (shadingArr, outlineArr, gradientArr, maskArr, borderArr) => {
  return {
    shadingArr, outlineArr, gradientArr, maskArr, borderArr
  }
}

app.use(express.static('./../../client/dist'))
app.listen(port, ()=> {
  console.log('Listening on port ', port);
})