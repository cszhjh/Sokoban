export function Position(x, y) {
  this.x = x
  this.y = y
}

export function imgLoad(obj, imgObj, callback) {
  let count = 0
  let length = Object.keys(obj).length
  for (let prop in obj) {
    imgObj[prop] = new Image()
    imgObj[prop].src = obj[prop]
    imgObj[prop].onload = function() {
      count++
      if (count === length) {
        callback()
      }
    }
  }
}
