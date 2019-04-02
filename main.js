var omlijning={
"type": "FeatureCollection",
"name": "Omlijning_Almere",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 1, "Naam": "Almere", "Oppervlakt": null, "Opp": 128633 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 5.22532414385081, 52.372804118533359 ], [ 5.225214121253901, 52.373122973240967 ], [ 5.225164367091464, 52.373197608926944 ], [ 5.225008830649371, 52.373332670417319 ], [ 5.22366446467852, 52.37380933011174 ], [ 5.22342989873776, 52.37390390003219 ], [ 5.223373639922325, 52.373952278718214 ], [ 5.223227096796903, 52.374329632570621 ], [ 5.222867553909835, 52.375211445676335 ], [ 5.222847551055634, 52.375267950453775 ], [ 5.222671892340936, 52.375487779696257 ], [ 5.222661838337357, 52.375530165124061 ], [ 5.223608098910572, 52.375676844673549 ], [ 5.22378610113332, 52.375715451644524 ], [ 5.224828091138741, 52.375848120284878 ], [ 5.225827296135086, 52.375954474247038 ], [ 5.227044253323852, 52.376057076245061 ], [ 5.227924878623328, 52.376114795723971 ], [ 5.228508676476396, 52.376149902305315 ], [ 5.228762669796144, 52.376158318258369 ], [ 5.229128528432661, 52.375324952386016 ], [ 5.229384584674195, 52.374751892460985 ], [ 5.229787279868482, 52.373757051881086 ], [ 5.229870637546494, 52.373506804238396 ], [ 5.229844447619876, 52.373450236928399 ], [ 5.227127739028419, 52.373032699030361 ], [ 5.225466004367323, 52.372800274218918 ], [ 5.22532414385081, 52.372804118533359 ] ] ] ] } }
]
};

var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sources": {
      "geojson":{
          "type": "geojson",
          "data": "Omlijning_Almere.geojson"
                },
      "cartiqo":{
          "type": "vector",
          "tiles":  [
              "https://ta.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
              "https://tb.webmapper.nl/wm/cartiqo/{z}/{x}/{y}",
              "https://tc.webmapper.nl/wm/cartiqo/{z}/{x}/{y}"
                    ]
                }
               },
  "layers":[
      {
          "id":  "background",
          "type": "background",
          "paint": {
              "background-color":"#00171F",
              "background-opacity": 0.5
                   }
      },

      {
          "id": "admin",
          "type": "line",
          "source": "cartiqo",
          "source-layer": "boundaries",
          "maxzoom": 22,
          "minzoom": 0,
          "filter": ["==", "type", "province"],
          "paint": {
              "line-color": "#132E32",
              "line-width": 1
                   }
      },

      {
        "id": "roads",
        "type": "line",
        "source": "cartiqo",
        "source-layer":"roads",
        "paint": {
          "line-width": [
                      "interpolate",
                      [
                          "exponential",
                          1.2
                      ],
                      [
                          "zoom"
                      ],
                      13,
                      0,
                      13.5,
                      0.6,
                      14,
                      1.5,
                      20,
                      12
                  ],
            "line-color": "#95B46A",
        }
    },



      {
          "id": "water",
          "source": "cartiqo",
          "source-layer": "water",
          "type": "fill",
          "paint": {
            "fill-color": "#8AC6D0",
            "fill-opacity": 0.5
                    }
      },

      {
          "id": "omlijning",
          "source":"geojson",
          "type":"fill",
          "paint": {
          "fill-color":"#83781B",
          "fill-opacity": 0.5
                    }
      }

          ]
}

var map = new mapboxgl.Map({
        container: 'map',
        style: mystyle,
        hash: true,
        zoom: 9,
        pitch: 60,
        bearing: 40,
        center: [ 5.227,52.374 ]
    });
