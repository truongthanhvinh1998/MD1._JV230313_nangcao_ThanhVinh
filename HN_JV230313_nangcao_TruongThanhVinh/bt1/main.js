let students = [
  {
    id: 1,
    name: "Vinh",
    email: "@gamil.com",
    numberPhone: "021",
    addr: "tb",
    gender: "nu",
  },
  {
    id: 2,
    name: "rikkei",
    email: "@gmail.com",
    numberPhone: "01234567",
    addr: "Hn",
    gender: "nam",
  },
];
let container = document.getElementById("container");
let form = document.getElementById("form");

console.log(form);
function renderStudents() {
  container.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    container.innerHTML += `  <th id ="${students[i].id}" >${i + 1}</th>
    <td>${students[i].name}</td>
    <td>${students[i].email}</td>
    <td>${students[i].numberPhone}</td>
    <td>${students[i].addr}</td>
    <td>${students[i].gender}</td>
    <td>
      <button class="btnedit">edit</button>
      <button class="btndelete">delete</button>
    </td>    `;
  }
}
renderStudents();

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("asdgh");
  console.log(form.name.value);
  console.log(form.email.value);
  console.log(form.numberPhone.value);
  console.log(form.addr.value);

  if (
    form.name.value &&
    form.email.value &&
    form.numberPhone.value &&
    form.addr.value
  ) {
    let stu = {
      id: Math.floor(Math.random() * 100000),
      name: form.name.value,
      email: form.email.value,
      numberPhone: form.numberPhone.value,
      addr: form.addr.value,
      gender: form.gender.value,
    };
    students.push(stu);
    form.name.value = "";
    form.email.value = "";
    form.numberPhone.value = "";
    form.addr.value = "";
    renderStudents();

    alert("them thanh cong ");
  } else {
    alert("dien day du thong tin");
  }
};
container.onclick = function (e) {
  if (e.target.classList.contains("btndelete")) {
    let deleteElement = e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("btnedit")) {
    let id = e.target.parentElement.parentElement.id;
    let name = e.target.parentElement.parentElement.children[1].innerText;
    let email = e.target.parentElement.parentElement.children[2].innerText;
    let numberPhone =
      e.target.parentElement.parentElement.children[3].innerText;
    let addr = e.target.parentElement.parentElement.children[4].innerText;

    students[id - 1].name = name;
    students[id - 1].email = email;
    students[id - 1].numberPhone = numberPhone;
    students[id - 1].addr = addr;
    renderStudents(students);
  }
};
