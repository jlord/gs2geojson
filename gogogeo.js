var fs = require('fs')
var Tabletop = require('tabletop')

var sheetData = []
var KEY = '0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc'

function getData(req, res) {
  function tabletopCb(data, tabletop){
    createGeoJSON(data, tabletop)
  }
  var options = {key: KEY, callback: tabletopCb, simpleSheet: true}
    console.log("going to go get your datas")
    Tabletop.init(options)
}

function createGeoJSON(data, tabletop) {
  console.log("gonna write geoJSON now")
  var geoJSON = []
  data.forEach(function(lineItem) {
    var feature = {
      type: 'Feature',
      "geometry": { "type": "Point", "coordinates": [lineItem.long, lineItem.lat]},
      "properties": {
        "marker-size": "small",
        "marker-color": lineItem.hexcolor,
        "location": lineItem.long + ", " + lineItem.lat
      }
    }
    geoJSON.push(feature)
  })
  fs.writeFile(KEY +'.geojson', JSON.stringify(geoJSON))
  console.log("donezo")
}
  
getData()