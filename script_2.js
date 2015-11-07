$(document).ready(function () {
    
    var player1 = true,
        player2 = false,
        
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
    
    var playerMove = function (a, b) {
        if (player1 === true) {
            a.text("X");
            positions[b - 1] = "X";
        } else {
            a.text("O");
            positions[b - 1] = "O";
        }
        
        fillBoard();
        console.log(b);
        console.log(positions);
        console.log(boardFull);
        changePlayer();
    };
    
    var newGame = function () {
        player1 = true;
        player2 = false;
        var x = $(".square").children();
        x.text("");
        for (var i = 0; i < 9; i++) {
            positions[i] = "";
            boardFull[i] = 0;
        }
    };

    $(".square").click(function () {
        var spaceNum = $(this).attr("id");
        var chosenSpace = $(this).children();

        if (checkEmptySpace(spaceNum) === true) {
            playerMove(chosenSpace, spaceNum);
            
            if (boardFull.every(isFull)) {
                $("#info").text("It's a draw!");
                $(".restart").css("visibility", "visible")
            }
            
        } else {
            $("#info").text("Choose a different square");
            console.log("Space " + spaceNum + " is already taken.");
        }
    })
    
});