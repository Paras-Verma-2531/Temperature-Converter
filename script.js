// get values:
var celciusValue = document.getElementById("Celcius");
var fehrenheitValue = document.getElementById("Fehrenhiet");
var kelvinValue = document.getElementById("Kelvin");

//  method to clear the values
const clearValue = () => {
  celciusValue.value = null;
  fehrenheitValue.value = null;
  kelvinValue.value = null;
};
//round number
function roundnumber(number)
{
    return Math.round(number*100)/100;
}
// input event Listner to convert celcius to other units:
celciusValue.addEventListener("input", () => {
    let cval=parseFloat(celciusValue.value);
    let fval=1.8*cval + 32;
    let kval=cval+ 273.15;
    fehrenheitValue.value=roundnumber(fval);
    kelvinValue.value=roundnumber(kval); 
});
// function to covert fehrenhiet to other units:
fehrenheitValue.addEventListener('input',()=>
{
    let fval=parseFloat(fehrenheitValue.value);
    let cval=(5/9)*(fval-32);
    let kval=(5/9)*(fval-32)+273.15;
    celciusValue.value=roundnumber(cval);
    kelvinValue.value=roundnumber(kval);
});
kelvinValue.addEventListener('input',()=>
{
    let kval=parseFloat(kelvinValue.value);
    let fval=(kval-273.15) * 9/5 + 32;
    let cval=kval-273.15;
    celciusValue.value=roundnumber(cval);
    fehrenheitValue.value=roundnumber(fval);
})