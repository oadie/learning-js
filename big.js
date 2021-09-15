//alert('ddd');

var n=[];

while (true){
    var add=prompt('add a num: '); 
   
    if (add=='break'){
        break;
    }

    var add=Number(add)

    if (isNaN(add)){
        alert('invalid input, try again')
        continue;
    }  
    else{
        n.push(add);
        continue;
    }
}
n.sort();
n.reverse();
console.log(n);
console.log(n[0]);

/*
function mayor(){
    var numeros=[];
    numeros[0]=prompt('Teclea un digito');
    numeros[1]=prompt('Teclea un digito');
    numeros[2]=prompt('Teclea un digito');
    console.log(numeros);
    numeros.sort(function(a, b){return a - b});//ordenar
    console.log(numeros);
    numeros.reverse(); //mayor a menor
    console.log(numeros);
}
mayor();
*/