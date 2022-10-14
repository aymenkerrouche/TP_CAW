var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var loser = false;
var winner = false;
var start = false;

$(document).ready(function() {
    $("#start").hover(function(){
        startPlay();
    });

    $("#end").hover(function(){
        theEnd();
    });

    $(".boundary").hover(function(){

        // ALL walls
        hoverBoundary();

        // One wall
        // if(!winner){
        //     var index = $( ".boundary" ).index( this );
        //     document.getElementsByClassName("boundary")[index].style.background = "#e07070";
        // }
    });

    $("#start").click(function(){
        restart();
    });

    $("#maze").mouseleave(function(){
        antiCheachting();
    });
});



function hoverBoundary() {
    if(!winner){
        loser = true;
        $("#status").text("You lose");
        var boundaries = $("div#maze div.boundary");
        boundaries.addClass("youlose");
    }
}


function startPlay() {
    if (!loser && !winner) {
        $("#status").text("Find the end!");
        start = true;
        console.log("start");
    }
}

function theEnd() {
    if (!loser && !winner && start == true) {
        $("#status").text(" You win! :) ");
        winner =  true;
        alert(" You win! :) ");
        console.log("end");
    }
}

function restart() {
    var boundaries = $("div#maze div.boundary");

    // One Wall

    // for (let index = 0; index < boundaries.length; index++) {
    //     boundaries[index].style.background = "#eeeeee"
    // }

    boundaries.removeClass("youlose");
    loser = false;
    winner = false;
    start = false;

    $("#status").text("Move your mouse over the 'S' to begin.");
}

function antiCheachting(){
    if (start == true && $("#status").text() == "Find the end!") {
        hoverBoundary();
        console.log("leaving");
    }
}