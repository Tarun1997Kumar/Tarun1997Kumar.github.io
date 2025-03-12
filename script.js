const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
};

// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page

const buttonContainer = document.getElementById("button-container");
const workFrame = document.getElementById("work-frame");


for (let key in works) {
    let button = document.createElement("button");
    button.textContent = works[key].title;
    button.classList.add("work-button");

    button.addEventListener("click", function () {
        workFrame.src = works[key].url;
    });

    buttonContainer.appendChild(button);
}