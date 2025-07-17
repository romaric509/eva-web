function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  const dialogue = document.getElementById("eva-dialogue");

  if (message.trim() === "") return;

  const response = "Tu m'as dit : " + message + " 🤖";

  const userMessage = document.createElement("div");
  userMessage.textContent = "👤 " + message;
  userMessage.style.fontWeight = "bold";

  const evaResponse = document.createElement("div");
  evaResponse.textContent = response;

  dialogue.appendChild(userMessage);
  dialogue.appendChild(evaResponse);
  dialogue.scrollTop = dialogue.scrollHeight;

  input.value = "";
}
