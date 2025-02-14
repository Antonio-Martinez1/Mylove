document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
    }
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});
  