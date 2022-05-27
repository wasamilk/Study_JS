
const str = '0123'
const str_long = '   hello world   '

console.log('str : ' + str)
console.log('str_long  : ' + str_long )

// String.prototype.indexof()
// 일치하는 첫번째 인덱스 반환, 없으면 -1
console.log('str.length : ' + str.length)
console.log('str.indexOf("3") : ' + str.indexOf('3'))
console.log('str.indexOf("9") : ' + str.indexOf('9'))

// str.slice(시작인덱스, 끝인덱스]
console.log('str.slice(0,3) : ' + str.slice(0,3))

// str.replace(찾는단어, 바꿀단어)
console.log('str_long.replace("world","darling") : ' + str_long.replace("world","darling"))

// 앞 뒤 공백 제거
console.log('str_long.trim() : ' + str_long.trim())
