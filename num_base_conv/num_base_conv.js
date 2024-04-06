const tempcInputEl = document.getElementById("tempc-input");
const tempfInputEl = document.getElementById("tempf-input");
const tempkInputEl = document.getElementById("tempk-input");
let currentTempIsK = false;
let currentTempIsF = false;
let currentTempIsC = false;
let currentInputFloat = 0;

tempcInputEl.autocomplete = "off";
tempfInputEl.autocomplete = "off";
tempkInputEl.autocomplete = "off";

tempcInputEl.addEventListener("focus", () => {
    tempfInputEl.value = "";
    tempcInputEl.value = "";
    tempkInputEl.value = "";
})

tempfInputEl.addEventListener("focus", () => {
    tempfInputEl.value = "";
    tempcInputEl.value = "";
    tempkInputEl.value = "";
})

tempkInputEl.addEventListener("focus", () => {

    tempfInputEl.value = "";
    tempcInputEl.value = "";
    tempkInputEl.value = "";
    
})

tempcInputEl.addEventListener("input", () => {
    currentTempIsK = false; 
    currentTempIsF = false;
    currentTempIsC = true;
    convertTempF();
    convertTempK();
});

tempfInputEl.addEventListener("input", () => {
    currentTempIsK = false;
    currentTempIsF = true;
    currentTempIsC = false;
    convertTempC();
    convertTempK();
});

tempkInputEl.addEventListener("input", () => {
    currentTempIsK = true;
    currentTempIsF = false;
    currentTempIsC = false;
    convertTempC();
    convertTempF();
});

function convertTempC (){
    let convTemp;
    if(currentTempIsF)
    {
        convTemp = parseFloat(tempfInputEl.value);
    }
    else
    {
        convTemp = parseFloat(tempkInputEl.value);
    }
    
    if(isNaN(convTemp))
    {
        tempcInputEl.value = "";
        return;
    }
    if(currentTempIsF)
    {
        tempcInputEl.value = Math.round(((convTemp - 32) * 5/9.0)*100)/100;
    }
    else
    {
        tempcInputEl.value = Math.round((convTemp - 273.15)*100)/100;
    }
}

function convertTempF (){
    let convTemp;
    if(currentTempIsC)
    {
        convTemp = parseFloat(tempcInputEl.value);
    }
    else
    {
        convTemp = parseFloat(tempkInputEl.value);
    }
    
    if(isNaN(convTemp))
    {
        tempfInputEl.value = "";
        return;
    }
    if(currentTempIsC)
    {
        tempfInputEl.value = Math.round((convTemp * 9/5.0 + 32)*100)/100;
    }
    else
    {
        tempfInputEl.value = Math.round(((convTemp -273.15)* 9/5.0 + 32)*100)/100;
    }
}

function convertTempK (){
    let convTemp;
    if(currentTempIsC)
    {
        convTemp = parseFloat(tempcInputEl.value);
    }
    else
    {
        convTemp = parseFloat(tempfInputEl.value);
    }
    
    if(isNaN(convTemp))
    {
        tempkInputEl.value = "";
        return;
    }
    if(currentTempIsC)
    {
        tempkInputEl.value = Math.round((convTemp +273.15)*100)/100;
    }
    else
    {
        tempkInputEl.value = Math.round(((convTemp -32)* 5/9.0 + 273.15)*100)/100;
    }
}
