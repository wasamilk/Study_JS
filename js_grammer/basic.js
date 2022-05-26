import _ from 'lodash' // 상대경로 아닌 모듈은 node_modules에서 찾아옴
import getType from './getType'
import random from './getRandom'

//------------------- how to use import module ---------------------
console.log(_.camelCase('hello world'));

//---------------------------- type check --------------------------
console.log(typeof 'hello');
console.log(typeof '123');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); //object
console.log(typeof {});   //object
console.log(typeof []);   //object

console.log(getType(123));
console.log(getType(null)); // null
console.log(getType({}));   // object
console.log(getType([]));   // array


// ---------------------------------- 연산자 ----------------------------
// 산술연산자 ( +, -, *, /, % )
console.log(1 + 3);
console.log(1 - 3);
console.log(1 * 3);
console.log(1 / 3);
console.log(1 % 3);

// 할당 연산자( = )
let a = 2;
a += 1;   //a = a + 1;

console.log(a);

// ---기타 비교 연산자 
const num1 = 1;
const num2 = 3;

console.log(num1 === num2);   // 일치연산자
console.log(num1 == num2);    // 동등연산자
console.log(num1 !== num2);   // 불일치연산자
console.log(num1 <= num2);    //  >, <, >=, <=

function isEqual(x,y){
  return x === y;
}

console.log(isEqual(1, 1));    // true
console.log(isEqual(1, '1'));  // false

// 논리연산자  && (and)  ,  || (or)  ,  ! (not)
const t = true;
const f = false;
console.log('&&: ', t && f);  // false
console.log('&&: ', t && t);  // true
console.log('||: ', t || f);  // true
console.log('||: ', f || f);  // false
console.log('! :', !t)        // false

// 삼항연산자
console.log( (1 < 2) ? '참' : '거짓');

//--------------------------------------- 조건문 -------------------------------
const randomNum = random()

// if else
if (randomNum === 0) {
  console.log('a is 0');
} else if (randomNum === 2) {
  console.log('a is 2');
} else {
  console.log('rest...')
}

// switch
switch (randomNum) {
  case 0:
    console.log('a is 0');
    break;
  case 2:
    console.log('a is 2');
    break;
  default:
    console.log('rest...'); 
}


//--------------------------------------- 반복문 ----------------------------
const ulEl = document.querySelector('ul')

// for (시작조건; 종료조건; 변화조건) {}
for (let i = 0; i < 3; i += 1) { 
  const li = document.createElement('li');
  li.textContent = `list-${i+1}`;
  li.addEventListener('click', function(){
    console.log(li.textContent);
  })
  ulEl.appendChild(li);
}


// --------------------- 변수 유효범위(Variable Scope) ----------------------
// let, const는 유효범위가 블록레벨
// var는 함수레벨 - 의도하지 않은 범위에서 메모리 누수를 초래하기때문에 권장 X
function scope(){
  if (true){
    console.log(a)  // undefined
    const a = 123
    console.log(a)
  }
  // console.log(a)  //const는 블록이 유효범위
}
scope()

//----------------------------- 형 변환 (Type conversion) -----------------
// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14'...
// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if ('false'){ //true
  console.log(123)
}
 