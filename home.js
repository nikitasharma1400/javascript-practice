const categories = ["All", "Music", "Gaming", "Live", "Coding", "Mixes", "Comedy", "News", "Sports", "Tech", "Travel", "Food", "Anime", "Podcasts"];

const videos = [
  { id: 1, thumbnail: "https://picsum.photos/seed/hv1/480/270", title: "Building a Full Stack App with React & Node.js in 2024", channel: "CodeWithMe", avatar: "https://picsum.photos/seed/hc1/36/36", views: "1.2M views", uploaded: "3 days ago", duration: "42:15", category: "Coding" },
  { id: 2, thumbnail: "https://picsum.photos/seed/hv2/480/270", title: "CSS Grid vs Flexbox - The Ultimate Comparison Guide", channel: "DesignCode", avatar: "https://picsum.photos/seed/hc2/36/36", views: "856K views", uploaded: "1 week ago", duration: "18:30", category: "Coding" },
  { id: 3, thumbnail: "https://picsum.photos/seed/hv3/480/270", title: "Lo-fi Hip Hop Radio - Beats to Study and Relax to", channel: "ChillBeats", avatar: "https://picsum.photos/seed/hc3/36/36", views: "32M views", uploaded: "2 years ago", duration: "LIVE", category: "Music" },
  { id: 4, thumbnail: "https://picsum.photos/seed/hv4/480/270", title: "GTA VI - Everything We Know So Far in 2024", channel: "GamersHub", avatar: "https://picsum.photos/seed/hc4/36/36", views: "4.5M views", uploaded: "5 days ago", duration: "28:04", category: "Gaming" },
  { id: 5, thumbnail: "https://picsum.photos/seed/hv5/480/270", title: "Street Food Tour of Mumbai - Best Local Eats!", channel: "FoodieAdventures", avatar: "https://picsum.photos/seed/hc5/36/36", views: "2.1M views", uploaded: "2 weeks ago", duration: "22:45", category: "Food" },
  { id: 6, thumbnail: "https://picsum.photos/seed/hv6/480/270", title: "Python for Data Science - Complete Beginner Guide 2024", channel: "DataWithNik", avatar: "https://picsum.photos/seed/hc6/36/36", views: "980K views", uploaded: "3 weeks ago", duration: "55:20", category: "Coding" },
  { id: 7, thumbnail: "https://picsum.photos/seed/hv7/480/270", title: "Top 10 Places to Visit in Rajasthan - Travel Vlog", channel: "WanderIndia", avatar: "https://picsum.photos/seed/hc7/36/36", views: "1.7M views", uploaded: "1 month ago", duration: "34:10", category: "Travel" },
  { id: 8, thumbnail: "https://picsum.photos/seed/hv8/480/270", title: "Stand Up Comedy Special - Laugh Out Loud Moments", channel: "ComedyClub", avatar: "https://picsum.photos/seed/hc8/36/36", views: "5.3M views", uploaded: "2 months ago", duration: "1:10:00", category: "Comedy" },
  { id: 9, thumbnail: "https://picsum.photos/seed/hv9/480/270", title: "Next.js 14 Full Course - App Router, Server Actions & More", channel: "JSMastery", avatar: "https://picsum.photos/seed/hc9/36/36", views: "1.1M views", uploaded: "2 weeks ago", duration: "1:45:00", category: "Coding" },
  { id: 10, thumbnail: "https://picsum.photos/seed/hv10/480/270", title: "IPL 2024 Highlights - Best Moments of the Season", channel: "CricketZone", avatar: "https://picsum.photos/seed/hc10/36/36", views: "8.9M views", uploaded: "1 week ago", duration: "45:30", category: "Sports" },
  { id: 11, thumbnail: "https://picsum.photos/seed/hv11/480/270", title: "Minecraft Hardcore Series - Day 100 Survival Challenge", channel: "CrafterPro", avatar: "https://picsum.photos/seed/hc11/36/36", views: "3.2M views", uploaded: "4 days ago", duration: "1:02:15", category: "Gaming" },
  { id: 12, thumbnail: "https://picsum.photos/seed/hv12/480/270", title: "Tailwind CSS Crash Course - Build Modern UIs Fast", channel: "UIDevs", avatar: "https://picsum.photos/seed/hc12/36/36", views: "430K views", uploaded: "3 weeks ago", duration: "38:10", category: "Coding" },
];

let activeCategory = "All";

function renderCategories() {
  const container = document.getElementById("category-chips");
  container.innerHTML = categories.map(cat => `
    <button class="chip ${cat === activeCategory ? 'active' : ''}" onclick="filterCategory('${cat}')">${cat}</button>
  `).join("");
}

function filterCategory(cat) {
  activeCategory = cat;
  renderCategories();
  renderVideos();
}

function renderVideos() {
  const container = document.getElementById("video-grid");
  const filtered = activeCategory === "All" ? videos : videos.filter(v => v.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="no-results"><p>No videos found in this category.</p></div>`;
    return;
  }

  container.innerHTML = filtered.map(video => `
    <div class="video-card" onclick="window.location.href='watch.html?v=${video.id}'">
      <div class="thumb-wrap">
        <img src="${video.thumbnail}" alt="${video.title}" class="thumb" loading="lazy"/>
        <span class="duration ${video.duration === 'LIVE' ? 'live' : ''}">${video.duration}</span>
      </div>
      <div class="card-info">
        <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar"/>
        <div class="card-text">
          <p class="card-title">${video.title}</p>
          <p class="card-channel">${video.channel}</p>
          <p class="card-meta">${video.views} &bull; ${video.uploaded}</p>
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderVideos();
});