$(document).ready(function () {
    
    var player1,
        player2,
        gameOver = false,
        
        winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]],
        
        positions = ["", "", "", "", "", "", "", "", ""];
    
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
    
    while (gameOver === false) {
        
        /*Reset board at start of game*/
        for (var i = 0; i < 9; i++) {
            positions[i] = "";
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

                    console.log(spaceNum);
                    console.log(positions);
                    
                    changePlayer();

                } else if (player2 === true) {
                    chosenSpace.text("O");
                    positions[spaceNum - 1] = "O";

                    console.log(spaceNum);
                    console.log(positions);
                    
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