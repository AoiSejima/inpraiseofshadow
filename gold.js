window.addEventListener("load", function() {
    var goldcursor = document.getElementById('goldcursor');

    //follow function
    //take goldcursor container and position it where the cursor is
    function follow(e) {
        
        var x = e.x;
        var y = e.y;

        goldcursor.style.left = x + 'px';
        goldcursor.style.top = y + 'px';
    }

    document.body.addEventListener('mousemove', follow);
});