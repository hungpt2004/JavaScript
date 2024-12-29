// import {add} from './utils.js';

// console.log(add(1,5));

const myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello World';

let iceCream = "chocolate";
if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
} else {
//   alert("Awwww, but chocolate is my favorite…");
}

var fullName = "Hung Pham Trong"
var age = 26;
console.log(fullName);

//SetTimeOut
setTimeout(function(){
    // confirm("Xac nhan chua ?")
},1000)

//SetInterval
setInterval(function(){
    // confirm("Xac nhan chua ?")
},1000)


//Normal function
function Logger(log){
    console.log(log);
}

//Expression function
// const Logger = function(log){
//     console.log(log);
// }

// //Arrow function
// const Logger = (log) => {
//     console.log(log);
// }

//Viết sau => thì tự hiểu là return giống get OOP Dart
const sum = (a,b) => a+b;

//Return object
const object = (a,b) => ({a:a, b:b})

//Constructor
const Course = function(name, price) {
    this.name = name;
    this.price = price;
}

let course = new Course('Java',1000);

console.log(course)

//Enhanced ojbect literals
var nameEx = "Nguyen Thi Ha My"
var uni = "Rmit"

var ex = {
    nameEx,
    uni,
    getName() {
        return nameEx;
    }
}

console.log(ex)


/**
 Sử dụng reduce xử lý và tích lũy các giá trị trong một mảng để tạo ra 1 KQ
 - Hoạt động bằng cách lập qua từng phần tử của mảng
 - Giá trị tích lũy kí hiệu là accumulator
 - 1: name
 */
function arrToObj(arr) {
    return arr.reduce((accumulator, [key,value]) => {
       accumulator[key] = value;            
       return accumulator;
    },{});
 }
 
 const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)
 
 const obj2 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
 ])
 console.log(obj2)


 var video = {
    title: 'Sex',
    duration: 100,
    actor:'MariaOzawa'
 };

 //Thủ công
//  const title = video.title;
//  const duration = video.duration;

 //Destruturing
//  const {title, duration, actor} = video;
//  const {title, duration} = {title:'JAV',duration:200}
 const {title, ...conlai} = video;

 console.log(title);
 console.log(conlai)


 //Destructuring
 const {a,b,...c} = [1,2,3,4,5,6];
 console.log(a,b,c);

//  const {a, b, ...c} = {a: 1, b: 2, c: () => 3, d: 4}
//  console.log(a, b, c)
 // 1, 2, {d: 4, c: f} với f = () => 3
 //c là 1 đối tượng chứa các thuộc tính còn lại c = {c:()=>3, d:4}


//Spread Operator
//Array
const first = ["MariaOzawa","Yukuri Inu"];
const second = ["Tokuda","Hotaro Kashi"];
const full = [...first,...second];
//Convert từ array về chuỗi String
console.log(full)

//Object
const themeData = {theme:'bright', isDark:false}
const shallowCopy = Object.assign({},themeData);

console.log(shallowCopy);

//Spread
const shallowCopy2 = {...themeData}
console.log(shallowCopy2)

//Spread Function
//Arrow function không có chữ cái function
const sumMany = (a,b,c) => a+b+c;
const number = [1,2,3];
console.log(sumMany(...number))


//Rest
const [e, f, ...rest] = [1, 2, 3, 4, 5];
console.log(e);    // 1
console.log(f);    // 2
console.log(rest); // [3, 4, 5]

var test = {
    name:'Hung',
    price:1233,
    image:'image-address',
}

var {name, description = 'default'} = test;

console.log(name),
console.log(description)


//Object ben trong object
var test2 = {
    name:'Hung',
    price:1233,
    image:'image-address',
    children: {
        name:'Trong'
    }
}

var {name:parentName, children:{name:childName}} = test2;

console.log('Parent Name:',parentName);
console.log('Children Name:',childName);

var numberArray = [1,2,3,4];

var [n1,n2,...n] = numberArray

//n => return [phan tu con lai]
//...n => return phan tu con lai 
console.log(n);

// function logger({name,price}){
//     console.log(name);
//     console.log(price);
// }

function logger(obj){
    console.log(obj.name);
    console.log(obj.price);
}

logger({
    name:'JS',
    price:1200
});


arrayFunction([2,6,3,5,6,7,1]);

function arrayFunction([a,b,...phanConLai]){
    console.log(a);
    console.log(b);
    console.log(phanConLai);
}

Logger("Message....")
