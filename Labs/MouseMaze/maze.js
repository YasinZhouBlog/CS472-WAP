let attch = true;
let begin = false;
let nomal = "Click the \"S\" to begin.";
let lost = "Sorry, you lost. :[";
let win = "You win. :]";
$(document).ready(function () {
    $(".boundary").mouseenter(red);
    $("#start").click(reset);
    $("#end").mouseenter(end);
    $("#maze").mouseleave(red);
});

function end() {
    if (begin == false) return;
    if (attch == false) {
        begin = false;
        $("#status").text(lost);
    } else {
        begin = false;
        $("#status").text(win);
    }
}

function reset() {
    begin = true;
    attch = true;
    $(".boundary").removeClass("youlose");
    $("#status").text(nomal);
}

function red() {
    if (begin == false) return;
    attch = false;
    $(".boundary").addClass("youlose");
    end();
}