/**
 * color of shape
 */
var colors = ['#FF324A', '#31FFA6', '#206EFF', '#FFFF99']
/**
 * shapes
 */
var shape = ['triangle', 'rectangle', 'circle']
/**
 * number of shape
 */
var circleNum = window.innerWidth / 12

/**
 * draw shape
 */
function draw () {
  var canvas = document.getElementById('canvas')
  canvas.onclick = draw
  var setCanvasSize = function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  setCanvasSize(canvas)
  var ctx = canvas.getContext('2d');
  for (var i = 0; i < circleNum; i++) {
    if (i % 3 === 0) {
      drawRect(ctx)
    } else if (i % 3 === 1) {
      drawCircle(ctx)
    } else {
      drawTrian(ctx)
    }
  }
}

function drawCircle (ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length - 1))]
  ctx.beginPath();
  ctx.arc(Math.floor(Math.random() * window.innerWidth - Math.PI), Math.floor(Math.random() * window.innerHeight - Math.PI), 50, 0, Math.PI*2, true)
  ctx.closePath();
  ctx.fillStyle = color
  ctx.fill();
}

function drawRect(ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length - 1))]
  ctx.fillStyle = color
  ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 60, 40)
}

function drawTrian (ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length - 1))]
  var startX = Math.floor(Math.random() * window.innerWidth)
  var startY = Math.floor(Math.random() * window.innerHeight)
  ctx.fillStyle = color
  ctx.beginPath();
  ctx.moveTo(startX, startY)
  ctx.lineTo(startX + 25, startY + 25)
  ctx.lineTo(startX + 25, startY - 25)
  ctx.fill();
}
window.onload = draw

window.addEventListener('resize', draw, false)
