const inputVoltageEl = document.getElementById("input-voltage");
const inputCurrentEl = document.getElementById("input-current");
const inputResistanceEl = document.getElementById("input-resistance");
const inputPowerEl = document.getElementById("input-power");
const calcBtnEl = document.getElementById("calc-btn");
const clearBtnEl = document.getElementById("clear-btn");

let voltage;
let current;
let resistance;
let power;

let inputIsVoltage = false;
let inputIsCurrent = false;
let inputIsResistance = false;
let inputIsPower = false;

inputVoltageEl.addEventListener("focus", () =>{
    inputVoltageEl.value="";
})

inputCurrentEl.addEventListener("focus", () =>{
    inputCurrentEl.value="";
})

inputResistanceEl.addEventListener("focus", () =>{
    inputResistanceEl.value="";
})

inputPowerEl.addEventListener("focus", () =>{
    inputPowerEl.value="";
})

clearBtnEl.addEventListener("click", () => {
    clearInputs();
})

calcBtnEl.addEventListener("click", () =>{
    let numOfEntries = 0;
    voltage = parseFloat(inputVoltageEl.value);
    current = parseFloat(inputCurrentEl.value);
    resistance = parseFloat(inputResistanceEl.value);
    power = parseFloat(inputPowerEl.value);

    if(!isNaN(voltage))
    {
        inputIsVoltage = true;
        numOfEntries++;
    }

    if(!isNaN(current))
    {
        inputIsCurrent = true;
        numOfEntries++;
    }

    if(!isNaN(resistance))
    {
        inputIsResistance = true;
        numOfEntries++;
    }

    if(!isNaN(power))
    {
        inputIsPower = true;
        numOfEntries++;
    }

    if(numOfEntries === 2)
    {
        numOfEntries = 0;
        calculateOutputs();
        renderOutputs();
    }

    else
    {
        numOfEntries = 0;
        alert("Exactly two input values required.");
    }
    
})

function clearInputs() {
    inputVoltageEl.value = "";
    inputCurrentEl.value = "";
    inputResistanceEl.value = "";
    inputPowerEl.value = "";
}

function calculateOutputs() {
    if(inputIsCurrent && inputIsVoltage)
    {
        resistance = voltage/(1.0*current);
        power = voltage*current;
    }
    else if(inputIsVoltage && inputIsResistance)
    {
        current = voltage/(1.0*resistance);
        power = voltage*current;
    }
    else if(inputIsVoltage && inputIsPower)
    {
        current = power/(1.0*voltage);
        resistance = voltage/(1.0*current);
    }
    else if(inputIsCurrent && inputIsResistance)
    {
        voltage = resistance*current;
        power = voltage*current;
    }
    else if(inputIsCurrent && inputIsPower)
    {
        voltage = power/(1.0*current);
        resistance = voltage/(1.0*current);
    }
    else //input is R and P
    {
        current = Math.sqrt(power/(1.0*resistance));
        voltage = current*resistance;
    }
}

function renderOutputs() {
    inputCurrentEl.value = checkForNaN(current, "Current");
    inputVoltageEl.value = checkForNaN(voltage, "Voltage");
    inputResistanceEl.value = checkForNaN(resistance , "Resistance");
    inputPowerEl.value =checkForNaN(power, "Power");
}

function checkForNaN(value, text) {
    if(isNaN(value))
    {
        alert(`${text} is Undefined`);
    }
    return value;
}