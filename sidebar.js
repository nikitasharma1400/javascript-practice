function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menu-btn");
  const overlay = document.getElementById("sidebar-overlay");

  if (!sidebar || !menuBtn) return;

  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (overlay) overlay.classList.toggle("active");
  });

  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("collapsed");
      overlay.classList.remove("active");
    });
  }

  // Set active link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".sidebar-link");
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", initSidebar);