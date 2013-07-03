# Make geoJSON

More specifically, make geoJSON from a Google spreadsheet because you can view that in a beautiful [Mapbox](http://www.mapbox.com) map on [GitHub](https://github.com/blog/1528-there-s-a-map-for-that). YEAH!

This is a **super simple [node.js](http://www.nodejs.org) command line tool** ([NPM](https://npmjs.org/package/gs2geojson)) that fetches your data from Google Spreadsheets and transforms it to geoJSON with the option to write it to a file. When you push the file to GitHub after running the script, you can view it in your repo as a lovely map!

#### Quick How

1. `npm install -g gs2geojson`
2. Have a Google Spreadsheet with lat, long columns and if you want, a hexcolor column. Publish spreadsheet, copy key.
3. `gogogeo YOURSPREADSHEETKEY`
4. Use `gogogeo YOURSPREADSHEETKEY --save` to write it to a file to push to GitHub

_See directly below if you want to know more about getting lat and long_

## Long How

### Make a Spreadsheet

![spreadsheet](http://cl.ly/image/0G2l322I3R0E/Screen%20Shot%202013-06-14%20at%2012.03.22%20AM.png)

1. Your spreadsheet should have a _lat_ column and _long_ column. You can do it [manually](http://www.latlong.net/) or use this [Mapbox Plugin](http://mapbox.com/tilemill/docs/guides/google-docs/#geocoding) or use a [Geocoder](https://developers.google.com/maps/documentation/geocoding/).
2. If you want to pick your own markers colors, and a column titled _hexcolor_ with the hexcolor values you want. The default is blue.
3. Click `File` > `Publish to the Web` > `Start Publishing`. Copy the key generated between the **=** and **&**:

![get spreadsheet key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

### Node and NPM

1. You'll need to have [Node.js](http://www.nodejs.org) (including [npm](https://npmjs.org/)) installed on your computer. See the “[Installation](https://github.com/joyent/node/wiki/Installation)” article in Node's wiki for details.
2. In your computer's Terminal, type `npm install -g gs2geojson` to install it as a global module. 
3. To do a test, you can type `npm test` and it will run with a sample spreadsheet.

### Add Your Key and Run

1. In your Terminal type `gogogeo YOURSPREADSHEETKEY`
 * If you want to save the spreadsheet as a geojson file in the directory you're in type `gogogeo YOURSPREADSHEETKEY --save`
 * To pipe the data to you clipboard to paste somewhere else type `gogogeo YOURSPREADSHEETKEY | pbcopy`


### Push to GitHub and View

1. Include it in a repo and push it to GitHub!
2. Go [look at it](https://github.com/jlord/gs2geojson/blob/master/0Ao5u1U6KYND7dGN5QngweVJUWE16bTRob0d2a3dCbnc.geojson) on the internet! 
