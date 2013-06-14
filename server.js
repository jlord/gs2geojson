// dependencies
var fs = require('fs')
var Tabletop = require('tabletop')
var readJSON = require('read-json')

// globals
var sheetData = []
var lastFetch 
var KEY = '0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc'

function getData(req, res) {
  function tabletopCb(data, tabletop){
    loadSheet(data, tabletop)
  }
  var options = {key: KEY, callback: tabletopCb, simpleSheet: true}
    console.log("going to go get your datas")
    Tabletop.init(options)
}

function loadSheet(data, tabletop) {
  sheetData = data
  console.log("writing your datas")
  fs.writeFile(KEY +'.json', JSON.stringify(sheetData))
  createGeoJSON(data)
}

function createGeoJSON(data) {
  console.log("gonna write geoJSON now")
  var geoJSON = []
  readJSON(KEY + '.json', function writeFormat(err, data) {
    data.forEach(function(lineItem) {
      var feature = {
        type: 'Feature',
        "geometry": { "type": "Point", "coordinates": [lineItem.long, lineItem.lat]},
        "properties": {
          "marker-size": "small",
          "marker-color": lineItem.hexcolor
        }
      }
      geoJSON.push(feature)
    })
    fs.writeFile(KEY +'.geojson', JSON.stringify(geoJSON))
  })
}
  
getData()