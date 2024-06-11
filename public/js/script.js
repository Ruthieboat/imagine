const btn = document.getElementById("btn");
btn.onclick = function () {
    const name = prompt("Enter your full name.");
    document.getElementById("name").innerText = name;
}


// variables
const pi = 3.142;
let username ="ruthieboat";
let age = 101;
let present = false;

// objects
const person = {
    username: "ruthieboat",
    age: 101,
    present: false,

    child: {
        name: "Mickey Mouse",
        friend: {
            name: "biggie",
        }
    }
}
console.log(person.username);
person.age = 105;
console.log(person);


// arrays 
const bottle1 = {
    size: "large",
    colour: "yellow" 
  }
  
  const bottle2 = {
    size: "small",
    color: "blue"
  }
  
  const bottles = [bottle1, bottle2];
  
  bottles.push (bottle1);
  bottles.push (bottle2);
  bottles;
  bottles[1].color;
  bottles[1].size;
  
  const date = new Date();
  date.toString();
  date.getDay();
  
  
  
  // if/else
//   const age = 18;
  if(age>= 18)  {
    "You are true"
  }else{
    "You are false"
  }
  
  
  // for Loop; i++ is the same as i+=1
  for (let i = 0; i <= 5; i+=1) {
   console.log("We did it!", i);
  }
  
  // for the bottle example
  for (let i = 0; i < bottles.length; i++) {
   console.log(bottles [i]);
  }
  
  
  
  // functions
// defining a function
function login (username, password) {
  // validate username and password
  if (!username|| !password) {
    return "Username or password not provided";
  }
  // verify username and passwordad
  if (username =="ruthieboat" && password == "1234") {
    return "User is logged in";
  } else {
    return "Invalid User name or password";
  }
}
  
// invoking a function
login("ruthieboat" )



// basic arithmetic operations
11+12;
43-12;
1+0.5;
45/7;
5*3;
14%3;  

Math.floor(45/24);
Math.random()*1000;
Math.max (34, 35, 37)

// PEMDAS - parenthesis, exponents, multiplication, division, addition, subtraction

2*3+4-5/2;
2*(3+4)-5/2;


// strings can be convereted  to numbers although user inputs are all recognised as strings
"2"+"2";
"2"-"2";
Number ("ty") + 2;

// strings in javascript
// concatenation

const firstname = "Ruth";
const lastname = "Boateng";
firstname + " "  +lastname;

// templae literal
`${firstname} ${lastname}`;


// string methods or functions
// length-is not a function but a method
let fullname = "Ruth Boateng";
fullname.length-1;

// toUpperCase
fullname.toUpperCase();

fullname.toLowerCase();

fullname.charAt(6);

fullname.slice(7, 11);
// split picks all characters individually
fullname.split('');

fullname.replace("Ruth", "Ruthie");
// index is the preceeding characters before the selected string
fullname.indexOf("uth")


// string conversions

"1234"

Number("3.243");
parseInt("3.243");
parseFloat("3.243")

let amount = 18000
console.log (`GHS${amount}`)

amount.toString();


// write a function that will add a participant to google classroom

const participants = [];
function addParticipant(email) {
  // check if email was provoded
  if (!email) {
    return "No email provided";
  }

  // check if email is valid
  if (!email.includes("@")) {
    return "Invalid email provided";
  }
  // add email to participants
  participants.push(email);
  return "Participant added";
}
addParticipant("boatruthie@gmail.com");
addParticipant("ruthboatengs1@gmail.com");
participants;



// arrays in javascript
// const users = [
//   {
//     username: "ruthieboat33",
//     password: "1234",
//     email: "ruthboatengs1@gmail.com",
//   },
//   {
//     username: "ruthieboat",
//     password: "12345",
//     email: "ruthboatengs112@gmail.com",
//   },
// ];

// users;
// write a function that will take a user with a first name and last name and return fullname (ruthies attempt)

// firstname = "Ruth ";
// lastname = "Boateng";
// const user = {
  // firstname: "Ruth",
  // lastname: "Boateng",
// };
// function addUser(name) {
  // return firstname + lastname;
// }
// addUser();

// write a function that will take a user with a first name and last name and return fullname (michael's)

function fullName(user) {
  return {
    ...user,
    fullName: `${user.firstname} ${user.lastname}`
  };
}

const user = {
  firstname: "Ruth",
  lastname: "Boateng"
}
fullName(user);

// array map
const users = [
  {firstname: "Ruth", lastname: "Boateng"},
  {firstname: "Elon", lastname: "Musk"},
  {firstname: "Bob", lastname: "Kaufmann"},
  {firstname: "Isaac", lastname: "Boateng"},
  {firstname: "Amaris", lastname: "Campbell"},
]
  
// users.map(fullName);
 


// square of numbers
function numSquare(number) {
  return number ** 2;
}
numSquare(4);

const numbers = [9,8,7,6,5];
numbers.map(numSquare);


// array filter
function isEven(number){
  return number % 2 === 0;
}
isEven(15678567890);
numbers.filter(isEven);







































  
  
  
  
  
  
  
  
  
  