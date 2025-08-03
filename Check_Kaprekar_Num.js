function input()
{
 let number = parseInt(document.getElementById('inputNumber').value, 10);
let sq=square(number);
if(number!=1)
{
let arr2=spliting(sq);
let sumup=sum(parseInt(arr2[0],10),parseInt(arr2[1]),10);
let result=compare(sumup,number);
document.getElementById('output').innerHTML=result ? `${number} is a Kaprekar number.` : `${number} is not a Kaprekar number.`;}
else
document.getElementById('output').innerHTML= `${number} is a Kaprekar number.`;
}

function compare(sumup1,num3)
{
if(sumup1==num3)
return 1;
else
return 0;
}
function sum(num1,num2)
{
return num1+num2;
}
function square(number)
{
return number*number;
}

function spliting(sq) {
    let string = sq.toString();
    let nstr1 = '';
    let nstr2 = '';
    let array = [];
    
    if (string.length % 2 === 0) {
        for (let i = 0; i < (string.length / 2); i++) {
            nstr1 += string.charAt(i);
        }
        for (let i = (string.length / 2); i < string.length; i++) {
            nstr2 += string.charAt(i);
        }
    } else {
        
        for (let i = 0; i < Math.floor(string.length / 2); i++) {
            nstr1 += string.charAt(i);
        }
        for (let i = Math.floor(string.length / 2); i < string.length; i++) {
            nstr2 += string.charAt(i);
        }
    }
    
    array.push(nstr1);
    array.push(nstr2);
    return array;
} 