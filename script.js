// script.js
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("task-menu");
  const iframe = document.getElementById("task-content");
  const loader = document.getElementById("loader");
  const homeButton = document.getElementById("home-button");
  // Load landing page by default
  iframe.src = "landing-page.html";

  // Home button click handler
  homeButton.addEventListener("click", () => {
    iframe.src = "landing-page.html";
    document.querySelectorAll("#task-menu li").forEach((li) => {
      li.classList.remove("active");
    });
  });

  fetch("tasks.json")
    .then((response) => response.json())
    .then((tasks) => {
      tasks.forEach((task) => {
        const listItem = document.createElement("li");
        const statusDot = document.createElement("div");

        // Add status indicator
        statusDot.className = `task-status ${
          task.score === null
            ? "pending"
            : task.score >= task.points_possible
            ? "completed"
            : "missing"
        }`;

        listItem.innerHTML = `
                  <div class="task-title">${task.title}</div>
  <div class="task-points">${task.score == null ? "-" : task.score}/${
          task.points_possible
        }</div>
              `;
        listItem.prepend(statusDot);

        // task click handler with loading animation
        listItem.onclick = () => {
          document.querySelectorAll("#task-menu li").forEach((li) => {
            li.classList.remove("active");
          });
          listItem.classList.add("active");

          loader.style.display = "block";
          iframe.classList.remove("loaded");
          iframe.src = task.url;
        };

        menu.appendChild(listItem);
      });
    })
    .catch((error) => console.error("Error loading tasks:", error));

  // Hide loader when iframe loads
  iframe.addEventListener("load", () => {
    loader.style.display = "none";
    iframe.classList.add("loaded");
  });
});
