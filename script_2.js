$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        
        board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    
    var drawBoard = function () {
        
        /*Draw board div's and h1's with row and col attributes based on *board* array.*/
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                $("#board").append("<div class='square'><h1></h1></div>");
                $(".square:last-child").attr("row", i);
                $(".square:last-child").attr("col", j);
            }
        }
    };
    
    var changePlayer = function () { /*Change who's turn it is when called.*/
        if (player1 === true) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var playerMove = function (a, b, c) { /*Draw appropriate token and update *board* array.*/
        if (player1 === true) {
            a.text("X");
            board[b][c] = 1;
        } else {
            a.text("O");
            board[b][c] = 2;
        }
        
        console.log("row: " + b + " col: " + c);
        changePlayer();
    };
    
    drawBoard();

    $(".square").click(function () {
        var spaceRow = $(this).attr("row"); /*Get the clicked square's row number.*/
        var spaceCol = $(this).attr("col"); /*Get the clicked square's column number.*/
        var chosenSpace = $(this).children(); /*Target the h1 tag within the clicked square.*/
        
        if (board[spaceRow][spaceCol] === 0) { /*Check if the clicked square is empty.*/
            playerMove(chosenSpace, spaceRow, spaceCol);
        } else {
            $("#info").text("Choose a different square");
        }
        
    });
    
    $("#restart").click(function () { /*Resets game to starting state when called.*/
        player1 = true;
        player2 = false;
        var x = $(".square").children();
        x.text("");
        $("#restart").css("visibility", "hidden");
        $("#info").text("Play On!");
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }
        
        console.log("New Game!");
    });
    
});