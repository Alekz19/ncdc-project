"use strict";
var dataTable = document.getElementById('database'),
   submit = document.getElementById("data"),
   update = document.getElementById("data-2"),
   editBtn = "<input type='button'  class='edit-button' value='Edit' onclick='edit(this)'>";
//function that activate the checkbox status
function checkBoxStatus(status) {
var status = document.getElementById("checkBox").checked;
    if (status) {
     document.getElementById("checkBox").value = "Yes";
    } else {
    document.getElementById("checkBox").value = "No";
    }
}
//Page Date and Time Function
function currentDate() {
    var showDate = document.getElementById('showDate'),
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
    var t = setTimeout(function () {currentDate(); 
            }, 1000);
}
currentDate();
//function that shows the submit form data in the table
function showData() {
    var row = document.createElement('tr'),
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
    td5.innerHTML = editBtn;
    td6.innerHTML = "<input type='button' class='delete-button' value='Delete' onclick='delBtn(this)'>";
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
submit.reset();
    dataTable.children[1].insertBefore(row, dataTable.children[0].childNodes[row.length]);
    return false;
};
//Function that edit any row being clicked
function edit() {
    var dataRows = dataTable.children[1].rows;
    submit.style.display = "none";
    update.style.display = "block";
    for (var i = 0; i <= dataRows.length; i++) {
     var currentRow = dataRows[i];
currentRow.onclick = function editBtn() {
            if (this.parentNode.nodeName == 'tbody') {
                return false;
            }
            var cells = this.cells;
            var name = cells[0].innerHTML;
            var fullName = name.split(" ");
            var fName = fullName[0];
            var lName = fullName[1];
            var f1 = document.getElementById('fname-2');
            var f2 = document.getElementById('lname-2');
            var f3 = document.getElementById('email-2');
            var f4 = document.getElementById('gender-2');
            var f5 = document.getElementById('checkBox2');
            f1.value = fName;
            f2.value = lName;
            f3.value = cells[1].innerHTML;
            f4.value = cells[2].innerHTML;
            f5.value = cells[3].innerHTML;
    };
};
}
//function that update form data in the table
    function updateData() {
    update.style.display = "none";
    submit.style.display = "block";
var dataRows = dataTable.children[1].rows;
    for (var i = 0; i <= dataRows.length; i++) {
       var currentRow = dataRows[i];
       var cells = currentRow.cells;
       cells[0].innerHTML = document.getElementById('fname-2').value + " " + document.getElementById('lname-2').value;
       cells[1].innerHTML = document.getElementById('email-2').value;
       cells[2].innerHTML = document.getElementById('gender-2').value;
       cells[3].innerHTML = document.getElementById('checkBox').value;
       cells[4].innerHTML = editBtn;
       cells[5].innerHTML = "<input type='button' class='delete-button' value='Delete' onclick='delBtn(this)'>";
return false;
    };
};
//Function that delete any row being clicked
        function delBtn(r) {
            var j = r.parentNode.parentNode.rowIndex;       dataTable.deleteRow(j);
}     



