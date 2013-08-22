$(function initialize() {
	
	var Latlng_EU = new google.maps.LatLng(46.274834,3.164063);
	var Latlng_UK = new google.maps.LatLng(54.29454,-1.98342);
    var Latlng_FR = new google.maps.LatLng(46.274834,3.164063);
    var Latlng_ES = new google.maps.LatLng(40.173102,-3.779297);
	
	 
	var mapOptions = {
      zoom: 4,
      center: Latlng_EU,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
    //showMarkers(map,'4');
  	
    var contentString_UK = '<h5 class="subheader">United Kingdom</h5>'+
	'<p>Roughly 5,000 properties</p>'+
	'<p><a href="javascript:zoom(\'46.274834,3.164063\',\'8\');" >Click here</a> to zoom in...</p>';

    var contentString_FR = '<h5 class="subheader">France</h5>'+
	'<p>Roughly 5,000 properties</p>'+
	'<p><a href="foo" id="foo" data-id="1000">Click</a> to zoom in...</p>';
	
    var contentString_ES = '<h5 class="subheader">Spain</h5>'+
	'<p>Roughly 5,000 properties</p>'+
	'<p><a href="foo" id="foo" data-id="1000">Click</a> to zoom in...</p>';

    var infowindow_UK = new google.maps.InfoWindow({
        content: contentString_UK
    });
	
    var infowindow_FR = new google.maps.InfoWindow({
        content: contentString_FR
    });
	
    var infowindow_ES = new google.maps.InfoWindow({
        content: contentString_ES
    });

    var marker_UK = new google.maps.Marker({
        position: Latlng_UK,
        map: map,
        title: 'United Kingdom (~5,000 properties)'
    });
	
    var marker_FR = new google.maps.Marker({
        position: Latlng_FR,
        map: map,
        title: 'France (~5,000 properties)'
    });
	
    var marker_ES = new google.maps.Marker({
        position: Latlng_ES,
        map: map,
        title: 'Spain (~5,000 properties)'
    });
	
    google.maps.event.addListener(marker_UK, 'click', function() {
	  infowindow_UK.open(map,marker_UK);      	
    });
	
    google.maps.event.addListener(marker_FR, 'click', function() {
	  infowindow_FR.open(map,marker_FR);      	
    });
	
    google.maps.event.addListener(marker_ES, 'click', function() {
	  infowindow_ES.open(map,marker_ES);      	
    });
	
	
    google.maps.event.addDomListener(infowindow_UK, 'load', initialize);
    

  });
  
function zoom(latlng,zoom) {
    
	var Latlng = new google.maps.LatLng(54.29454,-1.98342);
	
	var mapOptions = {
      zoom: 5,
      center: Latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	

}


