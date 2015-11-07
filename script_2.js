$(document).ready(function () {
    
    var player1,
        player2,
        gameOver = false,
        
        winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
        
        positions = ["", "", "", "", "", "", "", "", ""],
        boardFull = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    var changePlayer = function () {
        if (player1 === true) {
            player1 = false;
            player2 = true;
        } else {
            player1 = true;
            player2 = false;
        }
    };
    
    var checkEmptySpace = function (x) {
        if (positions[x - 1] === "") {
            return true;
        }
    };
    
    var fillBoard = function () {
        for (var i = 0; i < positions.length; i++) {
            if (positions[i] === "X" || positions[i] === "O") {
                boardFull[i] = 1;
            }
        }
    };
    
    var isFull = function (element, index, array) {
        return element == 1;
    };
    
    while (gameOver === false) {
        
        /*Reset board at start of game*/
        for (var i = 0; i < 9; i++) {
            positions[i] = "";
            boardFull[i] = 0;
        }
        
        /*Reset player status at start of game*/
        player1 = true;
        player2 = false;
        
        $(".square").click(function () {
            var spaceNum = $(this).attr("id");
            var chosenSpace = $(this).children();

            if (checkEmptySpace(spaceNum) === true) {
                if (player1 === true) {
                    chosenSpace.text("X");
                    positions[spaceNum - 1] = "X";
                    fillBoard();

                    console.log(spaceNum);
                    console.log(positions);
                    console.log(boardFull);
                    
                    if (boardFull.every(isFull)) {
                        $("#info").text("It's a draw!");
                    }
                    
                    changePlayer();
                    
                } else if (player2 === true) {
                    chosenSpace.text("O");
                    positions[spaceNum - 1] = "O";
                    fillBoard();

                    console.log(spaceNum);
                    console.log(positions);
                    console.log(boardFull);
                    
                    if (boardFull.every(isFull)) {
                        $("#info").text("It's a draw!");
                    }
                    
                    changePlayer();
                    
                }
            } else {
                $("#info").text("Choose a different square");
                console.log("Space " + spaceNum + " is already taken.");
            }
        })
        
        gameOver = true;
    }
    
});