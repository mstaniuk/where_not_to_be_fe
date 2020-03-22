import L from "leaflet";

export const ICON_RED = L.icon({
  iconUrl: require("@/assets/images/pin-red.png"),
  shadowUrl: null,

  iconSize: [64, 64], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0], // the same for the shadow
  popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
});

export const ICON_RED_ACTIVE = L.icon({
  iconUrl: require("@/assets/images/pin-red-selected.png"),
  shadowUrl: null,

  iconSize: [64, 64], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0], // the same for the shadow
  popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
});

export const ICON_BLUE = L.icon({
  iconUrl: require("@/assets/images/pin-blue.png"),
  shadowUrl: null,

  iconSize: [64, 64], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0], // the same for the shadow
  popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
});

export const ICON_BLUE_ACTIVE = L.icon({
  iconUrl: require("@/assets/images/pin-blue-selected.png"),
  shadowUrl: null,

  iconSize: [64, 64], // size of the icon
  shadowSize: [0, 0], // size of the shadow
  iconAnchor: [32, 64], // point of the icon which will correspond to marker's location
  shadowAnchor: [0, 0], // the same for the shadow
  popupAnchor: [0, -16] // point from which the popup should open relative to the iconAnchor
});
