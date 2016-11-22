var btn = document.querySelector(".contact-btn");
var popup = document.querySelector(".popup");
var close = document.querySelector(".cross-close");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("active");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("active");
});

var map;
function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: {lat: 59.938976, lng: 30.323422},
    zoom: 17,
    disableDefaultUI: true,
    scrollwheel:  false,
    zoomControl: true
  });
  var image = 'img/map-marker.png';
  var studioMarker = new google.maps.Marker({
    position: {lat: 59.938645, lng: 30.323087},
    map: map,
    icon: image
  });
}
