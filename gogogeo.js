var fs = require('fs')
var Tabletop = require('tabletop')

var sheetData = []
var KEY = process.argv.slice(2)[0].toString()

function getData(req, res) {

  function tabletopCb(data, tabletop){
    createGeoJSON(data, tabletop)
  }
  var options = {key: KEY, callback: tabletopCb, simpleSheet: true}
    console.log("going to go get your datas")
    Tabletop.init(options)
}

function buildInfoObject(data, lineItem) {
  var newObj = {}
  data.forEach(function(obj) {
    for(var key in obj) {
      newObj[key] = lineItem[key]
    }
  })
  return newObj
}

function createGeoJSON(data, tabletop) {
  console.log("gonna write geoJSON now")
  var geoJSON = []
  data.forEach(function(lineItem) {
    var otherInfo = buildInfoObject(data, lineItem)
    var feature = {
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": [lineItem.long, lineItem.lat]},
      "properties": {
        "marker-size": "small",
        "marker-color": lineItem.hexcolor,
        "info": otherInfo
      }
    }
    geoJSON.push(feature)
  })
  fs.writeFile(KEY +'.geojson', JSON.stringify(geoJSON, null, '\t'))
  console.log("donezo")
}
  
getData()