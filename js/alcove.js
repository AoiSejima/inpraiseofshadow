$( "#uislider" ).slider({
  range: "max",
  min: 1,
  max: 15,
  value: 1,
  slide: function( event, ui ) {
  if( ui.value >= 1 && ui.value <= 3 ) {
      $('body').css("background-color" , '#C0A688');
      $('p').css("color" , '#FFE4C5');
      $('a').css("color" , '#4F3B25');
  }

  if( ui.value >= 4 && ui.value <= 7 ) {
    $('body').css("background-color" , '#9E866A');
    $('p').css("color" , '#CAAB87');
    $('a').css("color" , '#221609');
  }

  if( ui.value >= 8 && ui.value <= 11 ) {
    $('body').css("background-color" , '#7A6752');
    $('p').css("color" , '#4F3B25');
    $('a').css("color" , '#FFE4C5');
  }

  if( ui.value >= 12 && ui.value <= 15 ) {
      $('body').css("background-color" , '#4E4235');
      $('p').css("color" , '#221609');
      $('a').css("color" , '#CAAB87');
    }
  }
});