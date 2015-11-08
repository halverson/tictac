$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        moveCounter = 0,
        displayText = $("#info"),
        restartBttn = $("#restart"),
        n = 3; //number of squares per side
        
    var board = new Array();
    
    var createBoard = function () {
        for (var i = 0; i < n; i++) {
            board[i] = new Array();
            for (var j = 0; j < n; j++) {
                board[i][j] = 0;
            }
        }
        
        //Draw board div's and h1's with row and col attributes based on *board* array.
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                $("#board").append("<div class='square'><h1></h1></div>");
                $(".square:last-child").attr("row", i);
                $(".square:last-child").attr("col", j);
            }
        }
    };
    
    var changePlayer = function () { //Change who's turn it is when called.
        if (player1) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var isValidMove = function(row, col) {
        if (board[row][col] === 0) {
            return true;
        } else {
            displayText.text("Choose a different position!");
            return false;
        }
    };
    
    var checkWin = function (row, col) {
        
        //Who is the current player?
        var player;
        if (player1 === true) {
            player = 1;
        } else {
            player = 2;
        }
        
        //Check if there is a win in the current row
        for (var i = 0; i < n; i++) {
            if (board[row][i] != player) {
                break;
            }
            if (i == n - 1) {
                return true;
            }
        }
        
        //Check if there is a win in the current column
        for (var i = 0; i < n; i++) {
            if (board[i][col] != player) {
                break;
            }
            if (i == n - 1) {
                return true;
            }
        }
        
        //Check if there is a win in the \ diagonal
        if (row === col) {
            for (var i = 0; i < n; i++) {
                if (board[i][i] != player) {
                    break;
                }
                if (i == n - 1) {
                    return true;
                }
            }
        }
        
        //Check if there is a win in the anti-diagonal
        for (var i = 0; i < n; i++) {
            if (board[i][(n - 1) - i] != player) {
                break;
            }
            if (i == n - 1) {
                return true;
            }
        }
        
    };
    
    var checkDraw = function () {
        if (moveCounter === 9) {
            return true;
        } else {
            return false;
        }
    };
    
    var playerMove = function (square, row, col) { /*Draw appropriate token and update *board* array.*/
        
        var p;
        
        if (player1 === true) {
            p = 1;
            square.text("X");
            board[row][col] = p;
        } else {
            p = 2;
            square.text("O");
            board[row][col] = p;
        }
        moveCounter++;
    };
    
    createBoard();
    
    $(".square").click(function () {
            
        var Row = $(this).attr("row"); /*Get the clicked square's row number.*/
        var Col = $(this).attr("col"); /*Get the clicked square's column number.*/
        var chosenSpace = $(this).children(); /*Target the h1 tag within the clicked square.*/
        
        if (isValidMove(Row, Col)) {
            playerMove(chosenSpace, Row, Col);
        }
        
        var win = checkWin(Row, Col);
        var draw = checkDraw();
        if (win) {
            
            if (player1) {
                displayText.text("X wins!");
                restartBttn.css("visibility", "visible");
            } else {
                displayText.text("O wins!");
                restartBttn.css("visibility", "visible");
            }
        } else if (draw) {
            displayText.text("It's a draw!");
            restartBttn.css("visibility", "visible");
        }
        
        changePlayer();
        console.log(moveCounter);
    });
    
    $("#restart").click(function () { /*Resets game to starting state when clicked.*/
        player1 = true;
        player2 = false;
        moveCounter = 0;
        var x = $(".square").children();
        x.text("");
        restartBttn.css("visibility", "hidden");
        displayText.text("Play On!");
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }
    });
    
});