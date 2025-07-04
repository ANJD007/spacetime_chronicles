const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});

function appendMessage(sender, text) {
    const msg = document.createElement('p');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const query = userInput.value.trim();
    if (!query) return;

    appendMessage("You", query);
    userInput.value = "";
    fetchGPTResponse(query);
}

function fetchGPTResponse(query) {
    appendMessage("AstroBot", "Thinking...");

    fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query })
    })
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            chatWindow.lastChild.innerHTML = `<strong>AstroBot:</strong> ${data.error}`;
        } else {
            const reply = data.reply || "No response received.";
            chatWindow.lastChild.innerHTML = `<strong>AstroBot:</strong> ${reply}`;
        }
    })
    .catch(err => {
        console.error(err);
        chatWindow.lastChild.innerHTML = `<strong>AstroBot:</strong> Sorry, I couldn't fetch a response.`;
    });
}

document.getElementById('exit-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});
