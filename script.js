$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
    
    var playGame = function () {
        var clickedCell = $(this).children();
        
        if (player1 === true) {
            clickedCell.addClass("ex");
            player1 = false;
            player2 = true;
        } else {
            clickedCell.addClass("oh");
            player1 = true;
            player2 = false;
        }
    };
    
    $(".square").on('click', playGame);
    
});