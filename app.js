//add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
}, false);

// create a new list-item when clicking on the add button

function newElement() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("myInput").value
    const task = document.createElement("input");
    task.className = "textbox"
    task.setAttribute('value', inputValue);
    li.appendChild(task);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener('click', () => { li.style.display = "none"; })
}

document.querySelector('#myInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        newElement();
    }
})