$(document).ready(function () {

    var markers = [];
    var map = L.map('idmap', {
        zoomControl: false
    }).setView([48.8566,2.3522], 13)

    map.doubleClickZoom.disable();

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=SXOFB5ujKbDrlisGWCgm', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    var logo = L.control({position: 'topleft'});
  logo.onAdd = function(map){
      var div = L.DomUtil.create('div', 'infosecond');
      div.innerHTML= "<img src='hotel.png' width='50px' height='50px'/>";
      return div;
      
  }
  logo.addTo(map);
  var logop = L.control({position: 'topleft'});
  logop.onAdd = function(map){
      var div = L.DomUtil.create('div', 'infop');
      div.innerHTML= "<strong>Search your Hotel Location</strong>";
      return div;
      
  }
  logop.addTo(map);
  const hotelicon = L.icon({
    iconSize: [20, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    // specify the path here
    iconUrl: "hotel.png",
});
    var searchControl = L.esri.Geocoding.geosearch().addTo(map);

    var results = L.layerGroup().addTo(map);
  
    searchControl.on('results', function (data) {
      results.clearLayers();
      for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng),{icon:hotelicon});
      }
    });

    L.control.zoom({
        position:'topright'
   }).addTo(map);
   
   var a = new L.LatLng(48.855133, 2.315818);
   var _firstLatLng = L.marker(a,
    {
        draggable: true, // Make the icon dragable
        title: "Hotel", // Add a title
        opacity: 1,
        icon:hotelicon // here assign the markerIcon var
    }
    ).addTo(map);


    var pointA = new L.LatLng(48.8584, 2.2945);
    var pointB = new L.LatLng(48.8720, 2.3216);
    var pointC= new L.LatLng(48.8600,2.3266);
    var pointD= new L.LatLng(48.8530, 2.3499);
    var pointE= new L.LatLng(48.8566,2.3522);

    var polyline = new L.Polyline([a,pointA, pointB, pointC, pointD,pointE], {
    color: 'red',
    }).addTo(map);

    function dragStartHandler(e) {
        // Get the polyline's latlngs
        var latlngs = polyline.getLatLngs(),

            // Get the marker's start latlng
            latlng = this.getLatLng();

        // Iterate the polyline's latlngs
        for (var i = 0; i < latlngs.length; i++) {

            // Compare each to the marker's latlng
            if (latlng.equals(latlngs[i])) {

                // If equals store key in marker instance
                this.polylineLatlng = i;
            }
        }
    }
    _firstLatLng.on("dragend", function (e) {

        changedP[last_element] = e.target.getLatLng();
        //this.bindPopup(changedP[last_element].toString()).openPopup();
    });
    _firstLatLng
            .on('dragstart', dragStartHandler)
            .on('drag', dragHandler)
            .on('dragend', dragEndHandler);

    function dragHandler(e) {
        var latlngs = polyline.getLatLngs(),
            latlng = this.getLatLng();
        // Replace the old latlng with the new
        latlngs.splice(this.polylineLatlng, 1, latlng);
        // Update the polyline with the new latlngs
        polyline.setLatLngs(latlngs);
        // calculate distance of current latlngs
        var dist = 0;
        for (var i = 1; i < latlngs.length; i++) {
            dist += map.distance(latlngs[i - 1], latlngs[i]);
        }
        document.getElementById('distance').value = dist;
    }

    function dragEndHandler(e) {
        delete this.polylineLatlng;
    }

    //map.on('click', function (e) {
        //let m = L.marker(e.latlng).on('click', removeMarker).addTo(map);
        //let marker = L.marker([52.0, 21.0]);
        //var k = L.marker([53.0, 23.0]);
        //var popup = L.popup()
        //.setContent("I am a standalone popup.");
        //mark[0] = L.marker([48.8584, 2.2945]).bindPopup(popup).addTo(map);
        let Noterdam = L.marker([48.8530, 2.3499]);

        var eiffelicon = L.icon({
            iconUrl: 'eiffel-tower-icon.png',
        
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        let mark2 = L.marker([48.8584, 2.2945], {icon: eiffelicon}).bindTooltip("Eiffel Tower",
        {
            permanent: true,
            direction: 'bottom'
        }).addTo(map);
        
        

        data = {
            lat: Noterdam.getLatLng().lat,
            lng: Noterdam.getLatLng().lng   
        }

        $.ajax({
            type: "POST",
            url: "api/points",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                console.log('point posted ' + response);
                downloadPoints();
            },
            error: function(){
                console.log('uhh ohh');
            }
        });

        map.removeLayer(m);

        var pointList = [Noterdam, mark2];
        var firstpolyline = new L.Polyline(pointList, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        firstpolyline.addTo(map);

    //});
    

    function downloadPoints() {
        $.getJSON('api/points', function (data) {
            drawPoints(data);
        })
    }

    function drawPoints(data) {
        markers.forEach(element => {
            map.removeLayer(element);
        });
        
        data.forEach(element => {
            let marker = L.marker([element.lat, element.lng]).on('click', function () {}).bindPopup("Place name: " + element.info).addTo(map);
            markers.push(marker);
            /*var pointA = new L.LatLng(element.lat, element.lng);
            var pointB = new L.LatLng((element+1).lng, (element+1).lng);
            var pointList = [pointA, pointB];

            var firstpolyline = new L.Polyline(pointList, {
                color: 'red',
                weight: 3,
                opacity: 0.5,
                smoothFactor: 1
            });
            firstpolyline.addTo(map);*/
        });
    }




});

