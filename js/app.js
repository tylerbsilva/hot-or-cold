//Hot and Cold, JS App written by Tyler Silva

/* Global Variables */


var randomNumber = getRandom();
var guesses = 1;

/* Functions */

function getRandom() {
  return Math.floor((Math.random() * 100) + 1);
}

// grabs the input from the user and returns input if it is a number between 1-100, else false
function getGuess(){
  var input = parseInt($("input[name='userGuess']").val().trim());
  guesses += 1;
  if (input <= 100 && input > 0){
    $("input[name='userGuess']").removeAttr( 'required' );
    return input;
  } else {
    return false;
  }
}

// checks if num matches randomNumber
function correct(num){
  if (randomNumber == num) {
    return true;
  } else {
    return false;
  }
}

// checks if num is within 5 of randomNumber
function within5(num){
  if (randomNumber + 5 >= num && randomNumber - 5 <= num) {
    return true;
  } else {
    return false;
  }
}

// checks if num is within 10 of randomNumber
function within10(num){
  if (randomNumber + 10 >= num && randomNumber - 10 <= num) {
    return true;
  } else {
    return false;
  }
}

// checks if num is within 20 of randomNumber
function within20(num){
  if (randomNumber + 20 >= num && randomNumber - 20 <= num) {
    return true;
  } else {
    return false;
  }
}

// checks if num is within 30 of randomNumber
function within30(num){
  if (randomNumber + 30 >= num && randomNumber - 30 <= num) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  // click on new game - reset
  $(".new").click(function(){
    randomNumber = Math.floor((Math.random() * 100) + 1);
    guesses = 1;
    $("#count").text(guesses);
    $(".guessForm").show();
    $("#feedback").text("Make your Guess!");
    $('#guessList').text('');
  });

  // guess number
  $('.guessForm').submit(function(e) {
    //prevent default submission
    e.preventDefault();
    // get input and check if number
    var guess = getGuess();
    $("#count").text(guesses);
    $('#userGuess').val("");
    // if input is a number, check the conditions
    if (guess) {
      // checks if the guess is correct
      if (correct(guess)) {
        $("#guessList").append("<li class='correct'>" + guess + "</li>");
        $(".guessForm").hide();
        $("#feedback").text("NICE JOB! The number was " + randomNumber);
      }
      // check if within 5
      else if (within5(guess)) {
        $("#guessList").append("<li>" + guess + "</li>");
        $("#feedback").text("ON FIRE!!!");
      }
      // check if within 10
      else if (within10(guess)) {
        $("#guessList").append("<li>" + guess + "</li>");
        $("#feedback").text("Hotter");
      }
      //check if within 20
      else if (within20(guess)) {
        $("#guessList").append("<li>" + guess + "</li>");
        $("#feedback").text("Warmer");
      }
      //check if within 30
      else if (within30(guess)) {
        $("#guessList").append("<li>" + guess + "</li>");
        $("#feedback").text("Lukewarm...");
      }
      // Default if doesn't match any conditions
      else {
        $("#guessList").append("<li>" + guess + "</li>");
        $("#feedback").text("COLD AS ICE.");
      }
    }
  });
});
