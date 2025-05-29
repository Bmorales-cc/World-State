// Mostrar/ocultar chat
document.getElementById("chat-float-button").addEventListener("click", () => {
    document.getElementById("chat-widget").classList.remove("minimized");
    document.getElementById("chat-float-button").style.opacity = "0";
  });
  
  document.getElementById("minimize-chat").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("chat-widget").classList.add("minimized");
    setTimeout(() => {
      document.getElementById("chat-float-button").style.opacity = "1";
    }, 300);
  });
  
  // Respuestas del bot para moda
  const fashionResponses = {
    "hola": "¡Hola! 👋 Soy tu asistente de moda. Puedes preguntarme sobre productos, tallas o envíos.",
    "jeans": "🔥 ¡Tenemos los mejores jeans!<br>- Slim Fit<br>- Mom Jeans<br>- Rotos<br><button class='chat-action' data-url='/jeans'>Ver colección</button>",
    "vestidos": "💃 Nueva colección de vestidos:<br>- Cortos<br>- Largos<br>- De fiesta<br><button class='chat-action' data-url='/vestidos'>Ver</button>",
    "tallas": "📏 Guía de tallas interactiva:<br>1. Mide tu cintura<br>2. Compara con nuestra tabla<br><button class='chat-action' data-url='/tallas'>Abrir guía</button>",
    "default": "¿Necesitas ayuda con algo específico? Prueba con:<br>- 'jeans'<br>- 'vestidos'<br>- 'tallas'"
  };
  
  // Enviar mensaje
  function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim().toLowerCase();
    
    if(!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
      const response = fashionResponses[message] || fashionResponses.default;
      addMessage(response, 'bot');
    }, 800);
  }
  
  // Añadir mensaje al chat
  function addMessage(content, sender) {
    const chat = document.getElementById("chat-messages");
    const messageEl = document.createElement("div");
    messageEl.className = `message ${sender}`;
    messageEl.innerHTML = content;
    chat.appendChild(messageEl);
    chat.scrollTop = chat.scrollHeight;
  }
  
  // Event listeners
  document.getElementById("send-button").addEventListener("click", sendMessage);
  document.getElementById("user-input").addEventListener("keypress", (e) => {
    if(e.key === 'Enter') sendMessage();
  });
  
  // Mensaje inicial
  setTimeout(() => {
    addMessage(fashionResponses.hola, 'bot');
  }, 1500);