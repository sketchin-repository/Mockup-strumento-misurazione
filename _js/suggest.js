$( document ).ready(function() {
    
    $( ".close" ).click(function() {
        $( ".suggestion" ).fadeOut( "100", function() {
    });});
    
    $( ".close-button" ).click(function() {
        $(".suggestion").fadeOut( "100", function() {
    });});
    
    $( "#info-organizzazione" ).click(function() {
        $( "#suggestion-organizzazione" ).fadeIn( "100", function() {
    });});
    
});