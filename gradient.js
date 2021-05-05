var css =document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function setGradient(){
    body.style.background=
    "linear-gradient(to right ,"
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent=body.style.background+";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);


/* function winBattle(bool) {
    return;
}
var experiencePoints = winBattle()? 10:1; */

/* function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
} */

/* let  a = 'test';
let b = true;
let c = 789;
var a = 'test2'; */

/* var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const { firstName, lastName, age, eyeColor } = person; */
/* 
const first =()=>{
    const greet='Hii';
    const second=()=>{
        alert(greet);
    }
    return second;
}

const newFunc=first();
newFunc();

 */

/* closures */

/* const curriedMultiply=(a)=>(b)=>a*b;
curriedMultiply(3);

const object4 = {
a:function(){
    console.log(this);
}
} */

/* class Player{
    constructor(name,type){
        console.log('player',this);
         this.name=name;
         this.type=type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, and I am a ${this.type}`);
    }
}

class Wizard extends Player{
        constructor(name,type){
            super(name,type)
        }
        play(){
            console.log(`weeee i'am a ${this.type}`);
        }
}

const wizard1 =new Wizard('Akshay','Danger');
const wizard2 =new Wizard ('Amruta','Avenger');

 */

/* const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
let array1=[]

array.forEach(user=>{
    let{username}=user;
    username=username+"!";
    array1.push(username);

})
console.log(array1);

const maparray=array.map(user=>{
    let { username }=user;
    return username+"?";
})
console.log(maparray);


 */

