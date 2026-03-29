// ── LIKE TOGGLE ──
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const isLiked = btn.classList.contains('liked');
    const countEl = btn.querySelector('.like-count');
    let count = parseInt(countEl.textContent.replace(/,/g, ''));

    if (isLiked) {
      btn.classList.remove('liked');
      count--;
      showToast('Like removed');
    } else {
      btn.classList.add('liked');
      count++;
      showToast('❤️ Liked!');
      // heart pop animation
      btn.style.transform = 'scale(1.3)';
      setTimeout(() => btn.style.transform = '', 200);
    }

    countEl.textContent = count.toLocaleString();

    // update likes count text in post info
    const card = btn.closest('.post-card');
    if (card) {
      const likesEl = card.querySelector('.likes-count');
      if (likesEl) likesEl.textContent = count.toLocaleString() + ' likes';
    }
  });
});

// ── SAVE TOGGLE ──
document.querySelectorAll('.save-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('saved')) {
      btn.classList.remove('saved');
      showToast('Removed from saved');
    } else {
      btn.classList.add('saved');
      showToast('🔖 Saved!');
    }
  });
});

// ── COMMENT ENTER KEY ──
document.querySelectorAll('.comment-input-row input').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      showToast('Comment posted!');
      input.value = '';
    }
  });
});