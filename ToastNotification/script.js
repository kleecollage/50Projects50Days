const button = document.getElementById("button");
const toast = document.getElementById("toast");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

const type = ["success", "info", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();
  toast.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
