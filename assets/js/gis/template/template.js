export let URLGeoJson = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/BuatAmbilDataGeojsonToken";
export let URLPostPoint = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/BuatGeojsonPointToken";
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