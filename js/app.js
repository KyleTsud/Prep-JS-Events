/*Exercise 1.  Fill in the correct id to target the paragraph tag*/
  function fontSize(){
    document.getElementById("biggie").style.fontSize = "200%";
  }

 /*Exercise 2. change the font color to red*/
  function colorMeBadd(){
    document.getElementById("colors").style.color = 'red'; 
  }

/*Exercise 3. fill in the spaces to make this function operate:*/
  function showAnswer(){
    document.getElementById("pirate").innerHTML = " C (da sea get it?) arrrr!";
  }

/*Exercise 4.  Instruct the following function to display the message "My name is Lee, Brrruuuce Lee!" in the paragraph element after the button is clicked.*/

  function kungfu(){
    document.getElementById("beWater").innerHTML = "My name is Lee, Brrruuuce Lee!";
  }


//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){
/*Exercise 5. Add an event listener to the quotes button that will display a quote after it is clicked on.</p>*/

var firstQuote = "Our lives are defined by opportunities; even the ones we miss.";

document.getElementById("Benjamin").addEventListener('click', sayQuote);

function sayQuote(){
  document.getElementById("Benjamin").innerHTML = firstQuote; 
}


/*Exercise 6. Add another event listener to the image below that will display an inspirational quote from our beloved DJ Khaled after it is clicked</p>*/

document.getElementById("khaled").addEventListener("click", rap);

function rap (){
  document.getElementById("wedabest").innerHTML = "another one, another one, another one...and another one";
}


/*Exercise 7.  Generate a random quote from clicking on a button*/
var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

document.getElementById("change").addEventListener("click", sayQuote);

function sayQuote (){
  var max = quotes.length;
  var randomX = Math.floor(Math.random()*max);
  document.getElementById("displayQuotes").innerHTML = quotes[randomX];
}
                                                   
/*Exercise 8. Create an event listener that will show and hide the message when clicking on the button.*/



/*Final Boss:
Make a visual list of the items in the orders array. When clicking on the product, you must show and hide the price for that item.*/


var orders = [{product: "Finger Toothbrush", price: 9.99}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", price: 500.01}, {product: "Goldfish Aquairum Phone Booth", price: 199.99}, {product: "Woof Washer 360", price: 9.99}, {product: "Sauna Pants", price: 39.95}, {product: "Noiseless Mute Karaoke Microphone", price: 79.99}, {product: "Necktie Umbrella", price: 16.86}];


};







