
// javaScript Events Practice!

// event: onclick;
function onClick() {
    document.getElementById("titleTwo").innerHTML = 'Subscribed!';
}

// event: ondblclick;
function onDblClick() {
    document.getElementById("titleThree").innerHTML = 'Subscribed! Thanks!';
}

// event: oncontextmenu;
function onContextMenu() {
    document.getElementById("titleFour").innerHTML = 'Subscribed! with oncontexmenu (mouse right click)!';
}

// event: onmouseenter!;
function onMouseEnter() {
    document.getElementById("titleFive").innerHTML = 'Subscribed when you entered mouse!';
}

// event: onmouseout!;
function onMouseOut() {
    document.getElementById("titleSix").innerHTML = 'Subscribed when you took out your mouse!';
}

// event: onkeypress!;
function onKeyPress() {
    document.getElementById("titleSeven").innerHTML = 'You pressed a key on your keyboard!';
}