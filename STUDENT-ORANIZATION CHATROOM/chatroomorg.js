// Function to display a new message on the chatroom
function displayMessage(user, message, isCurrentUser) {
    var chatMessages = document.getElementById("chat-messages");
    var messageElement = document.createElement("div");
    messageElement.textContent = user + ": " + message;
    
    // Apply the appropriate class based on whether the message is from the current user or others
    if (isCurrentUser) {
        messageElement.classList.add("message", "user-message");
    } else {
        messageElement.classList.add("message", "other-message");
    }

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Automatically scroll to the bottom
}

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        // In a real application, you would send the message to the server here
        // For simplicity, we will just display the message on the chatroom page.
        displayMessage("You", message, true);
        messageInput.value = "";
    }
}

// Dummy function to simulate receiving messages from others
function receiveMessageFromOthers() {
    var users = ["User1", "User2", "User3"]; // In a real app, this list would come from the server
    displayUserList(users);

    setTimeout(function() {
        displayMessage("User1", "Hello!", false);
    }, 1000);

    setTimeout(function() {
        displayMessage("User2", "Hi there!", false);
    }, 2000);

    setTimeout(function() {
        displayMessage("User3", "Welcome to the chatroom!", false);
    }, 3000);
}

// Function to display the list of users in the chatroom
function displayUserList(users) {
    var userList = document.getElementById("user-list");
    userList.innerHTML = "<strong>Users:</strong><br>" + users.join("<br>");
}

// Call the function to simulate receiving messages
receiveMessageFromOthers();
