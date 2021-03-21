function GetValues() {
    console.log(sliderValue);

}

function SunSelect() {
    checkbox = 'Sun';
    periodValue = document.getElementById("PeriodDrop").value = 60;
    onInputChange();
}

function PumpSelect() {
    checkbox = 'Pump';
    periodValue = document.getElementById("PeriodDrop").value = 48;
    onInputChange();
}

function GasSelect() {
    checkbox = 'Gas';
    periodValue = document.getElementById("PeriodDrop").value = 48;
    onInputChange();
}

function OffGridSelect() {
    checkbox = 'OffGrid';
    periodValue = document.getElementById("PeriodDrop").value = 60;
    onInputChange();
}

function ElectricCarsSelect() {
    checkbox = 'ElectricCars';
    periodValue = document.getElementById("PeriodDrop").value = 48;
    onInputChange();
}

function onInputChange() {

    // Selectors
    const intrest = document.getElementById("Intrest");
    const fee = document.getElementById("Fee");
    const monthlyFee = document.getElementById("MonthlyFee");
    const period = document.getElementById("Period");
    const projectCost = document.getElementById("ProjectCost");
    const monthlyPayment = document.getElementById("MonthlyPayment");
    const list = document.getElementById("PeriodDrop");

    let periodValue = parseInt(document.getElementById("PeriodDrop").value);
    let deposit = document.getElementById("DepositInput").value;
    let projectCostValue = parseInt(sliderValue);
    if (projectCostValue == 25) projectCostValue = 25000;

    if (deposit === '') // If no deposit calculate with 0
        deposit = 0;
    else if (deposit > projectCostValue-300) deposit = 0; // 300 min total
    else if (deposit < 0) deposit = 0;
    else parseInt(deposit);

    projectCostValue -= deposit;

    // Check which service is checked

    // PV
    if (checkbox == 'Sun') {
        if (hidden) {
            for (var i=0; i<8; i++) {
                opt = document.createElement("OPTION");
                opt.setAttribute("value",78+i*6);
                let text = document.createTextNode(78+i*6 + " kuud");
                opt.appendChild(text);
                document.getElementById("PeriodDrop").appendChild(opt); 
            }
            hidden = false;
        }

        intrest.textContent = '7,90 %';
        fee.textContent = '50 €';
        monthlyFee.textContent = '1 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue;

        let monthlyPaymentValue = parseFloat(((projectCostValue * 1.079) / periodValue) + 50 + periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);
    
    // Soojuspumbad
    } else if (checkbox == 'Pump') {
        if (projectCostValue < 2000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '7,90 %';
            fee.textContent = '30 €';
            perc = 1.079;
            contractFee = 30;
        }
        else if (projectCostValue < 6000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }
            intrest.textContent = '6,50 %';
            fee.textContent = '20 €';
            perc = 1.065;
            contractFee = 20;
        }
        else {
            if (hidden) {
                for (var i=0; i<8; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",78+i*6);
                    let text = document.createTextNode(78+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
            }

            intrest.textContent = '5,90 %';
            fee.textContent = '20 €';
            perc = 1.059;
            contractFee = 20;
        }
        monthlyFee.textContent = '1 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue;

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) / periodValue) + contractFee + periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);

    // Elektriautode laadijad
    } else if (checkbox == 'ElectricCars') {
        if (projectCostValue < 2000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '5,90 %';
            fee.textContent = '50 €';
            perc = 1.059;
            contractFee = 50;
        }
        else if (projectCostValue < 6000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '4,50 %';
            fee.textContent = '40 €';
            perc = 1.045;
            contractFee = 40;
        }
        else {
            if (hidden) {
                for (var i=0; i<8; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",78+i*6);
                    let text = document.createTextNode(78+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
            }

            intrest.textContent = '3,90 %';
            fee.textContent = '30 €';
            perc = 1.039;
            contractFee = 30;
        }
        monthlyFee.textContent = '2 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue;

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) / periodValue) + contractFee + (2*periodValue));
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);

    // Võrguvaba elektrijaam Off-grid
    } else if (checkbox == 'OffGrid') {
        if (projectCostValue < 2000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '7,90 %';
            fee.textContent = '30 €';
            perc = 1.059;
            contractFee = 30;
        }
        else if (projectCostValue < 6000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '6,50 %';
            fee.textContent = '20 €';
            perc = 1.045;
            contractFee = 20;
        }
        else {
            intrest.textContent = '5,90 %';
            fee.textContent = '20 €';
            perc = 1.039;
            contractFee = 20;

            if (hidden) {
                for (var i=0; i<8; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",78+i*6);
                    let text = document.createTextNode(78+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
            }
        }
        monthlyFee.textContent = '0 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue;

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) / periodValue) + contractFee);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);

    // Elektri- ja gaasitööd     
    } else if (checkbox == 'Gas') {
        if (projectCostValue < 1000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '9,90 %';
            fee.textContent = '30 €';
            perc = 1.099;
            contractFee = 30 + periodValue;
            monthlyFee.textContent = '1 €';
        } 
        else if (projectCostValue < 2000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '8,90 %';
            fee.textContent = '20 €';
            perc = 1.089;
            contractFee = 20 + periodValue;
            monthlyFee.textContent = '1 €';
        }
        else if (projectCostValue < 6000) {
            if (hidden === false){
                // Change dropdown
                for (var i=0; i<16; i++) {  
                    list.removeChild(list.lastChild); 
                }
                hidden = true;
            }

            intrest.textContent = '7,50 %';
            fee.textContent = '20 €';
            perc = 1.075;
            contractFee = 20;
            monthlyFee.textContent = '0 €';
        }
        else {
            intrest.textContent = '6,90 %';
            fee.textContent = '20 €';
            perc = 1.069;
            contractFee = 20;
            monthlyFee.textContent = '0 €';

            if (hidden) {
                for (var i=0; i<8; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",78+i*6);
                    let text = document.createTextNode(78+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
            }
        }
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue;

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) / periodValue) + contractFee);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);
    }
    
}