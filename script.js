$(document).ready(function () {
    
    var player1 = true,
        player2 = false;
    
    var win1 = [$("#1").children(), $("#2").children(), $("#3").children()],
        win2 = [$("#4").children(), $("#5").children(), $("#6").children()],
        win3 = [$("#7").children(), $("#8").children(), $("#9").children()],
        win4 = [$("#1").children(), $("#4").children(), $("#7").children()],
        win5 = [$("#2").children(), $("#5").children(), $("#8").children()],
        win6 = [$("#3").children(), $("#6").children(), $("#9").children()],
        win7 = [$("#1").children(), $("#5").children(), $("#9").children()],
        win8 = [$("#3").children(), $("#5").children(), $("#7").children()];
    
    var winArrays = [win1, win2, win3, win4, win5, win6, win7, win8];
    
    var changePlayer = function () {
        if (player1 === true) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var checkWin = function (x, y) {
        var a = x[0],
            b = x[1],
            c = x[2];
        
        if (a.hasClass(y) === b.hasClass(y) === c.hasClass(y)) {
            if (y === "ex") {
                $("#info").text("Player 1 is the winner!");
            } else {
                $("#info").text("Player 2 is the winner!");
            }
        } else {
            $("#info").text("Try harder!");
            console.log("No Win");
        }
    };
    
    var makeMove = function (z) {
        var plX = "ex",
            plO = "oh";
        
        if (player1 === true) {
            z.addClass("ex");
            
            for (var i = 0; i < winArrays.length; i++) {
                console.log(winArrays[i]);
                checkWin(winArrays[i], "ex");
            }
            
        } else {
            z.addClass("oh");
            
            for (var i = 0; i < winArrays.length; i++) {
                console.log(winArrays[i]);
                checkWin(winArrays[i], "oh");
            }
            
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