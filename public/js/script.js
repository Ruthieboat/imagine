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
  
  
  
  
  
  
  
  
  
  
  
  
  