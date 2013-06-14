# Make geoJSON

More specifically make geoJSON from a Google Spreadsheet because you can view that in a beautiful Mapbox map on GitHub. YEAH!

This is a super simple node.js sript that fetches your data from Google Spreadsheets and re-writes it as a geoJSON.

## Make a Spreadsheet

1. Your spreadsheet should have a _lat_ column and _long_ column.
2. It should also have a colum _hexcolor_ that has hexvalues that will be come the marker color.
3. Click `File` > `Publish to the Web` > `Start Publishing`. Copy the key generated:

![sheetsee](https://raw.github.com/jllord/sheetsee-cache/master/img/key.png)

## Fork and Clone

1. Click `Fork`
2. Clone to your computer

## Add Your Key and Run

_You'll need Node.js installed on your computer for this_

1. Open the `server.js` file and replace line 9 with your spreadsheets key.
2. In your Terminal:

```npm install
   node server.js```

## Push to GitHub and View

1. Push it `git push origin master`
2. Go look at it on the internet! 
