const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ /*event(e): 기본적으로 브라우저가 제공해주는 api이며 많은정보를 얻을수있다*/
    event.preventDefault(); /*브라우저의 기본동작을 실행하지못하게 막는다(새로고침이 안됨), 우리가원하는대로적기위해*/
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); /*오직 텍스트만 저장할수있다*/
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `반갑습니다 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME); /*클래스 삭제*/
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    /*로그인 유저가 없기때문에 폼을 보여준다*/
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); /*브라우저가 메소드를 실행한다*/
} else {
    /*유저가 있으니 greeting을 보여준다*/
    paintGreetings();
}