let students = [];
function insertStudent() {
  let student = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    major: document.getElementById("major").value,
    university: document.getElementById("university").value,
    gpa: document.getElementById("gpa").value,
  };
  students.push(student);
}
function show_info() {
  let mainEle = document.getElementById("demo_div");
  mainEle.innerHTML = "";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let headerRow = document.createElement("tr");
  let headers = ["Name", "Age", "ID", "Email", "GPA", "Major", "University"];
  headers.forEach((header) => {
    let th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  students.forEach((student) => {
    let row = document.createElement("tr");
    Object.keys(student).forEach((key) => {
      let td = document.createElement("td");
      td.innerText = student[key];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  mainEle.appendChild(table);
}
