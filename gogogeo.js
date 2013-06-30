var Tabletop = require('tabletop')

module.exports = function(KEY, cb) {

  var sheetData = []

  function getData(req, res) {

    function tabletopCb(data, tabletop){
      createGeoJSON(data, tabletop)
    }
    var options = {key: KEY, callback: tabletopCb, simpleSheet: true}
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

    var geoJSONString = JSON.stringify(geoJSON, null, '\t')
    cb(geoJSONString) 
  }
    
  getData()

}

