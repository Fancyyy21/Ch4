export let URLGeoJson = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/BuatAmbilDataGeojson1";
export let URLPostPoint = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/BuatGeojsonPoint1";
export let URLPostPolyline = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/BuatGeojsonPolyline1";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
`