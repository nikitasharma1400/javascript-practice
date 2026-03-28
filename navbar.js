function initNavbar() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const voiceBtn = document.getElementById("voice-btn");

  // Handle search submission
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    });
  }

  // Voice search placeholder (visual feedback)
  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      voiceBtn.classList.add("listening");
      setTimeout(() => voiceBtn.classList.remove("listening"), 2000);

      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (searchInput) searchInput.value = transcript;
        };
        recognition.start();
      }
    });
  }

  // Notification bell animation
  const notifBtn = document.getElementById("notif-btn");
  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      notifBtn.classList.add("ring");
      setTimeout(() => notifBtn.classList.remove("ring"), 600);
    });
  }
}

document.addEventListener("DOMContentLoaded", initNavbar);