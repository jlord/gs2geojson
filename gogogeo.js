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

function buildProperties(data, lineItem) {
  if (!lineItem.hexcolor) lineItem.hexcolor = "#0077C7"
  var properties = {
      "marker-size": "small",
      "marker-color": lineItem.hexcolor
  }
  data.forEach(function(obj) {
    for(var key in obj) {
      properties[key] = lineItem[key]
    }
  })
  return properties
}

function createGeoJSON(data, tabletop) {
  console.log("gonna write geoJSON now")
  var geoJSON = []
  data.forEach(function(lineItem) {
    var properties = buildProperties(data, lineItem)
    var feature = {
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": [lineItem.long, lineItem.lat]},
      "properties": properties
    }
    geoJSON.push(feature)
  })
  fs.writeFile(KEY +'.geojson', JSON.stringify(geoJSON, null, '\t'))
  console.log("donezo")
}
  
getData()