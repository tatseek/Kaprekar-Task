function ascending(num)
{
 let str=num.toString();
 let strarray=str.split('');
 for(let i=0;i<strarray.length;i++)
 {
     for(let j=0;j<strarray.length-i-1;j++)
     {
         if(strarray[j]>strarray[j+1])
         {
             let temp=strarray[j];
             strarray[j]=strarray[j+1];
             strarray[j+1]=temp;
         }
     }
 }
 return (strarray.join(''));
}
function descending(num)
{
 let str=num.toString();
 let strarray=str.split('');
 for(let i=0;i<strarray.length;i++)
 {
     for(let j=0;j<strarray.length-i-1;j++)
     {
         if(strarray[j]<strarray[j+1])
         {
             let temp=strarray[j];
             strarray[j]=strarray[j+1];
             strarray[j+1]=temp;
         }
     }
 }
 return (strarray.join(''));
}
function subtract(num1,num2)
{
    return (num2-num1);
}
function binary(array,sub)
{
    let start=0;
    let end=array.length-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(array[mid]==sub)
        return sub;
        else if(array[mid]>sub)
        end=mid-1;
        else
        start=mid+1;
    }
}

function startKaprekar()
{   const input = document.getElementById('inputNumber').value;
    const num = parseInt(input);
    let currentnum=num;
    let outputHTML='';
    if (isNaN(num) || input.length < 3 || input.length > 5) {
        document.getElementById('output').innerHTML = 'Error: Please enter a number between 3 and 5 digits.';
        return;
    }
    let array=[];
    array.push(num);
    
    for(let i=1;i<=7;i++)
    {
    let num1=ascending(currentnum);
    let num2=descending(currentnum);
    let sub=subtract(num1,num2);
  sub=sub.toString().padStart(num1.length, '0');
  outputHTML +=(`Iteration ${i}: ${num2} - ${num1} = ${sub}<br>`);
    currentnum=sub;
   array=array.sort();
    if(binary(array,sub)){
    outputHTML += sub;
    break;
    }
    else
    array.push(sub);
    }
    document.getElementById('output').innerHTML = outputHTML;
}