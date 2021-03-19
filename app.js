
function myFunction()
{
    let x= document.getElementById("myform").elements[0].value;
   let c=0;
   let k=0;
let y=document.getElementById("myform").elements[1].value;
let z=document.getElementById("myform").elements[2].value;
if(y=="Outstanding")
{
    c=0.30;
}
else if(y=="Good")
{
    c=0.20;
}
else if(y=="Bad")
{
    c=0.10;
}
else if(y=="Terrible"){
    c=0.05;
}
else{
    c=0.15;
}
k=(x*c)/z;
let n = k.toFixed(2);
let bill1=x/z;
bill=bill1.toFixed(2);

let tot1=parseFloat(bill)+parseFloat(n);
let tot=tot1.toFixed(2);
document.getElementById("tip").innerHTML='Bill Amount : ₹'+bill+' each';
document.getElementById("demo").innerHTML='Tip Amount : ₹'+n+' each';
document.getElementById("total").innerHTML='Total Amount : ₹'+tot+' each';


}
