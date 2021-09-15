/* alert('s') */

var a=parseInt(prompt('number a: '));
if (isNaN(a)){
    alert('invalid input, try again');
    var a=parseInt(prompt('number a: '));
}

var b=parseInt(prompt('number b: '));
if (isNaN(b)){
    alert('invalid input, try again');
    var b=parseInt(prompt('number b: '));
}

function ops(){
    document.write (
        a,'+',b,'= ',a+b,'</br>',
        a,'-',b,'= ',a-b,'</br>',
        a,'*',b,'= ',a*b,'</br>',
        a,'/',b,'= ',a/b
    );
}

ops();