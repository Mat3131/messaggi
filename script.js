document.getElementById('send-button').addEventListener('click', () => {
  const messageInput = document.getElementById('message-input');
  const messageText = messageInput.value;
  
  if (messageText.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;
    document.getElementById('messages').appendChild(messageElement);
    messageInput.value = '';
  }
});
