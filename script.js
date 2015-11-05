$(document).ready(function () {
    
    var player1 = true;
    var player2 = false;
    
    var ClickCell = function() {
        var clickedCell = $(this).children();
        if (player1 === true) {
            clickedCell.addClass("ex");
            player1 = false;
        } else {
            clickedCell.addClass("oh");
            player1 = true;
        }
    };
    
    $(".square").on('click', ClickCell);
    
});