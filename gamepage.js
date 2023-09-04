playername = localStorage.getItem("player_name");

var y = Math.floor(Math.random() * 10 + 1);

var guess = 0;

function submit()
{
 
var x = document.getElementById("guessField").value;

if (x == y)
{
    guess = guess + 1;
    alert("CONGRATULATIONS!!! "+playername+"  YOU GUESSED IT RIGHT IN "
    + guess + " GUESS")
}

else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}

function playAgain()
{
   document.getElementById("guessField").value = " ";
    y = Math.floor(Math.random() * 10 + 1);
    guess = 0;
}