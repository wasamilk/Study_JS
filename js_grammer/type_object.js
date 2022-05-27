import _ from 'lodash' // 상대경로 아닌 모듈은 node_modules에서 찾아옴
import getType from './function/getType'
import random from './function/getRandom'


// Object.assign(target, sources)
// target 객체에 source객체를 덮어씌운다
// prototype메소드가 아니므로 객체에 사용할 수 없고, 
// 전역객체인 Object 객체에 사용해야한다.
const userAge = {
  name : 'woobin',
  age : 27
}
const userEmail = {
  name : 'Leewoobin',
  email : 'vin5004@naver.com'
}

const target = Object.assign(userAge, userEmail)
// const target = Object.assign({}, userAge, userEmail) // => 이렇게 하면 타겟객체와 다른 새로운 객체로 만들 수 있음
console.log(target)     // {name: 'Leewoobin', age: 27, email: 'vin5004@naver.com'}
console.log(userAge)    // {name: 'Leewoobin', age: 27, email: 'vin5004@naver.com'}
console.log(target === userAge) // true

const a = { k: 123}
const b = { k: 123}
console.log(a === b)  // false


// Object.keys(target)
const user = {
  name: 'woobin',
  age : 27,
  email: 'vin@asf'
}
const keys = Object.keys(user)
console.log(keys)    //['name', 'age', 'email']
const values = keys.map(key => user[key])
console.log(values)   //['woobin', 27, 'vin@asf']

console.log(user.age)
console.log(user['age'])  // 객체 또한 인덱싱을 제공하며, 프로퍼티의 이름을 적어야한다.


// 구조 분해 할당 (Destructuring assignment)  ==  비구조화 할당
/*
  const user = {
  name: 'woobin',
  age : 27,
  email: 'vin@asf'
}
*/
const { name:n, age, email='ㄴㄴ', address } = user   
// name:n 는 꺼낸값에 새로운 변수명 할당
// email='ㄴㄴ'는 기본값 할당, 없으면 'ㄴㄴ'가 들어감
// const { name, age } = user // 필요한것만 출력 가능
console.log(`유저 이름 : ${n}`)
console.log(`유저 나이 : ${age}`)
console.log(`유저 메일 : ${email}`)
console.log(`유저 주소 : ${address}`) //undefined

// 배열에도 구조 분해 할당 가능하며, 변수이름은 마음대로, 대신 꺼내는건 순서대로만됨
const fruits = ['Apple', 'Banana', 'Cherry']
const [ap, ba, c, d] = fruits
console.log(ap, ba, c, d)   // Apple Banana Cherry undefined
// const [, ba, c, d] = fruits //이런식으로 안꺼낼거는 공백으로 냅둬도가능 // Banana Cherry undefined


// 전개 연산자 (Spread)
console.log(fruits)
console.log(...fruits)
// = console.log('Apple', 'Banana', 'Cherry')

function toObject(a, b, ...c){  // 매개변수에 전개연산자는 남은 모든 인자를 배열로 담는다는 이야기
  return {
    a: a,
    b: b,
    c: c  // 객체의 프로퍼티명과 인자이름이 같으면 x: 생략 가능
  }
}
// == const toObject = (a, b, ...c) => ({a, b, c})

console.log(toObject(...fruits))  //{a: 'Apple', b: 'Banana', c: 'Cherry'}


// ------------- 데이터 불변성(Immutability) ---------------
// 원시 데이터 : String, Number, Boolean, undefined, null
//    원시 데이터는 같은 값이 있으면 원래 있던 주소값을 가져다 쓰기때문에, 
//    값이 같으면 ===으로 비교했을 때 무조건 같다.
// 참조형 데이터 : Object, Array, Function
//    참조형 데이터의 경우, 불변성이 없다. 만들때마다 새로 생긴다
//    하지만 대입연산자(=)를 사용하여 같은 메모리를 바라보게 할 수 있으며,
//    의도치 않게 원하지 않는 값도 변경할 가능성이 있다.


/** ----------------- 얕은 복사 vs 깊은 복사 --------------------
 *    const copyUser = user 
 * 
 *  얕은 복사(Shallow copy)
 *  - 껍데기만 복사, 즉 안에 프로퍼티가 참조형이면 그대로 복사되어서 같은 주소를 공유함
 *    const copyUser = Object.assign({}, user)
 *    const copyUser = {...user}
 * 
 *  깊은 복사(Deep copy)
 *  - 참조형 데이터 안의 참조형 데이터까지 복사하기 위해 사용
 *    import _ from 'lodash'
 *    const copyUser = _.cloneDeep(user)
 * ------------------------------------------------------------- */