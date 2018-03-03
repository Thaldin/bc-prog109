function AddItem() {

    if (grocery === "") {
        return;
    }

    var grocery = document.getElementById("grocery").value

    var newEl = document.createElement("li");
    var newItem = document.createTextNode(grocery);
    newEl.appendChild(newItem);

    var list = document.getElementById("todo");
    var count = list.childNodes.length;
    newEl.setAttribute("id", count + 1);
    
    list.appendChild(newEl);
}
