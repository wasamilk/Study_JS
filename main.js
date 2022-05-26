import _ from 'lodash' // 상대경로 아닌 모듈은 node_modules에서 찾아옴
import getType from './function/getType'
import random from './function/getRandom'


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
