$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        moveCounter = 0,
        displayText = $("#info"),
        restartBttn = $("#restart"),
        winState = false,
        drawState = false,
        n = 3, //number of squares per side. Change this to change size of board and the number tokens in a row required to win. Would need to work on the css to get this to work automatically.
        board = [];
    
    var createBoard = function () {
        
        //Generate internal representation of the board to store token positions.
        for (var i = 0; i < n; i++) {
            board[i] = [];
            for (var j = 0; j < n; j++) {
                board[i][j] = 0;
            }
        }
        
        //Render board div's and h1's to page with row and col attributes based on *board* array.
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
    
    var isValidMove = function(row, col) { //Check to see if the selected space is empty or not.
        if (board[row][col] === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    var checkWin = function (row, col) { //Function to check if the current player has won, based on the most recent move.
        
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
                break; //Forces the for loop to keep iterating through till the next if statement is true.
            }
            if (i == n - 1) { //If "i" gets to the end of the row, then that means all positions in the row are equal: win!
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
        
        //Check if there is a win in the foward diagonal
        if (row === col) { //determines whether the current move is on the diagonal.
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
    
    var checkDraw = function () { //Check to see if the board is full.
        if (moveCounter === 9) {
            return true;
        } else {
            return false;
        }
    };
    
    var playerMove = function (square, row, col) { /*Draw appropriate token based on current player, update the board and add 1 to counter.*/
        
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
    
    
    //Here doth beginith the main game logic.
    
    createBoard();
    
    $(".square").click(function () {
        
        var Row = $(this).attr("row"); //Get the clicked square's row number.
        var Col = $(this).attr("col"); //Get the clicked square's column number.
        var chosenSpace = $(this).children(); //Target the h1 tag within the clicked square.
        
        if (winState !== true && drawState !== true) {
            
            if (isValidMove(Row, Col)) { //Can the player place their piece here?
                playerMove(chosenSpace, Row, Col); //If so, perform the move and update moveCounter.

                var win = checkWin(Row, Col); //check the board for win based on most recent move and assign outcome to "win".
                var draw = checkDraw(); //check if board is full and assign outcome to "draw".

                if (win) { //if there is a win situation that is true.
                    if (player1) {
                        displayText.text("X wins!");
                        restartBttn.css("visibility", "visible");
                    } else {
                        displayText.text("O wins!");
                        restartBttn.css("visibility", "visible");
                    }
                    winState = true;

                } else if (draw) { //if there is no win, but there is a draw.
                    displayText.text("It's a draw!");
                    restartBttn.css("visibility", "visible");
                    drawState = true;
                }

                changePlayer(); //if there is no win or draw, switch to the next player and exit function.

            } else {
                displayText.text("Choose a different square");
            }
            
        }
    });
    
    $("#restart").click(function () { /*Resets game to starting state when clicked.*/
        player1 = true;
        player2 = false;
        winState = false;
        drawState = false;
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