
const pi = 3.1412923
console.log(pi)

const str = pi.toFixed(2)
console.log(str)  // 3.14
console.log(typeof str) //string

const integer = parseInt(str)
const float = parseFloat(str)

console.log(integer)  //3
console.log(float)    //3.14
console.log(typeof integer, typeof float) // number number

/**
 * Maht - 내장객체
 */
console.log(Math.abs(-10))    //10
Math.min(2,8)    // 2
Math.max(2,8)    // 8
Math.ceil(3.14)  // 4 (올림)
Math.floor(3.14) // 3 (내림)
Math.round(3.14) // 3 (반올림)
Math.random()    // (0~1] -> Math.floor(Math.random * 10) -> 0~9 출력

