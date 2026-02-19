// machine id > input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine -> balance
function getBalance() {
    const balanceEl = document.getElementById('balance');
    const balance = balanceEl.innerText;
    return Number(balance);
}


// machin -> sset balance
function setBalance(value){
    const balanceEl = document.getElementById('balance');
    balanceEl.innerText = value ;
}