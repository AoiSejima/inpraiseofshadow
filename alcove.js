$( "#uislider" ).slider({
  slide: function( event, ui ) {
  if( ui.value >= 1 && ui.value <= 7 ) {
      $('body').css("background-color" , '#C0A688');
      $('p').css("color" , '#FFE4C5');
  }

  if( ui.value >= 8 && ui.value <= 15 ) {
      $('body').css("background-color" , '#4E4235');
      $('p').css("color" , '#221609');
    }
  }
});