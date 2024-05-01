//------ Dùng để in ra văn bản --------
// console.log("Hello");
// console.log("I like Pizaa !"); 

//------ Dùng để in một alert trong trang web -------
// window.alert("This is an alert");
// window.alert("I like pizza!");

//------ lấy phần tử theo ID bên HTML ------
// document.getElementById("myH1").textContent= "Hello";
// document.getElementById("myP").textContent="I like pizza !";

//------ Khai báo và In ra thông tin với số liệu ------
// let x;                 - declare
// x = 100;               - assigment
// console.log(x);
// let age = 20;
// let price = 10.99;
// let gpa = 2.1;
// console.log(`You are ${age} years old`); -> 

//------ In thông tin bên trang HTML ------
// let fullName = "Bro Code";
// let age = 25;
// let student = false;
// document.getElementById("p1").textContent =  `Your name is ${fullName}`;
// document.getElementById("p2").textContent =  `Your age is ${age}`;
// document.getElementById("p3").textContent =  `Enrolled: ${student}`;


//------ Cho phép người dùng nhập thông tin từ bàn phím -------
//- Cách 1: window.prompt -> hiện giống window.alert
// let username;
// username = window.prompt("What is your username ?");
// console.log(username);

// - //Cách 2: HTML textbox;
// let username;
// document.getElementById('mySubmit').onclick = function(){
//     username = document.getElementById('myText').value;
//     console.log(username);
// }


//------- Type conversion = change the datatype of a value to another (strings, numbers, booleans) -----
//Example 1
// let age = window.prompt('How old are you?');
// console.log(typeof age);
// age = Number(age);
// console.log(typeof age);
// age += 1;
// console.log("Your age is ",age,"years old");

//Example 2
// let x,y,z;
// x = Number('3.14');
// y = String(3.14);
// z = Boolean('3.14');
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//------- Right angled triangle --------
// c = sqrt(a^2 + b^2);

//Cách 1
// let a, b, c;
// a = Number(document.getElementById('first').value);
// b = Number(document.getElementById('second').value);
// c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("Side c: ", c);

//Cách 2
// let a, b, c;
// document.getElementById("mySubmit").onclick = function (){
//     a = document.getElementById("first").value;
//     a = Number(a);

//     b = document.getElementById("second").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
//     document.getElementById("cLabel").innerHTML = "Side C: "+c;
// }


// ------- DECREASE/RESET/INCREASE -------
// let ずつ = 0;

// document.getElementById('decrease').onclick = function (){
//     ずつ -= 1;
//     document.getElementById('countLabel').innerHTML = ずつ;
// }
// document.getElementById('reset').onclick = function (){
//     ずつ = 0;
//     document.getElementById('countLabel').innerHTML = ずつ;
// }
// document.getElementById('increase').onclick = function (){
//     ずつ += 1;
//     document.getElementById('countLabel').innerHTML = ずつ;
// }


// -------- RANDOM NUMBER GENERATOR (TAI/XIU) --------
//let x = Math.floor(Math.random() * 20); //Đây là random từ 0 -> 20
//let x = Math.floor(Math.random() * 20) + 1; //Đây là random từ 1 -> 20
// let x = 0;
// let y = 0;
// let z = 0;
// var result = 0;
// document.getElementById('xSubmit').onclick = function (){
//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;
//     result = x+y+z;
//     document.getElementById('xLabel').innerHTML = result; 
//     if(result % 2 == 0){
//         document.getElementById('resultLabel').innerHTML = 'Tài';
//     } else {
//         document.getElementById('resultLabel').innerHTML = 'Xỉu';
//     }
// }


// Useful String Properties & Methods 
// slice() extracts a section of a string and returns it as a new string 
// without modifying the original string

// let fullName = "Snoop Dogg";
// let firstName;
// let lastName;

// firstName = fullName.slice(0,4);
// lastName = fullName.slice(4);

// firstName = fullName.slice(0,fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ")+1);

// console.log(firstName);
// console.log(lastName);


//59:12
//13. Method chaining
// let userName = "bro";
// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// console.log(letter);

//1:08:05
//15.checked property
// document.getElementById("myButton").onclick = function () {
//     const myCheckBox = document.getElementById("myCheckBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const masterBtn = document.getElementById("masterCardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");

//     if(visaBtn.checked){
//         console.log("Payment by visa card");
//     }
//     else if(masterBtn.checked){
//         console.log("Payment by master card");
//     }
//     else if(paypalBtn.checked){
//         console.log("Payment by paypal")
//     }
//     else {
//         console.log("Please choose payment method");
//     }

//     if(myCheckBox.checked){
//         console.log("You are subcribed !");
//     }
//     else {
//         console.log("You are not subcribed");
//     }
// }


//1:15 
//16.Switches
// document.getElementById("myButton").onclick = function () {
//     let grade = document.getElementById("grade").value;
//     grade = Number(grade);
    
//     while(isNaN(grade) || grade < 0 || grade > 100){
//         grade = window.prompt("Please enter your grade (0-100): ");
//         grade = Number(grade);
//     }

//     switch(true){
//         case grade >= 90:
//             console.log("You did great !");
//             break;
//         case grade >= 80:
//             console.log("You did it good");
//             break;
//         case grade >= 70:
//             console.log("You did it okay !");     
//             break;
//         case grade >= 60: 
//             console.log("You passed...barely");
//             break;
//         default:
//             console.log("You failed in the exam !");
//     }
// }

//1:37:06
//Nested loop = vòng lặp lồng nhau
// let symbol = window.prompt('Enter a symbol to use: ');
// let rows = window.prompt('Enter # of rows: ');
// let columns = window.prompt('Enter # of columns: ');

// for(let i = 1; i <= rows; i++){
//     for(let j = 1; j <= columns; j++){
//         document.getElementById('myRectangle').innerHTML += symbol;
//     }
//     document.getElementById('myRectangle').innerHTML += i;
// }

//1:38:11
//Function = define code once, and use it many times;
//           to perform some code, call the function name
let username = 'Hung';
let age = 21;
function happyBirthday(){
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday dear',username);
    console.log('You are ',age,' years old!');
}

happyBirthday();