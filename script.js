window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        document.getElementById("navbar").style.height = "120px";
        document.getElementById("logo").style.height = "80px";

    }else{
        document.getElementById("navbar").style.height = "190px";
        document.getElementById("logo").style.height = "100px";
    }
}

/* validate kontakt felt */
function sendsvar() {
    const navn = document.getElementById('navn').value;
    const tlf = document.getElementById('tlf').value;
    const email = document.getElementById('email').value;
    const besked = document.getElementById('besked').value;
    if (navn == '') {
        alert('Navn skal udfyldes');
    }
    if (tlf == '' && email == '') {
        alert('Telefon nr og/eller email skal udfyldes');
    }
    if (besked == '') {
        alert('Besked skal udfyldes');
    }
}
