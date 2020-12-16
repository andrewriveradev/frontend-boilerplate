/*
let nums = [1, 2, 3, 4, 5, 6, 7, 7]
let sumOfNums = nums.reduce(item, sum => {
    sum + item
})

console.log(sumOfMNums);
*/

let bigInt = 2e10
console.log(bigInt)

let bigInt2 = 2e-10
console.log(bigInt2)
// Охеренно работает, но не в обратную сторону

let num1 = 3.16
console.log(Math.trunc(num1))
// удаление дробной части

console.log(Math.floor(num1))
//округление вниз

console.log(Math.PI)
// просто вывод числа Пи

let num3 = 445.1234
num3fixed = num3.toFixed(2)
console.log(typeof num3fixed)
// оставление после запятой указанного числа знаков
// и этот метод возвратит строку а не число

let num4 = 6.35
console.log((num4 * 10).toFixed(10))
// хрень какая-то

let randomNum = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
}

console.log(randomNum(1, 5))
// генерация случайного числа в диапазоне от 1 до 5

//строки
let str1 = `Меня зовут Павел, мне ${50 - 22} лет`
let str2 = 'хуй'
console.log(str1)
// можно делать интерполяцию в строки, вставлять значения
console.log(str2.length)
console.log(str2[2])
// получение символа из строки. Нумерация начинается с нуля, как в массивах

let str3 = 'ololo'
str4 = str3 + 'huy'
console.log(str3)
// строки

str5 = '   Toyota RAV4  '
console.log(str5.includes('RAV5'))
console.log(str5.trim().length)

let extractCurrencyValue = (price) => {
    if (price.startsWith('$')) {
        console.log(price.slice(1))
    } else {
        console.log('incorrect value!')
    }
}
extractCurrencyValue('50')
// выделение числа из стоимости