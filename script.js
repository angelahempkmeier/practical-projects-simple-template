document.addEventListener("DOMContentLoaded", loadList);

function addItem() {
    const input = document.getElementById("itemInput");
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter an item!");
        return;
    }
    
    const list = JSON.parse(localStorage.getItem("shoppingList")) || [];
    list.push({ name, completed: false });
    localStorage.setItem("shoppingList", JSON.stringify(list));
    input.value = "";
    loadList();
}

function loadList() {
    const list = JSON.parse(localStorage.getItem("shoppingList")) || [];
    const ul = document.getElementById("itemList");
    ul.innerHTML = "";

    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = item.completed ? "completed" : "";
        li.innerHTML = `
            <span onclick="toggleCompleted(${index})">${item.name}</span>
            <button class="remove-btn" onclick="removeItem(${index})">✖</button>
        `;
        ul.appendChild(li);
    });
}

function toggleCompleted(index) {
    const list = JSON.parse(localStorage.getItem("shoppingList"));
    list[index].completed = !list[index].completed;
    localStorage.setItem("shoppingList", JSON.stringify(list));
    loadList();
}

function removeItem(index) {
    const list = JSON.parse(localStorage.getItem("shoppingList"));
    list.splice(index, 1);
    localStorage.setItem("shoppingList", JSON.stringify(list));
    loadList();
}
