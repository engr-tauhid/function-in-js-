function flightBooking (
    filightName,
    passeger =1
){
let price = 199*passeger;
return `sir your flight name is ${filightName} and you have booked for ${passeger} ${passeger==1? 'person': 'persons'} and the price is ${price}`
}
console.log(flightBooking('l123',3));

///function premitive value vs referance type value

let flightName = 'AZ123';
const person = {
    name : "Tauhid Islam Rafi",
    passport : 12345343
}

function Passengerchack (flightNumber , obj){
    flightNumber = 'Az23232';
    obj.name = 'Mr' + obj.name;
    let chack = obj.passport === 12345343 ? 'Sir you are welcome' : 'Sir your passport is wrong ';
    return chack;
}
console.log(flightName, person)
console.log(Passengerchack(flightName,person))
console.log(flightName, person);

// call back function higheroder and fast class function 
let num = 1
document.body.addEventListener('click',function(){
    console.log(
        "scrolling"+num
    )
    num++
})
const fun = function(){
    console.log(
        "scrolling"+num
    )
    num++
}
document.body.addEventListener('click',fun)

//text convator using callback function 
let sentence = 'Hi iam tauhid islam rafi'
const fastwordupper = (sentence)=>{

    let [arr,...others] =sentence.split(' ');
    return `${arr.toUpperCase()} ${others.join(' ').toLowerCase()}`
}
const fastlatterupper = function(sentence){
    let arr = sentence.split(' ');
    let newarr = []
for (let x of arr ) {
    newarr.push(x[0].toUpperCase()+x.slice(1,x.length))}
    return newarr.join(' ')
}

const transfrom = function (sentence , fun ){
    return `Your input is ${sentence} and the function that gonna work is clled ${fun.name} and final work is (${fun(sentence)})`
}
console.log(transfrom(sentence,fastlatterupper))
const greet = (greet)=>{
    return (Name)=>{
        console.log(`${greet} ${Name}`)
    }
}
greet('hi')('rafi')
const f = name => hi => console.log('hi man')
f()()
// revarce sting 
function revarce (str){
    let arr = []
    for (let i = str.length-1 ; i>=0;i--){
        arr.push(str[i])
    }
    console.log(arr.join(''))

}
revarce('hi am ')
// now preatice once more and rewrite the code by many different way and many more
/// lets start  function again until video number 8
/// fast one is defualt function peramiters

// function booking (fligt, person = 1, price=199*person){
//     return `Your flight name is ${fligt} and its booked for ${person} ${person==1 ? 'person':'persons'} and the price of this is ${price}`
// }
// console.log(booking ('l123'))
///function can't change value of premitive data but it can change the value of refarance type data like object
// function change (flight, obj){
//     flight = 'L123'
//     obj.name = 'Mr'+obj.name
//     return `Sir ${obj.pass == 12345678 ? 'you are welcome': 'your pass is wrong'}.....`

// }

// const Peter = {
//     name : 'Peter',
//     pass : 12345678,
//     flight:'1232l'
// }
// let flight = 'L3234'
// console.log(change(Peter.flight,Peter))
// console.log(change(flight,Peter))
// console.log(flight,Peter)
// function createpass(obj){
//     obj.pass = Math.trunc(Math.random()*10000000)
//     console.log('pass created or change')
// }
// createpass(Peter)
// console.log(change(flight,Peter))
// console.log(flight,Peter)
// const rafi ={
//     name :'Rafi',
// }
// createpass(rafi)
// console.log(rafi)
///Higher oder function and call back function 
// function touppercase (str){
//  return str.toUpperCase()
// }
// function transformar (str , fn){
//     console.log(`sir your transform funciton is ${fn.name} and the str is transformed is ${str} and the final result is ${fn(str)}`)

// }
// transformar(
// 'Hi i am adshfkljdsh dshfklajsdh',touppercase
// )
// let num = 0
// function clicke (){
//     console.log(
//         'ckicked'+num
//     )
//     num++
// }
// clicke()
// document.body.addEventListener('click',clicke)
/// function returning anothe function

// function greeting (greet){
//     return function (name){
//         console.log(`${greet} , ${name}`)
//     }
// }
// let greet = greeting('hey')
// greet('Rafi')
// greeting('Hi')('tauhid')

// with arrow function 
// const greeting = greet =>name=>console.log(`${greet} ${name}`);
// greeting('hey')('Rafi')
/********************************
 * 
 * 
 * 
 * 
 */
// the this keyword and the work of apply ,call 

//
// BdWings.booking(213123, 'Rafi')
// console.log(BdWings)
/* 
Now the topic come out that is now we have another object called Cdwings 
for that we need the name code and booked object now then we have to call the same 
function booking but waht have we 

*/
// /


// const booking = BdWings.booking
//now its not working why beacuse we have seen that the booking function is not a mathod any more kine its is on the object now its a function on its own so the this key word is not working so we need to call the funciton using 3 mathod 
// CotWings.booking(2123,'alesa')
// console.log(booking)
// booking.call(CotWings, 1212 , 'Elesa')
// console.log(CotWings)
// booking.call(BdWings,324,'Tauhid')

// apply mathod it is the same as call but in peramiter its take an array of it but we can do it in also call so we dosent work with that any more

// booking.apply(CotWings, [123321,'Sam'])

// // booking.call(CotWings, ...[23123,'Jon'])
// const bookedCot = BdWings.booking.bind(CotWings)
// bookedCot(1234122,'asdf')
// const bookedCotpreset = BdWings.booking.bind(CotWings,12323)
// bookedCotpreset('asdf')
// //add tex or vat by function returning another function and also with bind mathod 
// // fast with bind mathod
// const add_tex = function(rate , value){
//     return value+ value*rate;
// }
// console.log(add_tex(.213,100))
// const fixedRate = add_tex.bind(BdWings , .10) this will work but in this case
// we don't need to define the this keyword but in bind mathod we need to define the this key word so we write null or some other value on it 
// /
// ok now a function returning another function same task 
// const addreatedtex = value=>rate=> value+ value*(rate||.1)
// console.log(addreatedtex(100)(4))
// lets have a chat about some other thing in this keyword like how its work on function when we called it in dom 
// BdWings.planes = 100;
// BdWings.buyplan = function(){
//     console.log(this)
//     this.planes++
//     console.log(this.planes)
// }
// document.querySelector('.idSub').addEventListener('click',BdWings.buyplan.bind(BdWings))/*in hare its called the class id because now this keyword thikg he is the part of .idSubclass so the resuld is nan we cant use call mathod because then the call mathod call the function but we need a new function so the bind mathod is batter sute for this perticular function */
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        let answers =Number( prompt(`${this.question } 
   ${this.options.join('\n')}:`))
   if (typeof answers == 'number' && answers<=this.options.length ){
    this.answers[answers]++
    console.log(poll.answers)
    this.displayResult()
   }
   else console.log('some thing wrong')
   },
   displayResult(type = 'array'){
    if (type == 'array' ){
        console.log(this.answers)
    }
    else if (type == 'string'){
        console.log(this.answers.join(', '))
    }

   }

   

};
console.log(poll.answers)
document.querySelector('.NameSub').addEventListener('click',poll. registerNewAnswer.bind(poll))
// poll.registerNewAnswer(poll)
/*Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1"**/
