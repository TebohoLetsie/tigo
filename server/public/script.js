const messageContainer = document.getElementById('message-container')
const roomContainer = document.getElementById('room-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
// let nwu = io('https://Poweful-lake-61046.herokuapp.com/nwu')

 // let nwu = io('http://localhost:5000/nwu')

//console.log(" client side connected");
if (messageForm != null) {
 const name = userName;
  appendMessage('You joined')
  nwu.emit('new-user', roomName, userName)
console.log("new user in room: "+ roomName);
  messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`You: ${message}`)
    nwu.emit('send-chat-message', roomName, message)
    messageInput.value = ''
  })
}
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

nwu.on('room-created', room => {
  console.log("rooms are created");
  const roomElement = document.createElement('div')
  roomElement.innerText = room
  const roomLink = document.createElement('a')
  roomLink.href = `/${room}`
  roomLink.innerText = 'join'
  roomContainer.append(roomElement)
  roomContainer.append(roomLink)

})

nwu.on('chat-message', data => {
  console.log("chat-message works");
  appendMessage(`${data.name}: ${data.message}`)

})

nwu.on('user-connected', name => {
  console.log("this works");
  appendMessage(`${name} connected`)
})

nwu.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}
