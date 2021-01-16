$(document).ready(function () {
    
    //5. calculate distance using coordinates in the backend and show it in ouput
    //7. show nearby hotels for eating according to budget 
    //8. style the output routes
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFzaWItOTgiLCJhIjoiY2tqZzFkZGh0MGxlMDJxbzd1dTUxMTg5byJ9.CdfSOIpgLd_dNaGNhaT3aw';
    var map = new mapboxgl.Map({
    container: 'idmap',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [2.3333, 48.8538], // starting position [lng, lat]
    zoom: 12.5 // starting zoom
    });

   
    var hscoordsdayone = [[2.3193, 48.8526],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553]];
    var hscoordsdaytwo = [[2.3193, 48.8526],[2.3206, 48.8511],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556]];
    var hscoordsdaythree = [[2.3193, 48.8526],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553],[2.3206, 48.8511],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556]];
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
        return new Promise(function (resolve) {
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
        
            map.addSource('hsroutedayone', {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'LineString',
                'coordinates': hscoordsdayone
                }
                }
                });
                map.addSource('hsroutedaytwo', {
                    'type': 'geojson',
                    'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                    'type': 'LineString',
                    'coordinates': hscoordsdaytwo
                    }
                    }
                    });
                    map.addSource('hsroutedaythree', {
                        'type': 'geojson',
                        'data': {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                        'type': 'LineString',
                        'coordinates': hscoordsdaythree
                        }
                        }
                        });
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
                "https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?kinds=museums,towers,castles,gardens_and_parks&rate=2&apikey=" + apiKey
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

    map.on('mouseenter', "other_hotels", function (e) {
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

    map.on('mouseleave', "other_hotels", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
    });

    map.polyline
    let lon; // place longitude
    let lat; // place latitude
    let radius;
    let imgon;
    let distt;
    document
      .getElementById("submitname").onclick = function() {
        let name = document.getElementById("hotelstaying").value;
        let stayofday =  document.getElementById("durstay").value;
        if (name=="hotel de varenne")
        {
            lon = 2.3171;
            lat = 48.8570;
            //map.add marker
            //new mapboxgl.marker()
            //.setLngLat([lon,lat])
            //.addTo(map);
                map.loadImage(
                'free-hotel-icon.png',
                function (error, image) {
                if (error) throw error;
                map.addImage('hotelz', image);
                map.addSource('pointz', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',
                'features': [
                {
                'type': 'Feature',
                'geometry': {
                'type': 'Point',
                'coordinates': [lon, lat]
                }
                }
                ]
                }
                });
                }
                );
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'pointz',
                    'layout': {
                    'icon-image': 'hotelz',
                    'icon-size': 0.15
                    }
                    });
                    if(stayofday==3){
                firstLoad();
                radius=600;
                    }
                    else if(stayofday==2)
                    {
                        firstLoad();
                        radius=400;
                    }
        }
        if (name=="hotel de suede")
        {
            lon = 2.3193;
            lat = 48.8526;
                    var marker = new mapboxgl.Marker()
                    .setLngLat([lon, lat])
                    .addTo(map);
                
                if(stayofday==1){
                    map.addLayer({
                        'id': 'hsroutedayone',
                        'type': 'line',
                        'source': 'hsroutedayone',
                        'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                        },
                        'paint': {
                        'line-color': '#FF0000',
                        'line-width': 8
                        }
                        });
                    firstLoad();
                    radius=500;
                    var img = document.createElement("img");
 
                img.src = "images/h1d1.png";
                img.width=800;
                img.height=400;
                //var src = document.getElementById("imageoutput");
                //src.appendChild(img);
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
            
                imgon = img;
                var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];

                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response;
                    }
                })

                }

                else if(stayofday==3){
                    map.addLayer({
                        'id': 'hsroutedaythree',
                        'type': 'line',
                        'source': 'hsroutedaythree',
                        'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                        },
                        'paint': {
                        'line-color': '#00FF00',
                        'line-width': 8
                        }
                        });
                firstLoad();
                radius=600;
                var img = document.createElement("img");
 
                img.src = "images/h1d3.png";
                img.width=800;
                img.height=400;
                //var src = document.getElementById("imageoutput");
                imgon=img;
                //src.appendChild(img);
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })

                
                }
                
                else if(stayofday==2)
                {
                        map.addLayer({
                            'id': 'hsroutedaytwo',
                            'type': 'line',
                            'source': 'hsroutedaytwo',
                            'layout': {
                            'line-join': 'round',
                            'line-cap': 'round'
                            },
                            'paint': {
                            'line-color': '#888',
                            'line-width': 8
                            }
                            });
                        firstLoad();
                        radius=400;
                        var img = document.createElement("img");
 
                img.src = "images/h1d2.png";
                img.width=800;
                img.height=400;
                //var src = document.getElementById("imageoutput");
                //src.appendChild(img);
                imgon=img;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
                var data = [{lon:2.3193, lat:48.8526},{lon:2.3206, lat:48.8511},{lon:2.3350,lat:48.8523},{lon:2.3226,lat:48.8474},{lon:2.350,lat:48.8459},{lon:2.2945,lat:48.8584},{lon:2.2893,lat:48.8616},{lon:2.2851,lat:48.8592},{lon:2.2876,lat:48.8556}];

                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        //console.log(response);
                       distt = response;
                    }
                })
            }
        }
        
        //remove hotel layer
        map.setLayoutProperty('other_hotels', 'visibility', 'none');
        //map.setLayoutProperty('opentripmap.pois', 'visibility', 'none');
        
    }
   
    function downloadData() {
        $.getJSON("/api/points/get/", function (data) {
            displayData(data);
        });
    }

    function displayData(data) {
        data.forEach(element => {
            console.log(element);
            var divinhtml = document.getElementById("containerish");
            var para = document.createElement("p"); 
            var myImage = document.createElement("img");
            var dayofstay = document.getElementById("durstay").value;
            //var distancecalc = document.createElement("p");
            //distancecov
            para.textContent = "Traveller-Name: " + element.travellerName + ".  Recommended route to take for  " + dayofstay + "  days of stay. Approx. distance to cover:" + distt + " km";
            myImage=imgon;
            divinhtml.appendChild(para);
            divinhtml.appendChild(myImage); 
           
            para.style.backgroundColor = "#add8e6";
            paratwo.style.backgroundColor = "#b5651d";
        });
    }
    
    let offset = 0; // offset from first object in the list
    let count;
    const pageLength = 5;
    function firstLoad() {
        let travbudg =  document.getElementById("travbudget").value;
        let hotstay =  document.getElementById("hotelstaying").value;
        apiGet(
          "radius",
          `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=count`
        ).then(function(data) {
          count = data.count;
          offset = 0;
          document.getElementById(
            "inform"
          ).innerHTML += `<p style="color:white;background-color:black;"> Possible places to visit from hotel, '${hotstay}' within ${radius} km and with budget ${travbudg}€:</p>`; //add br and write the form inputs
          loadList();
        });
      }
      function loadList() {
        apiGet(
          "radius",
          `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
        ).then(function(data) {
          let list = document.getElementById("list");
          list.innerHTML = "";
          data.forEach(item => list.appendChild(createListItem(item)));
          let nextBtn = document.getElementById("next_button");
          if (count < offset + pageLength) {
            nextBtn.style.visibility = "hidden";
          } else {
            nextBtn.style.visibility = "visible";
            nextBtn.innerText = `Next (${offset + pageLength} of ${count})`;
          }
        });
      }
      
      function createListItem(item) {
        let travbudg =  document.getElementById("travbudget").value;
        let a = document.createElement("DIV");
        a.className = "list-group-item list-group-item-action";
        a.style.color = "#000000";
        a.style.backgroundColor = "#FFFFFF";
        a.setAttribute("data-id", item.xid); //budget
        k=getCategoryName(item.kinds);
        
        if(travbudg<160){
        if(k=="Church" || k=="Temple" || k=="Park" || k=="Burial places" || k=="Art gallery" || k=="Monument")
        {
        a.innerHTML = `<h5 class="list-group-item-heading">${item.name} (Click Me to show details!)</h5>
                  <p class="list-group-item-text" style="background-color:tomato; color:white;">${k}</p>`;
        }
        }   

        if(travbudg>160){
            if(k=="Church" || k=="Temple" || k=="Park" || k=="Burial places" || k=="Art gallery" || k=="Monument" || k=="National Museum, Art gallery" || k=="Fountain" || k==" Burial place, Monument" || k=="Tower" || k=="Museum")
            {
            a.innerHTML = `<h5 class="list-group-item-heading">${item.name} (Click Me to show details!)</h5>
                      <p class="list-group-item-text" style="background-color:tomato; color:white;">${k}</p>`;
            }
            }   
        a.addEventListener("click", function() {
          document.querySelectorAll("#list a").forEach(function(item) {
            item.classList.remove("active");
          });
          this.classList.add("active");
          let xid = this.getAttribute("data-id");
          apiGet("xid/" + xid).then(data => onShowPOIt(data));
       
        });
        return a;
      }
      function onShowPOIt(data) {
        let poi = document.getElementById("pointer");
        poi.innerHTML = "";
        if (data.preview) {
          poi.innerHTML += `<img src="${data.preview.source}">`;
        }
        poi.innerHTML += data.wikipedia_extracts
          ? data.wikipedia_extracts.html
          : data.info
          ? data.info.descr
          : "No description";
        poi.style.backgroundColor = "tomato";
        poi.innerHTML += `<p><a target="_blank" href="${data.otm}">Show more at OpenTripMap</a></p>`;
      }
      document
      .getElementById("next_button")
      .addEventListener("click", function() {
        offset += pageLength;
        loadList();
      });
        
});