const ClickerGameLink = "https://hifirsty999.github.io/ClickerGame/";

function PointerEnter(ElementName) {
    var UIElement = document.getElementById(ElementName);

    UIElement.style.backgroundColor = "red";
}

function PointerLeave(ElementName) {
    var UIElement = document.getElementById(ElementName);
        
    UIElement.style.backgroundColor = "orange";
}

function ToClickerGame() {
    window.open(ClickerGameLink);
}