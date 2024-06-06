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




















  
  
  
  
  
  
  
  
  
  