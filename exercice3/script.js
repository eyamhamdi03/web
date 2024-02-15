
document.getElementById('btn').addEventListener('click', () => {
    const name = document.getElementById("name").value;
    const content = document.getElementById("content").value;
    const todoList = document.getElementById("todoList");

    if (name.trim() !== "" && content.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = `${name.trim()} : ${content.trim()}`;
        
        // Add a delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        document.getElementById("name").value = "";
        document.getElementById("content").value = "";
    }
});

document.getElementById("todoList").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.parentNode.remove();
    }
});

