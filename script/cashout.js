document.getElementById('btn-cashout').addEventListener('click', function(){ 
    // get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    
    if(cashoutNumber.length != 11){
        alert("Invalid number")
        return
    }

    // get the amount , validate , convert to number
    const amountNumber = getValueFromInput('cashout-amount')
    
    const currentBlance = getBalance();
    

    // calculate  new balance
    const newBalance = currentBlance - Number(amountNumber)
    

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

// get the pin and verify
    const pin = getValueFromInput('cashout-pin');

    if(pin === '1234'){
        // ture:: show an alert > set balance
        alert('cashout Successfull')
        setBalance(newBalance)
    }
    else{
         // false:: show an error alert > return

        alert('Invalid Pin')
        return;
       
    }

})



















// document.getElementById('btn-cashout').addEventListener('click', function(){ 
    
//     // get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value ;
    

//     if(cashoutNumber .length !=11){
//         alert('Invalid Agent number');
//         return;
//     }

//     // get the amount , validate , convert to number
//     const cashoutAmountNumber = document.getElementById('cashout-amount');
//     const amountNumber = cashoutAmountNumber.value ;
    
    

//     // get the current balance, validate , convert to nuumber
//     const balanceElement = document.getElementById('balance')
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // calculate  new balance
//     const newBalance = Number(balance) - Number(amountNumber)
//     console.log(newBalance)

//     if(newBalance < 0){
//         alert('Invalid Amount')
//         return;
//     }
    
//     // get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value ;

//     if(pin === '1234'){
//         // ture:: show an alert > set balance
//         alert('cashout Successfull')
//         balanceElement.innerText =  newBalance;
//     }
//     else{
//          // false:: show an error alert > return

//         alert('Invalid Pin')
//         return;
       
//     }

    
// })