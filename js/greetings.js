const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 문자가 반복되는 경우 변수를 선언해 오타 가능성을 없애자!
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본동작을 막아줌
    //console.log(event);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); // 값 저장

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username} 하하하`;// 백틱!!``
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); // 이벤트발생 시 함수 실행
} else {
    paintGreetings(saveUsername);
}