$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        sq1 = $("#1"),
        sq2 = $("#2"),
        sq3 = $("#3"),
        sq4 = $("#4"),
        sq5 = $("#5"),
        sq6 = $("#6"),
        sq7 = $("#7"),
        sq8 = $("#8"),
        sq9 = $("#9");
    
    var win1 = [sq1, sq2, sq3],
        win2 = [sq4, sq5, sq6],
        win3 = [sq7, sq8, sq9],
        win4 = [sq1, sq4, sq7],
        win5 = [sq2, sq5, sq8],
        win6 = [sq3, sq6, sq9],
        win7 = [sq1, sq5, sq9],
        win8 = [sq3, sq5, sq7];
    
    var checkWin = function (x) {
        
    };
    
    var changePlayer = function () {
        if (player1 === true) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var makeMove = function (x) {
        var x;
        if (player1 === true) {
            x.addClass("ex");
        } else {
            x.addClass("oh");
        }
        changePlayer();
    };
    
    var playGame = function () {
        var clickedCell = $(this).children();
        
        if (clickedCell.is(".ex, .oh")) {
            $("#info").text("Choose a different square, gosh!");
        } else {
            $("#info").text("Play On!");
            
            makeMove(clickedCell);
        }

    };
    
    $(".square").on('click', playGame);
    
});