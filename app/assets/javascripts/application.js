// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require foundation

$(document).foundation();

$(function() {
  $( "#startdate" ).datepicker();
  });
  
$(function() {
  $( "#enddate" ).datepicker();
  });
  
$(function initialize() {
    var myLatlng = new google.maps.LatLng(54.29454,-1.98342);
    var mapOptions = {
      zoom: 4,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<h5 class="subheader">United Kingdom</h5>'+
	'<p>Roughly 5,000 properties</p>'+
	'<p><a href"foo" id="foo" data-id="1000">Click</a> to zoom in...</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'United Kingdon (~5,000 properties)'
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
	
    });
  	
    google.maps.event.addDomListener(window, 'load', initialize);
  
  });

  
