$(document).ready(function () {
    
    var player1 = true,
        player2 = false;
    
    var changePlayer = function () {
        if  (player1 === true) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var playGame = function () {
        var clickedCell = $(this).children();
        
        if (player1 === true) {
            clickedCell.addClass("ex");
            changePlayer();
        } else {
            clickedCell.addClass("oh");
            changePlayer();
        }
    };
    
    $(".square").on('click', playGame);
    
});