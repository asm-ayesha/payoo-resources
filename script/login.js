document.getElementById('btn-login').addEventListener('click', function () {
    // get the mobile number input

    const inputMobile = document.getElementById('input-mobile');
    const mobileNumber = inputMobile.value;
    console.log(mobileNumber)


    // get the pin input
    const inputPin = document.getElementById('input-pin');
    const pinNumber = inputPin.value;
    console.log(pinNumber)


    // match pin & mobile number

    if (mobileNumber == '01234567890' && pinNumber == '1234') {
        // ture::> alert >  homepage
        alert("login Success")

        window.location.assign('/home.html')
        // clean the text area
        inputMobile.value = '';
        inputPin.value = '';

    }
    else {

        // false::> alert >  return

        alert('login failed')
        return
    }


})