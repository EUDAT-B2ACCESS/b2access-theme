// Disables a particular stylesheet given its DOM Element
function unloadStylesheet(DOMelement){
    DOMelement.disabled = true;
    DOMelement.parentNode.removeChild( DOMelement );
    DOMelement.href = "data:text/css,"; // empty stylesheet to be sure
}

function isConsoleEndpoint() {
    var pathSegments = window.location.pathname.split('/');
    return pathSegments.length > 1 && pathSegments[1] === "console";
}

window.onload = function () {
    if (isConsoleEndpoint()) {
        var stylesheets = document.getElementsByTagName('link');
        for(var i = 0; i < stylesheets.length; i++) {
            unloadStylesheet(stylesheets.item(i));
        }
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/unitygw/VAADIN/themes/html/css/console-fix.css';

        // Append the link element to the head section of the document
        document.head.appendChild(link);
    }
};