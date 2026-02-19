document.getElementById('btn-add-money').addEventListener('click', function(){ 
    // get bank accont
    const bankAccount = getValueFromInput('add-money-bank');
    console.log(bankAccount)
    if(bankAccount == 'Select a Bank'){
        alert('please select a bank');
        return;
    }

    // get bank account number
    const accont =  getValueFromInput('add-money-number')
    if(accont.length != 11){
        alert("Invalid account nuumber");
        return;
    }


    // get ammount
    const ammount = getValueFromInput('add-money-amount')

    const newBalance =  getBalance() + Number(ammount);


    const pin = getValueFromInput('add-money-pin');

    if(pin == '1234'){
        alert(`Add money successs from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
        return;
    }
    else{

        alert('Invalid pin');
        return;
    }
    
})