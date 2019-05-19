let emptyX = 300;
let emptyY = 300;

$(function () {
    init();
});

function init() {
    $("#puzzlearea div")
        .each(function (index) {
            // calculate x and y for this piece
            var x = ((index % 4) * 100) ;
            var y = (Math.floor(index / 4) * 100) ;
            $(this).css({
                "left":x+"px",
                "top": y + "px",
                "backgroundImage": 'url("background.jpg")',
                "backgroundPosition": -x + 'px ' + (-y) + 'px'
            });
            $(this).data({"x": x, "y": y});
        })
        .click(tileClick)
        .addClass("puzzlepiece");

    resetHover();

    $("#shufflebutton").click(shuffling);
}

function resetHover() {
    $("#puzzlearea div").each(function () {
        if (isNeighborsEmpty($(this))) {
            $(this).addClass("movablepiece");
        } else {
            $(this).removeClass("movablepiece");
        }
    });
}

function isNeighborsEmpty(div) {
    if (((div.data("x") - 100) == emptyX) || ((div.data("x") + 100) == emptyX)) {
        if (div.data("y") == emptyY) {
            return true;
        } else {
            return false;
        }
    }
    if (((div.data("y") - 100) == emptyY) || ((div.data("y") + 100) == emptyY)) {
        if (div.data("x") == emptyX) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

function tileClick() {
    let div = $(this);
    if (isNeighborsEmpty(div)) {
        changePosition(div);
        resetHover();
    }
}

function shuffling() {
    for (let i = 0; i<15*5; ++i) {
        shufflingLoop();
    }
    resetHover();
}

function shufflingLoop() {
    let tiles = getTilesCanBeMove();
    let index = Math.floor(Math.random()*tiles.length);
    changePosition(tiles[index]);
}

function getTilesCanBeMove() {
    let tiles = [];
    $("#puzzlearea div").each(function () {
        if (isNeighborsEmpty($(this))) {
            tiles.push($(this));
        }
    });
    return tiles;
}

function changePosition(div) {
    let tempEmptyX = div.data("x");
    let tempEmptyY = div.data("y");
    div.animate({
        "left": emptyX +"px",
        "top": emptyY + "px",
    },"fast");
    div.data({"x": emptyX, "y": emptyY});
    emptyX = tempEmptyX;
    emptyY = tempEmptyY;
}