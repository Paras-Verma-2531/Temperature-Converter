var celciusValue=document.getElementById('Celcius');
var fehrenheitValue=document.getElementById('Fehrenhiet');
var kelvinValue= document.getElementById('Kelvin');

const clearValue=()=>{
   celciusValue.value="";
   fehrenheitValue.value="";
   kelvinValue.value="";
}

const celciusToOther=()=>{
    document.getElementById('Fehrenhiet').value=1.8*document.getElementById('Celcius').value + 32;
    document.getElementById('Kelvin').value=1*document.getElementById('Celcius').value+273.15;
}