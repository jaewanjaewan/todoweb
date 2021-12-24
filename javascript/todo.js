const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

let toDos = []; /*새로운할일들을 추가할수있게 let으로 선언, object를 저장한다*/

function saveToDos(){ /*toDos배열의 내용을 localStorage에 넣음*/
    localStorage.setItem("todos", JSON.stringify(toDos)); /*오직 문자열만 저장할수있다*/
}

function paintToDo(newToDo){
    const li = document.createElement('li');
    li.id = newToDo.id; /*li.id는 숫자가 들어가지않는다 string으로 형변환*/
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', (e) => { /*event(e): 기본적으로 브라우저가 제공해주는 api이며 많은정보를 얻을수있다*/
        const li = e.target.parentElement;   /*자신(버튼)의 부모 즉 li를찾는다. 삭제함수는 버튼에만 쓰이기때문에 익명함수생성*/
        li.remove(); /*버튼을 클릭하면 그 리스트를 삭제한다*/
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); /*filter함수: 인자를받아서 조건만족하면 true(배열그대로저장), false(배열에서지워짐)헤서 배열을 업데이트한다*/
        saveToDos();
    });
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener('submit', function(e){
    e.preventDefault(); /*submit은 기본동작(새로고침)이있는데 그걸 막는다*/ 
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); /*배열에저장*/
    paintToDo(newTodoObj);
    saveToDos();
});

const savedToDos = localStorage.getItem("todos");

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos); /*JSON.parse(): 문자열을 배열(객체)로 변환*/
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}