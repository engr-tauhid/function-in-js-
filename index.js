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