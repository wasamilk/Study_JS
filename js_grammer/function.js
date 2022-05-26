//----------------------------- 함수, 화살표함수 -------------------------
// -- 함수 선언(기명함수)
function sum1(a, b) {
  return console.log(a + b)
}
// -- 함수 표현(익명함수)
const sum2 = function(a,b){
  return console.log(a + b)
}

sum1(2, 4)
sum2(2, 4)

//--- 화살표 함수(익명함수)
// () => {}  vs  function () {}
const double = function (x) {
  return x * 2
}
console.log('double: ', double(7));

const doubleArrow = (x) => { return x * 2 }
// ==  const doubleArrow = x => x * 2
// 매개변수 2?  funcArrow = (x, y) => x * y
// 주의사항 : 객체 return 시 ()로 묶어야함
//    ex)  x => ({ name : wblee })
console.log('doubleArrow: ', doubleArrow(7));

// -- 즉시 실행 함수
(function () {
  console.log('즉시실행함수1')
})();
(function () {
  console.log('즉시실행함수2')
}());

/* 함수 호이스팅(Hoisting) 
 * 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
 * 함수 선언(기명함수)의 경우 호이스팅이 일어나지만,
 * 함수 표현(익명함수)의 경우 호이스팅이 일어나지 않음
*/


// ------------------------ 타이머 함수 -------------------------------
// setTimeout(함수, 시간): 일정 시간 후 함수 실행  -단위:ms
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

setTimeout(function(){
  console.log('test 3s')
}, 3000)

setTimeout(()=> {
  console.log('test 3s')
}, 3000)

const timer = setTimeout(()=>{
  console.log('3s');
},3000);
const h1El = document.querySelector('h1');
h1El.addEventListener('click', ()=>{
  clearTimeout(timer);
})

// 콜백(Callback) 함수
// 함수의 인수로 사용되는 함수
// ex) setTimeout(함수, 시간)
function timeout(cb){
  setTimeout(() => {
    console.log("hi");
    cb()
  },3000)
}
timeout(() => {
  console.log("Finish!")
})
