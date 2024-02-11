// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 랜덤번호 < 유저번호 down!!
// 랜덤번호 > 유저번호 up!!
// rest 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다(더이상 추즉 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다.

let computernum = 0

function pickrandomnum(){
    computernum = Math.floor(Math.random()*100)+1;
    console.log("정답", computernum);
}

pickrandomnum();

// Math.random() > 숫자 랜덤 0~1(1에 근접 최대 0-99) +1 하면 한칸씩 이동
// 1-100까지 랜덤숫자 뽑기 자바스크립트 
// Math.floor() > 소수점 버림

let playbutton = document.getElementById("play-button")
let userinput = document.getElementById("user-input")
let resultarea = document.getElementById("result-area")

playbutton.addEventListener("click", play)
function play(){
    let uservalue = userinput.value; // 유저인풋의 값 들고오기
    if (uservalue>computernum && uservalue<100){
        resultarea.textContent = "down!!"
        // resultarea에 있는 글자 부분을 바꿔줌
        
    }else if(uservalue<computernum && uservalue>0){
        resultarea.textContent = "up!!"
        
    }else {
        resultarea.textContent = "정답!!"
    
    }
}
// document(웹페이지 그 자체).getElementById(id로 html에서 선택)
// getElemenyByClassName : 클래스 이름으로 선택
// qeuryselecyor : id, class 태그 등 다양한 방식으로 선택 가능
// playbutton.addEventListener(이벤트 이름, 이밴트 발생시 실행함수) 
// > play 이벤트에 클릭버튼을 넣어라
// 함수를 매개변수로 넘긴 것, ()하면 그냥 실행되는데 함수 실행함, 변수로 넘기면 클릭할때만 발생함 
// 함수도 변수로 넘길 수 있다.

