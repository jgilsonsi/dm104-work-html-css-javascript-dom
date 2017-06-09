var fieldData = ['name'];
var changeColorKey = true;

start();

function start() {
    var buttonAdd = document.getElementById('singleButton');
    buttonAdd.onclick = function () {
        addNewName();
    };
}

function addNewName() {
    var list = getList(0);
    var item = createNewItem(list);
    addListItem(item);
}

function getList(index) {
    var lists = document.getElementsByTagName('ul');
    return lists[index];
}

function createNewItem(list) {
    var item = document.createElement('li');
    item = changeColor(item);
    list.appendChild(item);
    return item;
}

function changeColor(item) {
    if (changeColorKey) {
        item.className = 'text-center list-group-item list-group-item-success';
    } else {
        item.className = 'text-center list-group-item list-group-item-warning';
    }
    changeColorKey = !changeColorKey;
    return item;
}

function addListItem(item) {
    var input = document.getElementById(fieldData[0]);
    var textNode = document.createTextNode(input.value);
    item.appendChild(textNode);
}