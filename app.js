/**
 * color of shape
 */
var colors = ['rgba(255, 50, 74, 0.5)', 'rgba(49, 255, 166, 0.5)', 'rgba(32, 110, 255, 0.5)', 'rgba(255, 255, 153, 0.5)', 'rgba(255, 97, 0, .5)']
/**
 * shapes
 */
var shape = ['triangle', 'rectangle', 'circle']
/**
 * number of shape
 */
var circleNum = window.innerWidth / 10

/**
 * draw
 * @method draw
 * @return {[type]} [description]
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
  if (ctx) {
    for (var i = 0; i < circleNum; i++) {
      // if (i % 3 === 0) {
      //   drawRect(ctx)
      // } else if (i % 3 === 1) {
      //   drawCircle(ctx)
      // } else {
      //   drawTrian(ctx)
      // }

      drawCircle(ctx)
    }
  }
}

/**
 * draw circle
 * @method drawCircle
 * @param  {Object}   ctx
 */

function drawCircle (ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length))]
  ctx.beginPath();
  ctx.arc(Math.floor(Math.random() * window.innerWidth - Math.PI), Math.floor(Math.random() * window.innerHeight - Math.PI), 50, 0, Math.PI*2, true)
  ctx.closePath();
  ctx.fillStyle = color
  ctx.fill();
}

/**
 * draw rectangle
 * @method drawRect
 * @param  {Object} ctx
 */

function drawRect(ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length))]
  ctx.fillStyle = color
  ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), 60, 40)
}

/**
 * draw triangle
 * @method drawTrian
 * @param  {Object}  ctx
 */

function drawTrian (ctx) {
  var color = colors[Math.floor(Math.random() * (colors.length))]
  var startX = Math.floor(Math.random() * window.innerWidth)
  var startY = Math.floor(Math.random() * window.innerHeight)
  ctx.fillStyle = color
  ctx.beginPath();
  ctx.moveTo(startX, startY)
  ctx.lineTo(startX + 25, startY + 25)
  ctx.lineTo(startX + 25, startY - 25)
  ctx.fill();
}

/**
 * [throttle description]
 * @method throttle
 * @param  {Function} fn         [description]
 * @param  {[type]}   threshhold [description]
 * @param  {[type]}   scope      [description]
 * @return {[type]}              [description]
 */

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  var last,
      deferTimer
  return function () {
    var context = scope || this

    var now = +new Date,
        args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
window.onload = draw

window.addEventListener('resize', throttle(draw, 250), false)
