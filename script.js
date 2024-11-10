const studentForm = document.getElementById("studentForm");
const studentBody = document.getElementById("studentBody");

let isEditing = false;
let currentRow = null;

studentForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const gender = document.getElementById("genderInput").value;
    const grade = document.getElementById("gradeInput").value;

    if (isEditing) {
        updateStudentRecord(name, age, gender, grade);
    } else {
        addStudentRecord(name, age, gender, grade);
    }

    studentForm.reset();
    isEditing = false;
    currentRow = null;
    document.getElementById("submitButton").innerText = "Add Student";
});

function addStudentRecord(name, age, gender, grade) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${grade}</td>
        <td>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    row.querySelector(".edit-btn").addEventListener("click", function () {
        editStudentRecord(row);
    });

    row.querySelector(".delete-btn").addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this record?")) {
        }
    });

    studentBody.appendChild(row);
}

function editStudentRecord(row) {
    const name = row.cells[0].innerText;
    const age = row.cells[1].innerText;
    const gender = row.cells[2].innerText;
    const grade = row.cells[3].innerText;

    document.getElementById("nameInput").value = name;
    document.getElementById("ageInput").value = age;
    document.getElementById("genderInput").value = gender;
    document.getElementById("gradeInput").value = grade;

    document.getElementById("submitButton").innerText = "Update Student";

    isEditing = true;
    currentRow = row;
}

function updateStudentRecord(name, age, gender, grade) {
    if (currentRow) {
        currentRow.cells[0].innerText = name;
        currentRow.cells[1].innerText = age;
        currentRow.cells[2].innerText = gender;
        currentRow.cells[3].innerText = grade;
    }
}