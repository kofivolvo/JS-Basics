//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
 if(name == 'Tyler'){
   return true;
 }
  return false;
}

//Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var answerP = prompt("pls enter ur nam3");
  //console.log(answerP);
  return answerP;


}  //Code Here
 //calls function filled in with parameters

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
  var name = getName(); //invokes function and assings it to a value.
  //console.log(name);
  alert('Welcome, ' + name);


}  //Code Here
welcome();



//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //An argument in context with functions is the actual value that is passed to the function ( as input) ,when it is called.

  //However parameter refers to the variables that are used in the function declaration/definition to represent those arguments that were send to the function during the function call.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// var falsyValues[0, '', undefined, null, false, NaN];



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name
var swagDoodle = "Ian";

function myName(name) {
  name = swagDoodle
  return name;

}
myName();



//Now save the function definition of myName into a new variable called newMyName
var ayo = myName()

function newMyName(ayo){

  return ayo;

}
newMyName();
//console.log(newMyName);


//Now alert the result of invoking newMyName


alert(newMyName);//funky stuff happening solve probelm later pleighboi


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.
var num = 2;

var x = function() {
  if(2 == num){
    return "Ian";

  }

};

function outerFn() {
  if(1==1);
  return x;

};




//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();  //Code Here

//Now invoke innerFn.
