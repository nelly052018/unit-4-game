$(document).ready(function () {

    //Generate new random number at start of game between 19-120
    //Display random number 
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#randomnumber").text(randomNumber);




    //Create variables for wins, losses, total score
    var wins = 0;
    var losses = 0;
    var totalScore = 0;


    //Display wins, losses and total score
    $("#wins p").text(wins)
    $("#losses p").text(losses)


    //Generate random number for each crystal between 1-12
    function getRandomNumbers() {
        return Math.floor((Math.random() * 12) + 1);
    }

    //Create variables for all 4 crystals
    //call function
    var crystaloneRandom = getRandomNumbers();
    var crystaltwoRandom = getRandomNumbers();
    var crystalthreeRandom = getRandomNumbers();
    var crystalfourRandom = getRandomNumbers();

    //Reset function for all variables
    function reset() {
        randomNumber = Math.floor((Math.random() * 120) + 19);
        $("#randomnumber").text(randomNumber);
        crystaloneRandom = Math.floor((Math.random() * 12) + 1);
        crystaltwoRandom = Math.floor((Math.random() * 12) + 1);
        crystalthreeRandom = Math.floor((Math.random() * 12) + 1);
        crystalfourRandom = Math.floor((Math.random() * 12) + 1);
        totalScore = 0;
        $("#totalscore").text(totalScore);
    }

    //Create function to determine if win or loss
    //Compare total score to random number
    //If total score number=== random number----Win
    //If total score number is above > random number----Lose

    function total() {
        $("#totalscore").text(totalScore);
        if (totalScore > randomNumber) {
            alert("You lost")
            losses++
            console.log(`Wins: "${wins}" Losses: "${losses}"`)

            $("#wins p").text(wins)
            $("#losses p").text(losses)
            reset()
        }
        else if (totalScore === randomNumber) {
            alert("You won")
            wins++
            $("#wins p").text(wins)
            $("#losses p").text(losses)
            reset()
        }
        else {
            console.log("Keep Playing!!!")
        }
    }


    //Generate click event for each crystal



    $("#crystalone").click(function () {
        console.log(crystaloneRandom);
        //Add crystal one's value to totalScore
        totalScore += crystaloneRandom
        console.log(totalScore)
        total()
        $("#crystalone1").text(crystaloneRandom);
    });
    $("#crystaltwo").click(function () {
        console.log(crystaltwoRandom)
        //Add crystal two's value to totalScore
        totalScore += crystaltwoRandom
        total()
        $("#crystaltwo2").text(crystaltwoRandom);

    });
    $("#crystalthree").click(function () {
        console.log(crystalthreeRandom)
        //Add crystal three's value to totalScore
        totalScore += crystalthreeRandom
        total()
        $("#crystalthree3").text(crystalthreeRandom);
    });
    $("#crystalfour").click(function () {
        console.log(crystalfourRandom)
        //Add crystal four's value to totalScore
        totalScore += crystalfourRandom;
        total();
        $("#crystalfour4").text(crystalfourRandom);
    });








});