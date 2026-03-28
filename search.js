const searchResults = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/seed/vid1/480/270",
    title: "Building a Full Stack App with React & Node.js in 2024",
    channel: "CodeWithMe",
    avatar: "https://picsum.photos/seed/ch1/40/40",
    views: "1.2M views",
    uploaded: "3 days ago",
    duration: "42:15",
    description: "In this video we build a complete full stack application using React on the frontend and Node.js on the backend with MongoDB as the database..."
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/seed/vid2/480/270",
    title: "CSS Grid vs Flexbox - Which Should You Use?",
    channel: "DesignCode",
    avatar: "https://picsum.photos/seed/ch2/40/40",
    views: "856K views",
    uploaded: "1 week ago",
    duration: "18:30",
    description: "A deep dive into CSS Grid and Flexbox, comparing their use cases and when to choose one over the other for your layouts..."
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/seed/vid3/480/270",
    title: "The Ultimate JavaScript Crash Course for Beginners",
    channel: "JSMastery",
    avatar: "https://picsum.photos/seed/ch3/40/40",
    views: "3.4M views",
    uploaded: "2 weeks ago",
    duration: "1:12:45",
    description: "Learn JavaScript from scratch in this comprehensive crash course. We cover variables, functions, DOM manipulation and more..."
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/seed/vid4/480/270",
    title: "How to Build a YouTube Clone - Full Tutorial",
    channel: "DevProjects",
    avatar: "https://picsum.photos/seed/ch4/40/40",
    views: "512K views",
    uploaded: "5 days ago",
    duration: "2:05:10",
    description: "Build a fully functional YouTube clone from scratch using HTML, CSS and JavaScript. Step by step tutorial..."
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/seed/vid5/480/270",
    title: "Top 10 VS Code Extensions for Web Developers 2024",
    channel: "TechTips",
    avatar: "https://picsum.photos/seed/ch5/40/40",
    views: "220K views",
    uploaded: "1 month ago",
    duration: "12:00",
    description: "Boost your productivity with these must-have VS Code extensions for web developers in 2024..."
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/seed/vid6/480/270",
    title: "Python for Data Science - Complete Beginner Guide",
    channel: "DataWithNik",
    avatar: "https://picsum.photos/seed/ch6/40/40",
    views: "980K views",
    uploaded: "3 weeks ago",
    duration: "55:20",
    description: "Start your data science journey with Python. Learn pandas, numpy, matplotlib and more in this beginner-friendly guide..."
  }
];

const filters = ["All", "Videos", "Channels", "Playlists", "Shorts", "This year", "This month"];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) || "javascript tutorials";
}

function renderFilters(activeFilter = "All") {
  const container = document.getElementById("filter-chips");
  container.innerHTML = filters.map(f => `
    <button class="chip ${f === activeFilter ? 'active' : ''}" onclick="setFilter('${f}')">${f}</button>
  `).join("");
}

function setFilter(filter) {
  renderFilters(filter);
  renderResults();
}

function renderResults() {
  const container = document.getElementById("results-container");
  const query = getQueryParam("q");
  document.getElementById("results-count").textContent = `About ${(searchResults.length * 1243).toLocaleString()} results for "${query}"`;

  container.innerHTML = searchResults.map(video => `
    <div class="result-card" onclick="window.location.href='watch.html?v=${video.id}'">
      <div class="result-thumb-wrap">
        <img src="${video.thumbnail}" alt="${video.title}" class="result-thumb" loading="lazy"/>
        <span class="result-duration">${video.duration}</span>
      </div>
      <div class="result-info">
        <h3 class="result-title">${video.title}</h3>
        <p class="result-meta">${video.views} &bull; ${video.uploaded}</p>
        <div class="result-channel">
          <img src="${video.avatar}" alt="${video.channel}" class="result-avatar"/>
          <span>${video.channel}</span>
        </div>
        <p class="result-desc">${video.description}</p>
      </div>
    </div>
  `).join("");
}

function initSearch() {
  const query = getQueryParam("q");
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = query;

  renderFilters();
  renderResults();
}

document.addEventListener("DOMContentLoaded", initSearch);