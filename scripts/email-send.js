let ButtonEmailSend = document.getElementById("ButtonEmailSend");

function Sended() {
    ButtonEmailSend.style.opacity = "0.5";
    ButtonEmailSend.style.pointerEvents = "none";

    setTimeout(function() {
        ButtonEmailSend.style.opacity = "1";
        ButtonEmailSend.style.pointerEvents = "auto";
    }, 1000);
};

ButtonEmailSend.addEventListener("click", Sended);