let list = document.getElementById('list_item');
let output = document.getElementById('output');
let result = document.getElementById('result');
let addition = document.getElementById('add');
let del = document.getElementsByClassName('delete');
let ol = document.querySelector('ol');
let li = document.getElementsByTagName("LI");



// retriving array 
function get_todo(){
    let myArr= new Array();
    let todo_item = localStorage.getItem('todo');  /*global localStorage */
     if (todo_item !== null) {
        myArr = JSON.parse(todo_item); 
    }
    return myArr;
}

// Deleting done item

function del_item() {
    let div = this.getAttribute('id');
    let todos = get_todo();
    todos.splice(div, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    display();
    
    return false;
  }

// Marking list item done 

ol.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  }
}, false);

// Adding new element to array 

addition.addEventListener('click', add);

function add() {
    let x = list.value;
    let todos = get_todo();
    todos.push(x);
    localStorage.setItem('todo', JSON.stringify(todos));
    list.value="";
 
    display();
 
    return false;
}

// Display output 

function display() {
    let todos = get_todo();
 
    let y = '<ul>';
    for(let i=0; i<todos.length; i++) {
        y += '<li>' + todos[i] + '<button class="delete" id="' + i  + '" >delete</button></li>';
    };
    y += '</ul>';
 
    document.getElementById('result').innerHTML = y;
 
    
    for (let i=0; i < del.length; i++) {
        del[i].addEventListener('click', del_item);
    };
}
 
 display();
