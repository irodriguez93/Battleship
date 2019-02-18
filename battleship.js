let randomloc= Math.floor((Math.random()*4)+1);

let location1 = randomloc;
let location2 = location1+1;
let location3 = location2+1;

let hits = 0;
let guess;
let guesses = 0;

let isSunk = false;

function doIt(param) {
     test= 12423;
}
var test = 1;
doIt(test);
console.log("test is:   " + test);


while (isSunk==false){

  guess = prompt("Ready aim fire!!!!! (enter a number from 0-6): ");
  console.log(guess)
  if (!/^[0-6]$/.test(guess)){
    alert("Enter a valid number between 0-6!!")
  }else {
      if (guess == location1 ||guess==location2|| guess == location3) {
        hits = hits+1;
        alert("Hit!")
      }

    guesses +=1;
  }

  if (hits==3){
    isSunk=true;
    alert("you sank my ship");
    alert("You took " + guesses+" gueses to destroy the ship and your accuracy was " + hits/guesses +"%")
  }
  /// get user guesses
  //compare shipts to imput
  //if gues is ivalid tell to enter valid number
  //else
  //add one to the guesses
  //if numer of hits is 3 set sunk to tru
  //tell user he sank battleship
//end loop

//give stats
}
