let todoArr = [
  { task: "go school", dueDate: "04/11/2020" },
  // { task: "go home", dueDate: "05/11/2020" },
  // { task: "go college", dueDate: "07/11/2020" },
];
showElement();

function isClicked() {
  let inBox = document.querySelector(".input-box");
  let dateBox = document.querySelector(".date");
  let inTaken = inBox.value;
  let dateTaken = dateBox.value;
  todoArr.push({ task: inTaken, dueDate: dateTaken });

  inBox.value = "";
  dateBox.value = "";
  showElement();
}

function showElement() {
  let putShowing = document.querySelector(".showing");
  let newHTML = "";
  for (let i = 0; i < todoArr.length; i++) {
    let task = todoArr[i].task;
    let dueDate = todoArr[i].dueDate;

    newHTML += `<span>${task}</span><span>${dueDate}</span>
    <button class= "btn-delete" onclick = "todoArr.splice(${i}, 1); showElement();">Delete</button>`;
  }
  putShowing.innerHTML = newHTML;
}
