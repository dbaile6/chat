const ws = new WebSocket('ws://localhost:3001')
const goButton = document.querySelector('body > div > section > form > div > span > button');
const input = document.querySelector('body > div > section > form > div > input');
const ul = document.querySelector('body > div > div > ul');

let messageIncoming = (event) => {
  console.log('receiving');
  let li = document.createElement('li');
  console.log(event);
  li.textContent = event.data;
  ul.appendChild(li);
}
let messageSend = (message) => {
  let li = document.createElement('li');
  li.setAttribute('style', 'text-align:right');
  console.log(message);
  li.textContent = message;
  ul.appendChild(li);
}
let messageGet = () => {return input.value};

let messageSend = (message) => {
  ws.send(message);
  messageSend(message);
}

goButton.addEventListener('click', (event) => {
  let message = messageGet();
  messageSend(message);
  console.log(message);
})


ws.addEventListener('message', (event) => {
  messageIncoming(event);
})
