$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        
        board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    
    var drawBoard = function () {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                $("#board").append("<div class='square'><h1></h1></div>");
                $(".square:last-child").attr("row", i);
                $(".square:last-child").attr("col", j);
            }
        }
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
    
    /*var isFull = function (element, index, array) {
        return element == 1;
    };*/
    
    var playerMove = function (a, b, c) {
        if (player1 === true) {
            a.text("X");
            board[b][c] = 1;
        } else {
            a.text("O");
            board[b][c] = 2;
        }
        
        console.log(board);
        changePlayer();
    };
    
    drawBoard();

    $(".square").click(function () {
        var spaceRow = $(this).attr("row");
        var spaceCol = $(this).attr("col");
        var chosenSpace = $(this).children();
        
        playerMove(chosenSpace, spaceRow, spaceCol);
        
    });
    
    $("#restart").click(function () {
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
        
        console.log("New Game! " + board);
    });
    
});