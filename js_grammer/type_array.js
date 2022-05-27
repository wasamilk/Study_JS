const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1]) // 2
console.log(fruits)     // ['Apple', 'Banana', 'Cherry']
console.log(fruits[1])  // Banana

console.log(numbers.length)   // 4


//========@@@@@@@@@  원본수정 X @@@@@@@@@@=========
// Array.prototype.find()
// 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환, 없으면 undefined반환
const found = numbers.find(element => element >2)
console.log(`numbers에서 2보다 큰 첫번째 요소는? ${found}`)  //3

// arr1.concat(arr2)
// arr1에 arr2를 병합 
console.log(numbers.concat(fruits)) //[1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']

// .forEach()
fruits.forEach(function (fruit, i){
  console.log(fruit, i)
})

// .map()
// forEach와 다르게 return 값으로 새로운 배열을 만듬 
const mapArr = fruits.map(function (fruit, i){
  return {
    id : i,
    name : fruit
  }
})
console.log(mapArr)

// .filter()
// map은 전부 배열로, filter는 true 요소만 배열로 
const a = numbers.map(num => num < 3)
console.log (a)  // [true, true, false, false]
const b = numbers.filter(num => num < 3)
console.log(b)   // [1, 2]


// .find(),  .findIndex()
// 찾으면 중지하고 찾은 값이나 인덱스 반환
const findArr = fruits.find(fruit => /^B/.test(fruit))
const findIndexArr = fruits.findIndex(fruit => /^B/.test(fruit))

console.log(findArr)       // Banana
console.log(findIndexArr)  // 1


//.includes()
console.log(numbers.includes(3))    // true
console.log(numbers.includes('3'))  // false




//========@@@@@@@@@  원본수정됨 @@@@@@@@@@=========
//.push()     - 뒤쪽에 요소 추가
//.unshift()  - 앞쪽에 요소 추가
//.reverse()  - 요소 반전시키기
//.splice(시작인덱스, 개수, 끼워넣을요소1, 끼워넣을요소2... 끼워넣을요소n) - 시작인덱스에서 개수만큼 잘라버리기
numbers.push(5)
console.log(numbers)  // [1, 2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers)  // [0, 1, 2, 3, 4, 5] 
numbers.reverse()
console.log(numbers)  // [5, 4, 3, 2, 1, 0]
numbers.reverse()     // [0, 1, 2, 3, 4, 5] 
numbers.splice(3,2)
console.log(numbers)  // [0, 1, 2, 5]
