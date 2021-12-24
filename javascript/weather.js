const API_KEY = "871242005db9771ca1c90b14fd7046bd";

function onGeoOk(position){ /*position: 함수의 기본객체 user의 위치를 얻는다*/
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; /*경도, 위도, api키를 넣어 날씨정보를 가져온다
    units=metric : 온도를 섭씨로 변환(옵션이다)*/
    fetch(url).then(res => /*fetch는 프로미스(당장 뭔가일어나지않고 시간이좀걸린뒤 일어남)임 응답을 then으로 받음*/
        res.json()).then((data) =>{
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
        });
}
function onGeoError(){
    alert('위치 및 날씨정보를 불러올수 없습니다.');
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); /*브라우저에서 위치좌표(위도,경도)를줌 첫번째인자: 성공했을때 두번째인자: 실패했을때*/