//hold todo list items
let todoItems = [];

//New Task List Item
function addTodo() {
  var li = document.createElement("li");
  var input = document.getElementById("input");
  let text = input.value.trim();
  if (input.value == "")
  {
      alert("Please  write something...");
  }
  else{
  var tn = document.createElement("input");
  tn.setAttribute("type", "text");
  tn.setAttribute("disabled", "true");
  tn.setAttribute("value", text);

  }
  //input (checkbox)
  var inputc = document.createElement("INPUT");
  inputc.setAttribute("type", "checkbox");
  inputc.setAttribute("class", "checkbtn");
    inputc.onclick = function(){
        var listItem = this.parentNode;
        var textBox = listItem.getElementsByTagName("input")[1];
        textBox.style.textDecoration= !this.checked ? "" : "line-through";
    }
      //button.edit
  var editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  editbtn.setAttribute("class", "editbt");
  editbtn.onclick = function (event) {
    var listItem = this.parentNode;
    var textBox = listItem.getElementsByTagName("input")[1];
    if (this.innerText == "Edit") {
      textBox.removeAttribute("disabled");
      this.innerText = "Save";
    } else {
      textBox.setAttribute("disabled", "true");
      this.innerText = "Edit";
    }
  };
  //button.delete
  var delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.setAttribute("class", "delbtn");
  delbtn.onclick = function () {
    console.log("Delete task...");
    //remove parent list item from the ul
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  };
  li.appendChild(inputc);
  li.appendChild(tn);
  li.appendChild(editbtn);
  li.appendChild(delbtn);

  var ul = document.getElementById("todo");
  ul.appendChild(li);

  input.value = "";
  input.focus();

}
