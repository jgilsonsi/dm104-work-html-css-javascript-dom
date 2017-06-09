var userData = ['nome', 'email', 'telefone'];
var userControl = ['images/edit.png', 'images/close.png'];
var editionMode = false;
var rowIndex = -1;

start();

function start() {
    var buttonAdd = document.getElementById('singlebutton');
    buttonAdd.onclick = function () {
        if (editionMode) {
            updateUser();
            editionMode = false;
            rowIndex = -1;
        } else {
            addNewUser();
        }
    };
}

function updateUser() {
    var tBody = getTBody();
    var lineToEdit = tBody.children[rowIndex - 1];

    var i = 0;
    var max = userData.length;
    for (; i < max; i++) {
        var input = document.getElementById(userData[i]);
        lineToEdit.children[i].innerHTML = input.value;
    }
}

function addNewUser() {
    var tBody = getTBody();
    var newLine = createNewLine(tBody);
    addUserFields(newLine);
    addControlFields(newLine);
}

function addControlFields(newLine) {
    var i = 0;
    var max = userControl.length;

    for (; i < max; i++) {
        var cell = createCell(newLine);
        createImage(cell, userControl[i]);
    }
}

function createImage(cell, path) {
    var img = document.createElement('img');
    img.src = path;
    img.onclick = clickImageEvent;
    cell.appendChild(img);
}

function clickImageEvent() {
    if (this.src.endsWith('edit.png')) {
        editLine(this);
    } else {
        deleteLine(this);
    }
}

function editLine(img) {
    editionMode = true;

    var td = img.parentNode;
    var tr = td.parentNode;
    rowIndex = tr.rowIndex;

    var i = 0;
    var max = userData.length;
    for (; i < max; i++) {
        var input = document.getElementById(userData[i]);
        input.value = tr.children[i].innerHTML;
    }
}

function deleteLine(img) {
    var td = img.parentNode;
    var tr = td.parentNode;
    var tBody = getTBody();
    tBody.removeChild(tr);
}

function addUserFields(newLine) {
    var i = 0;
    var max = userData.length;

    for (; i < max; i++) {
        var input = document.getElementById(userData[i]);
        var cell = createCell(newLine);
        createTextNode(cell, input.value);
    }
}

function createTextNode(cell, content) {
    var textNode = document.createTextNode(content);
    cell.appendChild(textNode);
}

function createCell(newLine) {
    var cell = document.createElement('td');
    newLine.appendChild(cell);
    return cell;
}

function createNewLine(tBody) {
    var tr = document.createElement('tr');
    tBody.appendChild(tr);
    return tr;
}

function getTBody() {
    var table = getTable();
    return table.tBodies[0];
}

function getTable() {
    var tables = document.getElementsByTagName('table');
    return tables[0];
}