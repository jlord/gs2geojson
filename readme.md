# Make geoJSON

More specifically, make geoJSON from a Google spreadsheet because you can view that in a beautiful [Mapbox](http://www.mapbox.com) map on [GitHub](https://github.com/blog/1528-there-s-a-map-for-that). YEAH!

This is a super simple [node.js](http://www.nodejs.org) script that fetches your data from Google Spreadsheets and re-writes it as a geoJSON file. When you push the repo to GitHub after running the script, you have a geoJSON file you can click on see in lovely map form.

#### Quick How

1. Fork and Clone.
2. Have a Google Spreadsheet with lat, long columns and if you want, a hexcolor column. Publish spreadsheet, copy key.
3. `npm install` and `node gogogeo.js YourSpreadSheetKeyHere`
4. Push to GitHub.

## Long How

### Make a Spreadsheet

![spreadsheet](http://cl.ly/image/0G2l322I3R0E/Screen%20Shot%202013-06-14%20at%2012.03.22%20AM.png)

1. Your spreadsheet should have a _lat_ column and _long_ column. You can do it [manually](http://www.latlong.net/) or use this [Mapbox Plugin](http://mapbox.com/tilemill/docs/guides/google-docs/#geocoding) (or use a Geocoder).
2. If you want to pick your own markers colors, and a column titled _hexcolor_ with the hexcolor values you want. They default to all blue.
3. Click `File` > `Publish to the Web` > `Start Publishing`. Copy the key generated between the **=** and **&**:

![get spreadsheet key](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

### Fork and Clone

1. Click `Fork`
2. Clone to your computer `git clone https://github.com/jlord/make-geoJSON.git`

### Add Your Key and Run

_You'll need Node.js installed on your computer for this_

1. In your Terminal type:

```javascript
npm install
node gogogeo.js YourSpreadSheetKeyHere
```

### Push to GitHub and View

1. Push it `git push origin master`
2. Go look at it on the internet! 
