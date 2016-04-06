
export function getJsonLength(jsonData) {
  var jsonLength = 0
  for(var item in jsonData) {
    jsonLength++
  }
  return jsonLength
}

export function getJsonToArray(jsonData) {
  var jsonToArray = []
  for (var item in jsonData) {
    jsonToArray.push(item)
  }
  return jsonToArray
}

export function isArray(obj) {   
  return Object.prototype.toString.call(obj) === '[object Array]';    
}

export function substrArrayByLength(arrayData,length) {
  var newArray = []
  var newLength = Math.ceil(arrayData.length/length)
  for (var i=0; i<newLength; i++) {
    var substrArray = arrayData.slice(i*length,i*length+length)
    newArray.push(substrArray)
  }
  return newArray
}