const videoData = {
  1: {
    title: "Building a Full Stack App with React & Node.js in 2024",
    channel: "CodeWithMe",
    avatar: "https://picsum.photos/seed/ch1/40/40",
    subscribers: "1.2M subscribers",
    views: "1,245,832 views",
    uploaded: "March 24, 2024",
    likes: "42K",
    description: `In this video we build a complete full stack application using React on the frontend and Node.js on the backend with MongoDB as the database.

We cover:
- Setting up your project structure
- Building REST APIs with Express
- Connecting to MongoDB with Mongoose
- Building the React frontend
- Deploying to production

This is a comprehensive guide suitable for intermediate developers who want to level up their full stack skills.`,
    tags: ["React", "Node.js", "MongoDB", "Full Stack", "Web Development"]
  }
};

const relatedVideos = [
  { id: 2, thumbnail: "https://picsum.photos/seed/r1/320/180", title: "CSS Grid vs Flexbox - Which Should You Use?", channel: "DesignCode", views: "856K views", duration: "18:30" },
  { id: 3, thumbnail: "https://picsum.photos/seed/r2/320/180", title: "The Ultimate JavaScript Crash Course", channel: "JSMastery", views: "3.4M views", duration: "1:12:45" },
  { id: 4, thumbnail: "https://picsum.photos/seed/r3/320/180", title: "How to Build a YouTube Clone", channel: "DevProjects", views: "512K views", duration: "2:05:10" },
  { id: 5, thumbnail: "https://picsum.photos/seed/r4/320/180", title: "Top 10 VS Code Extensions 2024", channel: "TechTips", views: "220K views", duration: "12:00" },
  { id: 6, thumbnail: "https://picsum.photos/seed/r5/320/180", title: "Python for Data Science Beginners", channel: "DataWithNik", views: "980K views", duration: "55:20" },
  { id: 7, thumbnail: "https://picsum.photos/seed/r6/320/180", title: "Tailwind CSS Full Course 2024", channel: "CodeWithMe", views: "430K views", duration: "38:10" },
  { id: 8, thumbnail: "https://picsum.photos/seed/r7/320/180", title: "Next.js 14 Tutorial for Beginners", channel: "JSMastery", views: "1.1M views", duration: "1:45:00" },
];

const comments = [
  { avatar: "https://picsum.photos/seed/u1/36/36", name: "Aarav Sharma", time: "2 days ago", text: "This is exactly what I was looking for! The explanation of the backend setup was super clear. Thanks!", likes: 234 },
  { avatar: "https://picsum.photos/seed/u2/36/36", name: "Priya Mehta", time: "1 day ago", text: "Absolutely loved this tutorial. Subscribed instantly. Keep making content like this!", likes: 187 },
  { avatar: "https://picsum.photos/seed/u3/36/36", name: "Rohan Verma", time: "5 hours ago", text: "I followed this step by step and got it working on the first try. Insane quality tutorial.", likes: 95 },
  { avatar: "https://picsum.photos/seed/u4/36/36", name: "Sneha Kapoor", time: "3 days ago", text: "Best full stack tutorial on the internet. Hands down.", likes: 312 },
  { avatar: "https://picsum.photos/seed/u5/36/36", name: "Vikram Nair", time: "6 hours ago", text: "The MongoDB section could use a bit more depth but overall fantastic content!", likes: 67 },
];

function getVideoId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("v") || "1";
}

function renderVideoInfo() {
  const vid = videoData[getVideoId()] || videoData[1];
  document.getElementById("video-title").textContent = vid.title;
  document.getElementById("video-views").textContent = `${vid.views} • ${vid.uploaded}`;
  document.getElementById("channel-name").textContent = vid.channel;
  document.getElementById("channel-subs").textContent = vid.subscribers;
  document.getElementById("channel-avatar").src = vid.avatar;
  document.getElementById("like-count").textContent = vid.likes;

  const desc = document.getElementById("video-description");
  desc.innerHTML = vid.description.replace(/\n/g, "<br>");

  const tagsEl = document.getElementById("video-tags");
  tagsEl.innerHTML = vid.tags.map(t => `<span class="tag">#${t}</span>`).join(" ");
}

function renderRelated() {
  const container = document.getElementById("related-videos");
  container.innerHTML = relatedVideos.map(v => `
    <div class="related-card" onclick="window.location.href='watch.html?v=${v.id}'">
      <div class="related-thumb-wrap">
        <img src="${v.thumbnail}" alt="${v.title}" class="related-thumb" loading="lazy"/>
        <span class="related-duration">${v.duration}</span>
      </div>
      <div class="related-info">
        <p class="related-title">${v.title}</p>
        <p class="related-channel">${v.channel}</p>
        <p class="related-views">${v.views}</p>
      </div>
    </div>
  `).join("");
}

function renderComments() {
  const container = document.getElementById("comments-list");
  container.innerHTML = comments.map(c => `
    <div class="comment">
      <img src="${c.avatar}" alt="${c.name}" class="comment-avatar"/>
      <div class="comment-body">
        <p class="comment-name">${c.name} <span class="comment-time">${c.time}</span></p>
        <p class="comment-text">${c.text}</p>
        <div class="comment-actions">
          <button class="comment-like" onclick="this.classList.toggle('liked')">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
            ${c.likes}
          </button>
          <button class="comment-reply">Reply</button>
        </div>
      </div>
    </div>
  `).join("");
}

function initDescToggle() {
  const btn = document.getElementById("desc-toggle");
  const desc = document.getElementById("video-description");
  if (!btn) return;
  btn.addEventListener("click", () => {
    desc.classList.toggle("expanded");
    btn.textContent = desc.classList.contains("expanded") ? "Show less" : "Show more";
  });
}

function initLikeBtn() {
  const likeBtn = document.getElementById("like-btn");
  if (!likeBtn) return;
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
    const countEl = document.getElementById("like-count");
    const current = parseInt(countEl.textContent.replace("K", "")) * 1000;
    countEl.textContent = likeBtn.classList.contains("liked")
      ? Math.round((current + 1) / 1000) + "K"
      : Math.round((current - 1) / 1000) + "K";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderVideoInfo();
  renderRelated();
  renderComments();
  initDescToggle();
  initLikeBtn();
});