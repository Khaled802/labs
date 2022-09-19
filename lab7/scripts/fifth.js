var _name = document.getElementsByName('name')[0];
var age = document.getElementsByName('age')[0];
var sal = document.getElementsByName('sal')[0];
var sal = document.getElementsByName('sal')[0];

var table = document.getElementsByTagName('table')[0];
var submit = document.getElementById('submit');


submit.addEventListener('click', function() {

  var row = document.createElement("tr");
  table.appendChild(row);


function add_td(val) {
  var cell = document.createElement("td");
  var cellText = document.createTextNode(val);
  cell.appendChild(cellText);
  row.appendChild(cell);

}

function add_td_btn() {
  var cell = document.createElement("td");
  var button = document.createElement('button');
  button.textContent = 'delete';
  button.setAttribute('onclick', 'delete_it(this.parentElement.parentElement)');
  button.setAttribute('id', _name.value);
  cell.appendChild(button);
  row.appendChild(cell);

}

add_td(_name.value);
add_td(age.value);
add_td(sal.value);
add_td_btn();

}
)

function delete_it(_id) {
  console.log(_id);
  table.deleteRow(_id.rowIndex);
}
