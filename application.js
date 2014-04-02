$(document).ready(function() {
//Sets random number for game//
var number = Math.floor((Math.random()*100)+1);
	console.log(number);
$("#right").click(function() {
    document.getElementById('twilight').play();
$('#Submit').click(function(e) {
e.preventDefault();
var myNumber = $("#myNumber").val();
diff = Math.abs(myNumber - number);
var prevGuesses = [];
var response = "";

	if (myNumber == number)
	{
		response = "You got the number!";
		document.getElementById("response").style.color="green";
		
	}
	else if (diff > 5 && diff < 15)
	{
		response = "Getting warmer!";
		document.getElementById("response").style.color="orange";
	}
	else if (diff <= 5 && diff > 0)
	{
		response = "Very hot!";
		document.getElementById("response").style.color="red";
	}
	else if (diff > 15)
	{
		response = "Cold!"
		document.getElementById("response").style.color="blue";
	}
	else 
	{
		response = "Input a number please!";
		document.getElementById("response").style.color="black";
	}
    
$("#response").hide().html(response).fadeIn ('slow');
$("#myNumber").val("");
/*//enter key submits
   $("#myNumber").keypress(function (e) {
        var key = e.which;
        if(key == 13) {
            $("#submit").click();
            return false;  
        }
});
*/
//collects past guesses
prevGuesses.push(" " + myNumber + " ");
$('#guesses').html(prevGuesses.toString());

});

//Starts a new game
$('#newgame').click(function() {
number = Math.floor((Math.random()*100)+1);
	console.log(number);
$("#myNumber").val("");
$('#response').html("");
$('#guesses').html("");
});


});