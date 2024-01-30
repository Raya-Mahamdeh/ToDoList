
function changeOnChecked(){
  const a = event.target.closest('input').checked;
  if(a){
   event.target.closest('li').style.textDecoration = "line-through"
   console.alert(a);
  }else
    event.target.closest('li').style.textDecoration = "none"
 }

function newTaskTOAdd() {
  var li = document.createElement("li");
  var checkBox = document.createElement("INPUT");
  var Value = document.getElementById("Task").value;
  checkBox.setAttribute ("type","checkbox");
  checkBox.setAttribute ("class","checkBox");
  checkBox.checked = false;
  checkBox.setAttribute ("onclick","changeOnChecked()");
  li.appendChild(checkBox);
  li.appendChild(document.createTextNode(Value));
  if (Value === '') {
    alert("write something,Pls!!!!!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  // After adding clear textBox
  document.getElementById("Task").value = ""; 
}