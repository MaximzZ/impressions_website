	mapboxgl.accessToken = 'pk.eyJ1IjoibWF4eHp6IiwiYSI6ImNraDI0cm1jdDAyNXozMnJ3cXp3OXhhenEifQ.x2X076jEz5lCBKj9-cUjXw';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [12.550343, 55.665957],
        zoom: 8
    });

    var marker = new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([12.550343, 55.665957])
        .addTo(map);
		map.on('click', function (e) {
    	marker.setLngLat(e.lngLat);
      console.log(marker.getLngLat().toString());
    })