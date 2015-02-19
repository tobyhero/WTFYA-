
//Google api JS
var userin

function initialize() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.StreetViewPanorama(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);




//enable user to input place name || postcode to see location

//send info to google maps API

//show streetview image for address


//ask user if they want to send the image to someone


//enable input of email add and send image
