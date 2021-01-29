$(document).ready(function () {
    var datainpname;
    var datainplon;
    var datainplat;
    fetch("./dataset.json").then(function(resp){
        return resp.json();
    })
    .then(function(data){
        datainpname=data;
        //console.log(datainpname[0].databases.lon);
    });

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
    var hscoordsdayfour = [[2.3193, 48.8526],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553],[2.3206, 48.8511],[2.3350,48.8523],[2.3226,48.8474],[2.3503,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622]];
    //var hscoordsdayfive = [[2.3193, 48.8526],[2.2945,48.8584],[2.2893,48,8616],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.3108,48.8994],[2.2861,48.8544],[2.2966,48.8424],[2.3108,48.8403],[2.2930,48.8450],[2.2943,48.8523],[2.3234,48.8518],[2.2989,48.8333],[2.3143,48.8478],[2.3186,48.8432],[2.2895,48.8548],[2.2928,48.8319],[2.3143,48.8302]];
    var hvarennedayone = [[2.3171, 48.8570],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553]];
    var hvarennedaytwo = [[2.3171, 48.8570],[2.2945,48.8584],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556]];
    var hvarennedaythree = [[2.3171, 48.8570],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553],[2.3206, 48.8511],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556]];
    var hvarennedayfour = [[2.3171, 48.8570],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2945, 48.8584],[2.2986,48.8556],[2.3125,48.8544],[2.3158,48.8553],[2.3206, 48.8511],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616]];
    //var hvarennedayfive = [[2.3171, 48.8570],[2.2945,48.8584],[2.3350,48.8523],[2.3226,48.8474],[2.350,48.8459],[2.2945,48.8584],[2.2893,48.8616],[2.2851,48.8592],[2.2876,48.8556],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.3108,48.8994],[2.3136,48.8544],[2.2966,48.8424],[2.3108,48.8403],[2.2930,48.8450],[2.2943,48.8523],[2.3234,48.8518]];
    var hdcoordone = [[2.3522,48.8572],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664]];
    var hdcoordtwo = [[2.3522,48.8572],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.2995,48.8656]];
    var hdcoordthree = [[2.3522,48.8572],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.2995,48.8656],[2.2861,48.8487],[2.2966,48.8424],[2.3108,48.8403],[2.2930,48.8450]];
    var hdcoordfour = [[2.3522,48.8572],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.2995,48.8656],[2.2861,48.8487],[2.2966,48.8424],[2.3108,48.8403],[2.2930,48.8450],[2.2943,48.8523],[2.3234,48.8518],[2.2989,48.8333],[2.3143,48.8478]];

    var hroycoordone = [[2.3062,48.8550],[2.2945,48.8584],[2.2893,48.8616],[2.2946,48.8664],[2.2809,48.8555]];
    var hroycoordtwo = [[2.3062,48.8550],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2986,48.8556],[2.2942,48.8679],[2.2946,48.8664],[2.2967,48.8654],[2.3026,48.8622]];
    var hroycoordthree = [[2.3062,48.8550],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2995,48.8403],[2.2930,48.8450],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.2881,48.8716],[2.2861,48.8487],[2.2966,48.8424]];
    var hroycoordfour = [[2.3062,48.8550],[2.2945,48.8584],[2.2893,48.8616],[2.2809,48.8555],[2.2946,48.8664],[2.2930,48.8450],[2.2943,48.8523],[2.3234,48.8518],[2.2989,48.8333],[2.3143,48.8478],[2.2967,48.8654],[2.3026,48.8622],[2.2986,48.8556],[2.2881,48.8716],[2.3136,48.8544],[2.2966,48.8424],[2.3108,48.8403]];
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
            map.on('load', function () {
                map.loadImage(
                'carz.png',
                function (error, image) {
                if (error) throw error;
                map.addImage('carz', image);
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
        map.addSource('hsroutedayfour', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hscoordsdayfour
        }
        }
        });
        map.addSource('hsvarennerouteone', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hvarennedayone
        }
        }
        });
        map.addSource('hsvarenneroutetwo', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hvarennedaytwo
        }
        }
        });
        map.addSource('hsvarenneroutethree', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hvarennedaythree
        }
        }
        });
        map.addSource('hsvarenneroutefour', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hvarennedayfour
        }
        }
        });
        map.addSource('hdrouteone', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hdcoordone
        }
        }
        });
        map.addSource('hdroutetwo', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hdcoordtwo
        }
        }
        });
        map.addSource('hdroutethree', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hdcoordthree
        }
        }
        });
        map.addSource('hdroutefour', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hdcoordfour
        }
        }
        });
        map.addSource('hroyrouteone', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hroycoordone
        }
        }
        });
        map.addSource('hroyroutetwo', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hroycoordtwo
        }
        }
        });
        map.addSource('hroyroutethree', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hroycoordthree
        }
        }
        });
        map.addSource('hroyroutefour', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': hroycoordfour
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
        //transport markers
        map.addSource("car_rental", {
            type: "vector",
            attribution:
                '<a href="https://opentripmap.io" target="_blank">© OpenTripMap</a>',
            bounds: [-180, -85.0511, 180, 85.0511],
            minzoom: 8,
            maxzoom: 14,
            scheme: "xyz",
            tiles: [
                "https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?kinds=transport&rate=1&apikey=" + apiKey
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
    //let lon; // place longitude
    //let lat; // place latitude
    let radius;
    let imgon;
    let distt;
    document
      .getElementById("submitname").onclick = function() {
        let name = document.getElementById("hotelstaying").value;
        let stayofday =  document.getElementById("durstay").value;
        map.addLayer(
            {
                id: "car_rental",
                type: "symbol",
                source: "car_rental",
                "source-layer": "pois",
                minzoom: 8,
                layout: {
                    'icon-image': 'carz',
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
        if (name==datainpname[3].databases.hotelname)
        {
            datainplon = datainpname[3].databases.lon;
            datainplat = datainpname[3].databases.lat;
                    var marker = new mapboxgl.Marker()
                    .setLngLat([datainplon, datainplat])
                    .addTo(map);
                    if(stayofday==1){
                        map.addLayer({
                            'id': 'hroyrouteone',
                            'type': 'line',
                            'source': 'hroyrouteone',
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
     
                    img.src = "images/h4d1.jpg";
                    img.width=800;
                    img.height=400;
                    imgon = img;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/post',
                        data: $('#formall').serialize(),
                        success: function (response) {
                            downloadData();
                        }
                    })
                
                    //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                    var data = datainpname[3].databases.dayoneroute;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/posts',
                        data: JSON.stringify(data),
                        contentType: "application/json; charset=utf8",
                        success: function (response) {
                            //alert("success");
                            distt=response.toFixed(1);
                        }
                    })
                }
                if(stayofday==2){
                    map.addLayer({
                        'id': 'hroyroutetwo',
                        'type': 'line',
                        'source': 'hroyroutetwo',
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
                    radius=600;
                var img = document.createElement("img");
 
                img.src = "images/h4d2.jpg";
                img.width=800;
                img.height=400;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
            
                imgon = img;
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                var data = datainpname[3].databases.daytworoute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response.toFixed(1);
                    }
                })
            }
            if(stayofday==3){
                map.addLayer({
                    'id': 'hroyroutethree',
                    'type': 'line',
                    'source': 'hroyroutethree',
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
                radius=700;
            var img = document.createElement("img");

            img.src = "images/h4d3.jpg";
            img.width=800;
            img.height=400;
            $.ajax({
                type: 'post',
                url: 'api/points/post',
                data: $('#formall').serialize(),
                success: function (response) {
                    downloadData();
                }
            })
        
            imgon = img;
            //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
            var data = datainpname[3].databases.daythreeroute;
            $.ajax({
                type: 'post',
                url: 'api/points/posts',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf8",
                success: function (response) {
                    //alert("success");
                    distt=response.toFixed(1);
                }
            })
        }
        if(stayofday==4){
            map.addLayer({
                'id': 'hroyroutefour',
                'type': 'line',
                'source': 'hroyroutefour',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#800080',
                'line-width': 8
                }
                });
            firstLoad();
            radius=800;
        var img = document.createElement("img");

        img.src = "images/h4d4.jpg";
        img.width=800;
        img.height=400;
        $.ajax({
            type: 'post',
            url: 'api/points/post',
            data: $('#formall').serialize(),
            success: function (response) {
                downloadData();
            }
        })
    
        imgon = img;
        //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
        var data = datainpname[3].databases.dayfourroute;
        $.ajax({
            type: 'post',
            url: 'api/points/posts',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf8",
            success: function (response) {
                //alert("success");
                distt=response.toFixed(1);
            }
        })
        }
    }
        if (name==datainpname[2].databases.hotelname)
        {
            datainplon = datainpname[2].databases.lon;
            datainplat = datainpname[2].databases.lat;
                    var marker = new mapboxgl.Marker()
                    .setLngLat([datainplon, datainplat])
                    .addTo(map);
                    if(stayofday==1){
                        map.addLayer({
                            'id': 'hdrouteone',
                            'type': 'line',
                            'source': 'hdrouteone',
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
     
                    img.src = "images/h3d1.jpg";
                    img.width=800;
                    img.height=400;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/post',
                        data: $('#formall').serialize(),
                        success: function (response) {
                            downloadData();
                        }
                    })
                
                    imgon = img;
                    //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                    var data = datainpname[2].databases.dayoneroute;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/posts',
                        data: JSON.stringify(data),
                        contentType: "application/json; charset=utf8",
                        success: function (response) {
                            //alert("success");
                            distt=response.toFixed(1);
                        }
                    })
                }
                else if(stayofday==2){
                    map.addLayer({
                        'id': 'hdroutetwo',
                        'type': 'line',
                        'source': 'hdroutetwo',
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
                    radius=600;
                var img = document.createElement("img");
 
                img.src = "images/h3d2.jpg";
                img.width=800;
                img.height=400;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
            
                imgon = img;
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                var data = datainpname[2].databases.daytworoute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response.toFixed(1);
                    }
                })
            }
            else if(stayofday==3){
                map.addLayer({
                    'id': 'hdroutethree',
                    'type': 'line',
                    'source': 'hdroutethree',
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
                radius=700;
            var img = document.createElement("img");

            img.src = "images/h3d3.jpg";
            img.width=800;
            img.height=400;
            $.ajax({
                type: 'post',
                url: 'api/points/post',
                data: $('#formall').serialize(),
                success: function (response) {
                    downloadData();
                }
            })
        
            imgon = img;
            //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
            var data = datainpname[2].databases.daythreeroute;
            $.ajax({
                type: 'post',
                url: 'api/points/posts',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf8",
                success: function (response) {
                    //alert("success");
                    distt=response.toFixed(1);
                }
            })
        }
        else if(stayofday==4){
            map.addLayer({
                'id': 'hdroutefour',
                'type': 'line',
                'source': 'hdroutefour',
                'layout': {
                'line-join': 'round',
                'line-cap': 'round'
                },
                'paint': {
                'line-color': '#800080',
                'line-width': 8
                }
                });
            firstLoad();
            radius=800;
        var img = document.createElement("img");

        img.src = "images/h3d4.jpg";
        img.width=800;
        img.height=400;
        $.ajax({
            type: 'post',
            url: 'api/points/post',
            data: $('#formall').serialize(),
            success: function (response) {
                downloadData();
            }
        })
    
        imgon = img;
        //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
        var data = datainpname[2].databases.dayfourroute;
        $.ajax({
            type: 'post',
            url: 'api/points/posts',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf8",
            success: function (response) {
                //alert("success");
                distt=response.toFixed(1);
            }
        })
    }
    }
        if (name==datainpname[1].databases.hotelname)
        {
            datainplon = datainpname[1].databases.lon;
            datainplat = datainpname[1].databases.lat;
                    var marker = new mapboxgl.Marker()
                    .setLngLat([datainplon, datainplat])
                    .addTo(map);
                if(stayofday==1){
                        map.addLayer({
                            'id': 'hsvarennerouteone',
                            'type': 'line',
                            'source': 'hsvarennerouteone',
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
     
                    img.src = "images/h2d1.jpg";
                    img.width=800;
                    img.height=400;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/post',
                        data: $('#formall').serialize(),
                        success: function (response) {
                            downloadData();
                        }
                    })
                
                    imgon = img;
                    //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                    var data = datainpname[1].databases.dayoneroute;
                    $.ajax({
                        type: 'post',
                        url: 'api/points/posts',
                        data: JSON.stringify(data),
                        contentType: "application/json; charset=utf8",
                        success: function (response) {
                            //alert("success");
                            distt=response.toFixed(1);
                        }
                    })
                }
                else if(stayofday==2){
                    map.addLayer({
                        'id': 'hsvarenneroutetwo',
                        'type': 'line',
                        'source': 'hsvarenneroutetwo',
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
                    radius=600;
                var img = document.createElement("img");
 
                img.src = "images/h2d2.jpg";
                img.width=800;
                img.height=400;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
            
                imgon = img;
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                var data = datainpname[1].databases.daytworoute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response.toFixed(1);
                    }
                })
                }
            else if(stayofday==3){
                map.addLayer({
                    'id': 'hsvarenneroutethree',
                    'type': 'line',
                    'source': 'hsvarenneroutethree',
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
                radius=700;
            var img = document.createElement("img");

            img.src = "images/h2d3.jpg";
            img.width=800;
            img.height=400;
            $.ajax({
                type: 'post',
                url: 'api/points/post',
                data: $('#formall').serialize(),
                success: function (response) {
                    downloadData();
                }
            })
        
            imgon = img;
            //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
            var data = datainpname[1].databases.daythreeroute;
            $.ajax({
                type: 'post',
                url: 'api/points/posts',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf8",
                success: function (response) {
                    //alert("success");
                    distt=response.toFixed(1);
                }
            })
            }
            else if(stayofday==4){
                map.addLayer({
                    'id': 'hsvarenneroutefour',
                    'type': 'line',
                    'source': 'hsvarenneroutefour',
                    'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
                    'paint': {
                    'line-color': '#800080',
                    'line-width': 8
                    }
                    });
                firstLoad();
                radius=700;
            var img = document.createElement("img");

            img.src = "images/h2d4.jpg";
            img.width=800;
            img.height=400;
            $.ajax({
                type: 'post',
                url: 'api/points/post',
                data: $('#formall').serialize(),
                success: function (response) {
                    downloadData();
                }
            })
        
            imgon = img;
            //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
            var data = datainpname[1].databases.dayfourroute;
            $.ajax({
                type: 'post',
                url: 'api/points/posts',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf8",
                success: function (response) {
                    //alert("success");
                    distt=response.toFixed(1);
                }
            })
            }
        }
        if (name==datainpname[0].databases.hotelname) //hotel de suede
        {
            datainplon = datainpname[0].databases.lon;
            datainplat = datainpname[0].databases.lat;
                    var marker = new mapboxgl.Marker()
                    .setLngLat([datainplon, datainplat])
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
                imgon = img;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
            
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.2945, lat:48.8584},{lon:2.2986,lat:48.8556},{lon:2.3125,lat:48.8544},{lon:2.3158,lat:48.8553}];
                var data = datainpname[0].databases.dayoneroute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response.toFixed(1);
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
                radius=700;
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

                var data = datainpname[0].databases.daythreeroute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        distt=response.toFixed(1);
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
                        radius=600;
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
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.3206, lat:48.8511},{lon:2.3350,lat:48.8523},{lon:2.3226,lat:48.8474},{lon:2.350,lat:48.8459},{lon:2.2945,lat:48.8584},{lon:2.2893,lat:48.8616},{lon:2.2851,lat:48.8592},{lon:2.2876,lat:48.8556}];
                var data = datainpname[0].databases.daytworoute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                        //alert("success");
                        //console.log(response);
                       distt = response.toFixed(1);
                    }
                })
            }
            else if(stayofday==4)
                {
                    map.addLayer({
                        'id': 'hsroutedayfour',
                        'type': 'line',
                        'source': 'hsroutedayfour',
                        'layout': {
                        'line-join': 'round',
                        'line-cap': 'round'
                        },
                        'paint': {
                        'line-color': '#800080',
                        'line-width': 8
                        }
                    });
                        firstLoad();
                        radius=800;
                var img = document.createElement("img");
 
                img.src = "images/h1d4.jpg";
                img.width=800;
                img.height=400;
                imgon=img;
                $.ajax({
                    type: 'post',
                    url: 'api/points/post',
                    data: $('#formall').serialize(),
                    success: function (response) {
                        downloadData();
                    }
                })
                //var data = [{lon:2.3193, lat:48.8526},{lon:2.3206, lat:48.8511},{lon:2.3350,lat:48.8523},{lon:2.3226,lat:48.8474},{lon:2.350,lat:48.8459},{lon:2.2945,lat:48.8584},{lon:2.2893,lat:48.8616},{lon:2.2851,lat:48.8592},{lon:2.2876,lat:48.8556}];
                var data = datainpname[0].databases.dayfourroute;
                $.ajax({
                    type: 'post',
                    url: 'api/points/posts',
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf8",
                    success: function (response) {
                       distt = response.toFixed(1);
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
            //deletebut = document.getElementById("delete_button");
            //var distancecalc = document.createElement("p");
            //distancecov
            para.textContent = "Traveller-Name: " + element.travellerName + ". Recommended route to take for " + dayofstay + " days of stay. Approximate distance to cover: " + distt + " km";
            myImage=imgon;
            //deletebut.innerHTML = "Delete Route";
            divinhtml.appendChild(para);
            divinhtml.appendChild(myImage); 
            //divinhtml.appendChild(deletebut);
            paratwo.style.backgroundColor = "#b5651d";
            
        });
    }


    document
    .getElementById("delete_button").onclick = function() {
        let menu = document.getElementById('containerish');
        //menu.removeChild(menu.lastChild);
        //menu.removeChild(menu.firstChild);
        var child = menu.lastElementChild;  
        var i=0;
        while (i<2) { 
            menu.removeChild(child); 
            child = menu.lastElementChild; 
            i=i+1;
        } 
}
    
    let offset = 0; // offset from first object in the list
    let count;
    const pageLength = 5;
    function firstLoad() {
        let travbudg =  document.getElementById("travbudget").value;
        let hotstay =  document.getElementById("hotelstaying").value;
        apiGet(
          "radius",
          `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${datainplon}&lat=${datainplat}&rate=2&format=count`
        ).then(function(data) {
          count = data.count;
          offset = 0;
          document.getElementById(
            "inform"
          ).innerHTML = `<p style="color:white;background-color:black;font-family: 16px;font-weight: 300;font-family: Roboto;padding: 10px;text-align: center;"> Possible places to visit from hotel, <strong>'${hotstay}'</strong> within <strong>${radius}</strong> km and with budget <strong>${travbudg}€</strong>:</p>`; //add br and write the form inputs
          loadList();
        });
      }
      function loadList() {
        apiGet(
          "radius",
          `radius=${radius}&limit=${pageLength}&offset=${offset}&lon=${datainplon}&lat=${datainplat}&rate=2&format=json`
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
        
        if(travbudg>160){
        if(k=="Church" || k=="Temple" || k=="Park" || k=="Burial places" || k=="Art gallery" || k=="Monument")
        {
        a.innerHTML = `<h5 class="list-group-item-heading" style="text-align:center;font-size:medium;font-weight:bold;padding:10px;">${item.name} (Click Me to show details!)</h5>
                  <p class="list-group-item-text" style="background-color:tomato; color:white;text-align:center;font-size:medium;font-weight:bold;padding:10px;">${k}</p>`;
        }
        }   

        if(travbudg>250){
            if(k=="Church" || k=="Temple" || k=="Park" || k=="Burial places" || k=="Art gallery" || k=="Monument" || k=="National Museum, Art gallery" || k=="Fountain" || k==" Burial place, Monument" || k=="Tower" || k=="Museum")
            {
            a.innerHTML = `<h5 class="list-group-item-heading" style="text-align:center;font-size:medium;font-weight:bold;padding:10px;">${item.name} (Click Me to show details!)</h5>
                      <p class="list-group-item-text" style="background-color:tomato; color:white;text-align:center;font-size:medium;font-weight:bold;padding:10px;">${k}</p>`;
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
          poi.innerHTML += `<img src="${data.preview.source}" style="margin-left:40px;border: 5px solid #404040;">`;
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