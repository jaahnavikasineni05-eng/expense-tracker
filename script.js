const form = document.getElementById("experience-form");
const titleInput = document.getElementById("experience-title");
const notesInput = document.getElementById("experience-notes");
const experienceList = document.getElementById("experience-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value.trim();
    const notes = notesInput.value.trim();

    if (!title) {
        alert("Please enter what you did.");
        return;
    }

    const item = document.createElement("li");

    const heading = document.createElement("h3");
    heading.textContent = title;
    item.appendChild(heading);

    if (notes) {
        const paragraph = document.createElement("p");
        paragraph.textContent = notes;
        item.appendChild(paragraph);
    }

    experienceList.innerHTML = "";
    experienceList.appendChild(item);

    form.reset();
});