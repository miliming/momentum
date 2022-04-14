const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); 
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// 리스트 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 텍스트에서 문자열로 변환
}

    
// 리스트 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;  // 버튼 클릭시 target을 통해 부모 찾기
    li.remove();
    toDos = toDos.filter((toDo) =>  toDo.id !== parseInt(li.id));
    saveToDos();
}

// 리스트 추가
function paintToDo(newTodo) {                 
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);   
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // 값을 저장하고
    toDoInput.value = "";            // 비운다.
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj); // 배열에 저장하기(localstorage에 추가하기 위한 작업)
    paintToDo(newTodoObj);
    saveToDos();
}

// 가장 먼저 동작
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos); // 단순 문자열을 Array로 바꿔준다
    toDos = parseToDos; // 새로고침해도 값이 리셋되지 않도록
    parseToDos.forEach(paintToDo);  // item은 event처럼 자바스크립트에서 제공
}