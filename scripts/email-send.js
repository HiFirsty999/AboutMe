function Sended(ElementID) {
    const UIElement = document.getElementById(ElementID);
    
    UIElement.style.opacity = "0.5";
    UIElement.style.pointerEvents = "none";

    setTimeout(function() {
        UIElement.style.opacity = "1";
        UIElement.style.pointerEvents = "auto";
    }, 1000);
}