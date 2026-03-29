// ── CATEGORY PILLS ──
function setCategory(btn, category) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  showToast(`Showing: ${category === 'all' ? 'All posts' : category}`);
}

// ── SEARCH FILTER ──
function filterExplore(query) {
  // In a real app this would filter posts — for now just show toast
  if (query.length > 2) {
    clearTimeout(window._searchTimeout);
    window._searchTimeout = setTimeout(() => {
      showToast(`Searching for "${query}"...`);
    }, 600);
  }
}