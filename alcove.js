//JQUI slider
$( "#uislider" ).slider({
  range: "max",
  min: 1,
  max: 15,
  value: 1,
  slide: function( event, ui ) {
  $( "#idnumber" ).val( ui.value );
  // sliderValue = ui.value; 
  // this is the start point for the effect, when slider value is from 1 - 7, change to background color on body and font color on h2
  if( ui.value >= 1 && ui.value <= 7 ) {
    // this is selecting body, and then calling on css to set background color when the slider's value is changed
    // the ease animation on the css will cuase the color to change gradually
      $('body').css("background-color" , '#C0A688');
      // you can do the same thing for the text by first selecting h2, (this where my text is, yours could be in <p> or a div class, then use css color property to change font color. you have to update the 'h2' to whatever element your text is in
      $('p').css("color" , '#FFE4C5');
  }
    // this is the ending point, when slider value is from 8 - 15
    // update the ending colors using the same techniques
  if( ui.value >= 8 && ui.value <= 15 ) {
      $('body').css("background-color" , '#3F3224');
      $('p').css("color" , '#2B1D0D');
    }
  }
});
$( "#idnumber" ).val( $( "#uislider" ).slider( "value" ) );

$(window).scroll(function() {
  $('hr').css('top', $(this).scrollTop() + "rem");
});