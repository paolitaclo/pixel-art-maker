var colorSelected;
var canvas = document.getElementById('canvas');
for (var i = 0; i <= 1891; i++) {
  var divPixel = document.createElement('div');
  divPixel.className = 'pixels';
  divPixel.setAttribute('style', "width: 10px; height: 10px; float: left; border-right: 1px solid WhiteSmoke; border-bottom: 1px solid WhiteSmoke;");
  divPixel.style.background = 'White';
  canvas.appendChild(divPixel);
}

var secondContainer = document.getElementById('second-container');

var palette = document.getElementById('palette');

var options = ['BlueViolet', 'Brown', 'Coral', 'CornflowerBlue', 'DarkGreen', 'DarkSalmon', 'DeepPink', 'Darkturquoise', 'DimGray', 'Gold', 'GreenYellow', 'Indigo', 'LightSeaGreen', 'LightSlateGray', 'Magenta', 'Maroon', 'MidnightBlue', 'GhostWhite', 'Wheat', 'YellowGreen', 'Teal', 'DarkViolet', 'Plum', 'PaleGreen', 'Peru', 'MistyRose', 'HotPink'];

for (var i = 0; i < options.length; i++) {
  var color = document.createElement('div');
  color.className = 'colors-div';
  color.setAttribute('style', "width: 35px; height: 35px; float: left");
  color.style.background = options[i];
  palette.appendChild(color);
}

var actualColor = document.createElement('div');
actualColor.className = 'actual-color';
// actualColor.style.background = colorSelected;
secondContainer.appendChild(actualColor);
// console.log(actualColor);


palette.addEventListener('click', function (event) {
  if (event.target.className === 'colors-div') {
    colorSelected = event.target.style.background;
    actualColor.style.background = colorSelected;
  }
  // console.log('event', event.target);
});


canvas.addEventListener('click', function (event) {
  if (event.target.className === 'pixels') {
    event.target.style.background = colorSelected;
  }
  console.log('event', event.target);
  console.log('event', event);
});

canvas.addEventListener('mouseover', function (event) {
  if (event.buttons === 1) {
    event.target.style.background = colorSelected;
  }
})

//
