const socket = io('http://localhost:3000'); // socket.io module connection to the server

// html elements object
var sendbutton = document.getElementById("buttonid");
var textarea = document.getElementById("textid");

// random username per guest
var username = "User" + Math.random();

// when message is recieved from server, this event handler catches it
socket.on('message', data => {
    appendmessage(data);

});

// event handler for "Send" button that emits data to server
sendbutton.onclick = function(e) {
    e.preventDefault();
    var textbox = document.getElementById("textlabel");

    messagedata = {
        "name": username,
        "date": new Date().getDate(),
        "usermessage": textbox.value
    }
    socket.emit("message", messagedata);

}

// function that appends message data to the textarea element.
function appendmessage(somedata) {
    textarea.textContent = textarea.textContent + "Name: " + somedata['name'] + "  ::" + "Date: " + somedata['date'] + "  ::" + "Message: " + somedata['usermessage'] + "\n";
}