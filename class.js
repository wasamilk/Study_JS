
// ------ basic object ------
const me = {
  firstName : 'woobin',
  lastName : 'Lee',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(me.getFullName())
console.log(me)


// ---------------------- 생성자 함수(prototype) --------------------
// ex) User('woobin', 'Lee')
// 파스칼케이스로 작성함(첫글자를 대문자로.!)

function User(first, last){
  this.firstName = first
  this.lastName = last
}

// --- 프로토타입에 메소드 추가
// 프로토타입? -> 한번만 메모리에 올려두고 참조해서 쓰는 것
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const woobin = new User('woobin', 'Lee')
const woojin = new User('woojin', 'Lee')

console.log(woobin)
console.log(woojin)

console.log(woobin.getFullName())
console.log(woojin.getFullName())



// ----------------------------- this -------------------------------
// 일반(Normal) 함수는 *호출 위치*에서 따라 this 정의
// 화살표(Arrow) 함수는 *자신이 선언된 함수 범위*에서 this 정의!!!

const thisMan = {
  name: 'thisMan',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
thisMan.normal(); // thisMan
// thisMan.arrow();  // error 

//============================================

const normal_timer = {
  name: 'this?',
  timeout: function () {
    setTimeout(function () {
      console.log('normal? this.name')
      console.log(this.name)
    }, 2000)
  }
}

const arrow_timer = {
  name: 'this?',
  timeout: function () {
    setTimeout( () => {
      console.log('arrow? this.name')
      console.log(this.name)
    }, 2000)
  }
}

normal_timer.timeout() // undefined
arrow_timer.timeout()  // this?


// ---------------------------- ES6 Classes -------------------------

// function User(first, last){
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

class UserClass {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last 
  }
  // (=) getFullName: function() {~}
  getFullName() { 
    return `${this.firstName} ${this.lastName}`
  }
}
const amy = new UserClass('amy', 'hong');
console.log(amy)
console.log(amy.getFullName())


// ---------------------------- 상속(확장) --------------------------
class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
  ride(){
    console.log('ride')
  }
}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}

const vehi = new Vehicle('탈것', '2개 혹은 4개')
const bike = new Bicycle('따릉이', '2개')
const car = new Car('자동차', '4개', '2종보통')
const testCar = new Car('부릉', '0개')

console.log(vehi)
console.log(bike)
console.log(car)
console.log(testCar)