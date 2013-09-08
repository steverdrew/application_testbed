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
//= require jquery.ui.datepicker
//= require foundation
//= require responsive-tables
//= require select2
//= require select2-boxes
//= require jquery.icheck


$(document).foundation();


$(function() {
  $( "#startdate" ).datepicker();
  });
  
$(function() {
  $( "#enddate" ).datepicker();
  });

  function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  
  $("#owner_link").click(function() {
     scrollToAnchor('owner');
  });


$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})

// customize all inputs (will search for checkboxes and radio buttons)
$(document).ready(function(){
  $('input').each(function(){
    var self = $(this),
      label = self.next(),
      label_text = label.text();
	label.remove();
    self.iCheck({
      checkboxClass: 'icheckbox_line-blue',
      radioClass: 'iradio_line-blue',
      insert: '<div class="icheck_line-icon"></div>' + label_text
    });
  });
});
	
$("#results").click(function(){
    $("#search_section").hide('slow');
    $("#results_section").show('slow');
})
$("#search").click(function(){
    $("#search_section").show('slow');
    $("#results_section").hide('slow');
})