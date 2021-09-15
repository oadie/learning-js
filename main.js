//alert('hola mundo');
//comentario
/*
comentario multilinea
*/
var name='Dieg';
var secondname='Ort';
var years=23;

let hola='saludo';

let phone;
phone=1234;

/*
alert(name); // return value
*/
console.log(typeof(name));
console.log(typeof(years));

//Constant
//The value can't change
const gravity=9.81;

//Differences between var n' let
var number=40;

if(true){
    var number=50;
    console.log(number);
}
console.log(number);

var number2='100';
console.log(number2);
let number3='3';
console.log(number3);
if(true){
    let number2='5';
    console.log(number2);
    console.log(number3);
}

console.log(number2);
/*
let is kinda var but he only can live insaide his house
var is sabage n' all terrain
let is a refined pet and it can´t be sabage
let exist insaide a house and he dosn't mattter what is outside his house
let lives in his house but inside that house exist more houses he can leve there too
*/