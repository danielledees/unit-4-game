//variables
var randomNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var crystalNumber;
var totalScore = 0;
var images = ["assets/images/Turquoise-Green.jpg", "assets/images/rose-quartz-crystal.jpg", "assets/images/purple grande.jpg", "assets/images/orange crystal.jpg"];

$(document).ready(function() {

startGame();

});

function startGame(){
    $(".crystal-images").empty();
    $(".score-number").empty();
    totalScore = 0;

    //generates random target number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);
    $(".target-number").html(randomNumber);
    
    
    //generates images and random number for crystals
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".crystal-images").append(crystal); 
       
        console.log(crystal);
    }
    //click functions for crystal
    $(".crystal").on("click", function() {
        var value = $(this).attr("value")
        
        totalScore += parseInt(value);
        console.log(totalScore);
        $(".score-number").html(totalScore);
    
        if (totalScore === randomNumber) {
            alert("You win");
            wins++;
            $("#wins").html("Wins : " + wins);
            startGame();
    
    
        } else if (totalScore > randomNumber) {
            alert("You lose");
            losses++;
            $("#lose").html("Losses : " + losses);
            startGame();
        }
    
    
    });
    
    }
    






   




//pseudo coding
//start with random number to match
//4 crystals each generate a random number
//show total amount in the counter the crystals are adding up
//if counter matches random number wins++
//if counter goes over random number losses--
//after win or loss reset crystals and random number with new numbers

