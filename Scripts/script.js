// Change Slider when input comes from somewhere else
function newSliderValue(value){
    displayValue.textContent = value + ' €';
    if (value > 25000 || value < 300) return false;
    sliderValue = value;
    slider.value = value;
    displayValue.textContent = value + ' €';
    progress.style.left = (slider.offsetWidth - (slider.offsetWidth*((value/100*0.4)/100) - 12) - slider.offsetWidth) + "px";
    progress.style.width = slider.offsetWidth*((value/100*0.4)/100) + "px";
    thumb.style.marginLeft = slider.offsetWidth*((value/100*0.4)/100) - 12 + "px";
    onInputChange()
}


// PV
function SunSelect() {
    lastChangedBox.setAttribute("style",'background: white;');
    lastChangedBox = document.getElementById("SunBox")
    lastChangedBox.setAttribute("style",'background: #f7fafa;');
    checkbox = 'Sun';
    onInputChange();
    ///////// CHANGE THIS /////////
    newSliderValue(5000);
    periodValue = document.getElementById("PeriodDrop").value = 60; // Default month value
    ///////////// END /////////////
}

// Soojuspumbad
function PumpSelect() {
    lastChangedBox.setAttribute("style",'background: white;');
    lastChangedBox = document.getElementById("PumpBox")
    lastChangedBox.setAttribute("style",'background: #f7fafa;');
    checkbox = 'Pump';
    onInputChange();
    ///////// CHANGE THIS /////////
    newSliderValue(1000);
    periodValue = document.getElementById("PeriodDrop").value = 48; // Default month value
    ///////////// END /////////////
}

// Elektri- ja gaasitööd
function GasSelect() {
    lastChangedBox.setAttribute("style",'background: white;');
    lastChangedBox = document.getElementById("GasBox")
    lastChangedBox.setAttribute("style",'background: #f7fafa;');    
    checkbox = 'Gas';
    onInputChange();
    ///////// CHANGE THIS /////////
    newSliderValue(1000);
    periodValue = document.getElementById("PeriodDrop").value = 48; // Default month value
    ///////////// END /////////////
}

// Võrguvaba elektrijaam Off-grid
function OffGridSelect() {
    lastChangedBox.setAttribute("style",'background: white;');
    lastChangedBox = document.getElementById("OffGridBox")
    lastChangedBox.setAttribute("style",'background: #f7fafa;');    
    checkbox = 'OffGrid';
    onInputChange();
    ///////// CHANGE THIS /////////
    newSliderValue(5000);
    periodValue = document.getElementById("PeriodDrop").value = 60; // Default month value
    ///////////// END /////////////
}

// Elektriautode laadijad
function ElectricCarsSelect() {
    lastChangedBox.setAttribute("style",'background: white;');
    lastChangedBox = document.getElementById("ElectricCarsBox")
    lastChangedBox.setAttribute("style",'background: #f7fafa;');    
    checkbox = 'ElectricCars';
    onInputChange();
    ///////// CHANGE THIS /////////
    newSliderValue(1000);
    periodValue = document.getElementById("PeriodDrop").value = 48; // Default month value
    ///////////// END /////////////
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

    // Get values
    let periodValue = parseInt(document.getElementById("PeriodDrop").value);
    let deposit = document.getElementById("DepositInput").value;
    let projectCostValue = parseInt(sliderValue);
    if (projectCostValue == 25) projectCostValue = 25000;

    // For adding € symbol to numbers
    let eur = document.createElement("p");        
    let eurText = document.createTextNode(" €");
    eur.appendChild(eurText);
    eur.setAttribute("class", 'Eur')
    eur.setAttribute("style", 'display: inline; font-size: 20px;')

    if (deposit === '') // If no deposit calculate with 0
        deposit = 0;
    else if (deposit > projectCostValue-300) deposit = 0; // 300 min total
    else if (deposit < 0) deposit = 0;
    else parseInt(deposit);

    projectCostValue -= deposit;

    // Check which service is checked and 
    // assign values according to credit slider value

    // PV
    if (checkbox == 'Sun') {
        if (hidden) {
            // Remove list
            while (list.firstChild) {
                list.removeChild(list.lastChild);
            }

            // Create 6-120
            for (var i=0; i<20; i++) {
                opt = document.createElement("OPTION");
                opt.setAttribute("value",6+i*6);
                let text = document.createTextNode(6+i*6 + " kuud");
                opt.appendChild(text);
                document.getElementById("PeriodDrop").appendChild(opt); 
            }
            hidden = false;
        }

        ///////// CHANGE THIS /////////
        perc = 1.079;
        contractFee = 50;
        monthlyFeeValue = 1;
        intrest.textContent = '7,90 %';
        ///////////// END /////////////

        fee.textContent = contractFee + ' €';
        monthlyFee.textContent = monthlyFeeValue + ' €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue + ' €';

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) + contractFee + periodValue * monthlyFeeValue) / periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2);
        monthlyPayment.appendChild(eur)
    
    // Soojuspumbad
    } else if (checkbox == 'Pump') {
        if (projectCostValue < 2000) {
           if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value

                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '7,90 %';
            perc = 1.079;
            contractFee = 30;
            monthlyFeeValue = 1;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else if (projectCostValue < 6000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value

                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '6,50 %';
            perc = 1.065;
            contractFee = 20;
            monthlyFeeValue = 1;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else {
            if (hidden) {
                saveValue = document.getElementById("PeriodDrop").value

                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
    
                // Create 6-120
                for (var i=0; i<20; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '5,90 %';
            perc = 1.059;
            contractFee = 20;
            monthlyFeeValue = 1;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        monthlyFee.textContent = '1 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue + ' €';

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) + contractFee + periodValue * monthlyFeeValue) / periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2) + ' €';

    // Elektriautode laadijad
    } else if (checkbox == 'ElectricCars') {
        if (projectCostValue < 2000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '5,90 %';
            perc = 1.059;
            contractFee = 50;
            monthlyFeeValue = 2;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else if (projectCostValue < 6000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '4,50 %';
            perc = 1.045;
            contractFee = 40;
            monthlyFeeValue = 2;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else {
            if (hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
    
                // Create 6-120
                for (var i=0; i<20; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '3,90 %';
            perc = 1.039;
            contractFee = 30;
            monthlyFeeValue = 2;
            ///////////// END ///////////// 
            
            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';
            
        }
        monthlyFee.textContent = '2 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue + ' €';

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) + contractFee + periodValue * monthlyFeeValue) / periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2) + ' €';

    // Võrguvaba elektrijaam Off-grid
    } else if (checkbox == 'OffGrid') {
        if (projectCostValue < 2000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '7,90 %';
            perc = 1.059;
            contractFee = 30;
            monthlyFeeValue = 0;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else if (projectCostValue < 6000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '6,50 %';
            perc = 1.045;
            contractFee = 20;
            monthlyFeeValue = 0;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else {
            if (hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
    
                // Create 6-120
                for (var i=0; i<20; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }
            
            ///////// CHANGE THIS /////////
            intrest.textContent = '5,90 %';
            perc = 1.039;
            contractFee = 20;
            monthlyFeeValue = 0;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        monthlyFee.textContent = '0 €';
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue + ' €';

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) + contractFee + periodValue * monthlyFeeValue) / periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2) + ' €';

    // Elektri- ja gaasitööd     
    } else if (checkbox == 'Gas') {
        if (projectCostValue < 1000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '9,90 %';
            perc = 1.099;
            contractFee = 30;
            monthlyFeeValue = 1;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        } 
        else if (projectCostValue < 2000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '8,90 %';
            perc = 1.089;
            contractFee = 20;
            monthlyFeeValue = 1;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else if (projectCostValue < 6000) {
            if (!hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
                // Create 6-72
                for (var i=0; i<12; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = true;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '7,50 %';
            perc = 1.075;
            contractFee = 20;
            monthlyFeeValue = 0;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';

        }
        else {
            if (hidden) {
                saveValue = document.getElementById("PeriodDrop").value
                
                // Remove list
                while (list.firstChild) {
                    list.removeChild(list.lastChild);
                }
    
                // Create 6-120
                for (var i=0; i<20; i++) {
                    opt = document.createElement("OPTION");
                    opt.setAttribute("value",6+i*6);
                    let text = document.createTextNode(6+i*6 + " kuud");
                    opt.appendChild(text);
                    document.getElementById("PeriodDrop").appendChild(opt); 
                }
                hidden = false;
                periodValue = document.getElementById("PeriodDrop").value = saveValue;
            }

            ///////// CHANGE THIS /////////
            intrest.textContent = '6,90 %';
            perc = 1.069; 
            contractFee = 20;
            monthlyFeeValue = 0;
            ///////////// END /////////////

            fee.textContent = contractFee + ' €';
            monthlyFee.textContent = monthlyFeeValue + ' €';
        
        }
        period.textContent = periodValue + ' kuud';
        projectCost.textContent = projectCostValue + ' €';

        let monthlyPaymentValue = parseFloat(((projectCostValue * perc) + contractFee + periodValue * monthlyFeeValue) / periodValue);
        monthlyPayment.textContent = monthlyPaymentValue.toFixed(2) + ' €';
    }
    
}