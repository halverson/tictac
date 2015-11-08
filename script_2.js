$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        moveCounter = 0,
        displayText = $("#info"),
        restartBttn = $("#restart"),
        
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
    
    var checkWin = function (player, row, col) {
        
        /*Check if there is a win in the current row*/
        for (var i = 0; i < board[row].length; i++) {
            if (board[row][i] === player && board[row][i + 1] === player && board[row][i + 2] === player) {
                return true;
            } else {
                break;
            }
        }
        
        /*Check if there is a win in the current column*/
        for (var i = 0; i < board[row].length; i++) {
            if (board[i][col] === player && board[i + 1][col] === player && board[i + 2][col] === player) {
                return true;
            } else {
                break;
            }
        }
        
        /*Check if there is a win in the diagonal*/
        if (row === col) {
            for (var i = 0; i < board[row].length; i++) {
                if (board[i][i] === player && board[i+1][i+1] === player && board[i+2][i+2] === player) {
                    return true;
                } else {
                    break;
                }
            }
        }
    };
    
    var playerMove = function (a, b, c) { /*Draw appropriate token and update *board* array.*/
        
        var p;
        
        if (player1 === true) {
            p = 1;
            a.text("X");
            board[b][c] = p;
            
        } else {
            p = 2;
            a.text("O");
            board[b][c] = p;
        }
        
        moveCounter++;
        
        if (checkWin(p, b, c) === true) {
            if (player1 === true) {
                    displayText.text("X has won the game!");
                } else {
                    displayText.text("O has won the game!");
                }
                restartBttn.css("visibility", "visible");
        } else if (moveCounter == 9) {
            displayText.text("It's a draw! Play again:");
            restartBttn.css("visibility", "visible");
        } else {
            changePlayer();
        }
        
        console.log("Played " + a.text() + " At row: " + b + " col: " + c);
        console.log("Turn " + moveCounter);
    };
    
    drawBoard();

    $(".square").click(function () {
        var spaceRow = $(this).attr("row"); /*Get the clicked square's row number.*/
        var spaceCol = $(this).attr("col"); /*Get the clicked square's column number.*/
        var chosenSpace = $(this).children(); /*Target the h1 tag within the clicked square.*/
        
        if (board[spaceRow][spaceCol] === 0) { /*Check if the clicked square is empty.*/
            playerMove(chosenSpace, spaceRow, spaceCol);
        } else {
            displayText.text("Choose a different square");
        }
        
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
        
        console.log("New Game!");
    });
    
});