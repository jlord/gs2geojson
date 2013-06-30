#!/usr/bin/env node

var fs = require('fs')
var makeGeoJSON = require('./')
var args = process.argv.slice(2)
var KEY = args[0].toString()

function writeFile(data) {
  fs.writeFile(KEY +'.geojson', data)
}

function returnData(data) { 
  process.stdout.write(data)
}

if (args[1] === '--save') {
  makeGeoJSON(KEY, writeFile)
} else makeGeoJSON(KEY, returnData)



