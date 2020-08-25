"use strict";
let rIndex;
const dataTable = document.getElementById('database'),
    submit = document.getElementById("data"),
    update = document.getElementById("data-2");
let rows = dataTable.children[1].getElementsByTagName('tr');
//function that activate the checkbox status
let status = document.getElementById("checkBox");
status.onchange = function checkBoxStatus() {
    if (status.checked) {
     document.getElementById("checkBox").value = "Yes";
    } else {
    document.getElementById("checkBox").value = "No";
    }
}
//Page Date and Time Function
function currentDate() {
    let showDate = document.getElementById('showDate'),
        d = new Date(),
        days = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"],
        today = days[d.getDay()],
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        thisMonth = months[d.getMonth()],
        date = d.getDate(),
        year = d.getFullYear(),
        hour = d.getHours(),
        minute = d.getMinutes(),
        second = d.getSeconds(),
        meridian;
    if (hour >= 12) {
        meridian = "PM";
    }
        else {
            meridian = "AM";
        }
    if (hour === 0) {
        hour = 12;
    }
    if (hour >= 13 && hour <= 21 || hour > 21) {
        hour = (hour - 12);
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (second < 10) {
        second = "0" + second;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    showDate.textContent = today + " " + thisMonth + " " + date + " " + year + ". " + hour + ":" + minute + ":" + second + " " + meridian;
    const t = setTimeout(function () {currentDate(); 
            }, 1000);
}
currentDate();
//function that shows the submit form data in the table
function showData() {
    let tableRows = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td'),
        td3 = document.createElement('td'),
        td4 = document.createElement('td'),
        td5 = document.createElement('td'),
        td6 = document.createElement('td');
    td1.innerHTML = document.getElementById('fname').value + " " + document.getElementById('lname').value;
    td2.innerHTML = document.getElementById('email').value;
    td3.innerHTML = document.getElementById('gender').value;
    td4.innerHTML = document.getElementById("checkBox").value;
    td5.innerHTML = "<input type='button' class='edit-button' value='Edit' onclick='edit(this)'>";
    td6.innerHTML = "<input type='button' class='delete-button' value='Delete' onclick='delBtn(this)'>";
    tableRows.appendChild(td1);
    tableRows.appendChild(td2);
    tableRows.appendChild(td3);
    tableRows.appendChild(td4);
    tableRows.appendChild(td5);
    tableRows.appendChild(td6);
submit.reset();
 dataTable.children[1].insertBefore(tableRows, dataTable.children[0].childNodes[tableRows.length]);
    return false;
};
//Function that edit any row being clicked
function edit() { 
    submit.style.display = "none";
    update.style.display = "block";
    for (let i = 0; i < rows.length; i++) {
        rows[i].onclick = function editBtn() { 
            rIndex = this.rowIndex;
            let name = this.cells[0].innerHTML,
            fullName = name.split(" "),
            fName = fullName[0],
            lName = fullName[1],
            f1 = document.getElementById('fname-2'),
            f2 = document.getElementById('lname-2'),
            f3 = document.getElementById('email-2'),
            f4 = document.getElementById('gender-2');
            f1.value = fName;
            f2.value = lName;
            f3.value = this.cells[1].innerHTML;
            f4.value = this.cells[2].innerHTML;
        };
        //function that update form data in the table
    update.onsubmit = function updateData() {
        update.style.display = "none";
        submit.style.display = "block";
        rows[i].cells[0].innerHTML = document.getElementById('fname-2').value + " " + document.getElementById('lname-2').value;
        rows[i].cells[1].innerHTML = document.getElementById('email-2').value;
        rows[i].cells[2].innerHTML = document.getElementById('gender-2').value;
        rows[i].cells[3].innerHTML = document.getElementById('checkBox').value;
        rows[i].cells[4].innerHTML = "<input type='button'  class='edit-button' value='Edit' onclick='edit(this)'>";
        rows[i].cells[5].innerHTML = "<input type='button' class='delete-button' value='Delete' onclick='delBtn(this)'>";
return false;
    };
};
}
//Function that delete any row being clicked
    function delBtn(r) {
        var del = r.parentNode.parentNode.rowIndex;       dataTable.deleteRow(del);
};
