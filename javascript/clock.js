const clock = document.querySelector('#clock');
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); /*padStart() => 1번째인자: 길이 2번째인자: 나머지칸무엇으로?*/
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); /*이코드가 없으면 00:00:00이 1초 보여지고 시간이뜬다*/
setInterval(getClock, 1000); /*첫번째인자: 실행하고싶은함수 두번째인자: 몇초마다? setTimeout도같음*/