let students = [];
class Student {
  constructor(name, age, id, email, major, university, gpa) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.email = email;
    this.major = major;
    this.university = university;
    this.gpa = gpa;
  }
}
function insertStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let id = document.getElementById("id").value;
  let email = document.getElementById("email").value;
  let major = document.getElementById("major").value;
  let university = document.getElementById("university").value;
  let gpa = document.getElementById("gpa").value;
  let new_stundent = new Student(name, age, id, email, major, university, gpa);
  students.push(new_stundent);
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
function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("id").value = "";
  document.getElementById("email").value = "";
  document.getElementById("major").value = "";
  document.getElementById("university").value = "";
  document.getElementById("gpa").value = "";
}
function clearDisplay() {
  document.getElementById("demo_div").innerHTML = "";
}
function searchStudent() {
  let query = document.getElementById("search").value.toLowerCase();
  let filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query) ||
      student.age.toString().includes(query) ||
      student.id.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.major.toLowerCase().includes(query) ||
      student.university.toLowerCase().includes(query) ||
      student.gpa.toString().includes(query)
  );
  students = filteredStudents;
  show_info();
}
