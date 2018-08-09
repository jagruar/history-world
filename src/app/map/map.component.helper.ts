import { icon, tileLayer, latLng, latLngBounds } from "leaflet";

const hwIcon = icon({
  iconSize: [25, 41],
  iconAnchor: [13, 41],
  popupAnchor: [0, 0],
  iconUrl: "leaflet/marker-icon.png",
  shadowUrl: "leaflet/marker-shadow.png"
});

const bounds = latLngBounds(latLng(-90, -720), latLng(90, 720));

const hwTitleLayer = tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.pirates",
    accessToken:
      "pk.eyJ1IjoiamFncnVhciIsImEiOiJjamtpbWU3b2cxM2EwM2ttejBpZG56MHM2In0.W0cVHc1hwbbqB4raAZsJWQ",
    maxZoom: 15,
    minZoom: 2
  }
);

const hwOptions = {
  layers: [hwTitleLayer],
  zoom: 2,
  center: bounds.getCenter(),
  maxBounds: bounds,
  maxBoundsViscosity: 1.0,
  zoomControl: false
};

export { hwIcon, hwOptions };
