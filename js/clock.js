const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText =`${hours}:${minutes}:${seconds}`;

}

getClock(); // 윈도우 실행시키자마자 시간보여주기
setInterval(getClock,1000);  // 1초 단위로 시간 보여줌 