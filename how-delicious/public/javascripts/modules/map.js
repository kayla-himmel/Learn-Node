function createMap (mapContainer) {
  const lat = mapContainer.getAttribute('lat');
  const lng = mapContainer.getAttribute('lng');
  const mapPlot = L.map('mapid').setView([lng, lat], 13);
  var marker = L.marker([lng, lat]);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2F5bGFoaW1tZWwiLCJhIjoiY2tndGxmZmp5MWNhczJxbWxxMnd4dGowdSJ9.f9XRC7KrDnUXz-PWo9YSXg'
  }).addTo(mapPlot);

  marker.addTo(mapPlot);
}

export default createMap;