<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>NCDC Database</title> 
        <style>
            body {
                margin: 0;
            }
            fieldset {
                background-image: url('images/corona.jpg');
                width: 95%;
                margin: 10px auto;
            }
            legend {
                text-align: center;
                border: 1px solid black;
            }
            #data {
                margin: 10px 20px; 
                width: 95%;     
                padding: 15px; 
                border: 1px solid #ccc; 
                border-radius: 0.5em;
                display: block;
            }
            #data-2 {
                margin: 10px 20px; 
                width: 95%; 
                padding: 15px; 
                border: 1px solid #CCC; 
                border-radius: 0.5em;
                display: none;
            }
            form div { 
                margin-top: 15px; 
            }
            label {
                display: inline-block;
                margin-left: 20px;
                width: 100px;
            }
            label.gender {
                width: 80px;
                margin-left: 20px;
            }
            input[type=text], input[type=email] { 
                font: 16px sans-serif;
                width: 250px;
                padding-left: 10px;
                margin-left: 20px;
                height: 35px;
                -moz-box-sizing: border-box; 
                box-sizing: border-box;
                border: 1px solid #999; 
            }
            input[type=checkbox] {
                height: 14px;
                margin-left: 55px;
            }
            .checklabel{
                font: 14px sans-serif;
                display: inline;
                margin-left: 5px;
            }
            input[type=button] { 
                width: 70px;
                padding: 0 5px;
            }
            .submitbutton {
                background-color: black;
                border-radius: 10%;
                color: white;
                width: 100px;
                margin: 10px 0 5px 100px;
            }
            input:focus {
                border-color: #999; 
            }
            #table-container {
                width: 100%;
                margin-left: 20px;
            }
            #edit-container {
                display: block;
            }
            table {
                border-spacing: 10px;
                margin-top: 50px;
                width: 98%;
                border-collapse: collapse;
            }
            th {
                background-color: #ccc;
                margin: 0 -20px;
                text-align: center;
                padding: 10px;
            }
                tr:nth-child(even) {
                background-color: #fdedec;
            }
            td {
                padding: 8px;
                text-align: center; 
            }
            #showDate {
                background-color: black;
                margin-left: 50px;
                word-spacing: 2px;
                color: white;
                padding: 0 5px;
                font-style: italic;
                font-weight: bolder;
            }
        </style>
    </head>
    <body>
        <div id="form-container">
            <form id ="data" onsubmit="return showData()">
                <fieldset>
                    <legend>Covid-19 Database<span id="showDate"></span>
                    </legend>
                    <div>
                        <label for "First Name">First Name: </label> <input id="fname" class="first_name" name="firstName" type="text" placeholder="Enter your first name here" required>
                    </div>
                    <div>
                        <label for "Last Name">Last Name: </label> <input id="lname" class="last_name" name="lastName" type="text" placeholder="Enter your last name here" required>
                    </div>
                    <div>
                        <label for "Email">Email: </label> <input id="email" class="mail" name="email" type="email" placeholder=" Enter your email address here" required>
                    </div>
                    <div>
                        <label for "Gender" class="gender">Gender: </label>
                            <select id="gender" required>
                                <option value ="" disabled selected>Select your Gender</option>
                                <option value="Male">Male</option>
                                <option value ="Female">Female</option>
                            </select>
                    </div>
                    <div>
                        <input type="checkbox" name="check" id="checkBox" class="check_box" checked value="Yes" onchange="checkBoxStatus()">
                        <label for ="checkBox" class="checklabel"> Recently came into Nigeria within the last 14 days?</label>
                    </div>
                    <div>
                        <input type="submit" class="submitbutton" value="Submit">
                    </div>
                </fieldset>
            </form>
            <form id ="data-2" onsubmit="return updateData()">
                <fieldset>
                    <legend>Covid-19 Database</legend>
                               <div>
                        <label for "First Name">First Name: </label> <input id="fname-2" class="first_name" name="firstName" type="text" placeholder="Enter your first name here" required>
                    </div>
                    <div>
                        <label for "Last Name">Last Name: </label> <input id="lname-2" class="last_name" name="lastName" type="text" placeholder="Enter your last name here" required>
                    </div>
                    <div>
                        <label for "Email">Email: </label> <input id="email-2" class="mail" name="email" type="email" placeholder=" Enter your email address here" required>
                    </div>
                    <div>
                        <label for "Gender" class="gender">Gender: </label>
                            <select id="gender-2" required>
                                <option value ="" disabled selected>Select your Gender</option>
                                <option value="Male">Male</option>
                                <option value ="Female">Female</option>
                            </select>
                    </div>
                    <div>
                        <input type="checkbox" name="check" id="checkBox2" class="check_box" checked value="Yes" onchange="checkboxStatus()">
                        <label for ="checkBox-2" class="checklabel"> Recently came into Nigeria within the last 14 days?</label>
                    </div>
                    <div>
                        <input type="submit" class="submitbutton" value="Update">
                    </div>
                </fieldset>
            </form> 
        </div>
        <div id="table-container">
            <table id= "database" border="1">
                <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th>Email Address</th>
                        <th>Gender</th>
                        <th>Came to Nigeria within the last 14 days?</th>
                        <th colspan='2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <script>
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




        </script>
    </body>
</html>
