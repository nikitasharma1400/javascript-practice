// ── TOAST ──
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ── FOLLOW TOGGLE ──
function toggleFollow(btn) {
  if (btn.classList.contains('following')) {
    btn.classList.remove('following');
    btn.textContent = 'Follow';
    showToast('Unfollowed');
  } else {
    btn.classList.add('following');
    btn.textContent = 'Following';
    showToast('Following! 🎉');
  }
}

// ── PROFILE TAB SWITCH ──
function switchTab(btn, tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const grid = document.getElementById('posts-grid');
  if (!grid) return;

  const emojis = {
    posts:  ['🌸','🌊','🎨','🌙','☕','🌿','🏙️','🐱','🎵'],
    reels:  ['🎬','📹','🎥','🎞️','📽️','🎦','🎭','🎪','🎠'],
    saved:  ['❤️','🔖','⭐','💫','✨','🌟','💎','🏆','🎯'],
    tagged: ['📌','📍','🗺️','🧭','🎪','🎨','📸','🎭','🌐'],
  };

  const list = emojis[tab] || emojis.posts;
  const bgs  = ['bg-1','bg-2','bg-3','bg-4','bg-5','bg-6'];
  const likes = () => (Math.random() * 9 + 0.5).toFixed(1) + 'k';
  const comments = () => Math.floor(Math.random() * 200 + 10);

  grid.innerHTML = list.map((emoji, i) => `
    <div class="grid-post" onclick="showToast('Opening post...')">
      <div class="placeholder-emoji ${bgs[i % bgs.length]}">${emoji}</div>
      <div class="hover-overlay">
        <div class="hover-stat">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          ${likes()}
        </div>
        <div class="hover-stat">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          ${comments()}
        </div>
      </div>
    </div>
  `).join('');
}