$(document).ready(function () {

    /*var markers = [];
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
      div.innerHTML= "<strong>Search your Hotel Location:</strong>";
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


    document.getElementById('submitname').onclick = function () {
        document.getElementById('tname').innerHTML = document.getElementById('travname').value;
        document.getElementById('phonenumb').innerHTML = document.getElementById('travphone').value;
        document.getElementById('country').innerHTML = document.getElementById('travcount').value;
        document.getElementById('budget').innerHTML = document.getElementById('travbudget').value;
        document.getElementById('durofstay').innerHTML = document.getElementById('durstay').value;
        document.getElementById('distt').innerHTML = document.getElementById('distance').value;
        document.getElementById("OutRes").style.display = "block";
    }


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
        //});
    //} 

    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFzaWItOTgiLCJhIjoiY2tqZzFkZGh0MGxlMDJxbzd1dTUxMTg5byJ9.CdfSOIpgLd_dNaGNhaT3aw';
    var map = new mapboxgl.Map({
    container: 'idmap',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [2.3333, 48.8538], // starting position [lng, lat]
    zoom: 12.5 // starting zoom
    });

    map.on('load', function () {
        map.loadImage(
        'eiffel-tower-icon.png',
        function (error, image) {
        if (error) throw error;
        map.addImage('tourist', image);
        map.addSource('point', {
        'type': 'geojson',
        'data': {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [0, 0]
        }
        }
        ]
        }
        });
        }
        );
        });

        map.on('load', function () {
            map.loadImage(
            'free-hotel-icon.png',
            function (error, image) {
            if (error) throw error;
            map.addImage('hotel', image);
            map.addSource('point', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [0, 0]
            }
            }
            ]
            }
            });
            }
            );
            });
    
    const apiKey = "5ae2e3f221c38a28845f05b60ba7687b713457966492e3128fa26377";
    function apiGet(method, query) {
        return new Promise(function (resolve,reject) {
            var otmAPI =
                "https://api.opentripmap.com/0.1/en/places/" +
                method +
                "?apikey=" +
                apiKey;
            if (query !== undefined) {
                otmAPI += "&" + query;
            }
            fetch(otmAPI)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(function (err) {
                    console.log("Fetch Error :-S", err);
                });
        });
    }
    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {

        //Stylization

        //Add pois layer to the map - attractions
        map.addSource("opentripmap.pois", {
            type: "vector",
            attribution:
                '<a href="https://opentripmap.io" target="_blank">© OpenTripMap</a>',
            bounds: [-180, -85.0511, 180, 85.0511],
            minzoom: 8,
            maxzoom: 14,
            scheme: "xyz",
            tiles: [
                "https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?kinds=museums&rate=2&apikey=" + apiKey
            ]
        });
        //hotel markers
        map.addSource("other_hotels", {
            type: "vector",
            attribution:
                '<a href="https://opentripmap.io" target="_blank">© OpenTripMap</a>',
            bounds: [-180, -85.0511, 180, 85.0511],
            minzoom: 8,
            maxzoom: 14,
            scheme: "xyz",
            tiles: [
                "https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?kinds=other_hotels&rate=2&apikey=" + apiKey
            ]
        });
        map.addLayer(
            {
                id: "opentripmap.pois",
                type: "symbol",
                source: "opentripmap.pois",
                "source-layer": "pois",
                minzoom: 8,
                layout: {
                    'icon-image': 'tourist',
                    'icon-size': 0.1,
                    
                },
                paint: {
                    /*"circle-color": "rgb(55,144,144)",
                    "circle-radius": 5,
                    "circle-stroke-color": "rgba(102,193,201, 0.6)",
                    "circle-stroke-width": 0.6*/
                }
            },
            "airport-label"
        );
        map.addLayer(
            {
                id: "other_hotels",
                type: "symbol",
                source: "other_hotels",
                "source-layer": "pois",
                minzoom: 8,
                layout: {
                    'icon-image': 'hotel',
                    'icon-size': 0.1,
                    
                },
                paint: {
                    /*"circle-color": "rgb(40,144,144)",
                    "circle-radius": 9,
                    "circle-stroke-color": "rgba(60,193,201, 0.6)",
                    "circle-stroke-width": 0.8*/
                }
            },
            "airport-label"
        );
    });

    function onShowPOI(data, lngLat) {
        let poi = document.createElement("div");
        let respanel = document.getElementById("infopanel");
        poi.innerHTML = "<h2>" + data.name + "<h2>";
        poi.innerHTML += "<p><i>" + getCategoryName(data.kinds) + "</i></p>";
        if (data.preview) {
            poi.innerHTML += "<img src='"+data.preview.source+"'>";
        }
        poi.innerHTML += data.wikipedia_extracts
            ? data.wikipedia_extracts.html
            : data.info
                ? data.info.descr
                : "No description";

        poi.innerHTML += "<p><a target='_blank' href='"+ data.otm + "'>Show more at OpenTripMap</a></p>";
        respanel.innerHTML = poi.innerHTML;
        /*new mapboxgl.Popup().setLngLat(lngLat)
            .setDOMContent(poi)
            .addTo(map);*/
    }

    map.on('click', "opentripmap.pois", function (e) {
        let coordinates = e.features[0].geometry.coordinates.slice();
        let id = e.features[0].properties.id;
        //let name = e.features[0].properties.name;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        apiGet("xid/" + id).then(data => onShowPOI(data, e.lngLat));
    });

    let popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', "opentripmap.pois", function (e) {
        map.getCanvas().style.cursor = "pointer";

        let coordinates = e.features[0].geometry.coordinates.slice();
        //let id = e.features[0].properties.id;
        let name = e.features[0].properties.name;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup
            .setLngLat(coordinates)
            .setHTML("<strong>" + name + "</strong>")
            .addTo(map);
    });

    map.on('mouseleave', "opentripmap.pois", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
    });
   
});